import React from "react";
import { Text, IconButton, Flex, useColorMode, Button } from "@chakra-ui/core";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaSun, FaMoon } from "react-icons/fa";

import { PageWrapper } from "./PageWrapper";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <PageWrapper>
      <Flex pt={8} justifyContent={"space-between"} alignItems={"center"}>
        <Text fontSize={{ base: "md", md: "xl" }} fontWeight={600}>
          Achim Rolle
        </Text>
        <Flex>
          <IconButton
            size={"sm"}
            variant={"ghost"}
            onClick={toggleColorMode}
            icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
            aria-label={"Select color mode"}
          />
          <IconButton
            ml={{
              base: 2,
              md: 4,
            }}
            as={"a"}
            href="https://github.com/hauptrolle"
            variant={"ghost"}
            size={"sm"}
            aria-label={"Github Link"}
            icon={<AiFillGithub size={20} />}
          />
          <IconButton
            ml={{
              base: 2,
              md: 4,
            }}
            as={"a"}
            href="https://twitter.com/hauptrolle_"
            variant={"ghost"}
            size={"sm"}
            aria-label={"Twitter Link"}
            icon={<AiOutlineTwitter size={20} />}
          />
        </Flex>
      </Flex>
    </PageWrapper>
  );
};
