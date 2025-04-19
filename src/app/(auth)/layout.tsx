"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Button } from "@/components/ui/button";

interface SignInLayoutProps {
  children: React.ReactNode;
}

const SignInLayout = ({ children }: SignInLayoutProps) => {
  const pathname = usePathname(); // ✅ Moved here before usage
  const isSignIn = pathname === "/sign-in";
  const isSignUp = pathname === "/sign-up";

  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center mb-6">
          <Image src="/logoip.svg" alt="Logo" width={72} height={56} />

          <div className="flex items-center gap-2">
            <Button asChild variant="secondary">
              <Link href={isSignIn ? "/sign-up" : "/sign-in"}>
                {isSignIn ? "Sign Up" : "Sign In"}
              </Link>
            </Button>
          </div>
        </nav>

        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  );
};

export default SignInLayout;
