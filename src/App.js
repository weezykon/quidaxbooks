// apollo
import { ApolloClient, ApolloProvider, HttpLink, from, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

import './styles/app.scss';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import CartModal from './components/CartModal';
import Preloader from './components/Preloader';

// pages
import Home from './pages/home';
import Book from './pages/book';
import SearchPage from './pages/search';

// routes config
const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/book/:id', name: 'Book', Component: Book },
  { path: '/search', name: 'SearchPage', Component: SearchPage },
];

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(`Graphql Error ${message}`)
    );
  }
  if (networkError) console.log(`Network Error ${networkError}`);
});

const link = from([
  errorLink,
  new HttpLink({ uri: 'https://quidax-feec-graphql.herokuapp.com/graphql' }),
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Preloader />
      <Header />
      <main>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </main>
      <CartModal />
    </ApolloProvider>
  );
}

export default App;
