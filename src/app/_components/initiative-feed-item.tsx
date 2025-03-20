"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { formatDistance } from "date-fns";
import { useState } from "react";

const bgFromTag = (tag: Tag) => {
  switch (tag) {
    case Tag.Environmental:
      return "bg-green-400";
    case Tag.Social:
      return "bg-blue-400";
    case Tag.Economic:
      return "bg-yellow-400";
    case Tag.Education:
      return "bg-purple-400";
    case Tag.Health:
      return "bg-red-400";
    case Tag.Technology:
      return "bg-indigo-400";
    case Tag.Political:
      return "bg-gray-400";
    case Tag.Cultural:
      return "bg-pink-400";
    case Tag.Other:
      return "bg-gray-400";
  }
};

// Same as bg just darker
const fontColorFromTag = (tag: Tag) => {
  switch (tag) {
    case Tag.Environmental:
      return "text-green-900";
    case Tag.Social:
      return "text-blue-900";
    case Tag.Economic:
      return "text-yellow-900";
    case Tag.Education:
      return "text-purple-900";
    case Tag.Health:
      return "text-red-900";
    case Tag.Technology:
      return "text-indigo-900";
    case Tag.Political:
      return "text-gray-900";
    case Tag.Cultural:
      return "text-pink-900";
    case Tag.Other:
      return "text-gray-900";
  }
};

export interface FeedItem {
  id: string;
  title: string;
  content: string;
  tags: Tag[];
  createdAt: string;
  image: string;
  name: string;
  companyLogos: string[];
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
  image,
  name,
  companyLogos,
}: FeedItem) {
  const addLogo = () => {
    if (interestedCompanies.includes("/companies/virgin-wines.webp")) {
      setInterestedCompanies([...companyLogos]);
    } else {
      setInterestedCompanies([...companyLogos, "/companies/wines.webp"]);
    }
  };

  const [interestedCompanies, setInterestedCompanies] =
    useState<string[]>(companyLogos);

  return (
    <div className="flex min-w-full flex-col items-start justify-between rounded-lg bg-neutral-500/5 p-5 backdrop-blur-sm">
      <div className="flex w-full items-center justify-start space-x-3">
        <Avatar>
          <AvatarImage src={image} />
          <AvatarFallback>{name.split(" ")[0]}</AvatarFallback>
        </Avatar>
        <h2 className="font-bold">{title}</h2>
        <div className="flex flex-none flex-col">
          <h2 className="text-gray-500">
            {"Created " +
              formatDistance(createdAt, new Date(), {
                addSuffix: true,
              })}
          </h2>
        </div>
        <div className="flex flex-1 justify-end gap-7">
          <div className="flex items-center justify-end gap-5">
            {interestedCompanies.map((e) => (
              <img key={e} src={e} alt="Company logo" className="w-100 h-10" />
            ))}
          </div>
        </div>
      </div>
      <p className="py-6">{content}</p>
      <div className="flex w-full items-center justify-between">
        <div className="flex w-full items-center justify-between">
          <div className="flex gap-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className={`${bgFromTag(tag)} rounded-full px-2 py-1 text-xs ${fontColorFromTag(tag)}`}
              >
                {tag}
              </span>
            ))}
          </div>
          <Button
            onClick={addLogo}
            className="rounded-lg bg-neutral-950 text-primary hover:bg-neutral-900"
          >
            <span>Show Interest</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
