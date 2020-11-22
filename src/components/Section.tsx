import { FC } from "react";
import { Box } from "@chakra-ui/react";

export const Section: FC = ({ children }) => {
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
