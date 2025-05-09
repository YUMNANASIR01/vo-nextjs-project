import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart, Star } from "lucide-react"

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  rating: number;
  category: string;
}

export default function FeaturedProducts() {
  // Enhanced product data with real images and additional information
  const products: Product[] = [
    { 
      id: 1, 
      name: "Journey Perfume", 
      price: "Rs. 4,190",
      image: "https://www.gulahmedshop.com/media/catalog/product/j/o/journey_01.jpg?optimize=low&fit=bounds&height=750&width=500&canvas=2:3",
      rating: 4.8,
      category: "Audio"
    },
    { 
      id: 2, 
      name: "Spring Times",
      price: "Rs. 2,712",
      image: "https://www.gulahmedshop.com/media/catalog/product/s/p/spring1.jpg?optimize=low&fit=bounds&height=750&width=500&canvas=2:3",
      rating: 4.7,
      category: "Wearables"
    },
    { 
      id: 3, 
      name: "Marina Perfume",
      price: "Rs. 4,790",
      image: "https://www.gulahmedshop.com/media/catalog/product/m/a/marina_01.jpg?optimize=low&fit=bounds&height=750&width=500&canvas=2:3",
      rating: 4.6,
      category: "Audio"
    },
    { 
      id: 4, 
      name: "Elixir Perfume",
      price: "Rs. 4,232",
      image: "https://www.gulahmedshop.com/media/catalog/product/w/h/whatsapp_image_2024-11-12_at_3.44.44_pm.jpeg?optimize=low&fit=bounds&height=750&width=500&canvas=2:3",
      rating: 4.4,
      category: "Accessories"
    },
    { 
      id: 5, 
      name: "Ignite Perfume ", 
      price: "Rs. 4,999",
      image: "https://www.gulahmedshop.com/media/catalog/product/2/8/287348_2_.jpg?optimize=low&fit=bounds&height=750&width=500&canvas=500:750",
      rating: 4.9,
      category: "Peripherals"
    },
    { 
      id: 6, 
      name: "High Life", 
      price: "Rs. 2,712",
      image: "https://www.gulahmedshop.com/media/catalog/product/h/i/high_life_2.jpg?optimize=low&fit=bounds&height=750&width=500&canvas=2:3",
      rating: 4.7,
      category: "Peripherals"
    },
    { 
      id: 7, 
      name: "Adore Silk", 
      price: "Rs. 4,990",
      image: "https://www.gulahmedshop.com/media/catalog/product/a/d/adore_silk_2_.jpg?optimize=low&fit=bounds&height=750&width=500&canvas=2:3",
      rating: 4.5,
      category: "Accessories"
    },
    { 
      id: 8, 
      name: "Enigma Perfume For Women", 
      price: "Rs. 4,999",
      image: "https://www.gulahmedshop.com/media/catalog/product/e/n/enigma_1_.jpg?optimize=low&fit=bounds&height=750&width=500&canvas=500:750",
      rating: 4.6,
      category: "Accessories"
    },
  ]

  // Function to render rating stars
  const renderRating = (rating: number) => {
    // Round to nearest 0.5
    const roundedRating = Math.round(rating * 2) / 2;
    const stars = [];
    
    for (let i = 1; i <= 5; i++) {
      if (i <= roundedRating) {
        stars.push(<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />);
      } else if (i - 0.5 === roundedRating) {
        stars.push(<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />);
      } else {
        stars.push(<Star key={i} className="h-4 w-4 text-gray-300" />);
      }
    }
    
    return stars;
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-12 overflow-hidden">
      <div className="flex justify-between items-center mb-8">
        <div>
      
          <h2 className="text-3xl font-bold tracking-tight">Featured Collections</h2>
        </div>
        <p className="text-muted-foreground hidden md:block">Swipe to explore our top picks</p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full "
      >
        <CarouselContent className="-ml-4">
          {products.map((product) => (
            <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <Card className="h-full overflow-hidden border border-border/40 transition-all duration-200  hover:border-primary/20 hover:shadow-lg">
                <div className="relative">
                  <Badge className="absolute top-3 right-3 bg-primary/90 hover:bg-primary">{product.category}</Badge>
                  <div className="aspect-square w-full overflow-hidden bg-gray-100 ">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105 "
                      loading="lazy"
                    />
                  </div>
                </div>
                <Button
                      size="icon"
                      variant="ghost"
                      className="absolute right-2 top-2 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm bg-red-600 "
                    >
                      <Heart className="h-4 w-4" />
                      <span className="sr-only">Add to wishlist</span>
                    </Button>
                <CardContent className="p-6">
                  <CardTitle className="line-clamp-1 text-base font-semibold">{product.name}</CardTitle>
                  <div className="mt-2 flex items-center space-x-1">
                    {renderRating(product.rating)}
                    <span className="ml-1 text-xs text-muted-foreground">({product.rating})</span>
                  </div>
                  <p className="mt-4 font-bold text-lg">{product.price}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full transition-all hover:bg-primary/90" size="sm">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-1 sm:left-2 shadow-md bg-black" />
        <CarouselNext className="right-1 sm:right-2 shadow-md bg-black" />
      </Carousel>
    </div>
  )
}
