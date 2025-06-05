import SignOut from "../auth/signOut";
import Link from "next/link";
import { auth } from "@/lib/auth";

export default async function Navbar() {
  const session = await auth();

  return (
    <div className="bg-neutral-900 w-full h-[4rem] text-white">
      <nav className="flex items-center justify-between h-full max-w-7xl mx-auto px-5">
        <Link href="/">
          <span className="font-bold text-2xl">NEXT AUTH</span>
        </Link>
        <div className="flex items-center gap-5">
          {!session ? (
            <div className="flex items-center gap-5">
              <Link href="/login">Login</Link>
              <Link href="/register">Create an account</Link>
            </div>
          ) : (
            <div className="flex items-center gap-5">
              <div>
                <span className="text-sm">Signed in as: </span>
                <span className="font-bold tracking-wide">
                  {session?.user?.name}
                </span>
              </div>
              <SignOut />
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
