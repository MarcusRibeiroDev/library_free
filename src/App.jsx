// CSS
import './App.scss';

// Hooks
import { Route, BrowserRouter, Routes } from 'react-router-dom';

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Pages
import Home from './pages/Home/Home';
import Books from './pages/Books/Books';
import About from './pages/About/About';
import BookDetails from './pages/BookDetails/BookDetails';

// Context
import { BookProvider } from './context/BookProvider';

const App = () => {
  return (
    <>
      <div>
        <BookProvider>
          <BrowserRouter basename="/library_free">
            {' '}
            {/* Defina o basename aqui */}
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} /> {/* Corrija o caminho da rota */}
              <Route path="/books" element={<Books />} /> {/* Corrija o caminho da rota */}
              <Route path="/books/:id" element={<BookDetails />} />{' '}
              {/* Corrija o caminho da rota */}
            </Routes>
            <Footer />
          </BrowserRouter>
        </BookProvider>
      </div>
    </>
  );
};

export default App;
