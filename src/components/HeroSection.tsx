import NextLink from "next/link";
import { Heading, Text, Link, Stack, Box, Button } from "@chakra-ui/react";
import { MdArrowForward } from "react-icons/md";

import { Section } from "./Section";

export const HeroSection = () => {
  return (
    <Section>
      <Heading as="h1" size="2xl" mb={8}>
        Hallo. 👋
      </Heading>
      <Stack spacing={3} maxW={"5xl"} mb={12}>
        <Text
          color={"white"}
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
          color={"white"}
          fontSize={{
            base: "lg",
            sm: "2xl",
            md: "3xl",
          }}
        >
          I am currently developing{" "}
          <Box as={"span"} color={"brand.green.base"} p={1} px={2}>
            Enterprise-React-Applications
          </Box>{" "}
          at{" "}
          <Link
            href="https://www.aoe.com/de/home.html"
            color={"brand.green.base"}
          >
            AOE
          </Link>
          .
        </Text>
      </Stack>
      <NextLink href={"/about"} passHref={true}>
        <Button
          as={Link}
          variant={"outline"}
          rightIcon={<MdArrowForward />}
          _hover={{ textDecoration: "none", bg: "gray.700" }}
        >
          Learn more about me
        </Button>
      </NextLink>
    </Section>
  );
};
