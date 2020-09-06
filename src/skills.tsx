import React from "react";
import { Icon } from "@chakra-ui/core";
import {
  AiOutlineCode,
  AiOutlineClear,
  AiOutlineBug,
  AiOutlineLike,
} from "react-icons/ai";

export type Skill = {
  id: string;
  title: string;
  description: string;
  icon: any;
};

const iconProps = {
  boxSize: 6,
};

export const skills: Skill[] = [
  {
    id: "frontend",
    title: "React Frontend Development",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: <Icon as={AiOutlineCode} {...iconProps} />,
  },
  {
    id: "design",
    title: "Design",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: <Icon as={AiOutlineClear} {...iconProps} />,
  },
  {
    id: "agile",
    title: "Agile Work",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: <Icon as={AiOutlineLike} {...iconProps} />,
  },
  {
    id: "testing",
    title: "Testing",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: <Icon as={AiOutlineBug} {...iconProps} />,
  },
];
