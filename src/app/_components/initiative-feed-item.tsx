import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { formatDistance } from "date-fns";
import Image from "next/image";

const bgFromTag = (tag: Tag) => {
  switch (tag) {
    case Tag.Environmental:
      return "bg-green-200";
    case Tag.Social:
      return "bg-blue-200";
    case Tag.Economic:
      return "bg-yellow-200";
    case Tag.Education:
      return "bg-purple-200";
    case Tag.Health:
      return "bg-red-200";
    case Tag.Technology:
      return "bg-indigo-200";
    case Tag.Political:
      return "bg-gray-200";
    case Tag.Cultural:
      return "bg-pink-200";
    case Tag.Other:
      return "bg-gray-200";
  }
};

// Same as bg just darker
const fontColorFromTag = (tag: Tag) => {
  switch (tag) {
    case Tag.Environmental:
      return "text-green-800";
    case Tag.Social:
      return "text-blue-800";
    case Tag.Economic:
      return "text-yellow-800";
    case Tag.Education:
      return "text-purple-800";
    case Tag.Health:
      return "text-red-800";
    case Tag.Technology:
      return "text-indigo-800";
    case Tag.Political:
      return "text-gray-800";
    case Tag.Cultural:
      return "text-pink-800";
    case Tag.Other:
      return "text-gray-800";
  }
};

export interface FeedItem {
  id: string;
  title: string;
  content: string;
  tags: Tag[];
  createdAt: string;
  likes: number;
  interested: number;
  image: string;
  name: string;
  companyLogo?: string[];
}

export enum Tag {
  Environmental = "Environmental",
  Social = "Social",
  Economic = "Economic",
  Education = "Education",
  Health = "Health",
  Technology = "Technology",
  Political = "Political",
  Cultural = "Cultural",
  Other = "Other",
}

export default function InitiativeFeedItem({
  content,
  createdAt,
  tags,
  title,
  likes,
  interested,
  image,
  name,
  companyLogo,
}: FeedItem) {
  return (
    <div className="flex min-w-full flex-col items-start justify-between rounded-lg bg-neutral-500/5 p-5 backdrop-blur-sm">
      <div className="flex w-full items-center justify-start space-x-3">
        <Avatar>
          <AvatarImage src={image} />
          <AvatarFallback>{name.split(" ")[0]}</AvatarFallback>
        </Avatar>
        <div className="flex flex-none flex-col">
          <div className="flex items-center justify-between space-x-6">
            <h2 className="font-bold">{title}</h2>
            {tags.map((tag) => (
              <span
                key={tag}
                className={`${bgFromTag(tag)} rounded-full px-2 py-1 text-xs ${fontColorFromTag(tag)}`}
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-gray-500">
            {"Created " +
              formatDistance(createdAt, new Date(), {
                addSuffix: true,
              })}
          </h2>
        </div>
        {companyLogo && (
          <div className="flex flex-1 items-center justify-end gap-5">
            {companyLogo.map((e) => (
              <img key={e} src={e} alt="Company logo" className="w-100 h-10" />
            ))}
          </div>
        )}
      </div>
      <p className="py-6">{content}</p>
      <div className="flex w-full items-center justify-between">
        <div className="flex space-x-5">
          <p>‼️ {interested} interested</p>
          <p>❤️ {likes} likes</p>
        </div>
        <div className="space-x-3">
          <Button className="rounded-lg bg-neutral-950 text-blue-600 hover:bg-neutral-900">
            👋<span>I&apos;m Interested</span>
          </Button>
          <Button className="rounded-lg bg-neutral-950 text-gray-600 hover:bg-neutral-900">
            ❤️<span>Like</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
