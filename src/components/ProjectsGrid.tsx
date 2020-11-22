import {
  Box,
  Link,
  Heading,
  Text,
  Stack,
  Flex,
  SimpleGrid,
  SimpleGridProps,
} from "@chakra-ui/react";

import { SideProject } from "../api/github";

type Props = SimpleGridProps & {
  projects: SideProject[];
};

export const ProjectsGrid = ({ projects, ...restProps }: Props) => {
  return (
    <SimpleGrid columns={[1, 1, 2]} spacing={8} {...restProps}>
      {projects.map((project) => (
        <Box
          key={project.id}
          as={Link}
          href={project.url}
          display={"block"}
          p={6}
          rounded={"md"}
          bg={"gray.900"}
          color={"white"}
          _hover={{
            textDecoration: "none",
            transform: "translateY(-5px)",
          }}
        >
          <Stack spacing={4} h={"full"}>
            <Heading
              as={"h3"}
              size={"md"}
              fontWeight={500}
              color={"brand.green.base"}
            >
              {project.name}
            </Heading>
            <Text>{project.description}</Text>
            <Flex height={"full"}>
              <Flex
                mt={"auto"}
                w={"full"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Text fontSize={"sm"}>{project.stargazers.totalCount} 🌟</Text>
                <Text
                  fontWeight={600}
                  display={"inline-flex"}
                  alignSelf={"flex-end"}
                >
                  Explore on GitHub
                </Text>
              </Flex>
            </Flex>
          </Stack>
        </Box>
      ))}
    </SimpleGrid>
  );
};
