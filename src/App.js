import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { Carousel } from './pages/carousel/Carousel';
/* import Prueba from './Prueba';*/
import { Layout } from './pages/layout';
import { Home } from './pages/Home';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/prueba' element={<h1>Prueba</h1>} />
          <Route path='/carousel' element={<Carousel items={10} />} /> 
          <Route path='/carousel2' element={<h1>Carousel 2</h1>} />
          <Route path='/carousel3' element={<h1>Carousel 3</h1>} />
          </Route>
        </Routes>
    </Router>
  );
}



export default App;
