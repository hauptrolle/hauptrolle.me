import { Text, Box } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box as={"footer"} py={8} textAlign={"center"}>
      <Text fontSize={"small"}>Build with Next.js + Chakra UI ❤️</Text>
    </Box>
  );
};
