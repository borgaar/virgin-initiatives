import { Download, Leaf } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";

export interface ProjectCardProps {
  title: string;
  description: string;
  tag: "Environment";
  stats: { value: string; label: string }[];
}

const tagToIcon = (tag: ProjectCardProps["tag"]) => {
  switch (tag) {
    case "Environment":
      return <Leaf size={15} />;
  }
};

export default function ProjectCard({
  title,
  description,
  stats,
  tag,
}: ProjectCardProps) {
  return (
    <Card className="relative w-full bg-gradient-to-r from-black to-transparent text-white">
      <div className="absolute z-10 h-full w-full rounded-lg bg-gradient-to-r from-black to-transparent" />
      <CardHeader className="relative z-10">
        <Badge
          className="pointer-events-none mb-1 w-fit gap-2 px-2 py-1 text-black"
          variant={"secondary"}
        >
          {tagToIcon(tag)} {tag}
        </Badge>

        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-muted">{description}</CardDescription>
      </CardHeader>
      <CardContent className="relative z-10 -mt-2 flex items-center justify-start gap-4">
        {stats.map((stat, index) => (
          <Stats key={index} {...stat} />
        ))}
        <Button variant={"outline"} className="ml-auto">
          <Download /> Donwload Report
        </Button>
      </CardContent>
      <img
        src="/ocean.avif"
        className="absolute bottom-0 left-0 right-0 top-0 z-0 h-full w-full rounded-lg object-cover"
      />
    </Card>
  );
}

export function MapProjectCard({
  title,
  description,
  stats,
  tag,
}: ProjectCardProps) {
  return (
    <Card className="relative overflow-hidden bg-gradient-to-r from-black to-transparent text-white">
      <div className="absolute z-10 h-full w-full bg-gradient-to-r from-black to-transparent" />
      <CardHeader className="relative z-10">
        <Badge
          className="pointer-events-none mb-1 w-fit gap-2 px-2 py-1 text-black"
          variant={"secondary"}
        >
          {tagToIcon(tag)} {tag}
        </Badge>

        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="relative z-10 -mt-2 flex items-center justify-start gap-4">
        {stats.map((stat, index) => (
          <Stats key={index} {...stat} />
        ))}
      </CardContent>
      <img
        src="/ocean.avif"
        className="absolute bottom-0 left-0 right-0 top-0 z-0 h-full w-full object-cover"
      />
    </Card>
  );
}

function Stats({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-start justify-center">
      <h3 className="text-xl font-black">{value}</h3>
      <p className="-mt-1">{label}</p>
    </div>
  );
}
