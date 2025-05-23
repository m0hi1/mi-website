import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';
import Layout from '@/components/Layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="relative mb-8">
            <div className="text-9xl font-extrabold text-gray-100">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-gray-900">Page Not Found</h1>
            </div>
          </div>
          
          <p className="text-lg text-gray-600 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild>
              <Link to="/" className="flex items-center">
                <Home size={16} className="mr-2" /> Return Home
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="products" className="flex items-center">
                <ArrowLeft size={16} className="mr-2" /> Browse Products
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
