import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cabinet from './pages/Cabinet';
import Expertises from './pages/Expertises';
import Methode from './pages/Methode';
import Formation from './pages/Formation';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-corps bg-[#FAF7F9] text-[#1A1418]">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/le-cabinet" element={<Cabinet />} />
            <Route path="/nos-expertises" element={<Expertises />} />
            <Route path="/notre-methode" element={<Methode />} />
            <Route path="/formation" element={<Formation />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
