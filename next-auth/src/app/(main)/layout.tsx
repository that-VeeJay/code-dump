import Link from "next/link";
import { auth } from "@/lib/auth";
import { Button } from "@/components/ui";
import { ModeToggle } from "@/components/mode-toggle";
import SignOut from "./_components/SignOut";
import { redirect } from "next/navigation";

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  if (!session) redirect("/register");

  return (
    <>
      <div className="h-[4rem] text-white ">
        <div className="box h-full flex items-center">
          <nav className="flex justify-between items-center w-full">
            <Link href="/" className="text-2xl font-bold ">
              NEXT AUTH
            </Link>
            <div className="flex gap-3">
              {session ? (
                <div className="flex items-center gap-3">
                  <span>Welcome, {session?.user?.name}!</span>
                  <SignOut />
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Button variant="outline" asChild>
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/register">Create an account</Link>
                  </Button>
                </div>
              )}
              <ModeToggle />
            </div>
          </nav>
        </div>
      </div>
      <main className="box">{children}</main>
    </>
  );
}
