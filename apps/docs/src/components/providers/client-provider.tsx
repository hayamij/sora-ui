"use client";

import { AuthUIProvider } from "@daveyplate/better-auth-ui";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "../../lib/auth-client";

export function ClientProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <AuthUIProvider
      authClient={authClient}
      credentials={false}
      Link={Link}
      navigate={router.push}
      oneTap
      onSessionChange={() => {
        router.refresh();
      }}
      replace={router.replace}
      social={{ providers: ["google", "github"] }}
    >
      {children}
    </AuthUIProvider>
  );
}
