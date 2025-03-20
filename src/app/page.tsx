// import { auth } from "@/server/auth";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HydrateClient } from "@/trpc/server";
import Link from "next/link";
import {
  HandCoinsIcon,
  PawPrintIcon,
  SproutIcon,
  WindIcon,
} from "lucide-react";
import { describe } from "node:test";
import { Description } from "@headlessui/react";

export default async function Home() {
  const numberOfItems = 7;

  const initiatives = [
    {
      title: "A green soil for earth",
      description: "How Virgin is working towards more farmable land",
    },
    {
      title: "Working against the green massacre",
      description: "Stopping the deforestation of our beloved nature",
    },
    {
      title: "Clean energy for a cleaner future",
      description:
        "Investing in techology to provide better energy for our future generations",
    },
    {
      title: "Making science fiction a reality",
      description: "How we are working towards making the impossible possible",
    },
    {
      title: "Keeping the blue in our blue marble",
      description: "How we are working towards a cleaner ocean",
    },
    {
      title: "Natural reserves are reserves for a reason",
      description: "Stopping the exploitation of our natural reserves",
    },
    {
      title: "Sustainable foods for a sustainable future",
      description:
        "How we are working towards a greener and more sustainable food industry",
    },
  ];
  const items = Array.from({ length: numberOfItems }, (_, i) => ({
    id: i,
    imageUrl: `../projects/p${i + 1}.jpg`, // Replace with your image URLs
    initiative: initiatives[i % initiatives.length],
  }));

  return (
    <HydrateClient>
      <main className="flex flex-col items-center text-white">
        <div className="h-[calc(100vh-100px)] pt-[calc(20vh-100px)]">
          <div className="animate-fade-in flex flex-col items-center gap-[calc(16vh-100px)] px-4 py-[calc(14vh-100px)]">
            <h1 className="text-center font-[merriweather] text-5xl leading-[1.4]">
              How do <span className="italic text-primary">you</span> want to{" "}
              <br />
              help shape our future?
            </h1>
            <p className="text-neutral-500">
              Take a look at our projects below
            </p>
          </div>
          <div className="m-auto flex h-[calc(56vh-100px)] gap-2 align-middle">
            {items.map((item) => (
              <Link
                href={`/projects/${item.id}`}
                style={{
                  backgroundImage: `url(${item.imageUrl})`,
                }}
                key={item.id}
                className={cn(
                  "my-auto overflow-hidden bg-gradient-to-b from-transparent via-black/40 to-black/60 bg-cover bg-center brightness-[0.4] transition-all duration-300 [&:not(:hover)]:grayscale [&:not(:hover)_>_*]:hidden", // base
                  "h-[calc(50vh-100px)] w-[calc(26vh-100px)] flex-col hover:h-full hover:w-[calc(38vh-100px)] hover:brightness-75", // Main style
                  "[&:hover_.the-text-content]:motion-preset-slide-up-lg", // The text content
                )}
              >
                <div className="h-full bg-gradient-to-b from-transparent via-black/10 to-black/60 p-6">
                  <div className="the-text-content flex h-full flex-col justify-end font-semibold">
                    <h2 className="text-xl text-white">
                      {item.initiative?.title}
                    </h2>
                    <span className="text-xs text-white/60">
                      {item.initiative?.description}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <section className="mt-32 flex flex-col gap-10">
          <h2 className="text-center text-3xl">All projects</h2>
          <div className="flex flex-row justify-center gap-10">
            <Button className="p-10" variant={"secondary"} size={"icon"}>
              <SproutIcon className="!size-7" />
            </Button>
            <Button className="p-10" variant={"secondary"} size={"icon"}>
              <PawPrintIcon className="!size-7" />
            </Button>
            <Button className="p-10" variant={"secondary"} size={"icon"}>
              <WindIcon className="!size-7" />
            </Button>
            <Button className="p-10" variant={"secondary"} size={"icon"}>
              <HandCoinsIcon className="!size-7" />
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-3 lg:grid-cols-4">
            <div className="size-48 bg-secondary"></div>
            <div className="size-48 bg-secondary"></div>
            <div className="size-48 bg-secondary"></div>
            <div className="size-48 bg-secondary"></div>
            <div className="size-48 bg-secondary"></div>
            <div className="size-48 bg-secondary"></div>
            <div className="size-48 bg-secondary"></div>
            <div className="size-48 bg-secondary"></div>
            <div className="size-48 bg-secondary"></div>
            <div className="size-48 bg-secondary"></div>
            <div className="size-48 bg-secondary"></div>
            <div className="size-48 bg-secondary"></div>
            <div className="size-48 bg-secondary"></div>
            <div className="size-48 bg-secondary"></div>
            <div className="size-48 bg-secondary"></div>
          </div>
        </section>
      </main>
    </HydrateClient>
  );
}
