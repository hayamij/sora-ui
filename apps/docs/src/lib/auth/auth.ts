import {
  checkout,
  polar,
  portal,
  usage,
  webhooks,
} from "@polar-sh/better-auth";
import { db } from "@workspace/database";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { lastLoginMethod, oneTap, openAPI } from "better-auth/plugins";
import { paths } from "@/config/paths";
import { polarClient } from "../integrations/polar-client";
import { baseUrl } from "../metadata";

export const isAuthEnabled = process.env.DATABASE_URL;

export const auth = betterAuth({
  baseURL: baseUrl.toString(),
  database: isAuthEnabled
    ? drizzleAdapter(db, {
        provider: "pg",
      })
    : undefined,
  emailAndPassword: {
    enabled: false,
  },
  socialProviders: {
    github: {
      enabled: true,
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
    google: {
      enabled: true,
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["google", "github"],
    },
  },
  user: {
    deleteUser: {
      enabled: true,
      afterDelete: async (user, _request) => {
        await polarClient.customers.deleteExternal({
          externalId: user.id,
        });
      },
    },
  },
  plugins: [
    openAPI(),
    lastLoginMethod(),
    oneTap(),
    polar({
      client: polarClient,
      createCustomerOnSignUp: !!isAuthEnabled,
      use: [
        checkout({
          products: [],
          successUrl:
            process.env.NEXT_PUBLIC_CHECKOUT_SUCCESS_URL ||
            paths.success.checkout,
          authenticatedUsersOnly: true,
        }),
        portal(),
        usage(),
        webhooks({
          secret: process.env.POLAR_WEBHOOK_SECRET as string,
          onPayload: (payload) => {
            console.log(payload);
            return Promise.resolve();
          },
        }),
      ],
    }),
  ],
});
