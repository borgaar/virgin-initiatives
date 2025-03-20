import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { BellDot, Search } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid h-[69] grid-cols-3 items-center justify-between">
          <Image
            className="hidden lg:block"
            src="/logo.png"
            alt="Workflow"
            width={50}
            height={50}
          />
          <div className="flex justify-between space-x-10 text-center">
            <div>Projects</div>
            <div>Initiatives</div>
            <div>Statistics</div>
            <div>Feed</div>
          </div>
          <div className="flex justify-end">
            <Search />
            <BellDot />
            <Avatar>
              <AvatarImage src="bitch" />
              <AvatarImage src="bitch" />
            </Avatar>
          </div>
        </div>
      </div>
    </nav>
  );
}
