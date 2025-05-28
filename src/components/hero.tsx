

// // src\components\hero.tsx
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShoppingBag } from "lucide-react"

export async function Hero() {
  const res = await fetch("http://127.0.0.1:8000/")
  const data = await res.json()
  console.log("data😁",data);
  
  const product1 = data[5]
   
  return (
    <section className="w-full py-12 md:py-24 lg:py-32  relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black-500 via-purple-800 to-gray-800 animate-gradient-x z-0"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-15 ml-10">
                Discover Your Style, Elevate Your Life
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 ml-10">
                Shop the latest trends with confidence. Quality products, exceptional service, and fast delivery.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row ">
              <Button className="inline-flex items-center gap-2 mt-5 ml-8">
                Shop Now <ShoppingBag className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="inline-flex items-center gap-2 mt-5 hover:bg-gray-100 dark:hover:bg-gray-800">
                Explore Collections <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center ">
            <Image
              src={product1.image}
              width={550}
              height={550}
              alt="Hero Image"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
// https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg?cs=srgb&dl=pexels-rethaferguson-3059609.jpg&fm=jpg

//const product1 = data[9]





















// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { ArrowRight, ShoppingBag } from "lucide-react"

// export async function Hero() {
//   const res = await fetch("http://127.0.0.1:8000/")
//   const data = await res.json()
//   console.log("data😁", data);

//   // Select a random product from the data
//   const randomProduct = data[Math.floor(Math.random() * data.length)];

//   return (
//     <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
//       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black-500 via-purple-800 to-gray-700 animate-gradient-x z-0"></div>
//       <div className="container px-4 md:px-6 relative z-10">
//         <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
//           <div className="flex flex-col justify-center space-y-4">
//             <div className="space-y-2">
//               <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-15">
//                 Discover Your Style, Elevate Your Life
//               </h1>
//               <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
//                 Shop the latest trends with confidence. Quality products, exceptional service, and fast delivery.
//               </p>
//             </div>
//             <div className="flex flex-col gap-2 min-[400px]:flex-row ">
//               <Button className="inline-flex items-center gap-2 mt-5">
//                 Shop Now <ShoppingBag className="h-4 w-4" />
//               </Button>
//               <Button variant="outline" className="inline-flex items-center gap-2 mt-5 hover:bg-gray-100 dark:hover:bg-gray-800">
//                 Explore Collections <ArrowRight className="h-4 w-4" />
//               </Button>
//             </div>
//           </div>
//           <div className="flex items-center justify-center ">
//             {/* Use the image of the random product */}
//             <Image
//               src={randomProduct.image}
//               width={550}
//               height={550}
//               alt="Hero Image"
//               className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }











