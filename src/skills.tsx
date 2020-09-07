import React from "react";

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
    icon: "👨‍💻️️",
  },
  {
    id: "design",
    title: "Design Interfaces",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: "👨‍🎨️",
  },
  {
    id: "agile",
    title: "Agile Work",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: "🏃",
  },
  {
    id: "testing",
    title: "Testing Applications",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: "🐛",
  },
];
