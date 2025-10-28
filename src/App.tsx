import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Work from './pages/Work';
import Projects from './pages/Projects';
import CcimCaseStudy from './pages/CcimCaseStudy';
import SmashSpeedCaseStudy from './pages/SmashspeedCaseStudy';
import FaststartSeriesCaseStudy from './pages/FaststartSeriesCaseStudy.tsx'; // Import the new case study
import { Analytics } from '@vercel/analytics/react';
import TimeWidget from './components/TimeWidget';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/ccim" element={<CcimCaseStudy />} />
        <Route path="/projects/smashspeed-engine" element={<SmashSpeedCaseStudy />} />
        {/* Add the new route for the Faststart Series case study */}
        <Route path="/projects/faststart-series" element={<FaststartSeriesCaseStudy />} />
      </Routes>
      <Analytics />
      <TimeWidget />
    </>
  );
}

export default App;
