import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Portfolio } from './components/sections/Portfolio';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
      </main>
      <footer className="py-8 bg-darkCard text-center border-t border-gray-800">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Tuan Nguyen. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
