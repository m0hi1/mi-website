import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  ChevronRight, 
  Download, 
  Mail, 
  Check, 
  Info, 
  List, 
  FileText, 
  Share2 
} from 'lucide-react';
import Layout from '@/components/Layout';
import QuoteRequestForm from '@/components/QuoteRequestForm';
import { products } from '@/data/products';
import { CATEGORIES } from '@/data/categories';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  
  // Find the product
  const product = products.find(p => p.id === productId);
  
  // If product not found
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-6">The product you are looking for does not exist or has been removed.</p>
          <Button asChild>
            <Link to="/products">Return to Products</Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  // Find the category
  const category = CATEGORIES.find(c => c.id === product.categoryId);
  
  return (
    <Layout>
      {/* Hero section with breadcrumbs */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center text-sm text-blue-200 mb-2">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={14} className="mx-2" />
              <Link to="/products" className="hover:text-white transition-colors">Products</Link>
              <ChevronRight size={14} className="mx-2" />
              <Link to={`/products/${product.categoryId}`} className="hover:text-white transition-colors">
                {category?.name || product.categoryId}
              </Link>
              <ChevronRight size={14} className="mx-2" />
              <span className="text-white">{product.name}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Images Section */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-[400px] object-cover"
              />
            </div>
            
            {/* Image thumbnails would go here in a real implementation */}
            <div className="mt-4 hidden"> {/* Original: grid grid-cols-4 gap-2 mt-4 hidden. Kept hidden, removed grid for linting. */}
              <div className="border border-primary rounded-md p-1 cursor-pointer">
                <img src={product.image} alt="Thumbnail" className="w-full h-16 object-cover" />
              </div>
            </div>
          </div>
          
          {/* Product Info Section */}
          <div className="lg:w-1/2">
            <Badge variant="outline" className="mb-2">{product.subcategory}</Badge>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            
            <p className="text-gray-700 mb-6">
              {product.description}
            </p>
            
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Dialog open={showQuoteForm} onOpenChange={setShowQuoteForm}>
                <DialogTrigger asChild>
                  <Button className="flex-1" onClick={() => setShowQuoteForm(true)}>
                    Request Quote
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>Request a Quote</DialogTitle>
                  </DialogHeader>
                  <QuoteRequestForm 
                    productName={product.name} 
                    productId={product.id} // Pass productId
                    onClose={() => setShowQuoteForm(false)} 
                  />
                </DialogContent>
              </Dialog>
              <Button variant="outline" className="flex-1 flex items-center justify-center">
                <Download size={16} className="mr-2" />
                Download PDF
              </Button>
            </div>
            
            <div className="flex items-center text-sm text-gray-600">
              <Mail size={16} className="mr-2" />
              <span>Have questions? <a href="/contact" className="text-primary hover:underline">Contact our team</a></span>
            </div>
          </div>
        </div>
        
        {/* Tabs Section */}
        <div className="mt-12">
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="w-full justify-start border-b mb-0 rounded-none bg-transparent">
              <TabsTrigger value="specifications" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
                <List size={16} className="mr-2" /> Specifications
              </TabsTrigger>
              <TabsTrigger value="applications" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
                <Info size={16} className="mr-2" /> Applications
              </TabsTrigger>
              <TabsTrigger value="documentation" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
                <FileText size={16} className="mr-2" /> Documentation
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="specifications" className="pt-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-lg mb-4">Technical Specifications</h3>
                
                {product.specifications && product.specifications.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                    {product.specifications.map((spec, index) => (
                      <div key={index} className="py-2 flex justify-between border-b border-gray-100">
                        <span className="font-medium text-gray-700">{spec.name}</span>
                        <span className="text-gray-600">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">Specifications not available for this product.</p>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="applications" className="pt-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-lg mb-4">Common Applications</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.applications.map((application, index) => (
                    <div key={index} className="flex items-center p-3 border border-gray-100 rounded-lg">
                      <span className="w-8 h-8 bg-blue-100 text-primary rounded-full flex items-center justify-center mr-3">
                        <Check size={16} />
                      </span>
                      <span>{application}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="documentation" className="pt-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-lg mb-4">Documentation</h3>
                
                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-md flex items-center justify-between">
                    <div className="flex items-center">
                      <FileText size={20} className="text-gray-500 mr-3" />
                      <div>
                        <p className="font-medium">Product Datasheet</p>
                        <p className="text-sm text-gray-500">PDF, 2.4 MB</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Download size={16} className="mr-2" />
                      Download
                    </Button>
                  </div>
                  
                  <div className="p-4 border border-gray-200 rounded-md flex items-center justify-between">
                    <div className="flex items-center">
                      <FileText size={20} className="text-gray-500 mr-3" />
                      <div>
                        <p className="font-medium">Installation Guide</p>
                        <p className="text-sm text-gray-500">PDF, 1.8 MB</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Download size={16} className="mr-2" />
                      Download
                    </Button>
                  </div>
                  
                  <div className="p-4 border border-gray-200 rounded-md flex items-center justify-between">
                    <div className="flex items-center">
                      <FileText size={20} className="text-gray-500 mr-3" />
                      <div>
                        <p className="font-medium">CAD Models</p>
                        <p className="text-sm text-gray-500">ZIP, 5.3 MB</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Download size={16} className="mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Related Products would go here */}
        
        {/* Quote Request Modal (Old implementation removed) */}
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
