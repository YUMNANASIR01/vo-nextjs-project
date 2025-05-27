// src\app\shop\page.tsx
import ProductList from "@/components/product-list"
import ProductListSkeleton from "@/components/product-list-skeleton"
import { Suspense } from "react"


export const metadata = {
  title: "Products | Your Store",
  description: "Browse our collection of amazing products",
}

export default function ProductsPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <Suspense fallback={<ProductListSkeleton />}>
        <ProductList />
      </Suspense>
    </div>
  )
}
