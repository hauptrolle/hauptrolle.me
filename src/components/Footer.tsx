import React from "react";
import { Flex, Text, useColorModeValue } from "@chakra-ui/core";

import { PageWrapper } from "./PageWrapper";

export const Footer = () => {
  return (
    <PageWrapper>
      <Flex
        fontSize={"sm"}
        py={6}
        color={useColorModeValue("gray.600", "white")}
        justifyContent={"center"}
      >
        <Text>Build with Next.js + Chakra UI ❤️</Text>
      </Flex>
    </PageWrapper>
  );
};
