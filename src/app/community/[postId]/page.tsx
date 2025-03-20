import { posts } from "@/lib/community";
import { redirect } from "next/navigation";
import PostRenderer from "./components/PostRenderer";
import PageContainer from "@/app/_components/page-container";

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
    <PageContainer className="mt-20">
      <PostRenderer post={post} />
    </PageContainer>
  );
}
