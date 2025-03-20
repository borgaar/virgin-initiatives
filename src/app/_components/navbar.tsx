'use client'
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { BellDot, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";

export default function Navbar() {
  const path = usePathname();
  console.log("path: " + path);
  return (
    <nav>
      <div className="mx-auto max-w-7xl">
        <div className="grid h-[69] grid-cols-3 items-center justify-between">
          <Link href={"/"}>
            <Image
              className="hidden lg:block"
              src="/logo.png"
              alt="Workflow"
              width={50}
              height={50}
            />
          </Link>
          <div className="flex justify-between space-x-10 text-center text-neutral-500 font-medium">
            <Link href="/" className={cn("hover:text-neutral-400 active:text-neutral-100 transition", (path === "/")? "text-white hover:text-white" : "")}>Projects</Link>
            <Link href="/initiatives" className={cn("hover:text-neutral-400 active:text-neutral-100 transition", (path === "/initiatives")? "text-white hover:text-white" : "")}>Initiatives</Link>
            <Link href="/statistics" className={cn("hover:text-neutral-400 active:text-neutral-100 transition", (path === "/statistics")? "text-white hover:text-white" : "")}>Statistics</Link>
            <Link href="/feed" className={cn("hover:text-neutral-400 active:text-neutral-100 transition", (path === "/feed")? "text-white hover:text-white" : "")}>Feed</Link>
          </div>
          <div className="flex items-center justify-end space-x-4">
            <Search />
            <BellDot />
            <Avatar>
              <AvatarImage src="https://loremfaces.net/96/id/1.jpg" />
              <AvatarFallback>BT</AvatarFallback>
            </Avatar>
            <div>Brotherman Testern</div>
          </div>
        </div>
      </div>
    </nav>
  );
}
