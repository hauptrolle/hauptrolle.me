import React from "react";
import { GetStaticProps, NextPage } from "next";

import { HeroSection } from "../components/HeroSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { fetchRepositories, Repo, SideProject } from "../api/github";

type Props = {
  starred: Repo[];
  contributed: Repo[];
  sideProjects: SideProject[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const response = await fetchRepositories();

  return {
    props: {
      ...response,
    },
    revalidate: 10,
  };
};

const HomePage: NextPage<Props> = ({ starred, contributed, sideProjects }) => {
  return (
    <>
      <HeroSection />
      <ProjectsSection projects={sideProjects} />
    </>
  );
};

export default HomePage;
