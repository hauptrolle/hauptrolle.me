export interface Employment {
  role: string;
  company: string;
  link: string;
  duration: {
    from: string;
    to: string;
  };
}

export const employments: Array<Employment> = [
  {
    role: "Frontend Developer",
    company: "AOE GmbH",
    link: "https://www.aoe.com/",
    duration: {
      from: "2015",
      to: "now",
    },
  },
];
