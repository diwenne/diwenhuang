import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Work from './pages/Work';
import Projects from './pages/Projects';
import CcimCaseStudy from './pages/CcimCaseStudy'; // 1. Import the new component

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="/projects" element={<Projects />} />
      {/* 2. Add the new route for the case study */}
      <Route path="/projects/ccim" element={<CcimCaseStudy />} />
    </Routes>
  );
}

export default App;
