import React, { useState } from 'react';
import { Layout } from 'antd';
import { useLazyQuery } from '@apollo/client';


import ArticleSearchArea from './components/ArticleSearchArea';
import ArticleSearchResult from './components/ArticleSearchResult';
import ArticleSearchFooter from './components/ArticleSearchFooter';

import { SEARCH_ARTICLE } from './queries';
import * as SearchArticleTypes from './__generated__/SearchArticle';


const { Header, Footer, Content } = Layout;

interface ArticleSearchPageProps {
  
}

const ArticleSearchPage: React.FC<ArticleSearchPageProps> = ({ }) => {
  const [isValidInput, setIsValidInput] = useState(false)
  const [
    searchArticle,
    {
      data = { searchArticle: { parse: null } },
      loading,
      error,
    }
  ] = useLazyQuery
    <
      SearchArticleTypes.SearchArticle,
      SearchArticleTypes.SearchArticleVariables
    >
    (
      SEARCH_ARTICLE,
      {
        variables: { page: 'Bestseller_(company)' },
        notifyOnNetworkStatusChange: true,
      }
    );


  const handleSearch = (searchText: string) => {
    if (searchText.trim().length < 3) {
      setIsValidInput(false);
      return;
    }
    setIsValidInput(true);
    searchArticle({ variables: { page: searchText.trim() } })
  }

  return (
    <Layout>
      <Header>
        <ArticleSearchArea onSearch={handleSearch} loading={loading}/>
      </Header>
      <Content>
        {isValidInput && <ArticleSearchResult loading={loading} article={data.searchArticle.parse} />}
      </Content>
      <Footer style={{ position: 'fixed', bottom: 0, width: '100%', textAlign: 'center' }}>
        <ArticleSearchFooter />
      </Footer>
    </Layout>
  );
}

export default ArticleSearchPage;
