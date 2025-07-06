import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CreateTicket from './pages/CreateTicket';
import NotFound from './pages/NotFound'; // Import a NotFound page
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <BrowserRouter>
      <Header onSearch={handleSearch} />
      <Menu />
      <main>
        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/create-ticket" element={<CreateTicket />} />
          <Route path="*" element={<NotFound />} /> {/* Default route */}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
