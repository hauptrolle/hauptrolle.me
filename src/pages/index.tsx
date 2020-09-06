import React from "react";
import { Box } from "@chakra-ui/core";

import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { Footer } from "../components/Footer";

const HomePage = () => {
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
      <Footer />
    </>
  );
};

export default HomePage;
