import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Login() {
  return (
    <main className="flex items-center justify-center min-h-screen flex-col">
      <div className="w-[400px] p-10 space-y-5 shadow-lg rounded-lg border-1  border-neutral-200">
        <div>
          <h1 className="text-2xl font-bold">Login </h1>
          <span className="text-sm">
            Please provide all necessary information
          </span>
        </div>
        <form className="space-y-5">
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
          <Button className="w-full tracking-wide">Login</Button>
        </form>
        <div>
          Don't have an account?{" "}
          <Link href="/register" className="font-semibold hover:underline">
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}
