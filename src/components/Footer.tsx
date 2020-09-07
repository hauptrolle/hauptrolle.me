import React from "react";
import { Flex, Text } from "@chakra-ui/core";

import { PageWrapper } from "./PageWrapper";

export const Footer = () => {
  return (
    <PageWrapper>
      <Flex fontSize={"sm"} py={4} color={"gray.600"}>
        <Text>Build with Next.js + Chakra UI ❤️</Text>
      </Flex>
    </PageWrapper>
  );
};
