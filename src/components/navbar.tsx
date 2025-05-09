"use client"

import Link from "next/link"
import { Menu, ShoppingCart, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-4 mt-8 ">
                <Link href="/" className="text-lg font-medium">
                  Home
                </Link>
                <Link href="/products" className="text-lg font-medium">
                  Products
                </Link>
                <Link href="/categories" className="text-lg font-medium">
                  Categories
                </Link>
                <Link href="/about" className="text-lg font-medium">
                  About
                </Link>
                <Link href="/contact" className="text-lg font-medium">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="font-bold text-xl ml-20">
            SHOPIFY
          </Link>
          <nav className="hidden md:flex items-center gap-6 justify-center ml-100 ">
            <Link href="/" className="text-lg font-medium">
              Home
            </Link>
            <Link href="/products" className="text-lg font-medium">
              Products
            </Link>
            <Link href="/categories" className="text-lg font-medium">
              Categories
            </Link>
            <Link href="/about" className="text-lg font-medium">
              About
            </Link>
            <Link href="/contact" className="text-lg font-medium">
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
