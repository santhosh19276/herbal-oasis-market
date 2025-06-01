
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, Heart, Shield } from 'lucide-react';

const Banner = () => {
  const features = [
    {
      icon: <Leaf className="h-6 w-6 text-sage-600" />,
      title: "100% Natural",
      description: "Organic herbs sourced directly from nature"
    },
    {
      icon: <Heart className="h-6 w-6 text-sage-600" />,
      title: "Health Focused",
      description: "Promoting wellness through traditional remedies"
    },
    {
      icon: <Shield className="h-6 w-6 text-sage-600" />,
      title: "Quality Assured",
      description: "Lab tested for purity and potency"
    }
  ];

  return (
    <div className="relative bg-herbal-gradient min-h-[600px] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-sage-300 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-forest-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-earth-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-forest-800 mb-6 leading-tight">
              Discover the
              <span className="text-sage-600 block">Power of Nature</span>
            </h1>
            <p className="text-xl text-forest-700 mb-8 leading-relaxed">
              Premium organic herbs and natural remedies to support your wellness journey. 
              Sustainably sourced, carefully curated, and traditionally crafted.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="herbal-button group">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Button variant="outline" className="border-sage-300 text-sage-700 hover:bg-sage-50">
                Learn More
              </Button>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="bg-white/70 p-2 rounded-lg shadow-sm">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest-800 mb-1">{feature.title}</h3>
                    <p className="text-sm text-forest-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Hero Image */}
          <div className="relative animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="relative bg-white/30 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-sage-100 to-forest-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Leaf className="h-32 w-32 text-sage-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-forest-800 mb-2">Natural Wellness</h3>
                  <p className="text-forest-600">Traditional herbs for modern life</p>
                </div>
              </div>
              
              {/* Floating cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border border-sage-200">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-forest-800">In Stock</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 border border-sage-200">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-sage-600">500+</span>
                  <span className="text-sm text-forest-600">Products</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
