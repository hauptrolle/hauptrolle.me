import React from "react";
import { Flex, Text } from "@chakra-ui/core";

import { PageWrapper } from "./PageWrapper";

export const Footer = () => {
  return (
    <PageWrapper>
      <Flex
        fontSize={"sm"}
        py={4}
        color={"gray.500"}
        borderTopWidth={1}
        borderTopStyle={"solid"}
        borderTopColor={"gray.300"}
      >
        <Text>Build with Next.js + Chakra UI ❤️</Text>
      </Flex>
    </PageWrapper>
  );
};
