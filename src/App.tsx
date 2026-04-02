import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Bridge from './pages/Bridge';
import Intel from './pages/Intel';
import TheCode from './pages/TheCode';
import MusterPoints from './pages/MusterPoints';
import TheSignal from './pages/TheSignal';
import TheArmory from './pages/TheArmory';
import MusterRoll from './pages/MusterRoll';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Bridge />} />
          <Route path="intel" element={<Intel />} />
          <Route path="the-code" element={<TheCode />} />
          <Route path="muster-points" element={<MusterPoints />} />
          <Route path="the-signal" element={<TheSignal />} />
          <Route path="the-armory" element={<TheArmory />} />
          <Route path="muster-roll" element={<MusterRoll />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
