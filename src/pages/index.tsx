import React from "react";
import { GetStaticProps, NextPage } from "next";

import { HeroSection } from "../components/HeroSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { SideProject } from "../api/github";
import { fetchProjects } from "../api/projects";

type Props = {
  projects: SideProject[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const response = await fetchProjects();

  return {
    props: {
      ...response,
    },
    revalidate: 10,
  };
};

const HomePage: NextPage<Props> = ({ projects }) => {
  return (
    <>
      <HeroSection />
      <ProjectsSection projects={projects} />
    </>
  );
};

export default HomePage;
