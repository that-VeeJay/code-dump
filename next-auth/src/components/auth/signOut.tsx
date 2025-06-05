"use client";

import { signOut } from "next-auth/react";
import { Button } from "../ui/button";

export default function SignOut() {
  const handleSignOut = async () => {
    await signOut({
      callbackUrl: "/register",
    });
  };

  return (
    <Button onClick={handleSignOut} variant="destructive">
      Sign out
    </Button>
  );
}
