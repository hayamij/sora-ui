"use client";

import { SignedIn, SignedOut, UserButton } from "@daveyplate/better-auth-ui";

export function UserButtonNav() {
  return (
    <>
      <SignedIn>
        <div className="flex items-center">
          <UserButton className="size-5! h-5! w-5!" size={"icon"} />
        </div>
      </SignedIn>
      <SignedOut>
        <div className="flex items-center">
          <UserButton size={"icon"} />
        </div>
      </SignedOut>
    </>
  );
}
