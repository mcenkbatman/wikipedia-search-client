/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchArticle
// ====================================================

export interface SearchArticle_searchArticle_parse_categories {
  __typename: "ArticleCategory";
  category: string;
  hidden: boolean | null;
  sortkey: string;
}

export interface SearchArticle_searchArticle_parse_sections {
  __typename: "ArticleSection";
  anchor: string;
  index: string;
  level: number;
  line: string;
  number: string;
  toclevel: number;
}

export interface SearchArticle_searchArticle_parse {
  __typename: "SearchArticleParse";
  categories: (SearchArticle_searchArticle_parse_categories | null)[];
  sections: (SearchArticle_searchArticle_parse_sections | null)[];
  title: string;
}

export interface SearchArticle_searchArticle {
  __typename: "SearchArticleResponse";
  parse: SearchArticle_searchArticle_parse | null;
}

export interface SearchArticle {
  /**
   * Test Message. 
   */
  searchArticle: SearchArticle_searchArticle;
}

export interface SearchArticleVariables {
  page?: string | null;
}
