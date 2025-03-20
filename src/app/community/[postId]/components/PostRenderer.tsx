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
import { PostComments } from "@/app/_components/project/comments";
import type { posts } from "@/lib/community";

type Post = (typeof posts)[number];

export default function PostRenderer({ post }: { post: Post }) {
  const [likeState, setLikeState] = useState<-1 | 0 | 1>(0);

  return (
    <>
      <h1 className="text-5xl">{post.title}</h1>
      <div className="mb-4 mt-4 flex flex-row gap-2 rounded-md bg-neutral-500/5 p-2 backdrop-blur-sm">
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
        <p>{post.description}</p>

        <Voting
          question="Example vote (rich conent)"
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
          votedFor={0}
        />
        <div className="flex flex-row gap-7">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolorem,
            totam excepturi iste voluptatum maiores labore voluptate quod
            nostrum architecto inventore. Voluptatem minus voluptas alias
            delectus autem deleniti accusantium recusandae vel perferendis.
            Debitis nesciunt non alias similique illum molestiae asperiores rem
            a. Tempora, velit cupiditate exercitationem ipsa numquam temporibus
            id laborum repellat molestiae excepturi quae facilis aut dignissimos
            deleniti tenetur enim, vero eligendi ex est illo? Dicta dolorem
            facilis cumque facere, voluptatem itaque unde illo, recusandae
            maiores optio provident amet incidunt quas voluptas veniam adipisci.
            Vel temporibus, eius autem animi labore consequuntur totam, fugit
            tenetur ut, explicabo quis eum minus. Quae accusamus, sapiente error
            corrupti blanditiis delectus deserunt. Officiis distinctio, quo
            tempora autem suscipit perferendis consequatur laudantium nobis,
            culpa eaque praesentium amet nihil tempore quidem nam repudiandae
            quibusdam sed ipsam accusantium. Similique tempore totam asperiores
            facere autem sunt at non? Numquam, earum nisi voluptatum optio
            commodi recusandae tempore unde libero iste. In labore blanditiis
            illum, nam vitae tempore optio quisquam amet eum quod eveniet velit
            dolorum laudantium eaque. Eius ea exercitationem neque mollitia sint
            asperiores quo ut earum omnis quam est fuga totam maxime quos
            eligendi dolorem tempore, quidem magni! Amet cumque nesciunt nam
            modi praesentium doloribus quo necessitatibus eum.
          </p>
          <img
            className="mx-auto aspect-square size-96 rounded-xl bg-muted-foreground"
            src="/placeholder.svg"
            alt="Content image"
          />
        </div>
        {/* Comment section */}
        <PostComments comments={post.comments} />
      </section>
    </>
  );
}
