import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

import { cn } from "@/utils/cn";

import "../../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <main
        className={cn(
          inter.variable,
          "min-h-screen bg-neutral-50 px-8 py-12 font-sans dark:bg-neutral-900",
        )}
      >
        <div className="mx-auto w-full max-w-2xl">{children}</div>
      </main>
      <Analytics />
    </>
  );
}
