import { fetchData, PAGES, Repo } from "./github";

type Response = {
  user: {
    starredRepositories: {
      nodes: Repo[];
    };
  };
};

export const fetchStarred = async () => {
  const query = `
    query {
      user (login: "hauptrolle") {
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

  const data = await fetchData<Response>(query);

  return data.user.starredRepositories.nodes.reverse();
};
