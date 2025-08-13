import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Work from './pages/Work';
import Projects from './pages/Projects';
import CcimCaseStudy from './pages/CcimCaseStudy';
import SmashSpeedCaseStudy from './pages/SmashspeedCaseStudy'; // 1. Import the new component

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/ccim" element={<CcimCaseStudy />} />
      {/* 2. Add the new route for the Smashspeed case study */}
      <Route path="/projects/smashspeed-engine" element={<SmashSpeedCaseStudy />} />
    </Routes>
  );
}

export default App;
