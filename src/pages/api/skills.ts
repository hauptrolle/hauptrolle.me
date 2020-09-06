import { NextApiRequest, NextApiResponse } from "next";

export type Skill = {
  id: string;
  title: string;
  description: string;
};

export default (req: NextApiRequest, res: NextApiResponse<Skill[]>) => {
  res.status(200).json([
    {
      id: "frontend",
      title: "React Frontend Development",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
    {
      id: "design",
      title: "Design",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
    {
      id: "agile",
      title: "Agile Work",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
    {
      id: "testing",
      title: "Testing",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
  ]);
};
