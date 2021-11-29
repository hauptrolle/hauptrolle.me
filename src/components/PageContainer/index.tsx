import { Container } from "@chakra-ui/react";
import { FC } from "react";

import { Footer } from "../Footer";

const PageContainer: FC = ({ children }) => {
  return (
    <Container
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      pt={24}
      maxW="container.sm"
    >
      {children}

      <Footer />
    </Container>
  );
};

export default PageContainer;
