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
import { Project } from "../../../lib/projects";

export type ProjectCardProps = Pick<
  Project,
  "title" | "description" | "tag" | "stats" | "banner"
>;

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
      return "#ffbfc9";
  }
};

export default function ProjectCard({
  title,
  description,
  stats,
  tag,
  banner,
}: ProjectCardProps) {
  return (
    <Card className="relative flex w-full flex-col justify-end gap-4 text-white">
      <div className="absolute z-10 h-full w-full bg-gradient-to-t from-black/60 to-transparent" />
      <CardHeader className="relative z-10">
        <Badge
          className="pointer-events-none mb-4 w-fit gap-2 rounded-full bg-neutral-200 px-2.5 py-1 text-black"
          variant={"secondary"}
        >
          {tagToIcon(tag)} {tag}
        </Badge>

        <CardTitle className="text-4xl">{title}</CardTitle>
        <CardDescription className="text-md text-neutral-400">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="relative z-10 -mt-2 flex items-center justify-start gap-4">
        {stats.map((stat, index) => (
          <Stats key={index} {...stat} />
        ))}
        <Button variant={"ghost"} className="ml-auto rounded-none bg-black/40">
          <Download /> Download Report
        </Button>
      </CardContent>
      <img
        src={banner}
        className="absolute bottom-0 left-0 right-0 top-0 z-0 h-full w-full object-cover brightness-50"
      />
    </Card>
  );
}

export function MapProjectCard({
  title,
  stats,
  tag,
  banner,
}: ProjectCardProps) {
  return (
    <Card className="relative flex w-full flex-col justify-end gap-4 overflow-hidden rounded-md border-[1px] border-white text-white">
      <div className="absolute z-10 h-full w-full bg-gradient-to-t from-black/60 to-transparent" />
      <CardHeader className="relative z-10">
        <Badge
          className="pointer-events-none mb-4 w-fit gap-2 rounded-full px-2.5 py-1 text-black"
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
        src={banner}
        className="absolute bottom-0 left-0 right-0 top-0 z-0 h-full w-full object-cover brightness-50"
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
