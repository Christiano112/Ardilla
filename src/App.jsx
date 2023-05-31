import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import Interest from './pages/interest';
import LandingPage from './pages/landing';
import Career from './pages/career';

import './styles/index.scss';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/interest" element={<Interest />} />
        <Route path="/career" element={<Career />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App;
