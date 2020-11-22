import React from "react";
import { Heading, HeadingProps } from "@chakra-ui/react";

export const SectionHeadline: React.FC<HeadingProps> = ({
  children,
  ...headingProps
}) => {
  return (
    <Heading as={"h2"} size="xl" fontWeight={600} mb={8} {...headingProps}>
      {children}
    </Heading>
  );
};
