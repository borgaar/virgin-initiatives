"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Badge } from "../../components/ui/badge";
import { useEffect, useState } from "react";
import PageContainer from "./page-container";

export default function Navbar() {
  const path = usePathname();

  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const ab = new AbortController();

    window.addEventListener("scroll", (e) => {
      setScrolled(window.scrollY > 50);
    });

    return () => ab.abort();
  }, []);

  return (
    <nav
      className={cn(
        path === "/statistics"
          ? "fixed [body.stats-exploring_&]:hidden"
          : "sticky",
        "left-0 top-0 z-50 w-full bg-transparent",
        scrolled && "backdrop-blur-md",
      )}
    >
      <PageContainer>
        <div className="grid h-[69] grid-cols-3 items-center justify-between">
          <Link href={"/"}>
            <Image src="/logo.png" alt="Workflow" width={50} height={50} />
          </Link>
          <div className="flex justify-between space-x-10 text-center font-medium text-neutral-500">
            <Link
              href="/"
              className={cn(
                "transition hover:text-neutral-400 active:text-neutral-100",
                path === "/" ? "text-white hover:text-white" : "",
              )}
            >
              Projects
            </Link>
            <Link
              href="/community"
              className={cn(
                "transition hover:text-neutral-400 active:text-neutral-100",
                path === "/community" ? "text-white hover:text-white" : "",
              )}
            >
              Community
            </Link>
            <Link
              href="/statistics"
              className={cn(
                "transition hover:text-neutral-400 active:text-neutral-100",
                path === "/statistics" ? "text-white hover:text-white" : "",
              )}
            >
              Statistics
            </Link>
            <Link
              href="/feed"
              className={cn(
                "transition hover:text-neutral-400 active:text-neutral-100",
                path === "/feed" ? "text-white hover:text-white" : "",
              )}
            >
              Feed
            </Link>
          </div>
          <div className="@container flex items-center justify-end space-x-4 text-neutral-400">
            <Badge variant={"outline"}>1450 points</Badge>
            <Avatar>
              <AvatarImage src="https://randomuser.me/api/portraits/thumb/men/40.jpg" />
              <AvatarFallback>PN</AvatarFallback>
            </Avatar>
            <div className="hidden xl:block">Peter Normann</div>
          </div>
        </div>
      </PageContainer>
    </nav>
  );
}
