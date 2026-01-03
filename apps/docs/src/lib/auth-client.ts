import { lastLoginMethodClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  plugins: [lastLoginMethodClient()],
});

export const { signIn, signUp, useSession, signOut } = authClient;
