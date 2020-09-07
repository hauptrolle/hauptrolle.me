import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/core";

import { PageWrapper } from "./PageWrapper";
import { Section } from "./Section";
import { SectionHeadline } from "./SectionHeadline";

export const ProjectsSection = () => {
  return (
    <PageWrapper>
      <Section>
        <SectionHeadline>Projects</SectionHeadline>
        <Box
          p={6}
          textAlign={"center"}
          bg={useColorModeValue("gray.100", "brand.darkShade")}
          rounded={"md"}
        >
          Work in progress. Check out later ✌️
        </Box>
      </Section>
    </PageWrapper>
  );
};
