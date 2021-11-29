import { Text, List, ListItem, VStack } from "@chakra-ui/react";
import { NextPage } from "next";

import { EmploymentCard } from "../components/EmploymentCard";
import { Hero } from "../components/Hero";
import { employments } from "../data/employments";

const HomePage: NextPage = () => {
  return (
    <>
      <VStack spacing={16} alignItems="flex-start">
        <Hero />
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
