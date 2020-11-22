import {
  Text,
  Alert,
  AlertIcon,
  Box,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

import { SectionHeadline } from "../components/SectionHeadline";
import { ProjectsGrid } from "../components/ProjectsGrid";
import { GetStaticProps, NextPage } from "next";
import { SideProject } from "../api/github";
import { fetchProjects } from "../api/projects";

type Props = {
  projects: SideProject[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const response = await fetchProjects();

  return {
    props: {
      ...response,
    },
    revalidate: 10,
  };
};

export const ProjectsPage: NextPage<Props> = ({ projects }) => {
  return (
    <>
      <SectionHeadline>Projects</SectionHeadline>

      <Text mb={6} fontSize={"lg"}>
        Here are some of my open source projects fetched from GitGub
      </Text>

      <Alert status="success" mb={12} rounded={"md"}>
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
    </>
  );
};

export default ProjectsPage;
