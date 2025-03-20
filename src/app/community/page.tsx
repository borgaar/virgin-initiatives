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

export default function Page() {
  const [likedPosts, setLiked] = useState<number[]>([]);
  const [dislikedPosts, setDisliked] = useState<number[]>([]);
  return (
    <div className="flex justify-center px-80 pb-6 pt-10">
      <div className="container">
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
            <Card
              key={post.id}
              className={cn(
                "flex flex-col border-none bg-neutral-700/10 text-muted backdrop-blur-sm",
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
                <p className="overflow-hidden text-ellipsis text-neutral-500">
                  {post.description}
                </p>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button
                  variant={"ghost"}
                  onClick={() => {
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
                  onClick={() => {
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
                  className="ml-auto bg-neutral-500/10 hover:bg-neutral-800 hover:text-white"
                >
                  <Share2Icon />
                </Button>
                <Button
                  variant={"ghost"}
                  size="sm"
                  className="bg-neutral-500/10 hover:bg-neutral-800 hover:text-white"
                  asChild
                >
                  <Link href={`/community/${post.id}`}>
                    <ExternalLinkIcon /> View Post
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
