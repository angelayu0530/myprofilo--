import React from 'react';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename="/myprofilo--">
    <Header />
    <Routes>
      <Route path="/" element={<About />} />
    </Routes>
  </Router>
  );
}

export default App;
