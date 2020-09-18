import React from "react";
import {
  Box,
  Link,
  Heading,
  Text,
  Stack,
  Flex,
  useColorModeValue,
} from "@chakra-ui/core";

import { PageWrapper } from "./PageWrapper";
import { Section } from "./Section";
import { SectionHeadline } from "./SectionHeadline";
import { SideProject } from "../api/github";

type Props = {
  projects: SideProject[];
};

export const ProjectsSection = ({ projects }: Props) => {
  return (
    <PageWrapper>
      <Section>
        <SectionHeadline>Side Projects</SectionHeadline>
        <Stack spacing={8}>
          {projects.map((project) => (
            <Box
              as={Link}
              href={project.url}
              display={"block"}
              p={6}
              rounded={"md"}
              bg={useColorModeValue("gray.100", "brand.dark.shade")}
              _hover={{
                bg: "brand.green.base",
                color: "brand.dark.base",
                textDecoration: "none",
                transform: "translateY(-5px)",
              }}
            >
              <Stack spacing={2}>
                <Heading as={"h3"} size={"md"} fontWeight={500}>
                  {project.name}
                </Heading>
                <Text>{project.description}</Text>
                <Flex justifyContent={"space-between"}>
                  <Text fontSize={"sm"}>
                    {project.stargazers.totalCount} 🌟
                  </Text>
                  <Text
                    fontWeight={600}
                    display={"inline-flex"}
                    alignSelf={"flex-end"}
                  >
                    Explore on GitHub
                  </Text>
                </Flex>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Section>
    </PageWrapper>
  );
};
