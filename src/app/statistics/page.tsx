"use client";

import ProjectsStats from "../_components/statistics/chart";
import KeyFigures from "../_components/statistics/key-figures";
import GlobeExplorer from "./_components/GlobeExplorer";

export default function Statistics() {
  return (
    <div className="bg-black">
      <GlobeExplorer />

      <KeyFigures />
      <ProjectsStats />
    </div>
  );
}
