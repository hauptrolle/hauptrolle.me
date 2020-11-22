import Image from "next/image";
import {
  Text,
  Box,
  Link,
  Stack,
  Flex,
  SimpleGrid,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { MdDone } from "react-icons/md";

import { SectionHeadline } from "../components/SectionHeadline";

const skills = [
  {
    title: "Languages",
    knowledge: ["CSS & HTML", "JavaScript", "Typescript"],
  },
  {
    title: "Frontend",
    knowledge: ["React", "Vue", "Next.js", "Tailwind CSS", "CSS in JS"],
  },
  {
    title: "Testing",
    knowledge: [
      "Unit Testing",
      "E2E Testing",
      "React Testing Library",
      "Cypress",
    ],
  },
  {
    title: "Miscellaneous",
    knowledge: [
      "Web Accessibility",
      "SCRUM & Agile Work",
      "GraphQL/Rest",
      "Figma/Sketch",
    ],
  },
];

export const AboutPage = () => {
  return (
    <>
      <SectionHeadline>Hallo, I am Achim.</SectionHeadline>
      <Flex mb={12} direction={["column", "column", "row"]}>
        <Stack spacing={6} maxW={"2xl"} order={[2, 2, 1]}>
          <Text fontSize={"lg"}>
            Currently I am developing <i>Enterprise React Applications</i> at{" "}
            <Link href={"https://www.aoe.com/de/home.html"}>AOE</Link> in
            Wiesbaden as a Frontend Developer.
          </Text>

          <Text fontSize={"lg"}>
            Outside of the regular work I spend my time{" "}
            <Link href={"https://github.com/hauptrolle/"}>
              contribute to open source projects
            </Link>
            , doing some further education like{" "}
            <Link href={"https://epicreact.dev/"}>Epic React</Link> from Kent C.
            Dodds, or playing video Games. Occasionally I stream my gaming
            success on{" "}
            <Link href={"https://www.twitch.tv/h1roplays"}>twitch</Link>.
          </Text>
        </Stack>
        <Box minW={150} margin={"auto"} order={[1, 1, 2]}>
          <Image src={"/avatar.png"} width={150} height={150} />
        </Box>
      </Flex>

      <Box bg={"gray.700"} p={8} rounded={"md"}>
        <SectionHeadline size={"lg"} as={"h3"}>
          My Knowledge
        </SectionHeadline>
        <Text fontSize={"lg"} mb={6}>
          These are the things I know about or use on a daily basis.
        </Text>
        <SimpleGrid columns={[1, 2, 4]} spacing={10}>
          {skills.map((skill) => (
            <Box key={skill.title}>
              <Text fontWeight={"bold"} mb={2}>
                {skill.title}
              </Text>
              <List>
                {skill.knowledge.map((k) => (
                  <ListItem key={k}>
                    <ListIcon as={MdDone} color={"brand.green.base"} />
                    {k}
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default AboutPage;
