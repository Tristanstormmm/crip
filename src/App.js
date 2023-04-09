import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import Compare from './Compare.js';
import Timeline from './Timeline.js';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Compare' element={<Compare />} />
        <Route path='Timeline' element={<Timeline />} />
      </Routes>
    </div>

  );
}

export default App;
