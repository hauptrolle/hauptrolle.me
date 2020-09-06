import React from "react";
import { Box } from "@chakra-ui/core";

export const Section: React.FC = ({ children }) => {
  return (
    <Box
      py={{
        base: 8,
        md: 12,
        lg: 20,
      }}
    >
      {children}
    </Box>
  );
};
