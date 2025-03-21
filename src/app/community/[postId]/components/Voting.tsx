import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Circle } from "lucide-react";
import { useState } from "react";

export type VotingProps = {
  question: string;
  options: {
    label: string;
    icon: React.ReactNode;
    totalVotes: number;
  }[];
  votedFor?: number;
  className?: string;
};

export default function Voting({
  question,
  options,
  votedFor: initialVotedFor,
  className,
}: VotingProps) {
  const [votedFor, setVotedFor] = useState<number>(initialVotedFor ?? -1);
  const totalVotes =
    options.reduce((acc, option) => acc + option.totalVotes, 0) +
    Number(votedFor !== -1);

  return (
    <Card
      className={cn(
        "my-2 flex flex-col border-none bg-transparent text-muted",
        className,
      )}
    >
      <CardHeader className="p-0 py-4 text-sm font-medium">
        <h3 className="text-xl text-white">{question}</h3>
      </CardHeader>
      <CardContent className="w-full p-0 pb-2">
        <div className="flex flex-col gap-2">
          {options.map((option, index) => (
            <Button
              variant="ghost"
              key={index}
              className="relative flex w-full flex-row gap-2 overflow-hidden bg-neutral-500/10 backdrop-blur-sm hover:bg-neutral-800 hover:text-white"
              onClick={() => setVotedFor(index)}
            >
              <div
                className="absolute left-0 top-0 z-0 h-full bg-neutral-200/10 transition-all"
                style={{
                  width: `${((option.totalVotes + Number(votedFor === index)) / totalVotes) * 100}%`,
                }}
              ></div>
              {option.icon}
              <span className="z-10">{option.label}</span>
              <Circle
                fill={votedFor === index ? "white" : "transparent"}
                className="z-10 ml-auto"
              />
            </Button>
          ))}
        </div>
      </CardContent>
      <CardFooter className="mt-2 flex flex-row justify-end p-0">
        <span className="font-semibold">{totalVotes} </span>
        <span className="ml-1 text-neutral-400">votes</span>
      </CardFooter>
    </Card>
  );
}
