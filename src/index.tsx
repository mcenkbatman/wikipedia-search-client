import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import { config } from './config';

import ArticleSearchPage from './pages/ArticleSearch';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: config.apollo.baseURL,
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <ArticleSearchPage />
  </ApolloProvider>,
  document.getElementById('root')
);
