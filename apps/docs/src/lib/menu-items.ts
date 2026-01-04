import { headers } from "next/headers";
import { paths } from "@/config/paths";
import { auth } from "./auth";

export async function getProfileMenuItems() {
  try {
    const sessionData = await auth.api.getSession({
      headers: await headers(),
    });

    const items: Array<{ text: string; url: string }> = [];

    if (sessionData?.user) {
      items.push({
        text: "Profile",
        url: paths.account.settings,
      });
      items.push({
        text: "Sign Out",
        url: paths.auth.signOut,
      });
    } else {
      items.push({
        text: "Sign In",
        url: paths.auth.signIn,
      });
    }

    return items.filter(Boolean);
  } catch (error) {
    console.error("[menu-items] Error getting session:", error);
    return [
      {
        text: "Sign In",
        url: paths.auth.signIn,
      },
    ];
  }
}
