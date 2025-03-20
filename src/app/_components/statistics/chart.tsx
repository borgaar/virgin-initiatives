import React from "react";
import { Pack, hierarchy } from "@visx/hierarchy";
import { ParentSize } from "@visx/responsive";
import { twMerge } from "tailwind-merge";
import { cn } from "../../../lib/utils";

interface Initiative {
  name: string;
  size: number;
  activity: number;
  category: string;
}

const initiatives: Initiative[] = [
  {
    name: "Youngest, Cleanest Fleet in",
    size: 328935,
    activity: 87,
    category: "Environment",
  },
  {
    name: "Protecting our Planet",
    size: 286836,
    activity: 142,
    category: "Environment",
  },
  {
    name: "Epic Sea Change For",
    size: 400971,
    activity: 56,
    category: "Environment",
  },
  {
    name: "Better Connections Plan",
    size: 34395,
    activity: 103,
    category: "Infrastructure",
  },
  {
    name: 'Pride "n Purpose',
    size: 198529,
    activity: 175,
    category: "Community",
  },
  {
    name: "Mahali Mzuri: Inua Jamii",
    size: 451955,
    activity: 62,
    category: "Community",
  },
  {
    name: "Planetary Guardians",
    size: 18775,
    activity: 129,
    category: "Environment",
  },
  { name: "The Elders", size: 422816, activity: 95, category: "Leadership" },
  {
    name: "Ocean Unite / ORRAA",
    size: 34617,
    activity: 113,
    category: "Environment",
  },
  {
    name: "Community Mapathon: Humanitarian OpenStreetMap",
    size: 20056,
    activity: 198,
    category: "Humanitarian",
  },
  {
    name: "Project CETI (Cetacean Translation",
    size: 22277,
    activity: 72,
    category: "Environment",
  },
  {
    name: "Eve Branson Foundation",
    size: 14906,
    activity: 156,
    category: "Humanitarian",
  },
  { name: "Unite BVI", size: 3488536 / 3, activity: 88, category: "Community" },
];

const getCategoryColor = (category: string): string => {
  switch (category) {
    case "Environment":
      return "bg-green-900";
    case "Community":
      return "bg-purple-900";
    case "Infrastructure":
      return "bg-amber-900";
    case "Leadership":
      return "bg-indigo-900";
    case "Humanitarian":
      return "bg-rose-900";
    default:
      return "bg-gray-900";
  }
};

const pack = {
  children: initiatives,
  name: "root",
  radius: 0,
  distance: 0,
};

export default function ProjectsStats() {
  const root = React.useMemo(
    () =>
      hierarchy(pack as any)
        .sum((d) => 1 + d?.size)
        .sort((a, b) => (b.data.size ?? 0) - (a.data.size ?? 0)),
    [pack],
  );

  return (
    <ParentSize className="mx-auto max-w-4xl">
      {({ width = 800 }) => {
        return width < 10 ? null : (
          <div
            style={{
              width,
              height: width,
              position: "relative",
            }}
          >
            <style
              dangerouslySetInnerHTML={{
                __html: `

              .spon-link {
                transition: all .2s ease;
                transform: translate(-50%, -50%);
                will-change: transform;
              }

              .spon-link:hover {
                z-index: 10;
                transform: translate(-50%, -50%) scale(1.1);
              }

              .spon-link:hover .spon-tooltip {
                opacity: 1;
              }
            `,
              }}
            />
            <Pack root={root} size={[width, width]} padding={width * 0.005}>
              {(packData) => {
                const circles = packData.descendants().slice(1); // skip first layer

                return (
                  <div>
                    {[...circles].reverse().map((circle, i) => {
                      return (
                        <a
                          key={`circle-${i}`}
                          href={`/projects/1`}
                          className={cn(
                            `spon-link bg-red absolute z-0 rounded-full bg-white shadow-lg`,
                            getCategoryColor(circle.data.category),
                          )}
                          style={{
                            left: circle.x,
                            top: circle.y,
                            width: circle.r * 2,
                            height: circle.r * 2,
                          }}
                        >
                          <div className="flex h-full w-full items-center justify-center">
                            <span
                              className={
                                "truncate px-3 text-center font-bold text-white"
                              }
                              style={{
                                fontSize: `${Math.max(
                                  0.5,
                                  (circle.r / 100) * 1,
                                )}em`,
                              }}
                            >
                              {circle.data.name}
                            </span>
                          </div>
                          <div
                            key={`circle-${i}`}
                            className={`absolute left-1/2 top-1/2 h-[95%] w-[95%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-contain bg-center bg-no-repeat dark:h-[100.5%] dark:w-[100.5%]`}
                            style={{
                              backgroundColor: `rgba(0, 0, 0, 0.1)`,
                            }}
                          />
                        </a>
                      );
                    })}
                  </div>
                );
              }}
            </Pack>
          </div>
        );
      }}
    </ParentSize>
  );
}
