
import React from 'react';
import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const footerLinks = {
    shop: [
      { name: 'All Products', href: '#' },
      { name: 'Herbs', href: '#' },
      { name: 'Teas', href: '#' },
      { name: 'Supplements', href: '#' },
      { name: 'Essential Oils', href: '#' },
    ],
    support: [
      { name: 'Contact Us', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Shipping Info', href: '#' },
      { name: 'Returns', href: '#' },
      { name: 'Track Order', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Our Story', href: '#' },
      { name: 'Sustainability', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Disclaimer', href: '#' },
    ],
  };

  return (
    <footer className="bg-forest-800 text-white">
      {/* Newsletter Section */}
      <div className="bg-sage-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Connected with Nature</h3>
              <p className="text-sage-100">
                Get the latest updates on new products, health tips, and exclusive offers.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white/40"
              />
              <Button className="bg-white text-sage-700 hover:bg-white/90 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Leaf className="h-8 w-8 text-sage-400" />
              <span className="text-2xl font-bold">HerbalShop</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted source for premium organic herbs and natural remedies. 
              We're committed to bringing you the finest quality products from nature's bounty.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-sage-400" />
                <span className="text-gray-300">hello@herbalshop.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-sage-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-sage-400" />
                <span className="text-gray-300">123 Wellness St, Nature City</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-sage-300">Shop</h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-sage-300 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-sage-300">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-sage-300 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-sage-300">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-sage-300 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-sage-300">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-sage-300 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-sage-300 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sage-300 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sage-300 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            
            <div className="text-gray-400 text-sm">
              © 2024 HerbalShop. All rights reserved. Made with ❤️ for natural wellness.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
