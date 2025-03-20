import ProjectCard from "../../_components/project/card";
import ProjectComments from "../../_components/project/comments";
import ProjectParticipation from "../../_components/project/participation";
import ProjectRoadmap from "../../_components/project/roadmap";
import InitiativeReference from "@/app/_components/project/initiative-reference";
import ProjectTakeInitiative from "../../_components/project/take-initiative";
import { projects } from "../../../lib/projects";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects[parseInt(id) - 1];

  if (!project) {
    return <div>404 not found</div>;
  }
  return (
    <main className="mx-auto mb-64 flex max-w-6xl flex-col gap-6 py-6 pt-20">
      <div className="flex gap-6">
        <ProjectCard {...project} />
        <ProjectTakeInitiative />
      </div>
      <ProjectRoadmap timeline={project.roadmap} />
      <ProjectParticipation companies={project.participants} />
      <InitiativeReference initiatives={project.initiatives} />
      <ProjectComments comments={project.comments} />
    </main>
  );
}
