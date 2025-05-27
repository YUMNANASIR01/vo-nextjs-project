"use client"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart, Star } from "lucide-react"
import { useEffect, useState } from "react"


interface IProduct {
  id: number;
  name: string;
  price: string;
  image: string;
  rating: number;
  category: string;
}

export default function BestSellingProducts() {
    const [products , setProduct] = useState<IProduct[]>([])
    useEffect(() => {
      async function FetchFeaturedProducts() {
      const response  = await  fetch("http://127.0.0.1:8000/best_selling_Products")
      const data = await response.json();
      setProduct(data);
      
      }  FetchFeaturedProducts() 
    }, []);
  // Enhanced product data with real images and additional information
  // const products: Product[] = [
  //   { 
  //     id: 1, 
  //     name: "Guess Seductive Women", 
  //     price: "Rs.8,380.00",
  //     image: "https://perfumeonline.pk/cdn/shop/files/85715320100-1_480x_crop_center.jpg?v=1728893301",
  //     rating: 4.8,
  //     category: "Audio"
  //   },
  //   { 
  //     id: 2, 
  //     name: "Lattafa Yara Moi Women", 
  //     price: "Rs.5,453.00",
  //     image: "https://perfumeonline.pk/cdn/shop/files/6290360591421_480x.jpg?v=1730288322",
  //     rating: 4.7,
  //     category: "Wearables"
  //   },
  //   { 
  //     id: 3, 
  //     name: "Lattafa Fakhar For Women", 
  //     price: "Rs.4,500.00",
  //     image: "https://perfumeonline.pk/cdn/shop/files/3607342306134-1_eaae4c6e-60b9-4d4f-b030-6224ee03ab15_480x_crop_center.jpg?v=1705069369",
  //     rating: 4.6,
  //     category: "Audio"
  //   },
  //   { 
  //     id: 4, 
  //     name: "Christian Dior Miss Dior", 
  //     price: "Rs.49,875.00",
  //     image: "https://perfumeonline.pk/cdn/shop/products/3348900871991_480x.jpg?v=1705054917",
  //     rating: 4.4,
  //     category: "Accessories"
  //   },
  //   { 
  //     id: 5, 
  //     name: "Charlie Revlon Silver EDT Perfume", 
  //     price: "Rs.1,793.00",
  //     image: "https://perfumeonline.pk/cdn/shop/files/2003621_800x600_b_480x.jpg?v=1705142333",
  //     rating: 4.9,
  //     category: "Peripherals"
  //   },
  //   { 
  //     id: 6, 
  //     name: "Jaguar Classic Black Edt Perfume", 
  //     price: "Rs.5,596.50",
  //     image: "https://perfumeonline.pk/cdn/shop/products/3562700373145_300x.jpg?v=1706783316",
  //     rating: 4.7,
  //     category: "Peripherals"
  //   },
  //   { 
  //     id: 7, 
  //     name: "Jovan White Musk Edc Perfume", 
  //     price: "Rs.2,009.00",
  //     image: "https://perfumeonline.pk/cdn/shop/files/resources.commerceup_dfccc6a4-4fcb-4694-9d61-23619c08db27_300x_crop_center.jpg?v=1728473447",
  //     rating: 4.5,
  //     category: "Accessories"
  //   },
  //   { 
  //     id: 8, 
  //     name: "Addiction", 
  //     price: "Rs.2,990",
  //     image: "https://scentsnstories.pk/cdn/shop/files/Addictioncopy_1_11zon.webp?v=1735758190&width=540",
  //     rating: 4.6,
  //     category: "Accessories",
  //   },
  // ]

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
       
          <h2 className="text-3xl font-bold tracking-tight">Our Best Sellers</h2>
        </div>
        <p className="text-muted-foreground hidden md:block">
        View all</p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {products.map((product: IProduct,index: number) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <Card className="h-full overflow-hidden border border-border/40 transition-all duration-200 hover:border-primary/20 hover:shadow-lg">
                <div className="relative">
                  <Badge className="absolute top-3 right-3 bg-primary/90 hover:bg-primary">{product.category}</Badge>
                  <div className="aspect-square w-full overflow-hidden bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
                <Button
                      size="icon"
                      variant="ghost"
                      className="absolute right-2 top-2 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm bg-red-600"
                    >
                      <Heart className="h-4 w-4 " />
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
                <CardFooter className="p-4 pt-0 ">
                  <Button className="w-full transition-all hover:bg-primary/90 bg-white text-black font-bold hover:bg-gray-300" size="sm">
                    <ShoppingCart className="h-4 w-4 mr-2 " />
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
