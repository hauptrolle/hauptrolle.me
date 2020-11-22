import React from "react";
import NextLink from "next/link";
import { IconButton, Flex, Link } from "@chakra-ui/react";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";

import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <Flex py={8} alignItems={"center"}>
      <NextLink href={"/"} passHref={true}>
        <Link
          _hover={{ textDecoration: "none" }}
          _focus={{ outline: "none" }}
          fontSize={{ base: "md", md: "xl" }}
          color={"brand.green.base"}
          fontWeight={600}
          mr={6}
        >
          Achim Rolle
        </Link>
      </NextLink>
      <Navigation />
      <Flex ml={"auto"}>
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
  );
};
