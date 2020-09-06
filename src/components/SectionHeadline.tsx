import React from "react";
import { Heading } from "@chakra-ui/core";

export const SectionHeadline: React.FC = ({ children }) => {
  return (
    <Heading as={"h2"} size="xl" fontWeight={500} mb={8}>
      {children}
    </Heading>
  );
};
