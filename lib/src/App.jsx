// CSS
import './App.css';

// Hooks
import { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Pages
import Home from './pages/Home/Home';
import Books from './pages/Books/Books';
import About from './pages/About/About';
import BookDetails from './pages/BookDetails/BookDetails';

const App = () => {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="books" element={<Books />} />
            <Route path="about" element={<About />} />
            <Route path="books/:id" element={<BookDetails />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
};

export default App;
