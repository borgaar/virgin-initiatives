import { Button } from "@/components/ui/button";
import ProjectCard from "../../_components/project/card";
import ProjectComments from "../../_components/project/comments";
import ProjectParticipation from "../../_components/project/participation";
import ProjectRoadmap from "../../_components/project/roadmap";
import InitiativeReference from "@/app/_components/project/initiative-reference";
import ProjectTakeInitiative from "../../_components/project/take-initiative";

export default function ProjectPage() {
  return (
    <main className="mx-auto mb-64 flex max-w-6xl flex-col gap-6 py-6 pt-20">
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
        <ProjectTakeInitiative />
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
      <ProjectParticipation
        companies={[
          {
            name: "Virgin Fibra",
            logo: "/virgin-fibra.png",
            description: "Making life simpler",
          },
          {
            name: "Virgin Active Australia",
            logo: "/virgin-active.png",
            description: "Creating irresistible exercise experiences",
          },
        ]}
      />
      <InitiativeReference
        initiatives={[
          {
            id: 1,
            image: "https://loremfaces.net/96/id/2.jpg",
            title: "Clean Ocean Initiative",
            description:
              "The sea as of 2025 is full of plastic waste. We aim to remove 5 million tons of plastic from oceans by 2030, spanning 15 countries across 3 continents, as well as educating communities on sustainable practices.",
            author: "Brotherman Testern",
          },
          {
            id: 2,
            image: "https://loremfaces.net/96/id/3.jpg",
            title: "The Sea Turtle initiative",
            description:
              "Did you know that sea turtles are one of the oldest creatures on Earth? They have been around for over 100 million years! Sadly, all 7 species of sea turtles are now endangered due to human activities, such as poaching, pollution, and climate change. By supporting this initiative, you can help protect these ancient creatures and ensure their survival for generations to come.",
            author: "Ola Nordmann",
          },
          {
            id: 3,
            image: "https://loremfaces.net/96/id/4.jpg",
            title: "Let's clean the ocean!",
            description:
              "The ocean is the largest ecosystem on Earth, covering more than 70% of the planet's surface. It is home to a wide variety of marine life, from tiny plankton to massive whales. Unfortunately, the ocean is also the world's largest garbage dump, with millions of tons of plastic waste entering the ocean every year. By supporting this initiative, you can help clean up the ocean and protect marine life for future generations.",
            author: "Kari Nordmann",
          },
          {
            id: 4,
            image: "https://loremfaces.net/96/id/5.jpg",
            title: "The Carbon Footprint initiative",
            description:
              "Did you know that the average person in the United States generates about 16 tons of carbon dioxide (CO2) emissions per year? This is equivalent to burning 1,700 gallons of gasoline! By supporting this initiative, you can help reduce your carbon footprint and combat climate change.",
            author: "Brother Olsen",
          },
          {
            id: 5,
            image: "https://loremfaces.net/96/id/7.jpg",
            title: "Clean Water initiative",
            description:
              "Did you know that more than 2 billion people worldwide lack access to clean drinking water? This is a major public health crisis, as contaminated water can spread diseases such as cholera, typhoid, and dysentery. By supporting this initiative, you can help provide clean water to communities in need and improve public health around the world.",
            author: "Sister Olsen",
          },
        ]}
      />
      <ProjectComments />
    </main>
  );
}
