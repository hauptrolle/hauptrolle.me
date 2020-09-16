import React from "react";
import { GetStaticProps, NextPage } from "next";

import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
// import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { Footer } from "../components/Footer";
import { GithubActivitySection } from "../components/GithubActivitySection";
import { fetchRepositories, Repo } from "../api/github";

type Props = {
  starred: Repo[];
  contributed: Repo[];
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

const HomePage: NextPage<Props> = ({ starred, contributed }) => {
  return (
    <>
      <Header />
      <HeroSection />
      {/*<SkillsSection />*/}
      <ProjectsSection />
      <GithubActivitySection starred={starred} contributed={contributed} />
      <Footer />
    </>
  );
};

export default HomePage;
