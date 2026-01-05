"use client";

import {
  AuthLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@daveyplate/better-auth-ui";
import { Skeleton } from "@workspace/ui/components/skeleton";

export function UserButtonNav() {
  return (
    <>
      <AuthLoading>
        <Skeleton
          className="size-5! h-5! w-5! rounded-full"
          data-slot="user-button-nav-skeleton"
        />
      </AuthLoading>
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
