import React from "react";
import { Box } from "@chakra-ui/core";
import { GetStaticProps, NextPage } from "next";

import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { SkillsSection } from "../components/SkillsSection";
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
      <Box
        zIndex={10}
        position={"fixed"}
        bottom={0}
        w={"full"}
        p={4}
        textAlign={"center"}
        bg={"green.100"}
        color={"green.800"}
      >
        This page is a work in progress
      </Box>
      <Header />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <GithubActivitySection starred={starred} contributed={contributed} />
      <Footer />
    </>
  );
};

export default HomePage;
