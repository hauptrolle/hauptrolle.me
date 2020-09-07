import React from "react";
import {
  Box,
  SimpleGrid,
  Text,
  Flex,
  useColorModeValue,
} from "@chakra-ui/core";

import { skills } from "../skills";
import { PageWrapper } from "./PageWrapper";
import { Section } from "./Section";
import { SectionHeadline } from "./SectionHeadline";

export const SkillsSection = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "brand.darkShade")}>
      <PageWrapper>
        <Section>
          <SectionHeadline>My Skills</SectionHeadline>
          <SimpleGrid columns={[1, null, 2]} spacing={4}>
            {skills.map((skill) => (
              <Flex
                mb={4}
                _last={{ mb: 0 }}
                key={skill.id}
                position={"relative"}
                zIndex={1}
                p={2}
                transition={"all 0.3s ease"}
                _after={{
                  transition: "all 0.3s ease",
                  position: "absolute",
                  top: "-5%",
                  left: 0,
                  content: "''",
                  width: "100%",
                  height: "120%",
                  zIndex: -1,
                }}
                _hover={{
                  _after: {
                    transform: "scale(1.05)",
                    backgroundColor: useColorModeValue(
                      "gray.300",
                      "brand.dark"
                    ),
                  },
                }}
              >
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
                  <Text color={useColorModeValue("gray.700", "gray.300")}>
                    {skill.description}
                  </Text>
                </Box>
              </Flex>
            ))}
          </SimpleGrid>
        </Section>
      </PageWrapper>
    </Box>
  );
};
