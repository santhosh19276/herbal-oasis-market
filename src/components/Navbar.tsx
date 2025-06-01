
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, Leaf } from 'lucide-react';
import { useStore } from '../contexts/StoreContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Navbar = () => {
  const { state, dispatch } = useStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const cartItemsCount = state.cart.reduce((total, item) => total + item.quantity, 0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: 'SET_SEARCH_QUERY', payload: searchInput });
  };

  const categories = ['all', 'herbs', 'teas', 'supplements', 'oils', 'remedies'];

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-sage-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-sage-600" />
            <span className="text-2xl font-bold text-sage-800">HerbalShop</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => dispatch({ type: 'SET_SELECTED_CATEGORY', payload: category })}
                className={`capitalize font-medium transition-colors duration-200 ${
                  state.selectedCategory === category
                    ? 'text-sage-600 border-b-2 border-sage-600'
                    : 'text-gray-700 hover:text-sage-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search herbs..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="pl-10 w-64 herbal-input"
              />
            </div>
          </form>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-sage-600 text-white">
                  {cartItemsCount}
                </Badge>
              )}
            </Button>

            {/* User */}
            <Button variant="ghost" size="sm">
              <User className="h-5 w-5" />
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-sage-200 animate-slide-in">
            <div className="flex flex-col space-y-4">
              {/* Mobile search */}
              <form onSubmit={handleSearch} className="flex items-center space-x-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search herbs..."
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="pl-10 herbal-input"
                  />
                </div>
              </form>

              {/* Mobile categories */}
              <div className="flex flex-col space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      dispatch({ type: 'SET_SELECTED_CATEGORY', payload: category });
                      setIsMenuOpen(false);
                    }}
                    className={`capitalize font-medium text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                      state.selectedCategory === category
                        ? 'bg-sage-100 text-sage-700'
                        : 'text-gray-700 hover:bg-sage-50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
