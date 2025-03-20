"use client";

import PageContainer from "../_components/page-container";
import ProjectsStats from "../_components/statistics/chart";
import KeyFigures from "../_components/statistics/key-figures";
import GlobeExplorer from "./_components/GlobeExplorer";

export default function Statistics() {
  return (
    <div className="bg-black">
      <GlobeExplorer />

      <PageContainer className="mx-auto">
        <KeyFigures />
        <ProjectsStats />
      </PageContainer>
    </div>
  );
}
