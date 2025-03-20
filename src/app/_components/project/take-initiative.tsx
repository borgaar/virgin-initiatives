import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Input } from "@/components/ui/input";
import { InputComponent } from "@/components/ui/inputComponent";

export default function ProjectTakeInitiative() {
  return (
    <Card className="flex h-full flex-col bg-neutral-500/5 p-2 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-lg leading-tight text-white">
          Participate to this project
        </CardTitle>
      </CardHeader>
      <CardContent className="flex h-full w-full flex-col justify-end gap-3 pb-[1.8rem]">
        <div className="flex w-full flex-col">
          <div className="h-1 w-full rounded border-2 border-green-400"></div>
          <h1 className="mt-2 text-4xl font-bold text-green-400">€ 31,492</h1>
          <p className="text-neutral-500">€ 25k target</p>
        </div>
        <div className="flex w-full items-center gap-4 align-middle">
          <div className="h-1 w-full border-b-2 border-neutral-700"></div>
          <p className="text-nowrap font-medium text-neutral-600">
            Make a donation
          </p>
          <div className="h-1 w-full border-b-2 border-neutral-700"></div>
        </div>
        <div className="flex justify-between gap-4">
          <input
            type="text"
            className="w-full rounded-sm border-[1px] border-neutral-600 bg-transparent pl-2 text-white"
          />
          <Button className="w-60 rounded-none bg-black/30 font-semibold text-white hover:bg-neutral-800">
            Donate points
          </Button>
        </div>
        <div className="flex justify-between gap-4">
          <input
            type="text"
            className="w-full rounded-sm border-[1px] border-neutral-600 bg-transparent pl-2 text-white"
          />
          <Button className="w-60 rounded-none bg-black/30 font-semibold text-white hover:bg-neutral-800">
            Donate cash
          </Button>
        </div>
        <div className="mt-4 flex w-full items-center gap-4 align-middle">
          <div className="h-1 w-full border-b-2 border-neutral-700"></div>
          <p className="text-nowrap font-medium text-neutral-600">
            Earn points
          </p>
          <div className="h-1 w-full border-b-2 border-neutral-700"></div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <Button className="w-60 rounded-none bg-neutral-800 font-semibold text-white hover:bg-neutral-700">
            Share on social media
          </Button>
          <p className="text-nowrap font-medium text-neutral-400">+50 points</p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <Button className="w-60 rounded-none bg-neutral-800 font-semibold text-white hover:bg-neutral-700">
            Join event
          </Button>
          <p className="text-nowrap font-medium text-neutral-400">
            +500 points
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
