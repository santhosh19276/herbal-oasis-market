
import React from 'react';
import { Star, ShoppingCart, Heart, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useStore, Product } from '../contexts/StoreContext';
import { toast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch } = useStore();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const rating = 4.5; // Mock rating

  return (
    <div className="herbal-card group overflow-hidden animate-fade-in hover:scale-105 transition-transform duration-300">
      {/* Image */}
      <div className="relative aspect-square bg-gradient-to-br from-sage-50 to-forest-50 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Leaf className="h-24 w-24 text-sage-300" />
        </div>
        
        {/* Product image placeholder */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Stock badge */}
        {!product.inStock && (
          <Badge className="absolute top-3 left-3 bg-red-500 text-white">
            Out of Stock
          </Badge>
        )}
        
        {/* Category badge */}
        <Badge className="absolute top-3 right-3 bg-white/90 text-sage-700 capitalize">
          {product.category}
        </Badge>

        {/* Quick actions */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            variant="ghost"
            size="sm"
            className="bg-white/90 hover:bg-white text-sage-700 h-8 w-8 p-0"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg text-forest-800 group-hover:text-sage-600 transition-colors duration-200">
            {product.name}
          </h3>
        </div>

        <p className="text-forest-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Origin */}
        <p className="text-xs text-sage-600 mb-3 font-medium">
          Origin: {product.origin}
        </p>

        {/* Benefits */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {product.benefits.slice(0, 2).map((benefit, index) => (
              <Badge key={index} variant="secondary" className="text-xs bg-sage-100 text-sage-700">
                {benefit}
              </Badge>
            ))}
            {product.benefits.length > 2 && (
              <Badge variant="secondary" className="text-xs bg-sage-100 text-sage-700">
                +{product.benefits.length - 2} more
              </Badge>
            )}
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">({rating})</span>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-sage-600">
            ${product.price.toFixed(2)}
          </span>
          
          <Button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="herbal-button px-4 py-2 h-auto"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
