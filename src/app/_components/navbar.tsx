import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
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
          <div className="flex items-center justify-end space-x-4">
            <Search />
            <BellDot />
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>BT</AvatarFallback>
            </Avatar>
            <div>Brothernan Testern</div>
          </div>
        </div>
      </div>
    </nav>
  );
}
