"use client";

import { posts } from "@/lib/community";
import { redirect } from "next/navigation";
import PostRenderer from "./components/PostRenderer";

type PostPageProps = {
  params: {
    postId: string;
  };
};

export default function PostPage({ params }: PostPageProps) {
  const post = posts.find((post) => post.id === params.postId);

  if (!post) {
    return redirect("/community");
  }

  return (
    <div className="flex justify-center px-80 pb-6 pt-10">
      <div className="container">
        <PostRenderer post={post} />
      </div>
    </div>
  );
}
