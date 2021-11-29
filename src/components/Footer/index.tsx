import { Box, Link, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box
      as="footer"
      mt="auto"
      py={8}
      textAlign="center"
      borderTopWidth={1}
      borderTopColor="gray.700"
    >
      <Text fontSize="xs">
        Powered by{" "}
        <span role="img" aria-label="Vercel logo">
          ▲
        </span>{" "}
        <Link href="https://vercel.com">Vercel</Link> &{" "}
        <Link href="https://nextjs.org/">Next.js</Link>
      </Text>
    </Box>
  );
};
