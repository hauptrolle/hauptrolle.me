import React from "react";
import { Heading, Text, Link, Stack, Box } from "@chakra-ui/core";

import { PageWrapper } from "./PageWrapper";
import { Section } from "./Section";

export const HeroSection = () => {
  return (
    <PageWrapper>
      <Section>
        <Heading as="h1" size="2xl" mb={8}>
          Hallo. 👋
        </Heading>
        <Stack spacing={3} maxW={"5xl"}>
          <Text
            color={"gray.600"}
            fontSize={{
              base: "lg",
              sm: "2xl",
              md: "3xl",
            }}
          >
            I am Achim. A self taught frontend developer & web designer from
            Hessen/Germany.
          </Text>
          <Text
            color={"gray.600"}
            fontSize={{
              base: "lg",
              sm: "2xl",
              md: "3xl",
            }}
          >
            I am currently developing{" "}
            <Box
              as={"span"}
              bg={"green.50"}
              color={"green.700"}
              p={2}
              rounded={"md"}
            >
              Enterprise-React-Applications
            </Box>{" "}
            at{" "}
            <Link color={"green.600"} href="https://www.aoe.com/de/home.html">
              AOE
            </Link>
            .
          </Text>
        </Stack>
      </Section>
    </PageWrapper>
  );
};
