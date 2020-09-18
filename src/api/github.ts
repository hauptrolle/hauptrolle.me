const PAGES = 5;
const API_URL = "https://api.github.com/graphql";

export type Repo = {
  id: string;
  name: string;
  url: string;
  description: string;
};

export type SideProject = Repo & {
  stargazers: {
    totalCount: number;
  };
};

type Response = {
  user: {
    repositoriesContributedTo: {
      nodes: Repo[];
    };
    starredRepositories: {
      nodes: Repo[];
    };
    stitchesUtils: SideProject;
    stitchesReset: SideProject;
    reactTodo: SideProject;
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
    stitchesUtils: repository(name: "stitches-utils") {
      id
      name
      description
      url
      stargazers {
        totalCount
      }
    }
    stitchesReset: repository(name: "stitches-reset") {
      id
      name
      description
      url
      stargazers {
        totalCount
      }
    }
    reactTodo: repository(name: "react-todo") {
      id
      name
      description
      url
      stargazers {
        totalCount
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
    sideProjects: [
      data.user.stitchesUtils,
      data.user.stitchesReset,
      data.user.reactTodo,
    ],
  };
};
