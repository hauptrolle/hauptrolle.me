import NextLink from "next/link";
import {
  IconButton,
  Flex,
  Link,
  HStack,
  useDisclosure,
  Collapse,
} from "@chakra-ui/react";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { MdMenu } from "react-icons/md";

import { Navigation } from "./Navigation";

export const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Flex py={8} alignItems={"center"}>
        <NextLink href={"/"} passHref={true}>
          <Link
            _hover={{ textDecoration: "none" }}
            fontSize={{ base: "md", md: "xl" }}
            color={"white"}
            fontWeight={600}
            mr={6}
          >
            Achim Rolle
          </Link>
        </NextLink>
        <Navigation display={["none", "block"]} />
        <HStack spacing={[2, 4]} ml={"auto"}>
          <IconButton
            as={"a"}
            href="https://github.com/hauptrolle"
            variant={"ghost"}
            size={"sm"}
            aria-label={"Github Link"}
            icon={<AiFillGithub size={20} />}
          />
          <IconButton
            as={"a"}
            href="https://twitter.com/hauptrolle_"
            variant={"ghost"}
            size={"sm"}
            aria-label={"Twitter Link"}
            icon={<AiOutlineTwitter size={20} />}
          />
          <IconButton
            display={["inherit", "none"]}
            onClick={onToggle}
            variant={"ghost"}
            size={"sm"}
            aria-label={"Toggle Mobile Menu"}
            icon={<MdMenu size={20} />}
          />
        </HStack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          bg={"gray.700"}
          p={4}
          mb={6}
          rounded={"md"}
        >
          <Navigation />
        </Flex>
      </Collapse>
    </>
  );
};
