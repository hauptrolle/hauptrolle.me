import React from "react";

import { Section } from "./Section";
import { SectionHeadline } from "./SectionHeadline";
import { SideProject } from "../api/github";
import { ProjectsGrid } from "./ProjectsGrid";

type Props = {
  projects: SideProject[];
};

export const ProjectsSection = ({ projects }: Props) => {
  return (
    <Section>
      <SectionHeadline>Side Projects</SectionHeadline>
      <ProjectsGrid projects={projects} />
    </Section>
  );
};
