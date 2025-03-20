import {
  AmbulanceIcon,
  CpuIcon,
  Download,
  GraduationCapIcon,
  Leaf,
  ZapIcon,
} from "lucide-react";
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
  tag: "Environment" | "Energy" | "Education" | "Technology" | "Healthcare";
  stats: { value: string; label: string }[];
}

const tagToIcon = (tag: ProjectCardProps["tag"]) => {
  switch (tag) {
    case "Environment":
      return <Leaf size={15} />;
    case "Energy":
      return <ZapIcon size={15} />;
    case "Education":
      return <GraduationCapIcon size={15} />;
    case "Technology":
      return <CpuIcon size={15} />;
    case "Healthcare":
      return <AmbulanceIcon size={15} />;
  }
};

export const tagToColor = (tag: ProjectCardProps["tag"]) => {
  switch (tag) {
    case "Environment":
      return "#2C7A7B";
    case "Energy":
      return "#FFC857";
    case "Education":
      return "#E9724C";
    case "Technology":
      return "#C5283D";
    case "Healthcare":
      return "#171738";
  }
};

export default function ProjectCard({
  title,
  description,
  stats,
  tag,
}: ProjectCardProps) {
  return (
    <Card className="relative flex w-full flex-col justify-between text-white">
      <div className="absolute z-10 h-full w-full bg-gradient-to-r from-black/60 to-transparent" />
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
        <Button variant={"ghost"} className="ml-auto bg-neutral-900">
          <Download /> Download Report
        </Button>
      </CardContent>
      <img
        src="/ocean.avif"
        className="absolute bottom-0 left-0 right-0 top-0 z-0 h-full w-full object-cover brightness-50"
      />
    </Card>
  );
}

export function MapProjectCard({ title, stats, tag }: ProjectCardProps) {
  return (
    <Card className="relative overflow-hidden bg-gradient-to-r from-black to-transparent text-white">
      <div className="absolute z-10 h-full w-full bg-gradient-to-r from-black to-transparent" />
      <CardHeader className="relative z-10">
        <Badge
          className="pointer-events-none mb-1 w-fit gap-2 px-2 py-1 text-black"
          style={{ backgroundColor: tagToColor(tag) }}
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
