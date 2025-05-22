import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft, Download, Share2, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import QuoteRequestForm from "@/components/QuoteRequestForm";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  // Mock product data - in a real app, this would be fetched based on the ID
  const product = {
    id: id || "1",
    name: "BLDC DIA 87 Motor",
    category: "Motors",
    subcategory: "BLDC Motors",
    description:
      "High-performance brushless DC motor with 87mm diameter. Designed for industrial automation and high-efficiency applications requiring reliable performance and precise control.",
    features: [
      "Energy efficient design with up to 30% power savings",
      "Low noise operation (<45dB)",
      "Extended lifespan (>50,000 hours)",
      "Variable speed control",
      "Integrated thermal protection",
    ],
    specifications: [
      { name: "Diameter", value: "87mm" },
      { name: "Voltage", value: "24V DC" },
      { name: "Power Rating", value: "120W" },
      { name: "Speed Range", value: "1000-3000 RPM" },
      { name: "Efficiency", value: ">85%" },
      { name: "Protection Class", value: "IP44" },
      { name: "Weight", value: "850g" },
      { name: "Mounting Type", value: "Flange Mount" },
    ],
    applications: [
      "Industrial automation systems",
      "HVAC equipment",
      "Precision machinery",
      "Medical devices",
      "Robotics",
    ],
    resources: [
      { name: "Technical Datasheet", type: "PDF", size: "1.2 MB" },
      { name: "Installation Guide", type: "PDF", size: "850 KB" },
      { name: "CAD Model (STEP)", type: "STEP", size: "3.5 MB" },
      { name: "Wiring Diagram", type: "PDF", size: "450 KB" },
    ],
    relatedProducts: [
      {
        id: "2",
        name: "BLDC E-Bicycle Motor",
        image:
          "https://images.unsplash.com/photo-1558981852-426c6c22a060?w=300&q=80",
      },
      {
        id: "3",
        name: "BLDC Ceiling Fan",
        image:
          "https://images.unsplash.com/photo-1595079676601-f1adf5be5dee?w=300&q=80",
      },
      {
        id: "4",
        name: "BLDC Aircon Motor",
        image:
          "https://images.unsplash.com/photo-1581092921461-eab10380ed66?w=300&q=80",
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1581092160607-ee22731c9c78?w=800&q=80",
      "https://images.unsplash.com/photo-1581092160562-3051cc2a99e0?w=800&q=80",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-background">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center mb-6 text-sm">
        <Link to="/" className="text-muted-foreground hover:text-primary">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link
          to="/products"
          className="text-muted-foreground hover:text-primary"
        >
          Products
        </Link>
        <span className="mx-2">/</span>
        <Link
          to={`/products/${product.category.toLowerCase()}`}
          className="text-muted-foreground hover:text-primary"
        >
          {product.category}
        </Link>
        <span className="mx-2">/</span>
        <span className="font-medium">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg overflow-hidden border relative group">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-[400px] object-contain"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                variant="secondary"
                size="sm"
                className="absolute top-4 right-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                  <path d="M11 8v6"></path>
                  <path d="M8 11h6"></path>
                </svg>
                <span className="ml-1">Zoom</span>
              </Button>
            </div>
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {product.images.map((image, index) => (
              <div
                key={index}
                className={`w-24 h-24 rounded-md overflow-hidden border cursor-pointer flex-shrink-0 transition-all ${index === 0 ? "ring-2 ring-primary" : "hover:ring-2 hover:ring-primary/50"}`}
              >
                <img
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-sm text-muted-foreground">
                Images: {product.images.length}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-xs flex items-center gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path>
                  <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
                </svg>
                Report issue
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-xs flex items-center gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" x2="12" y1="15" y2="3"></line>
                </svg>
                Download images
              </Button>
            </div>
          </div>
        </div>

        {/* Product Information */}
        <div className="space-y-6">
          <div>
            <Badge variant="secondary" className="mb-2">
              {product.subcategory}
            </Badge>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-muted-foreground mt-2">{product.description}</p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              onClick={() => setShowQuoteForm(true)}
              className="bg-primary hover:bg-primary/90 transition-colors"
            >
              <ShoppingCart className="mr-2 h-4 w-4" /> Request Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-primary/10 transition-colors"
            >
              <Download className="mr-2 h-4 w-4" /> Download Datasheet
            </Button>
            <div className="relative group">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10 transition-colors"
              >
                <Share2 className="h-4 w-4" />
              </Button>
              <div className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-md p-2 hidden group-hover:block z-10 w-48">
                <div className="text-sm font-medium mb-2 px-2">Share via:</div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  Facebook
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  Twitter
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                    <path d="M10 9h4v12h-4z"></path>
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  </svg>
                  LinkedIn
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="m22 2-7 20-4-9-9-4Z"></path>
                    <path d="M22 2 11 13"></path>
                  </svg>
                  Email
                </Button>
              </div>
            </div>
          </div>

          <Separator />

          {/* Product Details Tabs */}
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
            </TabsList>

            <TabsContent value="specifications" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {product.specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="flex justify-between border-b pb-2"
                  >
                    <span className="font-medium">{spec.name}</span>
                    <span>{spec.value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="features" className="space-y-4">
              <ul className="list-disc pl-5 space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="applications" className="space-y-4">
              <ul className="list-disc pl-5 space-y-2">
                {product.applications.map((application, index) => (
                  <li key={index}>{application}</li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>

          <Separator />

          {/* Downloadable Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Downloadable Resources
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.resources.map((resource, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border rounded-md"
                >
                  <div>
                    <p className="font-medium">{resource.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {resource.type} · {resource.size}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quote Request Form Dialog */}
      {showQuoteForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Request a Quote</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowQuoteForm(false)}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" /> Back to Product
                </Button>
              </div>
              <QuoteRequestForm
                productName={product.name}
                onClose={() => setShowQuoteForm(false)}
              />
            </div>
          </div>
        </div>
      )}

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {product.relatedProducts.map((relatedProduct) => (
            <Card key={relatedProduct.id} className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={relatedProduct.image}
                  alt={relatedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold truncate">
                  {relatedProduct.name}
                </h3>
                <div className="mt-4">
                  <Link to={`/product/${relatedProduct.id}`}>
                    <Button variant="outline" size="sm" className="w-full">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
