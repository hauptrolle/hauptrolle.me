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
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍💻</text></svg>"
        />
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
