import { Box, Container } from "@chakra-ui/react";
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
      <Box pb={24}>{children}</Box>

      <Footer />
    </Container>
  );
};

export default PageContainer;
