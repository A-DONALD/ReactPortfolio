import { useEffect, useState } from 'react'
import NavBar from './pages/NavBar.jsx';
import Hero from './pages/Hero.jsx';
import Certifications from './pages/Certifications.jsx';
import Contact from './pages/Contact.jsx';
import Experience from './pages/Experience.jsx';
import Footer from './pages/Footer.jsx';
import Formation from './pages/Formation.jsx';
import Projects from './pages/Projects.jsx';
import Skills from './pages/Skills.jsx';

function App() {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : "system");
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const element = document.documentElement;

  // theme logic
  function onWindowMatch() {
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && darkQuery.matches)) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  };
  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add('dark');
        break;
      case "light":
        element.classList.remove('dark');
        break;
      default:
        localStorage.removeItem('theme');
        onWindowMatch();
        break;
    }
  }, [theme]);
  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add('dark');
      } else {
        element.classList.remove('dark');
      }
    }
  });

  return (
    <main className='bg-white dark:bg-gray-900'>
      <NavBar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Formation />
      <Certifications />
      <Contact />
      <Footer />
    </main >
  )
}

export default App