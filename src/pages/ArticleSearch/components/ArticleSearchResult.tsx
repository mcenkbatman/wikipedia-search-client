import React from 'react';
import * as SearchArticleTypes from '.././__generated__/SearchArticle';

interface ArticleSearchResultProps {
  article: SearchArticleTypes.SearchArticle_searchArticle_parse | null
}


const ArticleSearchResult: React.FC<ArticleSearchResultProps> = ({ article }) => {
  if (!article) return <></>;
  return (
    <p>{JSON.stringify(article)}</p>
  );
}

export default ArticleSearchResult;
