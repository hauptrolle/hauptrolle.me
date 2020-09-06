import React from "react";
import { Box } from "@chakra-ui/core";

import { PageWrapper } from "./PageWrapper";
import { Section } from "./Section";
import { SectionHeadline } from "./SectionHeadline";

export const ProjectsSection = () => {
  return (
    <PageWrapper>
      <Section>
        <SectionHeadline>Projects</SectionHeadline>
        <Box p={4} textAlign={"center"} bg={"gray.100"} rounded={"md"}>
          Work in progress. Check out later ✌️
        </Box>
      </Section>
    </PageWrapper>
  );
};
