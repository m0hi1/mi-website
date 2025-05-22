import React from "react";
import { Search, Menu, ChevronDown, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent } from "./ui/card";
import ProductCatalog from "./ProductCatalog";

const Home = () => {
  // Mock featured products data
  const featuredProducts = [
    {
      id: "1",
      name: "BLDC DIA 87 Motor",
      category: "BLDC Motors",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&q=80",
      description:
        "High-performance brushless DC motor with 87mm diameter, ideal for industrial automation applications.",
    },
    {
      id: "2",
      name: "LT Indoor Resin Cast CT",
      category: "Current Transformers",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&q=80",
      description:
        "Resin cast current transformer designed for indoor use with high accuracy and reliability.",
    },
    {
      id: "3",
      name: "Cross Flow Blower",
      category: "Cooling Solutions",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&q=80",
      description:
        "Efficient cross flow blower providing even airflow distribution for HVAC systems and appliances.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-primary">
              Microinstruments Co.
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link
                    to="/"
                    className="text-sm font-medium hover:text-primary transition-colors relative group"
                  >
                    Home
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                  </Link>
                </li>
                <li className="relative group">
                  <Link
                    to="#"
                    className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
                  >
                    Products <ChevronDown className="h-4 w-4" />
                  </Link>
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-md overflow-hidden hidden group-hover:block z-50">
                    <Link
                      to="#"
                      className="block px-4 py-2 hover:bg-muted text-sm"
                    >
                      Motors
                    </Link>
                    <Link
                      to="#"
                      className="block px-4 py-2 hover:bg-muted text-sm"
                    >
                      Valves
                    </Link>
                    <Link
                      to="#"
                      className="block px-4 py-2 hover:bg-muted text-sm"
                    >
                      Cooling Solutions
                    </Link>
                    <Link
                      to="#"
                      className="block px-4 py-2 hover:bg-muted text-sm"
                    >
                      Locking Mechanisms
                    </Link>
                  </div>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm font-medium hover:text-primary transition-colors relative group"
                  >
                    About Us
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm font-medium hover:text-primary transition-colors relative group"
                  >
                    Contact
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="w-[200px] pl-8"
              />
            </div>
            <div className="border-l pl-4 flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-xs flex items-center gap-1"
              >
                <Globe className="h-3 w-3" /> EN
              </Button>
            </div>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-muted py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80"
            alt="Background pattern"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full mb-4 font-medium text-sm">
            Industry-Leading Electromechanical Solutions
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Precision Engineered{" "}
            <span className="text-primary">Components</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
            Explore our comprehensive range of high-quality motors,
            transformers, and electromechanical solutions designed for
            industrial applications.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="px-8 py-6 text-base">
              Browse Products
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-base">
              Request Quote
            </Button>
          </div>
          <div className="mt-12 flex justify-center gap-8">
            <div className="flex items-center">
              <img
                src="https://api.dicebear.com/7.x/shapes/svg?seed=iso9001"
                alt="ISO 9001"
                className="h-12 w-12"
              />
              <span className="ml-2 text-sm font-medium">
                ISO 9001 Certified
              </span>
            </div>
            <div className="flex items-center">
              <img
                src="https://api.dicebear.com/7.x/shapes/svg?seed=ce"
                alt="CE Mark"
                className="h-12 w-12"
              />
              <span className="ml-2 text-sm font-medium">CE Certified</span>
            </div>
            <div className="flex items-center">
              <img
                src="https://api.dicebear.com/7.x/shapes/svg?seed=rohs"
                alt="RoHS"
                className="h-12 w-12"
              />
              <span className="ml-2 text-sm font-medium">RoHS Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Product Categories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v12"></path>
                    <path d="M8 12h8"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Motors</h3>
                <p className="text-muted-foreground mb-4">
                  BLDC, AC, and specialized motors for various applications
                </p>
                <Button variant="link">View Motors</Button>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M18 8a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8z"></path>
                    <path d="M12 18v-6"></path>
                    <path d="M9 15h6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Current Transformers</h3>
                <p className="text-muted-foreground mb-4">
                  Precision engineered transformers for accurate measurements
                </p>
                <Button variant="link">View Transformers</Button>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M2 12h20"></path>
                    <path d="M12 2v20"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Specialized Components
                </h3>
                <p className="text-muted-foreground mb-4">
                  Valves, locks, cooling solutions and other components
                </p>
                <Button variant="link">View Components</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Catalog Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Product Catalog
          </h2>
          <ProductCatalog />
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Products
          </h2>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="motors">Motors</TabsTrigger>
                <TabsTrigger value="transformers">Transformers</TabsTrigger>
                <TabsTrigger value="components">Components</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredProducts.map((product) => (
                  <Card key={product.id} className="overflow-hidden">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="text-sm text-primary font-medium mb-2">
                        {product.category}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                      <p className="text-muted-foreground mb-4">
                        {product.description}
                      </p>
                      <Button>View Details</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="motors" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredProducts
                  .filter((p) => p.category === "BLDC Motors")
                  .map((product) => (
                    <Card key={product.id} className="overflow-hidden">
                      <div className="aspect-video w-full overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="text-sm text-primary font-medium mb-2">
                          {product.category}
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                          {product.name}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {product.description}
                        </p>
                        <Button>View Details</Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="transformers" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredProducts
                  .filter((p) => p.category === "Current Transformers")
                  .map((product) => (
                    <Card key={product.id} className="overflow-hidden">
                      <div className="aspect-video w-full overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="text-sm text-primary font-medium mb-2">
                          {product.category}
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                          {product.name}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {product.description}
                        </p>
                        <Button>View Details</Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="components" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredProducts
                  .filter((p) => p.category === "Cooling Solutions")
                  .map((product) => (
                    <Card key={product.id} className="overflow-hidden">
                      <div className="aspect-video w-full overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="text-sm text-primary font-medium mb-2">
                          {product.category}
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                          {product.name}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {product.description}
                        </p>
                        <Button>View Details</Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg opacity-90">
            Our engineering team can help design and manufacture components
            tailored to your specific requirements.
          </p>
          <Button size="lg" variant="secondary">
            Request a Quote
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Microinstruments Co.</h3>
              <p className="text-muted-foreground">
                Precision engineered electromechanical components for industrial
                applications.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Motors
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Current Transformers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Valves
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Cooling Solutions
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <address className="not-italic text-muted-foreground">
                8, Industrial Area,
                <br />
                Ambala Cantt, India-133 006
                <br />
                <a href="tel:+911712699935" className="hover:text-primary">
                  +91-171-2699935
                </a>
                <br />
                <a
                  href="mailto:info@microinstrumentsco.com"
                  className="hover:text-primary"
                >
                  info@microinstrumentsco.com
                </a>
              </address>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Microinstruments Co. All rights
              reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
