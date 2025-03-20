import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { BellDot, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white">
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
          <div className="flex justify-between space-x-10 text-center">
            <Link href="/">Projects</Link>
            <Link href="/initiatives">Initiatives</Link>
            <Link href="/statistics">Statistics</Link>
            <Link href="/feed">Feed</Link>
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
