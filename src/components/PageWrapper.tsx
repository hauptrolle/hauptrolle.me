import React from "react";
import { Container } from "@chakra-ui/core";

export const PageWrapper: React.FC = ({ children }) => {
  return <Container maxW={"lg"}>{children}</Container>;
};
