import { useEffect, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import SkillSlider from './components/SkillSlider';
import Skills from './components/Skills';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-white text-[#1E2329] antialiased transition-colors duration-300 ease-in-out dark:bg-[#1E2329] dark:text-white">
      <Header
        isDarkMode={isDarkMode}
        onToggleMode={() => setIsDarkMode((current) => !current)}
      />
      <main>
        <Hero />
        <About />
        <Skills />
        <SkillSlider />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
