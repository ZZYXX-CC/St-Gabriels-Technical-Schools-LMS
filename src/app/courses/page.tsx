"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, Star, Users, X } from "lucide-react";
import Link from "next/link";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Navigation } from "@/components/layout/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { motion } from "framer-motion";
import { BookOpen, Clock, ChevronRight } from "lucide-react";

const categories = [
  { id: "1", name: "All" },
  { id: "2", name: "Programming" },
  { id: "3", name: "Design" },
  { id: "4", name: "Business" },
];

const levels = [
  { id: "all", name: "All Levels" },
  { id: "beginner", name: "Beginner" },
  { id: "intermediate", name: "Intermediate" },
  { id: "advanced", name: "Advanced" },
];

const currencies = [
  { code: "USD" as const, symbol: "$", name: "US Dollar" },
  { code: "NGN" as const, symbol: "₦", name: "Nigerian Naira" },
  { code: "GBP" as const, symbol: "£", name: "British Pound" },
  { code: "EUR" as const, symbol: "€", name: "Euro" },
] as const;

const exchangeRates = {
  USD: 1,
  NGN: 1200,
  GBP: 0.8,
  EUR: 0.93,
} as const;

const sortOptions = [
  { id: "popular", name: "Most Popular" },
  { id: "newest", name: "Newest" },
  { id: "price-low", name: "Price: Low to High" },
  { id: "price-high", name: "Price: High to Low" },
  { id: "rating", name: "Highest Rated" },
];

const courses = [
  {
    id: "1",
    title: "Introduction to Web Development",
    instructor: "John Smith",
    price: 49.99,
    rating: 4.8,
    numStudents: 1234,
    category: "Programming",
    level: "beginner",
    categoryId: "2",
    createdAt: "2024-03-15",
  },
  {
    id: "2",
    title: "Advanced React and Next.js",
    instructor: "Sarah Johnson",
    price: 79.99,
    rating: 4.9,
    numStudents: 856,
    category: "Programming",
    level: "advanced",
    categoryId: "2",
    createdAt: "2024-03-20",
  },
  {
    id: "3",
    title: "UI/UX Design Fundamentals",
    instructor: "Michael Brown",
    price: 59.99,
    rating: 4.7,
    numStudents: 2345,
    category: "Design",
    level: "intermediate",
    categoryId: "3",
    createdAt: "2024-03-18",
  },
  {
    id: "4",
    title: "Business Analytics",
    instructor: "Emily Davis",
    price: 69.99,
    rating: 4.6,
    numStudents: 1567,
    category: "Business",
    level: "intermediate",
    categoryId: "4",
    createdAt: "2024-03-19",
  },
];

type CurrencyCode = keyof typeof exchangeRates;

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("1");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currency, setCurrency] = useState<CurrencyCode>("USD");
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("popular");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [ratingFilter, setRatingFilter] = useState(0);

  const filteredCourses = courses
    .filter((course) => {
      const matchesCategory = selectedCategory === "1" || course.categoryId === selectedCategory;
      const matchesLevel = selectedLevel === "all" || course.level === selectedLevel;
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice = course.price >= priceRange[0] && course.price <= priceRange[1];
      const matchesRating = course.rating >= ratingFilter;
      return matchesCategory && matchesLevel && matchesSearch && matchesPrice && matchesRating;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return b.numStudents - a.numStudents;
      }
    });

  const formatPrice = (price: number) => {
    const convertedPrice = price * exchangeRates[currency];
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(convertedPrice);
  };

  const clearFilters = () => {
    setSelectedCategory("1");
    setSelectedLevel("all");
    setSearchQuery("");
    setPriceRange([0, 100]);
    setRatingFilter(0);
    setSortBy("popular");
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="px-6 pt-6 pb-4 sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search courses..."
            className="pl-10 pr-10 bg-card"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="space-x-2 overflow-x-auto whitespace-nowrap pb-4"
          >
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="first:ml-0"
              >
                {category.name}
              </Button>
            ))}
          </motion.div>
        )}
      </header>

      <main className="flex-1 px-6 pb-16">
        <div className="grid gap-4">
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden">
                <div className="aspect-video relative bg-primary/10">
                  <PlaceholderImage text={course.title} />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">{course.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {course.instructor}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.level}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>{course.rating}</span>
                    </div>
                    <div>{course.numStudents.toLocaleString()} students</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">
                      {formatPrice(course.price)}
                    </div>
                    <Link href={`/courses/${course.id}`}>
                      <Button variant="outline" size="sm">
                        View Course
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>

      <Navigation />
    </div>
  );
} 