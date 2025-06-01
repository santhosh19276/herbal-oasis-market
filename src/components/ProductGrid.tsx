
import React, { useEffect } from 'react';
import { useStore, Product } from '../contexts/StoreContext';
import ProductCard from './ProductCard';
import { Loader2, Search } from 'lucide-react';

// Mock data for demonstration
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Organic Turmeric Powder',
    description: 'Premium quality turmeric powder with high curcumin content. Perfect for cooking and natural health remedies.',
    price: 24.99,
    image: '/api/placeholder/300/300',
    category: 'herbs',
    inStock: true,
    benefits: ['Anti-inflammatory', 'Antioxidant', 'Digestive Health'],
    origin: 'India'
  },
  {
    id: '2',
    name: 'Chamomile Tea Blend',
    description: 'Soothing chamomile tea blend perfect for relaxation and peaceful sleep. Caffeine-free and naturally sweet.',
    price: 18.50,
    image: '/api/placeholder/300/300',
    category: 'teas',
    inStock: true,
    benefits: ['Sleep Aid', 'Relaxation', 'Stress Relief'],
    origin: 'Egypt'
  },
  {
    id: '3',
    name: 'Ashwagandha Capsules',
    description: 'High-potency ashwagandha supplement to support stress management and energy levels.',
    price: 32.00,
    image: '/api/placeholder/300/300',
    category: 'supplements',
    inStock: true,
    benefits: ['Stress Management', 'Energy Boost', 'Immunity'],
    origin: 'India'
  },
  {
    id: '4',
    name: 'Lavender Essential Oil',
    description: 'Pure lavender essential oil for aromatherapy, relaxation, and natural skincare.',
    price: 28.75,
    image: '/api/placeholder/300/300',
    category: 'oils',
    inStock: false,
    benefits: ['Aromatherapy', 'Skin Care', 'Sleep Aid'],
    origin: 'France'
  },
  {
    id: '5',
    name: 'Ginger Root Extract',
    description: 'Concentrated ginger root extract for digestive health and nausea relief.',
    price: 22.00,
    image: '/api/placeholder/300/300',
    category: 'remedies',
    inStock: true,
    benefits: ['Digestive Health', 'Anti-nausea', 'Anti-inflammatory'],
    origin: 'Thailand'
  },
  {
    id: '6',
    name: 'Green Tea Matcha',
    description: 'Premium ceremonial grade matcha powder, rich in antioxidants and natural energy.',
    price: 45.00,
    image: '/api/placeholder/300/300',
    category: 'teas',
    inStock: true,
    benefits: ['Antioxidants', 'Energy Boost', 'Mental Focus'],
    origin: 'Japan'
  },
  {
    id: '7',
    name: 'Echinacea Tincture',
    description: 'Immune-supporting echinacea tincture made from organic purple coneflower.',
    price: 26.50,
    image: '/api/placeholder/300/300',
    category: 'remedies',
    inStock: true,
    benefits: ['Immune Support', 'Cold Prevention', 'Respiratory Health'],
    origin: 'USA'
  },
  {
    id: '8',
    name: 'Moringa Leaf Powder',
    description: 'Nutrient-dense moringa leaf powder, known as the miracle tree superfood.',
    price: 19.99,
    image: '/api/placeholder/300/300',
    category: 'herbs',
    inStock: true,
    benefits: ['Superfood', 'Vitamins', 'Minerals'],
    origin: 'Philippines'
  }
];

const ProductGrid = () => {
  const { state, dispatch } = useStore();

  useEffect(() => {
    // Simulate loading products
    dispatch({ type: 'SET_LOADING', payload: true });
    setTimeout(() => {
      dispatch({ type: 'SET_PRODUCTS', payload: mockProducts });
      dispatch({ type: 'SET_LOADING', payload: false });
    }, 1000);
  }, [dispatch]);

  // Filter products based on search query and selected category
  const filteredProducts = state.products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                         product.benefits.some(benefit => benefit.toLowerCase().includes(state.searchQuery.toLowerCase()));
    
    const matchesCategory = state.selectedCategory === 'all' || product.category === state.selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  if (state.isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <Loader2 className="h-12 w-12 text-sage-600 animate-spin mx-auto mb-4" />
          <p className="text-forest-600">Loading our herbal collection...</p>
        </div>
      </div>
    );
  }

  if (filteredProducts.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <Search className="h-16 w-16 text-sage-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-forest-800 mb-2">No products found</h3>
          <p className="text-forest-600">
            {state.searchQuery 
              ? `No products match "${state.searchQuery}"`
              : `No products in ${state.selectedCategory} category`
            }
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-forest-800 mb-2">
          {state.selectedCategory === 'all' 
            ? 'All Products' 
            : `${state.selectedCategory.charAt(0).toUpperCase() + state.selectedCategory.slice(1)}`
          }
        </h2>
        <p className="text-forest-600">
          {state.searchQuery 
            ? `${filteredProducts.length} products found for "${state.searchQuery}"`
            : `${filteredProducts.length} products available`
          }
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product, index) => (
          <div
            key={product.id}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
