import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import Interest from './pages/interest';
import LandingPage from './pages/landing';
import Career from './pages/career';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interest" element={<Interest />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </div>
  )
}

export default App;
