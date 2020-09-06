import React from "react";
import { Box } from "@chakra-ui/core";

export const Section: React.FC = ({ children }) => {
  return (
    <Box
      py={{
        base: 10,
        md: 16,
        lg: 24,
      }}
    >
      {children}
    </Box>
  );
};
