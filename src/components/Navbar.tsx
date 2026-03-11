import React, { useState } from 'react';
import { Gamepad2, Search, Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface NavbarProps {
  onSearch: (term: string) => void;
  onCategoryChange: (category: string) => void;
  currentCategory: string;
}

export default function Navbar({ onSearch, onCategoryChange, currentCategory }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'racing', label: 'Racing' },
    { id: 'action', label: 'Action' },
    { id: 'horror', label: 'Horror' },
    { id: 'adventure', label: 'Adventure' },
    { id: 'sports', label: 'Sports' },
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
    navigate('/');
  };

  const handleCategoryClick = (categoryId: string) => {
    onCategoryChange(categoryId);
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" onClick={() => handleCategoryClick('all')}>
            <img src="https://dso8.raed.net:455/files/2025100916574601.png" alt="Brixa Logo" className="w-10 h-10 object-contain" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#FF6B35] bg-clip-text text-transparent">
              Brixa
            </h1>
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:block flex-1 max-w-md mx-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search games..."
                onChange={handleSearch}
                className="w-full px-4 py-2 pl-10 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 outline-none focus:border-[#00D4FF] focus:ring-2 focus:ring-[#00D4FF]/20 transition-all"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <Search className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Desktop Subscribe */}
          <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-[#00D4FF] to-blue-500 text-white rounded-lg font-medium hover:shadow-lg transition-all">
            Subscribe
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Search & Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search games..."
                onChange={handleSearch}
                className="w-full px-4 py-2 pl-10 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 outline-none focus:border-[#00D4FF]"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <Search className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    currentCategory === cat.id
                      ? 'bg-gradient-to-r from-[#00D4FF] to-[#FF6B35] text-white'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Desktop Categories */}
        <nav className="hidden md:block mt-4">
          <div className="flex space-x-6 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`relative px-4 py-2 text-sm font-medium whitespace-nowrap transition-all ${
                  currentCategory === cat.id ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {cat.label}
                {currentCategory === cat.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00D4FF] to-[#FF6B35]" />
                )}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
