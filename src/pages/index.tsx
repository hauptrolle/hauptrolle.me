import React from "react";
import { GetStaticProps, NextPage } from "next";

import type { Skill } from "./api/skills";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";

type Props = {
  skills: Skill[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const skillsRes = await fetch(`${process.env.API_URL}/api/skills`);
  const skills = await skillsRes.json();

  return {
    props: {
      skills,
    },
  };
};

const HomePage: NextPage<Props> = ({ skills }) => {
  return (
    <>
      <Header />
      <HeroSection />
      <SkillsSection skills={skills} />
      <ProjectsSection />
    </>
  );
};

export default HomePage;
