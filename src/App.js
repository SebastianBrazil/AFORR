import './App.css';
import MainComponent from './components/MainComponent';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
