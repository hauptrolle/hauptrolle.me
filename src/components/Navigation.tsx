import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { HStack, Link } from "@chakra-ui/react";

// Todo disable links as long as there is no meaningful content
const links = [
  {
    label: "About",
    href: "/about",
  },
  // {
  //   label: "Blog",
  //   href: "/blog",
  // },
  // {
  //   label: "Projects",
  //   href: "/projects",
  // },
];

export const Navigation = () => {
  const { pathname } = useRouter();

  return (
    <HStack spacing={4}>
      {links.map((link) => (
        <NextLink key={link.href} href={link.href} passHref={true}>
          <Link
            px={2}
            py={1}
            rounded={"md"}
            color={"white"}
            _hover={{ textDecoration: "none", bg: "gray.700" }}
            _focus={{ outline: "none", bg: "gray.700" }}
            css={{ transition: "all 0.3s ease-in-out" }}
            bg={pathname === link.href ? "gray.700" : "inherit"}
          >
            {link.label}
          </Link>
        </NextLink>
      ))}
    </HStack>
  );
};
