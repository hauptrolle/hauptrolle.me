import React from "react";
import { Heading } from "@chakra-ui/react";

export const SectionHeadline: React.FC = ({ children }) => {
  return (
    <Heading as={"h2"} size="xl" fontWeight={600} mb={8}>
      {children}
    </Heading>
  );
};
