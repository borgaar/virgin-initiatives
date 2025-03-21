"use client";

import { Button } from "@/components/ui/button";
import {
  CpuIcon,
  FactoryIcon,
  PlusIcon,
  Share2Icon,
  SproutIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from "lucide-react";
import { useState } from "react";
import Voting from "./Voting";
import CommentSection from "@/app/_components/project/comments";
import type { posts } from "@/lib/community";

type Post = (typeof posts)[number];

export default function PostRenderer({ post }: { post: Post }) {
  const [likeState, setLikeState] = useState<-1 | 0 | 1>(0);

  return (
    <>
      <h1 className="text-5xl">{post.title}</h1>
      <div className="mb-4 mt-4 flex flex-row gap-2 rounded-lg bg-neutral-500/5 p-2 backdrop-blur-sm">
        <Button
          variant={"ghost"}
          className="bg-neutral-500/10 hover:bg-neutral-800 hover:text-white"
          onClick={() => setLikeState(1)}
        >
          <ThumbsUpIcon fill={likeState == 1 ? "white" : undefined} />{" "}
          {post.likes + Number(likeState == 1)}
        </Button>
        <Button
          variant={"ghost"}
          className="bg-neutral-500/10 hover:bg-neutral-800 hover:text-white"
          onClick={() => setLikeState(-1)}
        >
          <ThumbsDownIcon fill={likeState == -1 ? "white" : undefined} />{" "}
          {post.dislikes + Number(likeState == -1)}
        </Button>
        <Button
          variant="ghost"
          className="ml-auto bg-neutral-500/10 hover:bg-neutral-800 hover:text-white"
        >
          <Share2Icon /> Share this post
        </Button>
        <Button
          variant={"ghost"}
          className="bg-neutral-500/10 hover:bg-neutral-800 hover:text-white"
        >
          <PlusIcon /> Give points to this post
        </Button>
      </div>
      <section className="flex flex-col gap-5">
        <p className="text-neutral-400">{post.description}</p>
        <Voting
          className="rounded-lg"
          question="What do you think we should focus on?"
          options={[
            {
              icon: <SproutIcon />,
              label: "We like environmental initiatives",
              totalVotes: 5,
            },
            {
              icon: <FactoryIcon />,
              label: "We don't like pollution",
              totalVotes: 3,
            },
            {
              icon: <CpuIcon />,
              label: "Technology is awesome",
              totalVotes: 2,
            },
          ]}
          votedFor={undefined}
        />
        <div className="flex flex-row gap-7 text-neutral-400">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolorem,
            totam excepturi iste voluptatum maiores labore voluptate quod
            nostrum architecto inventore. Voluptatem minus voluptas alias
            delectus autem deleniti accusantium recusandae vel perferendis.
            <br />
            <br />
            Debitis nesciunt non alias similique illum molestiae asperiores rem
            a. Tempora, velit cupiditate exercitationem ipsa numquam temporibus
            id laborum repellat molestiae excepturi quae facilis aut dignissimos
            deleniti tenetur enim, vero eligendi ex est illo? Dicta dolorem
            facilis cumque facere, voluptatem itaque unde illo, recusandae
            maiores optio provident amet incidunt quas voluptas veniam adipisci.
            Vel temporibus, eius autem animi labore consequuntur totam, fugit
            tenetur ut, explicabo quis eum minus. Quae accusamus, sapiente error
            corrupti blanditiis delectus deserunt.
            <br />
            <br /> Amet cumque nesciunt nam modi praesentium doloribus quo
            necessitatibus eum.
          </p>
          <img
            className="mx-auto aspect-square size-64 rounded-xl bg-muted-foreground object-cover object-top brightness-75"
            src="/projects/t7.jpg"
            alt="Content image"
          />
        </div>
        {/* Comment section */}
        <CommentSection
          comments={post.comments}
          subLabel="Share your opinion on this post!"
        />
      </section>
    </>
  );
}
