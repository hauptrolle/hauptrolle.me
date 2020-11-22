import { FC } from "react";
import { Container } from "@chakra-ui/react";

export const PageWrapper: FC = ({ children }) => {
  return <Container maxW={"lg"}>{children}</Container>;
};
