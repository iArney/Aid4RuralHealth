import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
