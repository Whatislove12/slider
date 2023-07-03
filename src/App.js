import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { Carousel } from './pages/carousel/Carousel';
import { Layout } from './pages/layout';
import { Home } from './pages/Home';
import { Minesweeper } from './pages/minesweeper/Minesweeper'

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/minesweeper' element={<Minesweeper />} />
          <Route path='/carousel' element={<Carousel items={10} />} /> 
          <Route path='/carousel2' element={<h1>Carousel 2</h1>} />
          <Route path='/carousel3' element={<h1>Carousel 3</h1>} />
          </Route>
        </Routes>
    </Router>
  );
}



export default App;
