
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Programs = lazy(() => import('./pages/Programs'));
const News = lazy(() => import('./pages/News'));
const NewsDetail = lazy(() => import('./pages/NewsDetail'));
const Library = lazy(() => import('./pages/Library'));
const Gallery = lazy(() => import('./pages/Gallery'));
const InformationTechnology = lazy(() => import('./pages/programs/InformationTechnology'));
const Pharmacy = lazy(() => import('./pages/programs/Pharmacy'));
const VeterinaryMedicine = lazy(() => import('./pages/programs/VeterinaryMedicine'));
const EarlyChildhoodEducation = lazy(() => import('./pages/programs/EarlyChildhoodEducation'));
const FinancialServices = lazy(() => import('./pages/programs/FinancialServices'));
const AdministrativeServices = lazy(() => import('./pages/programs/AdministrativeServices'));
const Register = lazy(() => import('./pages/Register'));
const Contact = lazy(() => import('./pages/Contact'));

const LoadingFallback = () => (
  <div className="flex h-[60vh] w-full items-center justify-center">
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark">
        <Navbar />
        <main className="flex-1 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/programs/information-technology" element={<InformationTechnology />} />
              <Route path="/programs/pharmacy" element={<Pharmacy />} />
              <Route path="/programs/veterinary-medicine" element={<VeterinaryMedicine />} />
              <Route path="/programs/early-childhood-education" element={<EarlyChildhoodEducation />} />
              <Route path="/programs/financial-services" element={<FinancialServices />} />
              <Route path="/programs/administrative-services" element={<AdministrativeServices />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:slug" element={<NewsDetail />} />
              <Route path="/library" element={<Library />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/register" element={<Register />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
