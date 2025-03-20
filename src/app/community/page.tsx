"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { formatDistance } from "date-fns";
import {
  ExternalLinkIcon,
  PlusIcon,
  Share2Icon,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from "lucide-react";
import { useState } from "react";

import { posts } from "@/lib/community";
import Link from "next/link";
import PageContainer from "../_components/page-container";

export default function Page() {
  const [likedPosts, setLiked] = useState<number[]>([]);
  const [dislikedPosts, setDisliked] = useState<number[]>([]);
  return (
    <PageContainer>
    <div className="flex justify-center pb-6 pt-10">
      <div className="">
        <h1 className="text-5xl">Share your thoughts</h1>
        <p className="mb-4 mt-2 text-lg text-white/40">
          Participate in our community and discuss how we can improve our
          sustainability. Give and receive points for coming up with great
          ideas. We want your unfiltered feedback and suggestions.
        </p>
        <div className="mb-4 flex flex-row gap-2 rounded-md bg-neutral-500/5 p-2 backdrop-blur-sm">
          <Button
            variant={"ghost"}
            className="bg-neutral-700/20 hover:bg-neutral-800 hover:text-white"
          >
            Trending
          </Button>
          <Button
            variant={"ghost"}
            className="text-neutral-500 hover:bg-neutral-800 hover:text-white"
          >
            New
          </Button>
          <Button
            variant={"ghost"}
            className="text-neutral-500 hover:bg-neutral-800 hover:text-white"
          >
            Top
          </Button>
          <Button
            variant={"ghost"}
            className="ml-auto hover:bg-neutral-800 hover:text-white"
          >
            <PlusIcon /> New Post{" "}
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {posts.map((post, idx) => (
            <a href={`/community/${post.id}`} key={post.id}>
              <Card
                key={post.id}
                className={cn(
                  "flex cursor-pointer flex-col border-none bg-neutral-700/10 text-muted backdrop-blur-sm transition @container hover:bg-neutral-700/15",
                )}
              >
                <CardHeader className="text-sm font-medium text-neutral-400">
                  <div className="flex items-center justify-start">
                    <Avatar className="-ml-2 scale-[0.6]">
                      {post.author.avatar && (
                        <AvatarImage
                          className="rounded-full"
                          src={post.author.avatar}
                        ></AvatarImage>
                      )}
                      <AvatarFallback className="bg-white/10 text-sm text-neutral-200">
                        {post.author.name
                          .toUpperCase()
                          .split(" ")
                          .filter(Boolean)
                          .map((v) => v.charAt(0))
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span>{post.author.name}</span>
                    <img
                      src="/logo.png"
                      alt=""
                      className={cn(
                        post.author.isVirginEmployee ? "hidden" : "",
                        "ml-2 size-6",
                      )}
                    />
                    <span className="ml-auto">
                      {formatDistance(new Date(post.createdAt), new Date(), {
                        addSuffix: true,
                      })}
                    </span>
                  </div>
                  <h3 className="text-xl text-white">{post.title}</h3>
                </CardHeader>
                <CardContent className="h-full">
                  <p className="line-clamp-6 h-36 overflow-hidden text-ellipsis text-neutral-500">
                    {post.description}
                  </p>
                </CardContent>
                <CardFooter className="grid grid-cols-2 gap-2 @sm:flex">
                  <Button
                    variant={"ghost"}
                    onClick={(e) => {
                      e.preventDefault();
                      if (likedPosts.includes(idx)) {
                        setLiked(likedPosts.filter((v) => v !== idx));
                      } else {
                        setLiked([...likedPosts, idx]);
                        setDisliked(dislikedPosts.filter((v) => v !== idx));
                      }
                    }}
                    size="sm"
                    className="bg-neutral-500/10 hover:bg-neutral-800 hover:text-white"
                  >
                    <ThumbsUpIcon
                      fill={likedPosts.includes(idx) ? "white" : undefined}
                    />
                    {likedPosts.includes(idx) ? post.likes + 1 : post.likes}
                  </Button>
                  <Button
                    variant={"ghost"}
                    onClick={(e) => {
                      e.preventDefault();
                      if (dislikedPosts.includes(idx)) {
                        setDisliked(dislikedPosts.filter((v) => v !== idx));
                      } else {
                        setDisliked([...dislikedPosts, idx]);
                        setLiked(likedPosts.filter((v) => v !== idx));
                      }
                    }}
                    size="sm"
                    className="bg-neutral-500/10 hover:bg-neutral-800 hover:text-white"
                  >
                    <ThumbsDownIcon
                      fill={dislikedPosts.includes(idx) ? "white" : undefined}
                    />
                    {dislikedPosts.includes(idx)
                      ? post.dislikes + 1
                      : post.dislikes}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="bg-neutral-500/10 hover:bg-neutral-800 hover:text-white @sm:ml-auto"
                  >
                    <Share2Icon />
                  </Button>
                  <div className="inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-neutral-500/10 px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:bg-neutral-800 hover:text-accent-foreground hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
                    <ExternalLinkIcon />{" "}
                    <span className="hidden @xs:block">View Post</span>
                  </div>
                </CardFooter>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </div>
    </PageContainer>
  );
}
