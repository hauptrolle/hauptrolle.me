import { Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { SiGithub, SiTwitter } from "react-icons/si";

import { GITHUB_PROFILE, TWITTER_PROFILE } from "../../constants";

export const Hero = () => {
  return (
    <VStack spacing={4} alignItems="flex-start">
      <Heading size="lg" as="h1">
        Hi, I’m Achim
      </Heading>

      <Text lineHeight={1.75} as="h2">
        A self taught <strong>frontend developer & web designer</strong> from
        Hessen/Germany. I love building products that are{" "}
        <strong>user friendly</strong> and <strong>performant</strong>. If you
        want to know more about me, feel free to check out my social media.
      </Text>

      <HStack spacing={4}>
        <NextLink href={GITHUB_PROFILE} passHref={true}>
          <Button size="sm" as="a" leftIcon={<SiGithub />}>
            GitHub
          </Button>
        </NextLink>
        <NextLink href={TWITTER_PROFILE} passHref={true}>
          <Button size="sm" leftIcon={<SiTwitter />}>
            Twitter
          </Button>
        </NextLink>
      </HStack>
    </VStack>
  );
};
