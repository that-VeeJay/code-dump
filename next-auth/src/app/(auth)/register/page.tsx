import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import GithubSignIn from "@/components/auth/githubSignIn";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function Register() {
  const session = await auth();
  if (session) redirect("/");

  return (
    <main className="flex items-center justify-center min-h-screen flex-col">
      <div className="w-[400px] p-10 space-y-5 shadow-lg rounded-lg border-1  border-neutral-200">
        <div>
          <div className="text-center space-y-5">
            <h1 className="text-2xl font-bold">Register</h1>
            <GithubSignIn />
          </div>
          <div className="flex items-center gap-4 mt-5">
            <Separator className="flex-1" />
            <span className="text-sm text-muted-foreground">
              Or continue with email
            </span>
            <Separator className="flex-1" />
          </div>
        </div>
        <form className="space-y-5">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="John Doe" name="name" type="text" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="mail@company.com"
              name="email"
              type="email"
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="••••••••••••••"
              name="password"
              type="password"
            />
          </div>
          <Button className="w-full tracking-wide">Register</Button>
        </form>

        <div>
          Already have an account?{" "}
          <Link href="/login" className="font-semibold hover:underline">
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}
