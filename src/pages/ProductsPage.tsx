import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Filter, ChevronRight } from 'lucide-react';
import Layout from '@/components/Layout';
import { products } from '@/data/products';
import { CATEGORIES } from '@/data/categories';
import ImageWithFallback from '@/components/ImageWithFallback';

const ProductsPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryId || 'all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);
  
  // Get current category
  const currentCategory = CATEGORIES.find(cat => cat.id === selectedCategory);
    // Effect for filtering products
  useEffect(() => {
    let filtered = [...products];
    
    // Filter by category
    if (selectedCategory && selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.categoryId === selectedCategory);
      
      // Reset subcategory selection when changing category
      if (currentCategory) {
        const validSubcategories = currentCategory.subcategories;
        const validSelected = selectedSubcategories.filter(sub => 
          validSubcategories.includes(sub)
        );
        
        if (validSelected.length !== selectedSubcategories.length) {
          setSelectedSubcategories(validSelected);
          return; // Will re-run effect with updated subcategories
        }
      }
    }
    
    // Filter by subcategory if any selected
    if (selectedSubcategories.length > 0) {
      filtered = filtered.filter(product => 
        selectedSubcategories.includes(product.subcategory)
      );
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query) ||
        product.subcategory.toLowerCase().includes(query)
      );
    }
    
    setFilteredProducts(filtered);
  }, [selectedCategory, searchQuery, selectedSubcategories, currentCategory]);
    // Update category from URL params and ensure it exists
  useEffect(() => {
    if (categoryId) {
      // Check if the category ID is valid
      const validCategory = CATEGORIES.some(cat => cat.id === categoryId);
      if (validCategory) {
        setSelectedCategory(categoryId);
      } else {
        // Fallback to 'all' if categoryId is invalid
        setSelectedCategory('all');
      }
    }
  }, [categoryId]);

  // Handle subcategory toggle
  const toggleSubcategory = (subcategory: string) => {
    setSelectedSubcategories(prev => 
      prev.includes(subcategory)
        ? prev.filter(item => item !== subcategory) 
        : [...prev, subcategory]
    );
  };
  
  // Clear all filters
  const clearFilters = () => {
    setSelectedSubcategories([]);
    setSearchQuery('');
  };
  
  return (
    <Layout>
      {/* Hero section */}      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-16 mb-8">
        <div className="absolute inset-0 opacity-5 bg-[url('/images/grid-pattern.png')] bg-[length:16px_16px]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Our Products
            </h1>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl">
              Explore our extensive range of precision-engineered components designed for reliability and performance across various industrial applications.
            </p>
            
            {/* Breadcrumbs */}
            <div className="flex items-center text-sm text-blue-200 mt-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={14} className="mx-2" />
              <Link to="/products" className="hover:text-white transition-colors">Products</Link>
              {categoryId && (
                <>
                  <ChevronRight size={14} className="mx-2" />
                  <span className="text-white font-medium">{currentCategory?.name}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar filters */}
          <div className="lg:w-1/4">
            <div className="bg-white shadow-md rounded-lg p-6 sticky top-24">
              <h3 className="font-bold text-lg mb-4">Filter Products</h3>
              
              {/* Search input */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <Input
                    type="text"
                    placeholder="Search products..."
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
                {/* Category selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
                  <TabsList className="grid w-full grid-cols-1 gap-2">
                    <TabsTrigger value="all">All Products</TabsTrigger>
                    {CATEGORIES.map(category => (
                      <TabsTrigger key={category.id} value={category.id}>
                        {category.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>
                {/* Subcategory filters - show only for selected category */}
              {selectedCategory !== 'all' && currentCategory && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {currentCategory.name} Types
                  </label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {currentCategory.subcategories.map((subcategory) => (
                      <Badge 
                        key={subcategory}
                        variant={selectedSubcategories.includes(subcategory) ? "default" : "outline"}
                        className="cursor-pointer hover:bg-primary-100 transition-colors"
                        onClick={() => toggleSubcategory(subcategory)}
                      >
                        {subcategory}
                        {selectedSubcategories.includes(subcategory) && (
                          <span className="ml-1">✓</span>
                        )}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Clear filters */}
              <Button
                variant="outline"
                size="sm"
                className="w-full mt-2"
                onClick={clearFilters}
              >
                <Filter className="mr-1" size={14} /> Clear Filters
              </Button>
            </div>
          </div>
          
          {/* Product grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                {selectedCategory !== 'all'
                  ? currentCategory?.name
                  : 'All Products'}
              </h2>
              <p className="text-gray-600">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
              </p>
            </div>
            
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-gray-500 mb-4">No products found matching your criteria</p>
                <Button variant="outline" onClick={clearFilters}>
                  Reset Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <Link 
                    key={product.id} 
                    to={`/product/${product.id}`}
                    className="group"
                  >
                    <Card className="h-full overflow-hidden rounded-lg group-hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-primary/50">
                      <div className="aspect-video w-full overflow-hidden bg-gray-50 relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-gray-50/20 to-transparent z-10"></div>
                        <ImageWithFallback
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        <Badge variant="secondary" className="absolute top-3 right-3 z-20">
                          {product.subcategory}
                        </Badge>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                          {product.description}
                        </p>
                        <div className="mt-auto">
                          <Button variant="default" className="w-full" size="sm">
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;
