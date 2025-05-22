import React, { useState } from "react";
import { Search, Filter, ChevronDown, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ProductCard from "./ProductCard";

interface Category {
  id: string;
  name: string;
  subcategories: Subcategory[];
}

interface Subcategory {
  id: string;
  name: string;
  products: Product[];
}

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  subcategory: string;
  imageUrl: string;
  price?: string;
}

interface ProductCatalogProps {
  categories?: Category[];
  products?: Product[];
}

const ProductCatalog: React.FC<ProductCatalogProps> = ({
  categories = [
    {
      id: "1",
      name: "Motors",
      subcategories: [
        {
          id: "1-1",
          name: "BLDC Motors",
          products: [],
        },
        {
          id: "1-2",
          name: "AC Motors",
          products: [],
        },
      ],
    },
    {
      id: "2",
      name: "Valves",
      subcategories: [
        {
          id: "2-1",
          name: "Magnetic Valve",
          products: [],
        },
      ],
    },
    {
      id: "3",
      name: "Locking Mechanisms",
      subcategories: [
        {
          id: "3-1",
          name: "Door Lock",
          products: [],
        },
      ],
    },
    {
      id: "4",
      name: "Cooling Solutions",
      subcategories: [
        {
          id: "4-1",
          name: "Cross Flow Blower",
          products: [],
        },
      ],
    },
  ],
  products = [
    {
      id: "1",
      name: "BLDC DIA 87 Motor",
      description:
        "High-performance brushless DC motor with 87mm diameter, ideal for industrial automation applications.",
      category: "Motors",
      subcategory: "BLDC Motors",
      imageUrl:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&q=80",
      price: "Contact for quote",
    },
    {
      id: "2",
      name: "BLDC E-Bicycle Motor",
      description:
        "Compact hub motor design with high torque, perfect for electric bicycles and small electric vehicles.",
      category: "Motors",
      subcategory: "BLDC Motors",
      imageUrl:
        "https://images.unsplash.com/photo-1558981852-426c6c22a060?w=500&q=80",
      price: "Contact for quote",
    },
    {
      id: "3",
      name: "BLDC Ceiling Fan",
      description:
        "Energy-efficient, quiet operation motor designed specifically for ceiling fan applications.",
      category: "Motors",
      subcategory: "BLDC Motors",
      imageUrl:
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&q=80",
      price: "Contact for quote",
    },
    {
      id: "4",
      name: "Magnetic Valve",
      description:
        "Electromagnetic valve assembly with precise control for fluid control systems and appliances.",
      category: "Valves",
      subcategory: "Magnetic Valve",
      imageUrl:
        "https://images.unsplash.com/photo-1635401850685-27c4bfbb8a36?w=500&q=80",
      price: "Contact for quote",
    },
    {
      id: "5",
      name: "Door Lock",
      description:
        "Electromechanical door locking mechanism for appliances and security systems.",
      category: "Locking Mechanisms",
      subcategory: "Door Lock",
      imageUrl:
        "https://images.unsplash.com/photo-1558979158-65a1eaa08691?w=500&q=80",
      price: "Contact for quote",
    },
    {
      id: "6",
      name: "Cross Flow Blower",
      description:
        "Cylindrical cross-flow blower assembly with even airflow distribution for HVAC systems.",
      category: "Cooling Solutions",
      subcategory: "Cross Flow Blower",
      imageUrl:
        "https://images.unsplash.com/photo-1581093196277-9f608bb3b4b9?w=500&q=80",
      price: "Contact for quote",
    },
  ],
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>(
    [],
  );
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Filter products based on search term and selected categories
  React.useEffect(() => {
    let result = products;

    // Filter by search term
    if (searchTerm) {
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    // Filter by selected category
    if (selectedCategory) {
      result = result.filter(
        (product) => product.category === selectedCategory,
      );

      // Filter by selected subcategories if any
      if (selectedSubcategories.length > 0) {
        result = result.filter((product) =>
          selectedSubcategories.includes(product.subcategory),
        );
      }
    }

    setFilteredProducts(result);
  }, [searchTerm, selectedCategory, selectedSubcategories, products]);

  const handleCategoryClick = (categoryId: string, categoryName: string) => {
    if (selectedCategory === categoryName) {
      setSelectedCategory(null);
      setSelectedSubcategories([]);
    } else {
      setSelectedCategory(categoryName);
      setSelectedSubcategories([]);

      // Toggle expanded state for the category
      if (expandedCategories.includes(categoryId)) {
        setExpandedCategories(
          expandedCategories.filter((id) => id !== categoryId),
        );
      } else {
        setExpandedCategories([...expandedCategories, categoryId]);
      }
    }
  };

  const handleSubcategoryToggle = (subcategoryName: string) => {
    setSelectedSubcategories((prev) => {
      if (prev.includes(subcategoryName)) {
        return prev.filter((name) => name !== subcategoryName);
      } else {
        return [...prev, subcategoryName];
      }
    });
  };

  const toggleMobileFilter = () => {
    setIsMobileFilterOpen(!isMobileFilterOpen);
  };

  return (
    <div className="bg-background w-full p-4 md:p-6 lg:p-8">
      <div className="container mx-auto">
        {/* Search and Filter Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div className="relative w-full md:w-1/2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button
            variant="outline"
            className="flex items-center gap-2 md:hidden w-full"
            onClick={toggleMobileFilter}
          >
            <Filter className="h-4 w-4" />
            {isMobileFilterOpen ? "Hide Filters" : "Show Filters"}
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Category Sidebar - Desktop */}
          <div className="hidden md:block w-full md:w-1/4 lg:w-1/5">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium text-lg mb-4">Categories</h3>
                <div className="space-y-4">
                  {categories.map((category) => (
                    <div key={category.id} className="space-y-2">
                      <div
                        className={`flex items-center justify-between cursor-pointer ${selectedCategory === category.name ? "font-medium text-primary" : ""}`}
                        onClick={() =>
                          handleCategoryClick(category.id, category.name)
                        }
                      >
                        <span>{category.name}</span>
                        {expandedCategories.includes(category.id) ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </div>

                      {expandedCategories.includes(category.id) && (
                        <div className="ml-4 space-y-2">
                          {category.subcategories.map((subcategory) => (
                            <div
                              key={subcategory.id}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox
                                id={subcategory.id}
                                checked={selectedSubcategories.includes(
                                  subcategory.name,
                                )}
                                onCheckedChange={() =>
                                  handleSubcategoryToggle(subcategory.name)
                                }
                              />
                              <label
                                htmlFor={subcategory.id}
                                className="text-sm cursor-pointer"
                              >
                                {subcategory.name}
                              </label>
                            </div>
                          ))}
                        </div>
                      )}
                      <Separator className="my-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Category Sidebar - Mobile */}
          {isMobileFilterOpen && (
            <div className="md:hidden w-full">
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-medium text-lg mb-4">Categories</h3>
                  <Accordion type="multiple" value={expandedCategories}>
                    {categories.map((category) => (
                      <AccordionItem key={category.id} value={category.id}>
                        <AccordionTrigger
                          onClick={() =>
                            handleCategoryClick(category.id, category.name)
                          }
                          className={
                            selectedCategory === category.name
                              ? "text-primary"
                              : ""
                          }
                        >
                          {category.name}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="ml-4 space-y-2">
                            {category.subcategories.map((subcategory) => (
                              <div
                                key={subcategory.id}
                                className="flex items-center space-x-2"
                              >
                                <Checkbox
                                  id={`mobile-${subcategory.id}`}
                                  checked={selectedSubcategories.includes(
                                    subcategory.name,
                                  )}
                                  onCheckedChange={() =>
                                    handleSubcategoryToggle(subcategory.name)
                                  }
                                />
                                <label
                                  htmlFor={`mobile-${subcategory.id}`}
                                  className="text-sm cursor-pointer"
                                >
                                  {subcategory.name}
                                </label>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Product Grid */}
          <div className="w-full md:w-3/4 lg:w-4/5">
            {/* Active Filters */}
            {(selectedCategory || searchTerm) && (
              <div className="mb-4 flex flex-wrap gap-2 items-center">
                <span className="text-sm text-muted-foreground">
                  Active filters:
                </span>
                {selectedCategory && (
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    {selectedCategory}
                    <button
                      onClick={() => {
                        setSelectedCategory(null);
                        setSelectedSubcategories([]);
                      }}
                      className="ml-1 hover:text-destructive"
                    >
                      ×
                    </button>
                  </Badge>
                )}
                {selectedSubcategories.map((subcategory) => (
                  <Badge
                    key={subcategory}
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    {subcategory}
                    <button
                      onClick={() => handleSubcategoryToggle(subcategory)}
                      className="ml-1 hover:text-destructive"
                    >
                      ×
                    </button>
                  </Badge>
                ))}
                {searchTerm && (
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    Search: {searchTerm}
                    <button
                      onClick={() => setSearchTerm("")}
                      className="ml-1 hover:text-destructive"
                    >
                      ×
                    </button>
                  </Badge>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory(null);
                    setSelectedSubcategories([]);
                  }}
                >
                  Clear all
                </Button>
              </div>
            )}

            {/* Results Count */}
            <div className="mb-4">
              <p className="text-sm text-muted-foreground">
                Showing {filteredProducts.length}{" "}
                {filteredProducts.length === 1 ? "product" : "products"}
              </p>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <div
                    className="transform transition-transform hover:-translate-y-1 duration-300"
                    key={product.id}
                  >
                    <ProductCard
                      id={product.id}
                      name={product.name}
                      description={product.description}
                      category={product.category}
                      subcategory={product.subcategory}
                      imageUrl={product.imageUrl}
                      price={product.price}
                      hasDatasheet={product.id !== "6"} // Just for demo variation
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="rounded-full bg-muted p-3 mb-4">
                  <Search className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium">No products found</h3>
                <p className="text-muted-foreground mt-2 max-w-md">
                  We couldn't find any products matching your search or filter
                  criteria. Try adjusting your filters or search term.
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory(null);
                    setSelectedSubcategories([]);
                  }}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;
