import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Membership from './pages/Membership/Membership';
import Events from './pages/Events/Events';
import Contact from './pages/Contact/Contact';
import Articles from './pages/Articles/Articles';


const App = () => {
  const [isLoading, setIsLoading] = useState(false); // TODO: change to true

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/articles" element={<Articles />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
};

export default App;
