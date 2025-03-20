import { Project } from "@/lib/projects";
import Link from "next/link";

// Same as bg just darker
export const fontColorFromTag = (tag: string) => {
  switch (tag) {
    case "Environment":
      return "text-green-500";
    case "Social":
      return "text-blue-500";
    case "Economic":
      return "text-yellow-500";
    case "Education":
      return "text-purple-500";
    case "Healthcare":
      return "text-red-500";
    case "Technology":
      return "text-indigo-500";
    case "Political":
      return "text-gray-500";
    case "Cultural":
      return "text-pink-500";
    case "Other":
      return "text-gray-500";
  }
};
export default function ProjectTile({
  banner,
  title,
  description,
  tag,
  comments,
  callToActions,
  initiatives,
  participants,
  roadmap,
  stats,
  thumbnail,
  idx,
}: Project & { idx: number }) {
  return (
    <Link href={`/projects/${idx + 1}`}>
      <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
        <div className="flex-shrink-0">
          <img
            className="h-48 w-full object-cover brightness-50 transition-all duration-300 ease-in-out hover:brightness-100"
            src={banner}
            alt=""
          />
        </div>
        <div className="flex flex-1 flex-col justify-between bg-neutral-500/5 p-6 backdrop-blur-sm">
          <div className="flex-1">
            <p className={`text-sm ${fontColorFromTag(tag)} font-medium`}>
              {tag}
            </p>
            <p className="text-xl font-semibold text-gray-400">{title}</p>
            <p className="mt-3 text-base text-gray-500">{description}</p>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src={participants[0]?.logo}
                alt=""
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">
                {participants[0]?.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
