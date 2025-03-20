import { posts } from "@/lib/community";
import { redirect } from "next/navigation";
import PostRenderer from "./components/PostRenderer";

type PostPageProps = {
  params: {
    postId: string;
  };
};

export default async function PostPage({ params }: PostPageProps) {
  const { postId } = await params;
  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return redirect("/community");
  }

  return (
    <div className="flex justify-center pb-6 pt-10">
      <div className="container">
        <PostRenderer post={post} />
      </div>
    </div>
  );
}
