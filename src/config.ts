
interface Config {
  apollo: {
    baseURL: string,
  },
}

export const config: Config = {
  apollo: {
    baseURL: process.env.REACT_APP_APOLLO_BASE_URL || 'https://wikipedia-search-server.herokuapp.com/',
  },
};