import { FC } from "react";
import { Container } from "@chakra-ui/react";

export const PageWrapper: FC = ({ children }) => {
  return <Container maxW={"5xl"}>{children}</Container>;
};
