import { GetStaticProps, NextPage } from "next";
import {
  Text,
  Alert,
  AlertIcon,
  Box,
  AlertTitle,
  AlertDescription,
  Stack,
  Wrap,
  WrapItem,
  Link,
} from "@chakra-ui/react";

import { SectionHeadline } from "../components/SectionHeadline";
import { ProjectsGrid } from "../components/ProjectsGrid";
import { Repo, SideProject } from "../api/github";
import { fetchProjects } from "../api/projects";
import { fetchStarred } from "../api/starred";

type Props = {
  projects: SideProject[];
  starred: Repo[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { projects } = await fetchProjects();
  const starred = await fetchStarred();

  return {
    props: {
      projects,
      starred,
    },
    revalidate: 10,
  };
};

export const ProjectsPage: NextPage<Props> = ({ projects, starred }) => {
  return (
    <>
      <SectionHeadline>Projects</SectionHeadline>

      <Text mb={6} fontSize={"lg"}>
        Here are some of my open source projects. Fetched from GitHub.
      </Text>

      <Stack spacing={12}>
        <Alert status="success" rounded={"md"}>
          <AlertIcon />
          <Box flex="1">
            <AlertTitle>Next.js Tip!</AlertTitle>
            <AlertDescription display="block">
              This list is fetched via build time and is injected with
              getStaticProps into the page. Next.js will attempt to re-generate
              the page when a request comes in thanks to the revalidate prop ✌️
            </AlertDescription>
          </Box>
        </Alert>

        <ProjectsGrid projects={projects} />

        <Box>
          <SectionHeadline size={"lg"} as={"h3"}>
            My latest <span aria-label={"stars"}>🌟</span> on GitHub
          </SectionHeadline>
          <Wrap spacing={4}>
            {starred.map((repo) => (
              <WrapItem key={repo.id}>
                <Link
                  fontSize={"sm"}
                  href={repo.url}
                  color={"white"}
                  display={"inline-flex"}
                  rounded={"md"}
                  p={2}
                  bg={"gray.900"}
                >
                  {repo.name}
                </Link>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      </Stack>
    </>
  );
};

export default ProjectsPage;
