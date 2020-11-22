import React from "react";
import { Text, IconButton, Flex } from "@chakra-ui/react";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";

import { PageWrapper } from "./PageWrapper";

export const Header = () => {
  return (
    <PageWrapper>
      <Flex pt={8} justifyContent={"space-between"} alignItems={"center"}>
        <Text fontSize={{ base: "md", md: "xl" }} fontWeight={600}>
          Achim Rolle
        </Text>
        <Flex>
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
