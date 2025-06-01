
import React from 'react';
import { StoreProvider } from '../contexts/StoreContext';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <StoreProvider>
      <div className="min-h-screen bg-herbal-gradient">
        <Navbar />
        <Banner />
        <ProductGrid />
        <Footer />
      </div>
    </StoreProvider>
  );
};

export default Index;
