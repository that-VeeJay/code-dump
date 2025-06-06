import { Button } from "@/components/ui";
import { Github } from "lucide-react";
import { signIn } from "@/lib/auth";

export default function GithubButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <Button variant="outline" className="w-full">
        <Github /> Sign in with Github
      </Button>
    </form>
  );
}
