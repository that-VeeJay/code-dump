import { Button } from "../ui/button";
import { Github } from "lucide-react";
import { signIn } from "@/lib/auth";

export default function GithubSignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
      className="w-full"
    >
      <Button variant="outline" className="w-full">
        <Github />
        Continue with Github
      </Button>
    </form>
  );
}
