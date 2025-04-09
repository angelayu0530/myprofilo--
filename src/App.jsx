import '../public/Minecraft/dist/minecraft-css-framework-v-1.0.0.css'
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header /> {}
      <Routes>
        <Route path="/" element={<About />} />
        {}
      </Routes>
    </Router>
  );
}

export default App;
