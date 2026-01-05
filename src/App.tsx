
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
export function App() {
  return <div className="bg-zinc-950 text-zinc-100 min-h-screen selection:bg-indigo-500/30 selection:text-indigo-200">
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Skills />
    <Education />
    <Certifications />
    <Contact />
  </div>;
}