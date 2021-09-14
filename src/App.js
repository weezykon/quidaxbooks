// apollo
import { ApolloClient, ApolloProvider, HttpLink, from, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

import logo from './logo.svg';
import './styles/app.scss';
import { Route } from 'react-router-dom';
import Header from './components/Header';

// pages
import Home from './pages/home';
import Book from './pages/book';

// routes config
const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/book', name: 'Book', Component: Book },
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
  new HttpLink({ uri: 'http://localhost:4000/graphql' }),
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

// const App = () => {
//   return (
//     <ApolloProvider client={client}>
//       <div className="App">
//         <Header />
//         <div className="container">
//           <Route path="/" exact component={Home} />
//           <Route path="/book" exact component={Book} />
//         </div>
//       </div>
//     </ApolloProvider>
//   );
// };

// export default App;

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <main className="container">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </main>
    </ApolloProvider>
  );
}

export default App;
