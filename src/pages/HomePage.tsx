import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, ArrowRight, Check, Zap, CircleDot, Activity, Lock } from "lucide-react";
import Layout from "@/components/Layout";
import { QuoteDialogContext } from "@/components/Layout";
import { products } from "@/data/products";
import { CATEGORIES } from "@/data/categories";
import { hero, productCategories, featuredProducts, whyChooseUs, customSolutions } from "@/constants/text";

// Map of category icons
const categoryIcons = {
  "motors": <Zap size={24} className="text-primary" />,
  "valves": <CircleDot size={24} className="text-primary" />,
  "current-transformers": <Activity size={24} className="text-primary" />,
  "locking-mechanisms": <Lock size={24} className="text-primary" />
};

const HomePage = () => {
  const { setOpen: setIsQuoteDialogOpen, setProductName } = useContext(QuoteDialogContext);
  // States for section loading animations
  const [sectionVisible, setSectionVisible] = useState({
    hero: true,
    categories: false,
    whyChoose: false,
    featured: false,
    customSolutions: false,
  });

  // Setup intersection observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setSectionVisible(prev => ({ ...prev, [sectionId]: true }));
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section[id]').forEach(section => {
      sectionObserver.observe(section);
    });

    return () => {
      document.querySelectorAll('section[id]').forEach(section => {
        sectionObserver.unobserve(section);
      });
    };
  }, []);

  // Animation classes
  const fadeInUp = "transition-all duration-700 ease-out";
  
  return (
    <Layout>      {/* Hero Section */}
      <section id="hero" className="relative bg-gradient-to-r from-orange-900 to-orange-600 text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }} />
        </div>        {/* Tab Menu Navigation */}
        <div className="absolute top-4 right-4 z-20 md:block hidden">
          <div className={`bg-white/15 backdrop-blur-md rounded-xl p-2 shadow-lg border border-white/10 ${sectionVisible.hero ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} transition-all duration-700 delay-300`}>
            <h3 className="text-sm font-medium text-white/90 mb-2 text-center">Quick Access</h3>
            <div className="flex flex-wrap gap-1">
              {[
                { icon: <img src="/images/products/bldc motors.jpg" alt="BLDC Motors" className="w-12 h-12 object-cover rounded" />, label: "BLDC Motors", href: "/products/motors" },
                { icon: <img src="/images/products/Shaded ac motors.jpg" alt="AC Motors" className="w-12 h-12 object-cover rounded" />, label: "Shaded AC Motors", href: "/products/motors" },
                { icon: <img src="/images/products/Desert cooler motor.jpg" alt="Ceiling Fans" className="w-12 h-12 object-cover rounded" />, label: "Ceiling Fans", href: "/products/fans" },
                { icon: <img src="/images/products/Mercary.png" alt="Products" className="w-12 h-12 object-cover rounded" />, label: "Products", href: "/products" },
              ].map((item, index) => (
                <Link 
                  key={index} 
                  to={item.href}
                  className="group relative flex flex-col items-center justify-center p-2 hover:bg-white/20 rounded-lg transition-all duration-300"
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards',
                    opacity: 0,
                    transform: 'translateY(10px)'
                  }}
                >
                  <div className="rounded-lg overflow-hidden shadow-md mb-1 relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <div className="w-12 h-12 transform group-hover:scale-110 transition-transform duration-500">
                      {item.icon}
                    </div>
                  </div>
                  <span className="text-xs font-medium text-white group-hover:text-primary-foreground transition-colors duration-300">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
          {/* Add keyframes for fadeInUp animation */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}} />

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${sectionVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${fadeInUp}`}>
                {hero.title}
              </h1>
              <p className={`text-lg md:text-xl text-blue-100 mb-8 max-w-2xl ${sectionVisible.hero ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-10'} ${fadeInUp}`}>
                {hero.subtitle}
              </p>
              <div className={`flex flex-wrap gap-4 ${sectionVisible.hero ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-10'} ${fadeInUp}`}>
                <Button size="lg" asChild>
                  <Link to="/products">{hero.cta.primary}</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white bg-opacity-10 border-white hover:bg-opacity-20" onClick={() => { setProductName(undefined); setIsQuoteDialogOpen(true); }}>
                  {hero.cta.secondary}
                </Button>
              </div>
            </div>
              {/* Products Tab Menu - Mobile Only */}
            <div className="lg:col-span-2 md:hidden">
              <div className="grid grid-cols-2 gap-2 mt-8">
                {[
                  { icon: <img src="/images/products/bldc motors.jpg" alt="BLDC Motors" className="w-10 h-10 object-cover rounded" />, label: "BLDC Motors", href: "/products/motors" },
                  { icon: <img src="/images/products/Shaded ac motors.jpg" alt="AC Motors" className="w-10 h-10 object-cover rounded" />, label: "Shaded AC Motors", href: "/products/motors" },
                  { icon: <img src="/images/products/Desert cooler motor.jpg" alt="Ceiling Fans" className="w-10 h-10 object-cover rounded" />, label: "Ceiling Fans", href: "/products/fans" },
                  { icon: <img src="/images/products/Mercary.png" alt="Products" className="w-10 h-10 object-cover rounded" />, label: "Products", href: "/products" },
                ].map((item, index) => (
                  <Link 
                    key={index} 
                    to={item.href}
                    className="flex items-center p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="rounded-lg bg-white/10 p-1 mr-2 shadow-sm overflow-hidden">
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium text-white">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
              {/* Cool Product Navigation - Desktop Only */}
            <div className="lg:col-span-2 hidden lg:block">
              <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-xl ${sectionVisible.hero ? 'opacity-100 translate-x-0 delay-500' : 'opacity-0 translate-x-20'} transition-all duration-700`}>
                <h3 className="text-lg font-bold mb-4 border-b border-white/20 pb-2">Featured Products</h3>
                <div className="space-y-3">
                  {[
                    { name: "BLDC DIA 87 MOTOR", image: "/images/products/bldc motors.jpg", href: "/products/motors/bldc-dia-87" },
                    { name: "Shaded AC Motors", image: "/images/products/Shaded ac motors.jpg", href: "/products/motors/shaded-ac" },
                    { name: "Ceiling Fans", image: "/images/products/Desert cooler motor.jpg", href: "/products/fans" }
                  ].map((product, index) => (
                    <Link 
                      key={index} 
                      to={product.href}
                      className="flex items-center p-2 rounded-lg hover:bg-white/20 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 overflow-hidden rounded-lg mr-3 group-hover:shadow-glow transition-all duration-300">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-white group-hover:text-primary-foreground transition-colors">{product.name}</h4>
                        <p className="text-xs text-white/80 flex items-center">
                          View details <ArrowRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link 
                  to="/products" 
                  className="mt-4 flex items-center justify-center w-full py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-all duration-300"
                >
                  View All Products <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave shape divider */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <svg className="w-full h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${sectionVisible.categories ? 'opacity-100' : 'opacity-0'} ${fadeInUp}`}>
              {productCategories.title}
            </h2>
            <p className={`text-lg text-gray-600 max-w-2xl mx-auto ${sectionVisible.categories ? 'opacity-100 delay-100' : 'opacity-0'} ${fadeInUp}`}>
              {productCategories.subtitle}
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${sectionVisible.categories ? 'opacity-100 delay-200' : 'opacity-0'} ${fadeInUp}`}>
            {CATEGORIES.map((category, index) => (
              <Link 
                key={category.id}
                to={`/products/${category.id}`}
                className="group"
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={category.imageUrl}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-3">
                      {categoryIcons[category.id as keyof typeof categoryIcons]}
                    </div>
                    <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {category.description}
                    </p>
                    <div className="flex items-center text-primary font-medium">
                      Explore <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="whyChoose" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${sectionVisible.whyChoose ? 'opacity-100' : 'opacity-0'} ${fadeInUp}`}>
              {whyChooseUs.title}
            </h2>
            <p className={`text-lg text-gray-600 max-w-2xl mx-auto ${sectionVisible.whyChoose ? 'opacity-100 delay-100' : 'opacity-0'} ${fadeInUp}`}>
              {whyChooseUs.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.features.map((feature, index) => (
              <div 
                key={index}
                className={`bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow ${sectionVisible.whyChoose ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${fadeInUp}`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <Check className="text-primary" size={24} />
                </div>
                <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${sectionVisible.featured ? 'opacity-100' : 'opacity-0'} ${fadeInUp}`}>
              {featuredProducts.title}
            </h2>
            <p className={`text-lg text-gray-600 max-w-2xl mx-auto ${sectionVisible.featured ? 'opacity-100 delay-100' : 'opacity-0'} ${fadeInUp}`}>
              {featuredProducts.subtitle}
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 ${sectionVisible.featured ? 'opacity-100 delay-200' : 'opacity-0'} ${fadeInUp}`}>
            {products.slice(0, 3).map((product) => (
              <Card key={product.id} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video w-full overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-2">
                    {product.subcategory}
                  </Badge>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={`/product/${product.id}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className={`text-center ${sectionVisible.featured ? 'opacity-100 delay-400' : 'opacity-0'} ${fadeInUp}`}>
            <Button asChild size="lg">
              <Link to="/products" className="flex items-center">
                {featuredProducts.cta}
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section id="customSolutions" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${sectionVisible.customSolutions ? 'opacity-100' : 'opacity-0'} ${fadeInUp}`}>
                {customSolutions.title}
              </h2>
              <p className={`text-lg text-gray-600 ${sectionVisible.customSolutions ? 'opacity-100 delay-100' : 'opacity-0'} ${fadeInUp}`}>
                {customSolutions.subtitle}
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className={`md:w-1/2 ${sectionVisible.customSolutions ? 'opacity-100 delay-200' : 'opacity-0'} ${fadeInUp}`}>
                <img 
                  src="/images/custom-sol.jpg"
                  alt="Custom Engineering Solutions"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              
              <div className={`md:w-1/2 ${sectionVisible.customSolutions ? 'opacity-100 delay-300' : 'opacity-0'} ${fadeInUp}`}>
                <p className="text-gray-700 mb-6">
                  {customSolutions.description}
                </p>
                <ul className="mb-6 space-y-3">
                  <li className="flex items-start">
                    <Check size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Custom motor design and development</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Specialized valve solutions for harsh environments</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Tailored current transformers for unique measurements</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Security solutions for specific applications</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link to="/contact">{customSolutions.cta}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
