"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  return (
    <div className="pl-8 lg:pl-12">
      <div className="bg-white/95 backdrop-blur-sm rounded-l-lg shadow-sm w-full pr-8 lg:pr-12">
        <header className="h-16 flex items-center justify-between pl-8 lg:pl-12">
          <Link href="/" className="flex items-center gap-3">
            {/* Star-like logo similar to screenshot */}
            <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
              <div className="w-6 h-6 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-1 h-6 bg-white transform rotate-0"></div>
                  <div className="absolute w-1 h-6 bg-white transform rotate-45"></div>
                  <div className="absolute w-1 h-6 bg-white transform rotate-90"></div>
                  <div className="absolute w-1 h-6 bg-white transform rotate-135"></div>
                </div>
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-black hover:text-stg-sky-blue transition-colors uppercase tracking-wide"
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-black hover:text-stg-sky-blue transition-colors uppercase tracking-wide"
            >
              ABOUT US
            </Link>
            <Link
              href="/admissions"
              className="text-sm font-medium text-black hover:text-stg-sky-blue transition-colors uppercase tracking-wide"
            >
              ADMISSIONS
            </Link>
            <Link
              href="/programs"
              className="text-sm font-medium text-black hover:text-stg-sky-blue transition-colors uppercase tracking-wide"
            >
              PROGRAMS
            </Link>
            <Link
              href="https://st-gabriels-technical-schools-lms.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-black hover:text-stg-sky-blue transition-colors uppercase tracking-wide"
            >
              ONLINE COURSES
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-black hover:text-stg-sky-blue transition-colors uppercase tracking-wide"
            >
              CONTACT
            </Link>
          </nav>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden bg-white text-black border-gray-300">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 py-6">
                <Link href="/" className="text-lg font-semibold hover:text-stg-sky-blue transition-colors">
                  Home
                </Link>
                <Link href="/about" className="text-lg font-semibold hover:text-stg-sky-blue transition-colors">
                  About Us
                </Link>
                <Link href="/admissions" className="text-lg font-semibold hover:text-stg-sky-blue transition-colors">
                  Admissions
                </Link>
                <Link href="/programs" className="text-lg font-semibold hover:text-stg-sky-blue transition-colors">
                  Programs
                </Link>
                <Link
                  href="https://st-gabriels-technical-schools-lms.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold hover:text-stg-sky-blue transition-colors"
                >
                  Online Courses
                </Link>
                <Link href="/contact" className="text-lg font-semibold hover:text-stg-sky-blue transition-colors">
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </header>
      </div>
    </div>
  )
}
