import './App.css';
import HomePageComponent from './components/HomePageComponent';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePageComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
