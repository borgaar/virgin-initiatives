import { Button } from "@/components/ui/button";
import ProjectCard from "../../_components/project/card";
import ProjectParticipation from "../../_components/project/participation";
import ProjectRoadmap from "../../_components/project/roadmap";
import InitiativeReference from "@/app/_components/project/initiative-reference";

export default function ProjectPage() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-6 py-6">
      <div className="flex gap-6">
        <ProjectCard
          title={"Clean Ocean Initiative"}
          description={`
          Our global effort to remove 5 million tons of plastic from oceans by
          2030, spanning 15 countries across 3 continents, as well as educating
          communities on sustainable practices.
        `}
          stats={[
            { label: "Companies", value: "7" },
            { label: "Participants", value: "1.2k" },
            { label: "Progress", value: "35%" },
            { label: "Target Year", value: "2027" },
          ]}
          tag={"Environment"}
        />
        <div className="flex flex-col gap-4 bg-red-50 p-4">
          <div>Joining this initiative will earn you points!</div>
          <div className="flex justify-center gap-2">
            <Button className="w-full bg-primary">Donate points</Button>
            <Button className="w-full bg-primary">Donate cash</Button>
          </div>
          <Button className="border-2 border-solid border-red-200 bg-red-100 text-black">
            Share on social media
          </Button>
          <Button className="border-2 border-solid border-gray-200 bg-white text-gray-600">
            Download report
          </Button>
        </div>
      </div>
      <ProjectRoadmap
        timeline={[
          {
            id: 1,
            time: "Q1 2022",
            title: "Initiative Launch",
            description:
              "Initial planning and resource allocation, establishing partnerships with local environmental agencies and NGOs.",
            status: "completed",
          },
          {
            id: 2,
            time: "Q3 2022",
            title: "Phase 1: Southeast Asia",
            description:
              "Pilot cleanup operations in Thailand, Indonesia, and Vietnam. Setup of waste processing facilities and local education programs.",
            status: "completed",
          },
          {
            id: 3,
            time: "Q2 2023 - Present",
            title: "Phase 2: Expansion to Africa",
            description:
              "Extending operations to Kenya, Nigeria, and South Africa. Implementation of innovative plastic recycling technology and job creation programs.",
            status: "in-progress",
          },
          {
            id: 4,
            time: "Q1 2024",
            title: "Phase 3: South America",
            description:
              "Operations in Brazil, Colombia, and Ecuador. Focus on river cleanup systems and community-led approaches.",
            status: "todo",
          },
          {
            id: 5,
            time: "2025-2026",
            title: "Phase 4: Global Scaling",
            description:
              "Expansion to additional regions and integration of advanced ocean cleanup technologies. Implementation of global plastic reduction standards.",
            status: "todo",
          },
          {
            id: 6,
            time: "2027",
            title: "Target Achievement",
            description:
              "Reach target of 5 million tons of plastic removed, with sustainable waste management processes established in all target regions.",
            status: "todo",
          },
        ]}
      />
      <ProjectParticipation />
      <InitiativeReference />
    </main>
  );
}
