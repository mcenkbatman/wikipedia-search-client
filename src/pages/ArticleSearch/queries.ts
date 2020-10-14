import { gql } from '@apollo/client';

export const SEARCH_ARTICLE = gql`
  query SearchArticle($page: String) {
    searchArticle(page: $page) {
      parse {
        categories {
          category
          hidden
          sortkey
        }
        sections {
          anchor
          index
          level
          line
          number
          toclevel
        }
        title
      }
    }
  },
`;