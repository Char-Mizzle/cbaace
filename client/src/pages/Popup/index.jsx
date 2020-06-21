import React from 'react';
import { render } from 'react-dom';

import Popup from './Popup';
import './index.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks'
import { InMemoryCache } from 'apollo-cache-inmemory';

const cache = new InMemoryCache({});
const client = new ApolloClient({
  // later change to deployed url
    uri: 'https://cbaace.azurewebsites.net/graphql',
    credentials: 'include',
    cache: cache,
});


render(<ApolloProvider client={client}><SidePanel /></ApolloProvider>, window.document.querySelector('#app-container'));
