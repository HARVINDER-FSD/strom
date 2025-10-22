import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-in-out',
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation isScrolled={isScrolled} />
      <Hero />
      <Services />
      <About />
      <CaseStudies />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
