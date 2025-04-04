"use client";

import { useState, useEffect } from "react";
import { Home, BookOpen, User, Search, Bell, Play, Clock, ChevronRight, X, Settings, LogOut, Globe, CreditCard, Lock, HelpCircle, Code, Paintbrush, BarChart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Navigation } from "@/components/layout/navigation";
import { ModeToggle } from "@/components/mode-toggle";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

const trendingCourses = [
  {
    id: 1,
    title: "UX Master Course",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=3264&ixlib=rb-4.0.3",
    color: "bg-[#FFA500]/10",
    href: "/courses/ux-master",
  },
  {
    id: 2,
    title: "Development Course",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=3274&ixlib=rb-4.0.3",
    color: "bg-[#00A896]/10",
    href: "/courses/development",
  },
];

const bestOfWeek = [
  {
    id: 1,
    title: "App Design",
    lessons: "15/25 Lessons",
    rating: 4,
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=3270&ixlib=rb-4.0.3",
    href: "/courses/app-design",
  },
  {
    id: 2,
    title: "User Interface",
    lessons: "48/55 Lessons",
    rating: 4,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=3264&ixlib=rb-4.0.3",
    href: "/courses/user-interface",
  },
  {
    id: 3,
    title: "Art & Illustrations",
    lessons: "25/30 Lessons",
    rating: 4,
    image: "https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&q=80&w=3274&ixlib=rb-4.0.3",
    href: "/courses/art-illustrations",
  },
];

// This would come from your API in a real application
const continueLearning = [
  {
    id: 1,
    title: "Mobile App Development",
    instructor: "Jane Smith",
    thumbnail: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=3270&ixlib=rb-4.0.3",
    progress: 65,
    lastAccessed: "2 hours ago",
    totalDuration: "8h 30m",
    currentLesson: "Building User Interfaces",
  },
  {
    id: 2,
    title: "Web Development Fundamentals",
    instructor: "John Doe",
    thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=3274&ixlib=rb-4.0.3",
    progress: 30,
    lastAccessed: "1 day ago",
    totalDuration: "12h 15m",
    currentLesson: "HTML & CSS Basics",
  },
];

const featuredCourses = [
  {
    id: 1,
    title: "Mobile App Development",
    instructor: "Jane Smith",
    thumbnail: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=3270&ixlib=rb-4.0.3",
    duration: "8h 30m",
    totalLessons: 24,
    category: "Programming",
    price: 59.99,
  },
  {
    id: 2,
    title: "Web Development Fundamentals",
    instructor: "John Doe",
    thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=3274&ixlib=rb-4.0.3",
    duration: "12h 15m",
    totalLessons: 32,
    category: "Programming",
    price: 49.99,
  },
  {
    id: 3,
    title: "UX Design Principles",
    instructor: "Sarah Wilson",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=3264&ixlib=rb-4.0.3",
    duration: "6h 45m",
    totalLessons: 18,
    category: "Design",
    price: 39.99,
  },
];

const user = {
  name: "Samuel Chris",
  email: "samuel.chris@example.com",
  avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=2960&ixlib=rb-4.0.3",
  role: "Student",
  progress: {
    completed: 12,
    inProgress: 3,
    totalCourses: 15,
  },
  stats: {
    hoursLearned: 45,
    certificatesEarned: 3,
    coursesCompleted: 12,
  },
};

const continueWatching = [
  {
    id: 1,
    title: "Introduction to React Native",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
    progress: 65,
    lastWatched: "Module 3: Navigation",
    timeLeft: "2h 15m left",
  },
  {
    id: 2,
    title: "Advanced TypeScript Patterns",
    thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=3274&ixlib=rb-4.0.3",
    progress: 45,
    lastWatched: "Module 2: Generics",
    timeLeft: "3h 30m left",
  },
];

const popularCategories = [
  {
    id: 1,
    name: "Programming",
    icon: Code,
    color: "#424874",
    courses: 125,
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=3274&ixlib=rb-4.0.3",
  },
  {
    id: 2,
    name: "Design",
    icon: Paintbrush,
    color: "#a6b1e1",
    courses: 98,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=3264&ixlib=rb-4.0.3",
  },
  {
    id: 3,
    name: "Business",
    icon: BarChart,
    color: "#dcd6f7",
    courses: 75,
    image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
  },
  {
    id: 4,
    name: "Marketing",
    icon: TrendingUp,
    color: "#cacfd6",
    courses: 42,
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=3270&ixlib=rb-4.0.3",
  },
];

export default function HomePage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [isReturningUser, setIsReturningUser] = useState(false);
  const [lastAccessedCourse, setLastAccessedCourse] = useState<any>(null);

  useEffect(() => {
    // In a real app, this would check the user's auth status and fetch their data
    // For now, we'll simulate a returning user if they have courses in progress
    if (continueLearning.length > 0) {
      setIsReturningUser(true);
      setLastAccessedCourse(continueLearning[0]);
    }
  }, []);

  return (
    <div className="flex-1 flex flex-col">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5">
            <div className="relative z-10 p-8 md:p-12">
              {isReturningUser ? (
                <>
                  <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    Welcome back to your learning journey
                  </h1>
                  <p className="text-muted-foreground max-w-md text-lg mb-8">
                    {lastAccessedCourse ? (
                      <>
                        Continue where you left off with{" "}
                        <span className="font-medium text-foreground">
                          {lastAccessedCourse.title}
                        </span>
                        . You're {lastAccessedCourse.progress}% through the course.
                      </>
                    ) : (
                      "Ready to continue learning? Your courses are waiting for you."
                    )}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {lastAccessedCourse ? (
                      <Button size="lg" asChild>
                        <Link href={`/courses/${lastAccessedCourse.id}`}>
                          <Play className="h-5 w-5 mr-2" />
                          Continue Learning
                        </Link>
                      </Button>
                    ) : (
                      <Button size="lg" asChild>
                        <Link href="/courses">
                          <BookOpen className="h-5 w-5 mr-2" />
                          My Courses
                        </Link>
                      </Button>
                    )}
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-primary/20 hover:bg-primary/10"
                      asChild
                    >
                      <Link href="/saved">
                        <BookOpen className="h-5 w-5 mr-2" />
                        Saved Courses
                      </Link>
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    Welcome to SGT Learn
                  </h1>
                  <p className="text-muted-foreground max-w-md text-lg mb-8">
                    Empowering students with quality technical education.
                    Start your learning journey with St. Gabriel's Technical Schools today.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" asChild>
                      <Link href="/courses">
                        <BookOpen className="h-5 w-5 mr-2" />
                        Browse Courses
                      </Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-primary/20 hover:bg-primary/10"
                      onClick={() => setShowVideoModal(true)}
                    >
                      <Play className="h-5 w-5 mr-2" />
                      Watch Demo
                    </Button>
                  </div>
                </>
              )}
            </div>
            <div className="absolute inset-0 z-0 opacity-10">
              <div className="absolute inset-0 bg-[linear-gradient(110deg,#424874,#a6b1e1)]" />
              <div className="absolute right-0 top-0 h-full w-1/2">
                <svg viewBox="0 0 100 100" className="h-full w-full" preserveAspectRatio="none">
                  <circle cx="80" cy="20" r="30" fill="#dcd6f7" />
                  <circle cx="60" cy="70" r="20" fill="#a6b1e1" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Continue Learning Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Continue Learning</h2>
            <Button variant="link" className="text-primary">
              View all
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {continueLearning.map((course) => (
              <Link key={course.id} href={`/courses/${course.id}`}>
                <Card className="h-full hover:bg-accent/5 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                        <img
                          src={course.thumbnail}
                          alt={course.title}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Play className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-medium mb-2">{course.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{course.instructor}</p>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Progress</span>
                            <span>{course.progress}%</span>
                          </div>
                          <div className="h-2 bg-secondary rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary"
                              style={{ width: `${course.progress}%` }}
                            />
                          </div>
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4" />
                              <span>{course.lastAccessed}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <BookOpen className="h-4 w-4" />
                              <span>{course.totalDuration}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Courses Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Featured Courses</h2>
            <Button variant="link" className="text-primary">
              View all
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredCourses.map((course) => (
              <Link key={course.id} href={`/courses/${course.id}`}>
                <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <Badge className="bg-[#424874] text-[#dcd6f7] hover:bg-[#424874]/90">
                          {course.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-medium mb-2">{course.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{course.instructor}</p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-[#a6b1e1]" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-[#a6b1e1]" />
                          <span>{course.totalLessons} lessons</span>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t flex items-center justify-between">
                        <span className="font-medium">${course.price}</span>
                        <Button variant="secondary" size="sm">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Popular Categories Section */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold mb-6">Popular Categories</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {popularCategories.map((category) => (
              <Card key={category.id} className="group hover:bg-accent/5 transition-colors overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-2 rounded-full bg-[#424874]/20">
                          <category.icon className="h-5 w-5 text-[#dcd6f7]" />
                        </div>
                        <h3 className="font-medium text-lg text-foreground">{category.name}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {category.courses} courses
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <Dialog open={showVideoModal} onOpenChange={setShowVideoModal}>
        <DialogContent className="sm:max-w-[800px]">
          <div className="aspect-video">
            <iframe
              src="https://www.youtube.com/embed/demo"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
} 