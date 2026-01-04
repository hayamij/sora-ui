import { headers } from "next/headers";
import { auth } from "./auth";

export async function getProfileMenuItems() {
  try {
    const sessionData = await auth.api.getSession({
      headers: await headers(),
    });

    const items: Array<{ text: string; url: string }> = [];

    // Better Auth trả về { session, user } hoặc null
    if (sessionData?.user) {
      items.push({
        text: "Profile",
        url: "/account/settings",
      });
    }

    return items.filter(Boolean);
  } catch (error) {
    console.error("[menu-items] Error getting session:", error);
    // Fallback: chỉ trả về Sign In
    return [
      {
        text: "Sign In",
        url: "/auth/sign-in",
      },
    ];
  }
}
