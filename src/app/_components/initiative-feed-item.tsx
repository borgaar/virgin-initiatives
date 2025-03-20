"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { formatDistance } from "date-fns";
import { useState } from "react";

const outlineFromTag = (tag: string) => {
  switch (tag) {
    case "Environmental":
      return "border-green-600";
    case "Social":
      return "border-blue-600";
    case "Economic":
      return "border-yellow-600";
    case "Education":
      return "border-purple-600";
    case "Health":
      return "border-red-600";
    case "Technology":
      return "border-indigo-600";
    case "Political":
      return "border-gray-600";
    case "Cultural":
      return "border-pink-600";
    case "Other":
      return "border-gray-600";
  }
};

// Same as bg just darker
const fontColorFromTag = (tag: string) => {
  switch (tag) {
    case "Environmental":
      return "text-green-950";
    case "Social":
      return "text-blue-950";
    case "Economic":
      return "text-yellow-950";
    case "Education":
      return "text-purple-950";
    case "Health":
      return "text-red-950";
    case "Technology":
      return "text-indigo-950";
    case "Political":
      return "text-gray-950";
    case "Cultural":
      return "text-pink-950";
    case "Other":
      return "text-gray-950";
  }
};

export interface FeedItem {
  id: string;
  title: string;
  content: string;
  tags: (
    | "Environmental"
    | "Social"
    | "Economic"
    | "Education"
    | "Health"
    | "Technology"
    | "Political"
    | "Cultural"
    | "Other"
  )[];
  createdAt: string;
  image: string;
  name: string;
  companyLogos: string[];
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
      <div className="flex w-full items-end justify-between">
        <p className="py-6 text-neutral-400">{content}</p>
      </div>
      <div className="flex w-full items-center justify-between">
        <div className="flex gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`${outlineFromTag(tag)} flex-none rounded-full border-[1.6px] border-dashed bg-transparent px-[7pt] py-1 text-xs font-bold text-neutral-400`}
            >
              {tag}
            </span>
          ))}
        </div>
        <Button
          onClick={addLogo}
          className="rounded-lg bg-neutral-900 py-1 text-neutral-300 hover:bg-neutral-950"
        >
          <span>Show Interest</span>
        </Button>
      </div>
    </div>
  );
}
