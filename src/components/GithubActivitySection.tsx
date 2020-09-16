import React from "react";
import {
  List,
  ListItem,
  Stack,
  Text,
  Heading,
  SimpleGrid,
  Box,
  useColorModeValue,
} from "@chakra-ui/core";

import { PageWrapper } from "./PageWrapper";
import { Section } from "./Section";
import { SectionHeadline } from "./SectionHeadline";
import { Repo } from "../api/github";

type Props = {
  starred: Repo[];
  contributed: Repo[];
};

const ActivityList = ({
  headline,
  items,
}: {
  headline: string;
  items: Repo[];
}) => {
  return (
    <Box maxW={"lg"}>
      <Heading as={"h3"} fontWeight={500} fontSize={"2xl"} mb={6}>
        {headline}
      </Heading>
      <List as={Stack} spacing={4}>
        {items.map((repo) => (
          <ListItem
            key={repo.id}
            display={"block"}
            as={"a"}
            href={repo.url}
            p={4}
            borderStyle={"solid"}
            borderWidth={1}
            borderColor={useColorModeValue("gray.200", "brand.dark.shade")}
            rounded={"md"}
          >
            <Stack spacing={2}>
              <Text color={"blue.300"}>{repo.name}</Text>
              {repo.description && <Text>{repo.description}</Text>}
            </Stack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export const GithubActivitySection = ({ starred, contributed }: Props) => {
  return (
    <PageWrapper>
      <Section>
        <SectionHeadline>Github Activity</SectionHeadline>

        <SimpleGrid columns={[1, null, 2]} spacing={4}>
          <ActivityList
            headline={"Repositories I Contributed To 👨‍💻"}
            items={contributed}
          />

          <ActivityList headline={"Repositories I Like 🌟"} items={starred} />
        </SimpleGrid>
      </Section>
    </PageWrapper>
  );
};
