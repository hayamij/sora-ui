import { lastLoginMethodClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";
import { baseUrl } from "./metadata";

export const authClient = createAuthClient({
  baseURL: baseUrl.toString(),
  plugins: [lastLoginMethodClient()],
});

export const { signIn, signUp, useSession, signOut } = authClient;
