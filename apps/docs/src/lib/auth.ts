import { db } from "@workspace/database";
import {
  account,
  session,
  user,
  verification,
} from "@workspace/database/db/schema";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { lastLoginMethod, oneTap, openAPI } from "better-auth/plugins";
import { baseUrl } from "./metadata";

export const isAuthEnabled = process.env.DATABASE_URL;

export const auth = betterAuth({
  baseURL: baseUrl.toString(),
  database: isAuthEnabled
    ? drizzleAdapter(db, {
        provider: "pg",
        schema: {
          user,
          session,
          account,
          verification,
        },
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
    // discord: {
    //   enabled: true,
    //   clientId: process.env.DISCORD_CLIENT_ID as string,
    //   clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
    // },
  },
  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["google", "github", "discord"],
    },
  },
  plugins: [openAPI(), lastLoginMethod(), oneTap()],
});
