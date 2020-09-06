import React from "react";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import type { Skill } from "./api/skills";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { Footer } from "../components/Footer";

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
      <Head>
        <title>Achim Rolle - Frontend developer & web designer</title>
      </Head>
      <Header />
      <HeroSection />
      <SkillsSection skills={skills} />
      <ProjectsSection />
      <Footer />
    </>
  );
};

export default HomePage;
