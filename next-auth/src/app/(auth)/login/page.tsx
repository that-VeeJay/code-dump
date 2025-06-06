import Link from "next/link";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Separator,
} from "@/components/ui";
import GithubButton from "./_components/GithubButton";
import { Metadata } from "next";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { executeAction } from "@/lib/executeAction";
import { signIn } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account to access all features",
};

export default async function Login() {
  const session = await auth();
  if (session) redirect("/");

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-sm ">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Please provide necessary information
          </CardDescription>
          <CardContent>
            <div className="my-5">
              <GithubButton />
            </div>
            <div className="flex items-center gap-3 mb-5">
              <Separator className="flex-1" />
              <CardDescription>Or with email</CardDescription>
              <Separator className="flex-1" />
            </div>
          </CardContent>
          <CardContent>
            <form
              action={async (formData: FormData) => {
                "use server";
                await executeAction({
                  actionFn: async () => {
                    await signIn("credentials", formData);
                  },
                });
              }}
              className="space-y-5"
            >
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </CardContent>
          <CardFooter>
            <span>
              Don't have an account?{" "}
              <Link href="/register" className="font-bold">
                Register
              </Link>
            </span>
          </CardFooter>
        </CardHeader>
      </Card>
    </div>
  );
}
