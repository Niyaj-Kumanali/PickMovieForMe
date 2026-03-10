import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Homepage from '../Pages/Homepage/Homepage';
import Blog from '../Pages/Blog/Blog';
import ContactUs from '../Pages/ContactUs/ContactUs';
import PrivacyPolicy from '../Pages/PrivacyPolicy/PrivacyPolicy';
import Movies from '../Pages/Movies/Movies';
import MoviesDescription from '../Pages/MoviesDescription/MoviesDescription';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const genres = ['all', 'action', 'comedy', 'drama', 'thriller', 'adventure'];

const actors = [
  'all',
  'tom hanks',
  'leonardo dicaprio',
  'brad pitt',
  'robert de niro',
];

const genreRoutes = genres.map((genre) => ({
  path: `/${genre}/page/:pgno`,
  element: <Movies genre={genre} actor="all" />,
}));

const actorRoutes = actors
  .filter((a) => a !== 'all')
  .map((actor) => ({
    path: `/${actor}/page/:pgno`,
    element: <Movies genre="all" actor={actor} />,
  }));

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Homepage /> },
      { path: 'blog', element: <Blog /> },
      { path: 'contact-us', element: <ContactUs /> },
      { path: 'privacy-policy', element: <PrivacyPolicy /> },
      ...genreRoutes,
      ...actorRoutes,
      { path: 'movies/:moviename', element: <MoviesDescription /> },
    ],
  },
  {
    path: '*',
    element: (
      <div style={{ minHeight: '100vh', background: '#111' }}>
        <Navbar />
        <div style={{ padding: '80px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '6rem', color: '#ff4d4d' }}>404</h1>
          <p style={{ fontSize: '1.5rem', color: '#aaa' }}>Page not found</p>
        </div>
        <Footer />
      </div>
    ),
  },
]);

export default AppRouter;
