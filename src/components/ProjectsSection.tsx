import React from "react";
import {
  Box,
  Link,
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/core";

import { PageWrapper } from "./PageWrapper";
import { Section } from "./Section";
import { SectionHeadline } from "./SectionHeadline";

// TODO fetch projects via Github API

export const ProjectsSection = () => {
  return (
    <PageWrapper>
      <Section>
        <SectionHeadline>Side Projects</SectionHeadline>
        <Box
          as={Link}
          href={"https://github.com/hauptrolle/stitches-utils"}
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
            <Heading as={"h3"} size={"md"} fontWeight={400}>
              Stitches Utils
            </Heading>
            <Text>
              Helpful stitches utilities like marginY, marginX etc. combined in
              one single package
            </Text>
            <Text
              fontWeight={600}
              display={"inline-flex"}
              alignSelf={"flex-end"}
            >
              See on Github
            </Text>
          </Stack>
        </Box>
      </Section>
    </PageWrapper>
  );
};
