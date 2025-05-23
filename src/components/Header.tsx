import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { QuoteDialogContext } from "./Layout";

const siteInfo = {
  companyName: "Micro Instruments Co.",
  tagline: "Precision-engineered components for industries worldwide",
};

const navigation = {
  home: "Home",
  products: "Products",
  about: "About",
  contact: "Contact",
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setOpen: setIsQuoteDialogOpen, setProductName } = useContext(QuoteDialogContext);

  // Add scroll effect to header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`bg-white shadow-sm sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? "py-2 shadow-md" : "py-4 shadow-sm"
    }`}>
      <div className="container mx-auto py-0 px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 transition-transform hover:scale-105">
            <img 
              src="/logo/mi-logo.png" 
              alt="Micro Instruments Co. Logo" 
              className={`transition-all duration-300 ${
                scrolled ? "h-9" : "h-12"
              }`}
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors font-medium">
              {navigation.home}
            </Link>
            <div className="relative group">
              <Link 
                to="/products" 
                className="text-gray-700 hover:text-primary transition-colors font-medium flex items-center gap-1"
              >
                {navigation.products}
                <ChevronDown size={16} />
              </Link>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <Link to="/products/motors" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Motors</Link>
                  <Link to="/products/valves" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Valves</Link>
                  <Link to="/products/current-transformers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Current Transformers</Link>
                  <Link to="/products/locking-mechanisms" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Locking Mechanisms</Link>
                  <Link to="/products/all" className="block px-4 py-2 text-sm font-medium text-primary">View All Categories</Link>
                </div>
              </div>
            </div>
            <Link to="/about" className="text-gray-700 hover:text-primary transition-colors font-medium">
              {navigation.about}
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors font-medium">
              {navigation.contact}
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="rounded-full">
              <Search size={18} className="mr-2" />
              Search
            </Button>
            <Button onClick={() => {
              setProductName(undefined); // Clear product name for general quote
              setIsQuoteDialogOpen(true);
            }}>Request Quote</Button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link 
              to="/"
              className="block py-2 text-gray-700 hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {navigation.home}
            </Link>
            <div>
              <Link 
                to="/products"
                className="block py-2 text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {navigation.products}
              </Link>
              <div className="pl-4 space-y-2 mt-2">
                <Link 
                  to="/products/motors"
                  className="block py-1 text-sm text-gray-600 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Motors
                </Link>
                <Link 
                  to="/products/valves"
                  className="block py-1 text-sm text-gray-600 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Valves
                </Link>
                <Link 
                  to="/products/all"
                  className="block py-1 text-sm font-medium text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  View All Categories
                </Link>
              </div>
            </div>
            <Link 
              to="/about"
              className="block py-2 text-gray-700 hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {navigation.about}
            </Link>
            <Link 
              to="/contact"
              className="block py-2 text-gray-700 hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {navigation.contact}
            </Link>
            <Button variant="outline" className="w-full justify-start">
              <Search size={18} className="mr-2" />
              Search
            </Button>
            <Button className="w-full" onClick={() => {
              setProductName(undefined);
              setIsQuoteDialogOpen(true);
              setIsMenuOpen(false); // Close menu after clicking
            }}>Request Quote</Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
