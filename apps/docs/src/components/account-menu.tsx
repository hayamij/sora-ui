"use client";

import { paths } from "@/config/paths";
import { useSession } from "@/lib/auth/auth-client";

/**
 * Hook to get Account menu items based on session
 * Returns array of items in JSON format for use in layout
 */
export function useAccountMenuItems() {
  const { data: session, isPending } = useSession();

  // When loading, return Sign In
  if (isPending) {
    return [
      {
        text: "Sign In",
        url: paths.auth.signIn,
      },
    ];
  }

  // If session exists, return Profile and Sign Out
  if (session?.user) {
    return [
      {
        text: "Profile",
        url: paths.account.settings,
      },
      {
        text: "Sign Out",
        url: paths.auth.signOut,
      },
    ];
  }

  // If no session, return Sign In
  return [
    {
      text: "Sign In",
      url: paths.auth.signIn,
    },
  ];
}
