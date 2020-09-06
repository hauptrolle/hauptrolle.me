import React from "react";
import { Box, Heading, SimpleGrid, Text, Flex, Icon } from "@chakra-ui/core";
import {
  AiOutlineCode,
  AiOutlineClear,
  AiOutlineBug,
  AiOutlineLike,
} from "react-icons/ai";

import type { Skill } from "../pages/api/skills";
import { PageWrapper } from "./PageWrapper";
import { Section } from "./Section";

type Props = {
  skills: Skill[];
};

const iconProps = {
  boxSize: 6,
};

const getIcon = (id: string) => {
  switch (id) {
    case "frontend":
      return <Icon as={AiOutlineCode} {...iconProps} />;
    case "design":
      return <Icon as={AiOutlineClear} {...iconProps} />;
    case "agile":
      return <Icon as={AiOutlineLike} {...iconProps} />;
    case "testing":
      return <Icon as={AiOutlineBug} {...iconProps} />;
  }
};

export const SkillsSection = ({ skills }: Props) => {
  return (
    <Box bg={"gray.800"} color={"white"}>
      <PageWrapper>
        <Section>
          <Heading as={"h2"} size="xl" fontWeight={500} mb={8}>
            My Skills
          </Heading>
          <SimpleGrid columns={[1, null, 2]} spacing={4}>
            {skills.map((skill) => (
              <Flex mb={2} _last={{ mb: 0 }} key={skill.id}>
                <Box>
                  <Flex
                    mr={4}
                    bg={"green.400"}
                    rounded={"full"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    p={2}
                    color={"green.800"}
                  >
                    {getIcon(skill.id)}
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
