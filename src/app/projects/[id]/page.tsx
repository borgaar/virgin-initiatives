import ProjectCard from "../../_components/project-card";

export default function ProjectPage() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col">
      <ProjectCard
        title={"Clean Ocean Initiative"}
        description={`
          Our global effort to remove 5 million tons of plastic from oceans by
          2030, spanning 15 countries across 3 continents, as well as educating
          communities on sustainable practices.
        `}
        stats={[
          {
            label: "Companies",
            value: "7",
          },
          {
            label: "Participants",
            value: "1.2k",
          },
          {
            label: "Progress",
            value: "35%",
          },
          {
            label: "Target Year",
            value: "2027",
          },
        ]}
        tag={"Environment"}
      />
    </main>
  );
}
