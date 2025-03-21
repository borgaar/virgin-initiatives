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
import { projects } from "../lib/projects";
import ProjectTile from "./statistics/_components/project-tile";
import PageContainer from "./_components/page-container";

export default async function Home() {
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
              ↓ Take a look at our projects below ↓
            </p>
          </div>
          <div className="m-auto flex h-[calc(56vh-100px)] gap-2 align-middle">
            {projects.map((project, idx) => (
              <Link
                href={`/projects/${idx + 1}`}
                style={{
                  backgroundImage: `url(${project.thumbnail})`,
                }}
                key={project.title}
                className={cn(
                  "my-auto overflow-hidden bg-gradient-to-b from-transparent via-black/40 to-black/60 bg-cover bg-center brightness-[0.4] transition-all duration-300 ease-in-out [&:not(:hover)]:grayscale [&:not(:hover)_>_*]:hidden", // base
                  "h-[calc(50vh-100px)] w-[calc(26vh-100px)] flex-col hover:h-full hover:w-[calc(38vh-100px)] hover:brightness-75", // Main style
                  "[&:hover_.the-text-content]:motion-preset-slide-up-lg", // The text content
                )}
              >
                <div className="h-full bg-gradient-to-b from-transparent via-black/10 to-black/60 p-6">
                  <div className="the-text-content flex h-full flex-col justify-end font-semibold">
                    <h2 className="text-xl text-white">{project.title}</h2>
                    <span className="text-xs text-white/60">
                      {project.description}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <section className="mt-32 flex flex-col gap-10">
          <div className="flex items-center justify-center gap-6">
            <div
              className="relative h-[2px] w-96 bg-neutral-800"
              style={{
                clipPath: "polygon(100% 0, 100% 100%, 0 100%, 0 100%)",
              }}
            />
            <h2 className="text-center text-3xl text-neutral-200">
              All our projects
            </h2>
            <div
              className="relative h-[2px] w-96 bg-neutral-800"
              style={{
                clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 100%)",
              }}
            />
          </div>

          <PageContainer>
            <div className="mt-10 grid max-w-screen-2xl grid-cols-1 gap-7 md:grid-cols-3 lg:grid-cols-3">
              {projects.slice(0, 6).map((project, idx) => (
                <ProjectTile {...project} key={project.title} idx={idx} />
              ))}
            </div>
          </PageContainer>
        </section>
      </main>
    </HydrateClient>
  );
}
