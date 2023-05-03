"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function AppNavigation() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Image
          src="./knight.svg"
          alt=""
          className="h-6 w-6 dark:invert"
          width={24}
          height={24}
        />
        <span className="hidden font-bold sm:inline-block">
          Chess at the Edge
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/play"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/play" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Play a Game
        </Link>
        <Link
          href="/how-it-works"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "how-it-works"
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          How It Works
        </Link>
        <Link
          href="https://github.com/lucasdoell/chess-at-the-edge"
          target="_blank"
          rel="noreferrer"
          className={cn(
            "hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
          )}
        >
          GitHub
        </Link>
      </nav>
    </div>
  );
}
