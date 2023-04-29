
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Contect from './pages/Contect';
import Login from './pages/Login';
import NoPage from './pages/NoPage';
import Filtter from './pages/Filtter';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contect />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Filtter" element={<Filtter />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    

    </>
  );
}

export default App;
