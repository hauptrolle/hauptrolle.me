import React from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/core";

import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { Footer } from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Achim Rolle - Frontend developer & web designer</title>
        <meta
          name={"description"}
          content={
            "I am Achim. A self taught frontend developer & web designer from Hessen/Germany"
          }
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍💻</text></svg>"
        />
      </Head>
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
