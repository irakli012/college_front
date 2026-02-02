
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Programs = lazy(() => import('./pages/Programs'));
const News = lazy(() => import('./pages/News'));
const Library = lazy(() => import('./pages/Library'));
const Gallery = lazy(() => import('./pages/Gallery'));

const LoadingFallback = () => (
  <div className="flex h-[60vh] w-full items-center justify-center">
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark">
        <Navbar />
        <main className="flex-1 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/news" element={<News />} />
              <Route path="/library" element={<Library />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
