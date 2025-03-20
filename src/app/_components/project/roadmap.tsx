import { Card, CardContent, CardTitle } from "../../../components/ui/card";
import { cn } from "../../../lib/utils";

export interface ProjectRoadmapProps {
  timeline: {
    id: number;
    time: string;
    title: string;
    description: string;
    status: "completed" | "in-progress" | "todo";
  }[];
}

export default function ProjectRoadmap({ timeline }: ProjectRoadmapProps) {
  return (
    <div className="bg-white bg-opacity-5">
      <Card className="bg-transparent px-6 py-3">
        <CardTitle className="mt-4 inline-flex gap-1 text-white">
          Project Roadmap
        </CardTitle>
        <CardContent className="mt-4 flow-root pl-0">
          <ul role="list" className="-mb-8">
            {timeline.map((event, eventIdx) => (
              <li key={event.id}>
                <div className="relative pb-8">
                  {eventIdx !== timeline.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="absolute left-2 top-2 -ml-px h-full w-0.5 bg-gray-400"
                    />
                  ) : null}
                  <div className="relative flex space-x-3">
                    <div>
                      <span
                        className={cn(
                          event.status === "completed"
                            ? "bg-green-600"
                            : event.status === "in-progress"
                              ? "bg-yellow-400"
                              : "bg-gray-400",
                          "flex size-4 items-center justify-center rounded-full ring-4 ring-card",
                        )}
                      ></span>
                    </div>
                    <div className="-mt-1 flex min-w-0 flex-1 justify-between space-x-4">
                      <div>
                        <p className="text-sm text-gray-400">
                          {event.time.toUpperCase()}
                        </p>
                        <h3 className="text-base font-semibold text-foreground">
                          {event.title}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
