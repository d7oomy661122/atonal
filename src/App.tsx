/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import GameDetail from './pages/GameDetail';
import Download from './pages/Download';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentCategory, setCurrentCategory] = useState('all');

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] text-white font-sans">
        <Navbar 
          onSearch={setSearchTerm} 
          onCategoryChange={setCurrentCategory} 
          currentCategory={currentCategory} 
        />
        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm} currentCategory={currentCategory} />} />
          <Route path="/game/:id" element={<GameDetail />} />
          <Route path="/download/:id" element={<Download />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
