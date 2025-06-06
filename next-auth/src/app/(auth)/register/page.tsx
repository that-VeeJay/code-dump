import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
  CardFooter,
  Button,
  Input,
  Label,
} from "@/components/ui";
import Link from "next/link";
import { Metadata } from "next";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = { title: "Create an account" };

export default async function Register() {
  const session = await auth();
  if (session) redirect("/");

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-sm ">
        <CardHeader>
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription>
            Please provide necessary information
          </CardDescription>
          <CardContent className="mt-5">
            <form className="space-y-5">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" type="text" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                />
              </div>
              <Button className="w-full">Register</Button>
            </form>
          </CardContent>
          <CardFooter>
            <span>
              Already have an account?{" "}
              <Link href="/login" className="font-bold">
                Login
              </Link>
            </span>
          </CardFooter>
        </CardHeader>
      </Card>
    </div>
  );
}
