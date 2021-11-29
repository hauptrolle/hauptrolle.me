import {
  Heading,
  Text,
  List,
  ListItem,
  VStack,
  HStack,
  Button,
} from "@chakra-ui/react";
import { NextPage } from "next";
import NextLink from "next/link";
import { SiTwitter, SiGithub } from "react-icons/si";

import { EmploymentCard } from "../components/EmploymentCard";
import { GITHUB_PROFILE, TWITTER_PROFILE } from "../constants";
import { employments } from "../data/employments";

const HomePage: NextPage = () => {
  return (
    <>
      <VStack spacing={16} alignItems="flex-start">
        <VStack spacing={4} alignItems="flex-start">
          <Heading size="lg" as="h1">
            Hi, I’m Achim
          </Heading>

          <Text lineHeight={1.75} as="h2">
            A self taught <strong>frontend developer & web designer</strong>{" "}
            from Hessen/Germany. I love building products that are{" "}
            <strong>user friendly</strong> and <strong>performant</strong>. If
            you want to know more about me, feel free to check out my social
            media.
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

        <VStack spacing={8} w="full" alignItems="stretch">
          <Text textStyle="sectionHeading">Currently</Text>

          <List spacing={6}>
            {employments.map((employment) => (
              <ListItem key={employment.company}>
                <EmploymentCard {...employment} />
              </ListItem>
            ))}
          </List>
        </VStack>
      </VStack>
    </>
  );
};

export default HomePage;
