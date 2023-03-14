import { lazy, Suspense } from 'react';

// router
import { useRoutes } from 'react-router-dom';

// components
import Footer from './components/Footer';
import Header from './components/Header';
import LazyLoading from './components/LazyLoading';

// lazy
const Home = lazy(() => import('./pages/Home'));

function App() {
  const router = useRoutes([{ index: true, element: <Home title={'Home Page'} /> }]);

  return (
    <div className='App'>
      <Header />

      <Suspense fallback={<LazyLoading />}>{router}</Suspense>

      <Footer />
    </div>
  );
}

export default App;
