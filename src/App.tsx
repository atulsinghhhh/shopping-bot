import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Products } from './pages/Products';
import { Cart } from './pages/Cart';
import { Wishlist } from './pages/Wishlist';
import { About } from './pages/About';
import { AIAssistant } from './components/AIAssistant';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <AIAssistant />
        <Footer />
      </div>
    </Router>
  );
}

export default App;