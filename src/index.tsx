import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';

import { config } from './config';
import { resolvers } from './resolvers';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: config.apollo.baseURL,
  resolvers,
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <p>Hello World</p>
  </ApolloProvider>,
  document.getElementById('root')
);
