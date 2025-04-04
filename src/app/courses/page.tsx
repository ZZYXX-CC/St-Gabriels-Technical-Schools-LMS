"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, Star, Users, X, ChevronDown, ChevronUp, Clock, BookOpen, Trophy, TrendingUp, Zap, Play } from "lucide-react";
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
import { motion, AnimatePresence } from "framer-motion";
import { DollarSign, Globe } from "lucide-react";
import { Sidebar } from "@/components/layout/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

const categories = [
  { id: "all", name: "All Courses", count: 24 },
  { id: "programming", name: "Programming", count: 12 },
  { id: "design", name: "Design", count: 8 },
  { id: "business", name: "Business", count: 6 },
  { id: "marketing", name: "Marketing", count: 4 },
  { id: "data-science", name: "Data Science", count: 3 },
  { id: "ai", name: "AI & Machine Learning", count: 2 },
] as const;

const levels = ["All", "Beginner", "Intermediate", "Advanced"] as const;
const languages = ["All", "English", "French", "Spanish", "German"] as const;

const currencies = [
  { code: "NGN", symbol: "₦" },
  { code: "USD", symbol: "$" },
  { code: "EUR", symbol: "€" },
  { code: "GBP", symbol: "£" },
] as const;

const exchangeRates = {
  NGN: 1,
  USD: 0.0007,
  EUR: 0.0006,
  GBP: 0.0005,
} as const;

const sortOptions = [
  { id: "popular", name: "Most Popular" },
  { id: "newest", name: "Newest" },
  { id: "price-low", name: "Price: Low to High" },
  { id: "price-high", name: "Price: High to Low" },
  { id: "rating", name: "Highest Rated" },
];

type Course = {
  id: number;
  title: string;
  instructor: string;
  thumbnail: string;
  duration: string;
  totalLessons: number;
  category: string;
  price: number;
};

const courses: Course[] = [
  {
    id: 1,
    title: "Mobile App Development",
    instructor: "Jane Smith",
    thumbnail: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=3270&ixlib=rb-4.0.3",
    duration: "8h 30m",
    totalLessons: 24,
    category: "programming",
    price: 59.99,
  },
  {
    id: 2,
    title: "Web Development Fundamentals",
    instructor: "John Doe",
    thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=3274&ixlib=rb-4.0.3",
    duration: "12h 15m",
    totalLessons: 32,
    category: "programming",
    price: 49.99,
  },
  {
    id: 3,
    title: "UX Design Principles",
    instructor: "Sarah Wilson",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=3264&ixlib=rb-4.0.3",
    duration: "6h 45m",
    totalLessons: 18,
    category: "design",
    price: 39.99,
  },
  {
    id: 4,
    title: "Data Science Essentials",
    instructor: "Michael Chen",
    thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=3270&ixlib=rb-4.0.3",
    duration: "10h 30m",
    totalLessons: 28,
    category: "data-science",
    price: 69.99,
  },
  {
    id: 5,
    title: "AI for Beginners",
    instructor: "Emily Rodriguez",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=3270&ixlib=rb-4.0.3",
    duration: "8h 45m",
    totalLessons: 22,
    category: "ai",
    price: 79.99,
  },
  {
    id: 6,
    title: "Digital Marketing Fundamentals",
    instructor: "David Thompson",
    thumbnail: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=3270&ixlib=rb-4.0.3",
    duration: "7h 15m",
    totalLessons: 20,
    category: "marketing",
    price: 44.99,
  },
];

type CurrencyCode = (typeof currencies)[number]["code"];

const featuredInstructors = [
  {
    id: 1,
    name: "Jane Smith",
    role: "Mobile Development Expert",
    rating: 4.8,
    students: 1234,
    courses: 5,
  },
  {
    id: 2,
    name: "John Doe",
    role: "Web Development Instructor",
    rating: 4.7,
    students: 856,
    courses: 3,
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Digital Marketing Specialist",
    rating: 4.9,
    students: 1023,
    courses: 4,
  },
];

const upcomingWebinars = [
  {
    id: 1,
    title: "Modern Web Development",
    date: "Apr 15, 2024",
    time: "2:00 PM",
    instructor: "Robert Garcia",
  },
  {
    id: 2,
    title: "UI/UX Design Trends 2024",
    date: "Apr 18, 2024",
    time: "3:30 PM",
    instructor: "Lisa Chen",
  },
];

const user = {
  name: "Samuel Chris",
  email: "samuel.chris@example.com",
  avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=2960&ixlib=rb-4.0.3",
};

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState<typeof levels[number]>("All");
  const [selectedLanguage, setSelectedLanguage] = useState<typeof languages[number]>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyCode>("NGN");
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("popular");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [ratingFilter, setRatingFilter] = useState(0);

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatPrice = (price: number) => {
    const convertedPrice = price * exchangeRates[selectedCurrency];
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(convertedPrice);
  };

  const clearFilters = () => {
    setSelectedCategory("all");
    setSelectedLevel("All");
    setSelectedLanguage("All");
    setSearchQuery("");
    setPriceRange([0, 100]);
    setRatingFilter(0);
    setSortBy("popular");
  };

  return (
    <div className="flex-1 flex flex-col">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="h-16 flex items-center justify-between gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 w-full"
                />
              </div>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <span className="hidden md:inline">Filters</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[300px]">
                <SheetHeader>
                  <SheetTitle>Filter Courses</SheetTitle>
                </SheetHeader>
                <div className="space-y-6 py-4">
                  <div className="space-y-2">
                    <Label>Category</Label>
                    <Select 
                      value={selectedCategory} 
                      onValueChange={(value: typeof categories[number]["id"]) => setSelectedCategory(value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Level</Label>
                    <Select 
                      value={selectedLevel} 
                      onValueChange={(value: typeof levels[number]) => setSelectedLevel(value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        {levels.map((level) => (
                          <SelectItem key={level} value={level}>
                            {level}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Language</Label>
                    <Select 
                      value={selectedLanguage} 
                      onValueChange={(value: typeof languages[number]) => setSelectedLanguage(value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        {languages.map((language) => (
                          <SelectItem key={language} value={language}>
                            {language}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Price Range</Label>
                    <div className="pt-2">
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={100}
                        step={1}
                        className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
                      />
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm text-muted-foreground">${priceRange[0]}</span>
                        <span className="text-sm text-muted-foreground">${priceRange[1]}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Sort By</Label>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        {sortOptions.map((option) => (
                          <SelectItem key={option.id} value={option.id}>
                            {option.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Currency</Label>
                    <Select 
                      value={selectedCurrency} 
                      onValueChange={(value: CurrencyCode) => setSelectedCurrency(value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                      <SelectContent>
                        {currencies.map((currency) => (
                          <SelectItem key={currency.code} value={currency.code}>
                            {currency.symbol} {currency.code}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button onClick={clearFilters} variant="outline" className="w-full">
                    Clear Filters
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1 pb-20 lg:pb-8">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col gap-8">
            {/* Header */}
            <div>
              <h1 className="text-3xl font-bold mb-2">Browse Courses</h1>
              <p className="text-muted-foreground">
                Explore our wide range of courses and start learning today
              </p>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="rounded-full"
                >
                  {category.name}
                  <Badge variant="secondary" className="ml-2 rounded-full">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>

            <div className="grid lg:grid-cols-[1fr,320px] gap-8">
              {/* Main Content */}
              <div className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredCourses.map((course) => (
                    <Link key={course.id} href={`/courses/${course.id}`}>
                      <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-border">
                        <CardContent className="p-0">
                          <div className="aspect-video relative overflow-hidden bg-[#424874]/5">
                            <img
                              src={course.thumbnail}
                              alt={course.title}
                              className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4">
                              <Badge className="bg-[#424874] text-[#dcd6f7] hover:bg-[#424874]/90">
                                {categories.find(c => c.id === course.category)?.name}
                              </Badge>
                            </div>
                          </div>
                          <div className="p-6">
                            <h3 className="font-medium mb-2 text-foreground">{course.title}</h3>
                            <p className="text-sm text-foreground/70 mb-4">{course.instructor}</p>
                            <div className="flex items-center justify-between text-sm text-foreground/60">
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-[#a6b1e1]" />
                                <span>{course.duration}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <BookOpen className="h-4 w-4 text-[#a6b1e1]" />
                                <span>{course.totalLessons} lessons</span>
                              </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                              <Badge variant="secondary" className="bg-[#424874]/10 text-foreground hover:bg-[#424874]/20">
                                {categories.find(c => c.id === course.category)?.name}
                              </Badge>
                              <span className="font-medium text-foreground">
                                ${course.price}
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="space-y-6 hidden lg:block">
                <Card>
                  <CardHeader>
                    <CardTitle>Top Instructors</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {featuredInstructors.map((instructor) => (
                      <div key={instructor.id} className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={user.avatar} />
                          <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">{user.name}</p>
                          <p className="text-sm text-muted-foreground truncate">
                            {user.email}
                          </p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <Calendar className="h-5 w-5 text-[#a6b1e1]" />
                      Upcoming Webinars
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {upcomingWebinars.map((webinar) => (
                      <div 
                        key={webinar.id} 
                        className="p-4 rounded-lg bg-gradient-to-br from-[#424874]/10 to-background/50 border border-[#a6b1e1]/20 hover:border-[#a6b1e1]/40 transition-all duration-300"
                      >
                        <h3 className="font-semibold text-foreground">{webinar.title}</h3>
                        <p className="text-sm text-foreground/80 flex items-center gap-2 mt-2">
                          <Avatar className="h-6 w-6">
                            <AvatarFallback className="bg-[#424874]/20 text-[#dcd6f7] text-xs">
                              {webinar.instructor.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          {webinar.instructor}
                        </p>
                        <div className="flex items-center gap-2 text-sm mt-3">
                          <Badge variant="secondary" className="bg-[#424874]/20 text-[#dcd6f7] hover:bg-[#424874]/30">
                            {webinar.date}
                          </Badge>
                          <Badge variant="secondary" className="bg-[#a6b1e1]/20 text-[#dcd6f7] hover:bg-[#a6b1e1]/30">
                            {webinar.time}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2 text-foreground">
                      <TrendingUp className="h-5 w-5 text-[#a6b1e1]" />
                      Platform Stats
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="p-6 rounded-lg bg-gradient-to-br from-[#424874]/10 to-background/50 border border-[#a6b1e1]/20">
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-full bg-[#424874]/20">
                              <Users className="h-5 w-5 text-[#dcd6f7]" />
                            </div>
                            <p className="text-3xl font-bold text-foreground tracking-tight">5,234</p>
                          </div>
                          <p className="text-sm text-foreground/70">Active Students</p>
                        </div>
                      </div>
                      <div className="p-6 rounded-lg bg-gradient-to-br from-[#424874]/10 to-background/50 border border-[#a6b1e1]/20">
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-full bg-[#424874]/20">
                              <BookOpen className="h-5 w-5 text-[#dcd6f7]" />
                            </div>
                            <p className="text-3xl font-bold text-foreground tracking-tight">128</p>
                          </div>
                          <p className="text-sm text-foreground/70">Total Courses</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-12">
                <div className="mb-4">
                  <BookOpen className="h-12 w-12 text-[#a6b1e1] mx-auto" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-[#424874]">No courses found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search or filter to find what you're looking for
                </p>
                <Button 
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                  className="bg-[#424874] hover:bg-[#424874]/90"
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
} 