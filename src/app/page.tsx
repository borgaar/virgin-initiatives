// import { auth } from "@/server/auth";
import { cn } from "@/lib/utils";
import { HydrateClient } from "@/trpc/server";

export default async function Home() {
  // const session = await auth();
  // if (session?.user) {
  //   void api.post.getLatest.prefetch();
  // }

  const numberOfItems = 7;

  const initiatives = [
    {
      title: "The Sea Turtle initiative",
      description: "1200 sea trurtles saved",
    },
    {
      title: "Carbon Footprint initiative",
      description: "1000 tons of CO2 saved",
    },
    {
      title: "Clean Water initiative",
      description: "1000 tons of clean water provided",
    },
  ];
  const items = Array.from({ length: numberOfItems }, (_, i) => ({
    id: i,
    imageUrl: `https://picsum.photos/id/${i + 10}/300/400`, // Replace with your image URLs
    initiative: initiatives[i % initiatives.length],
  }));

  return (
    <HydrateClient>
      <main className="flex flex-col items-center">
        <div className="animate-fade-in flex flex-col items-center gap-12 px-4 py-6">
          <h1 className="font-[merriweather] text-5xl leading-[1.4]">
            Where do <span className="italic text-primary">you</span> want to{" "}
            <br />
            help shape our future?
          </h1>
        </div>
        <div className="flex gap-2">
          {items.map((item) => (
            <div
              style={{
                backgroundImage: `url(${item.imageUrl})`,
              }}
              key={item.id}
              className={cn(
                "overflow-hidden bg-secondary bg-cover transition-all duration-300 [&:not(:hover)]:grayscale [&:not(:hover)_>_*]:hidden", // base
                "h-72 w-32 flex-col hover:w-72 hover:scale-y-150", // Main style
                "[&:hover_.the-text-content]:motion-preset-slide-up-lg [&:hover_.the-text-content]:scale-y-75", // The text content
              )}
            >
              <div className="h-full bg-gradient-to-b from-transparent via-black/70 to-black/70 p-2">
                <div className="the-text-content flex h-full flex-col justify-end gap-2">
                  <h2 className="text-md text-white">
                    {item.initiative?.title}
                  </h2>
                  <span className="text-xs text-white/60">
                    {item.initiative?.description}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </HydrateClient>
  );
}