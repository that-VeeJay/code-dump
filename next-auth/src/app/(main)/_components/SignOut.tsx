"use client";

import { Button } from "@/components/ui";
import { signOut } from "next-auth/react";

export default function SignOut() {
  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/login" });
  };

  return (
    <Button variant="destructive" onClick={handleSignOut}>
      Sign out
    </Button>
  );
}
