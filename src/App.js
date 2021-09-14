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

function App() {
  return (
    <>
      <Header />
      <main className="container">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </main>
    </>
  );
}

export default App;
