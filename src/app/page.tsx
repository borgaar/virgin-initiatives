// import { auth } from "@/server/auth";
import { HydrateClient } from "@/trpc/server";

export default async function Home() {
  // const session = await auth();
  // if (session?.user) {
  //   void api.post.getLatest.prefetch();
  // }

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center">
        <div className="flex flex-col items-center gap-12 px-4 py-6">
          <h1 className="font-[merriweather] text-5xl leading-[1.4]">
            Where do <span className="italic text-primary">you</span> want to{" "}
            <br />
            help shape our future?
          </h1>
        </div>
      </main>
    </HydrateClient>
  );
}
