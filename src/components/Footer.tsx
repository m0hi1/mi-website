import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Top section with newsletter */}
        <div className="flex flex-col md:flex-row justify-between gap-8 pb-10 border-b border-gray-700">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-bold mb-2">Micro Instruments Co.</h3>
            <p className="text-gray-300 mb-6">
              Precision-engineered components for industries worldwide since 1985.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/3">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/products" className="text-gray-300 hover:text-primary transition-colors">
                Products
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">
                Contact
              </Link>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                Careers
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                Support
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
          
          <div className="md:w-1/3">
            <h4 className="text-xl font-semibold mb-4">Subscribe to our Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Stay updated with the latest product releases and industry news.
            </p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 text-white border-gray-700"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
        
        {/* Middle section with contact info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-b border-gray-700">
          <div className="flex items-start space-x-3">
            <Mail className="text-primary" size={20} />
            <div>
              <p className="font-medium">Email Us</p>
              <a href="mailto:info@microinstruments.com" className="text-gray-300 hover:text-primary transition-colors">
                info@microinstruments.com
              </a>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Phone className="text-primary" size={20} />
            <div>
              <p className="font-medium">Call Us</p>
              <a href="tel:+1234567890" className="text-gray-300 hover:text-primary transition-colors">
                +1 (234) 567-890
              </a>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <MapPin className="text-primary" size={20} />
            <div>
              <p className="font-medium">Visit Us</p>
              <address className="text-gray-300 not-italic">
                1234 Industrial Blvd, Tech City, TC 56789
              </address>
            </div>
          </div>
        </div>
        
        {/* Bottom section with copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>© {currentYear} Micro Instruments Co. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
