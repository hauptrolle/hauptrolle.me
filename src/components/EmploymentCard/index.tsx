import { Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";

import { Employment } from "../../data/employments";

export const EmploymentCard = ({
  role,
  company,
  duration,
  link,
}: Employment) => {
  return (
    <VStack alignItems="stretch">
      <Heading as="h3" size="md">
        {role}
      </Heading>
      <VStack alignItems="stretch" spacing={3}>
        <Text>
          Building Enterprise React Applications for Web, Mobile & TV.
        </Text>
        <HStack justifyContent="space-between" color="gray.100">
          <Link href={link}>{company}</Link>
          <Text>
            {duration.from} - {duration.to}
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
};
