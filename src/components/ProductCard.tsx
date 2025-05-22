import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { AspectRatio } from "./ui/aspect-ratio";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  description: string;
  imageUrl: string;
  price?: string;
  onViewDetails?: (id: string) => void;
  hasDatasheet?: boolean;
}

const ProductCard = ({
  id = "1",
  name = "BLDC DIA 87 Motor",
  category = "Motors",
  subcategory = "BLDC Motors",
  description = "High-performance brushless DC motor with 87mm diameter, ideal for industrial automation and high-efficiency applications.",
  imageUrl = "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&q=80",
  price = "Contact for quote",
  onViewDetails = () => {},
  hasDatasheet = true,
}: ProductCardProps) => {
  return (
    <Card className="w-full max-w-sm overflow-hidden bg-white h-full flex flex-col hover:shadow-lg transition-all duration-300">
      <Link to={`/product/${id}`} className="group">
        <div className="relative">
          <AspectRatio ratio={4 / 3}>
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </AspectRatio>
          <div className="absolute top-2 right-2">
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              {category}
            </Badge>
          </div>
        </div>
      </Link>

      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Link
            to={`/product/${id}`}
            className="hover:text-primary transition-colors"
          >
            <CardTitle className="text-lg font-semibold line-clamp-2">
              {name}
            </CardTitle>
          </Link>
        </div>
        {subcategory && (
          <CardDescription className="text-xs text-muted-foreground">
            {subcategory}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {description}
        </p>
      </CardContent>

      <CardFooter className="flex justify-between items-center pt-2 border-t">
        <p className="text-sm font-medium">{price}</p>
        <div className="flex gap-2">
          <Link to={`/product/${id}`}>
            <Button
              variant="default"
              size="sm"
              onClick={() => onViewDetails(id)}
              className="flex items-center gap-1"
            >
              View Details <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          {hasDatasheet && (
            <Button variant="outline" size="icon" title="Download Datasheet">
              <Download className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
