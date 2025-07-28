import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import DepilacionLaser from './pages/DepilacionLaser';
import MedicinaEstetica from './pages/MedicinaEstetica';
import EsteticaAvanzada from './pages/EsteticaAvanzada';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <ScrollToTop />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/depilacion-laser" element={<DepilacionLaser />} />
            <Route path="/medicina-estetica" element={<MedicinaEstetica />} />
            <Route path="/estetica-avanzada" element={<EsteticaAvanzada />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
