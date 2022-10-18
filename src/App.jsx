import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cars from './pages/Cars';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/cars" element={<Cars />} />
      </Routes>
    </div>
  );
}

export default App;
