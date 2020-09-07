const PAGES = 5;
const API_URL = "https://api.github.com/graphql";

export type Repo = {
  id: string;
  name: string;
  url: string;
  description: string;
};

type Response = {
  user: {
    repositoriesContributedTo: {
      nodes: Repo[];
    };
    starredRepositories: {
      nodes: Repo[];
    };
  };
};

export const fetchRepositories = async () => {
  const query = `
query {
  user (login: "hauptrolle") {
    repositoriesContributedTo(last: ${PAGES}, privacy: PUBLIC, includeUserRepositories: true, contributionTypes: [COMMIT, PULL_REQUEST, REPOSITORY]) {
      nodes {
        id
        name
        url
        description
      }
    }
    starredRepositories(last: ${PAGES}) {
      nodes {
        id
        name
        description
        url
      }
    }
  }
}`;

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  });

  const { data }: { data: Response } = await res.json();

  return {
    starred: data.user.starredRepositories.nodes.reverse(),
    contributed: data.user.repositoriesContributedTo.nodes.reverse(),
  };
};
