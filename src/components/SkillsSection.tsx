import React from "react";
import { Box, SimpleGrid, Text, Flex } from "@chakra-ui/core";

import { skills } from "../skills";
import { PageWrapper } from "./PageWrapper";
import { Section } from "./Section";
import { SectionHeadline } from "./SectionHeadline";

export const SkillsSection = () => {
  return (
    <Box bg={"gray.800"} color={"white"}>
      <PageWrapper>
        <Section>
          <SectionHeadline>My Skills</SectionHeadline>
          <SimpleGrid columns={[1, null, 2]} spacing={4}>
            {skills.map((skill) => (
              <Flex mb={4} _last={{ mb: 0 }} key={skill.id}>
                <Box>
                  <Flex
                    mr={4}
                    alignItems={"center"}
                    justifyContent={"center"}
                    fontSize={"2xl"}
                  >
                    {skill.icon}
                  </Flex>
                </Box>
                <Box>
                  <Text
                    as={"h3"}
                    fontSize={{
                      base: "lg",
                      md: "xl",
                    }}
                    fontWeight={500}
                  >
                    {skill.title}
                  </Text>
                  <Text color={"gray.300"}>{skill.description}</Text>
                </Box>
              </Flex>
            ))}
          </SimpleGrid>
        </Section>
      </PageWrapper>
    </Box>
  );
};
