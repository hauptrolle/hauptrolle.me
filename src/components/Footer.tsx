import React from "react";
import { Flex, Text, Box, useColorModeValue, useTheme } from "@chakra-ui/core";

import { PageWrapper } from "./PageWrapper";

export const Footer = () => {
  const theme = useTheme();

  return (
    <Box as={"footer"}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{
          height: "12rem",
          width: "100vw",
          color: useColorModeValue(
            theme.colors.gray[200],
            theme.colors.brand.dark.shade
          ),
        }}
      >
        <path
          fill="currentColor"
          d="M0,192L48,181.3C96,171,192,149,288,160C384,171,480,213,576,213.3C672,213,768,171,864,165.3C960,160,1056,192,1152,202.7C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
      <Box bg={useColorModeValue("gray.200", "brand.dark.shade")}>
        <PageWrapper>
          <Flex
            fontSize={"sm"}
            py={6}
            pb={12}
            color={useColorModeValue("gray.600", "white")}
            justifyContent={"center"}
          >
            <Text>Build with Next.js + Chakra UI ❤️</Text>
          </Flex>
        </PageWrapper>
      </Box>
    </Box>
  );
};
