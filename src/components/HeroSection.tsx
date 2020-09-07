import React from "react";
import {
  Heading,
  Text,
  Link,
  Stack,
  Box,
  useColorModeValue,
} from "@chakra-ui/core";

import { PageWrapper } from "./PageWrapper";
import { Section } from "./Section";

export const HeroSection = () => {
  const textColor = useColorModeValue("gray.600", "gray.400");

  return (
    <PageWrapper>
      <Section>
        <Heading as="h1" size="2xl" mb={8}>
          Hallo. 👋
        </Heading>
        <Stack spacing={3} maxW={"5xl"}>
          <Text
            color={textColor}
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
            color={textColor}
            fontSize={{
              base: "lg",
              sm: "2xl",
              md: "3xl",
            }}
          >
            I am currently developing{" "}
            <Box as={"span"} bg={"brand.green"} color={"gray.800"} p={1} px={2}>
              Enterprise-React-Applications
            </Box>{" "}
            at <Link href="https://www.aoe.com/de/home.html">AOE</Link>.
          </Text>
        </Stack>
      </Section>
    </PageWrapper>
  );
};
