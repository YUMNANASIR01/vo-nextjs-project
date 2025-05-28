"use client"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart } from "lucide-react"
import { useEffect, useState } from "react"

interface IProduct {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
}

export default function BestSellingProducts() {
  const [products , setProduct] = useState<IProduct[]>([])

  useEffect(() => {
    async function FetchFeaturedProducts() {
      const response  = await  fetch("http://127.0.0.1:8000/best_selling_Products")
      const data = await response.json();
      setProduct(data);
    }
    FetchFeaturedProducts()
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-12 overflow-hidden">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Our Best Sellers</h2>
        </div>
        <p className="text-muted-foreground hidden md:block">View all</p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {products.map((product: IProduct, index: number) => (
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
                  {/* Rating removed */}
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
