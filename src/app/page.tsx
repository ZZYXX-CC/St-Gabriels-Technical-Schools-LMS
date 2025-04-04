"use client";

import { useState } from "react";
import { Home, BookOpen, User, Search, Bell, Play, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Navigation } from "@/components/layout/navigation";
import { ModeToggle } from "@/components/mode-toggle";

const trendingCourses = [
  {
    id: 1,
    title: "UX Master Course",
    image: "/ux-master.png",
    color: "bg-[#FFA500]/10",
    href: "/courses/ux-master",
  },
  {
    id: 2,
    title: "Development Course",
    image: "/dev-course.png",
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
    href: "/courses/app-design",
  },
  {
    id: 2,
    title: "User Interface",
    lessons: "48/55 Lessons",
    rating: 4,
    href: "/courses/user-interface",
  },
  {
    id: 3,
    title: "Art & Illustrations",
    lessons: "25/30 Lessons",
    rating: 4,
    href: "/courses/art-illustrations",
  },
];

// This would come from your API in a real application
const continueLearning = [
  {
    id: 1,
    title: "Mobile App Development",
    instructor: "Jane Smith",
    thumbnail: "/mobile-dev.jpg",
    progress: 65,
    lastAccessed: "2 hours ago",
    totalDuration: "8h 30m",
    currentLesson: "Building User Interfaces",
  },
  {
    id: 2,
    title: "Web Development Fundamentals",
    instructor: "John Doe",
    thumbnail: "/web-dev.jpg",
    progress: 30,
    lastAccessed: "1 day ago",
    totalDuration: "12h 15m",
    currentLesson: "HTML & CSS Basics",
  },
];

const popularCategories = [
  { id: 1, title: "Programming", count: 12 },
  { id: 2, title: "Design", count: 8 },
  { id: 3, title: "Business", count: 6 },
  { id: 4, title: "Marketing", count: 4 },
];

const featuredCourses = [
  {
    id: 1,
    title: "Mobile App Development",
    instructor: "Jane Smith",
    price: 59.99,
    thumbnail: "/mobile-dev.jpg",
  },
  {
    id: 2,
    title: "Web Development Fundamentals",
    instructor: "John Doe",
    price: 49.99,
    thumbnail: "/web-dev.jpg",
  },
];

export default function HomePage() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="px-6 pt-6 pb-4 flex items-center justify-between">
        <Link href="/profile" className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/avatar.png" alt="Shahzaib Amad" />
            <AvatarFallback>SA</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-base font-medium">Shahzaib Amad</h1>
            <p className="text-xs text-muted-foreground">@szabi107</p>
          </div>
        </Link>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Link href="/notifications">
            <Button size="icon" variant="ghost">
              <Bell className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 pb-16 space-y-8">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search here..." 
            className="pl-10 bg-card border-none text-foreground placeholder:text-muted-foreground"
          />
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-2xl bg-primary/10">
          <div className="relative z-10 p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-2 text-primary">Welcome to SGT Learn</h2>
            <p className="text-muted-foreground max-w-md mb-6">
              Empowering students with quality technical education. Start your learning journey with St. Gabriel's Technical Schools today.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <BookOpen className="h-4 w-4 mr-2" />
                Browse Courses
              </Button>
              <Button variant="outline" className="border-primary/20 hover:bg-primary/10">
                <Play className="h-4 w-4 mr-2" />
                Watch Demo
              </Button>
            </div>
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
        </section>

        {/* Continue Learning */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-base font-medium">Continue Learning</h2>
            <Button variant="link" className="text-xs text-muted-foreground hover:text-foreground p-0">
              View all
            </Button>
          </div>
          <div className="grid gap-6">
            {continueLearning.map((course) => (
              <Link key={course.id} href={`/courses/${course.id}`}>
                <Card className="bg-card border-none hover:bg-accent/10 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                        <Play className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium mb-1">{course.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{course.instructor}</p>
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
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <ChevronRight className="h-4 w-4" />
                            <span>{course.currentLesson}</span>
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

        {/* Trending Courses */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-medium">Trending courses</h2>
            <Button variant="link" className="text-xs text-muted-foreground hover:text-foreground p-0">
              View all
            </Button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6">
            {trendingCourses.map((course) => (
              <Link key={course.id} href={course.href} className="flex-shrink-0 w-[260px]">
                <Card className="bg-card border-none h-[140px] hover:bg-accent/10 transition-colors">
                  <CardContent className="p-4 h-full">
                    <div className="flex flex-col justify-between h-full">
                      <span className="inline-block px-2 py-1 text-xs bg-primary/10 text-primary rounded-full w-fit">
                        Trendy
                      </span>
                      <div>
                        <h3 className="font-medium mb-1">{course.title}</h3>
                        <p className="text-sm text-muted-foreground">1,500+ students</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Best of the week */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-medium">Best of the week</h2>
            <Button variant="link" className="text-xs text-muted-foreground hover:text-foreground p-0">
              View all
            </Button>
          </div>
          <div className="space-y-4">
            {bestOfWeek.map((course) => (
              <Link key={course.id} href={course.href}>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-card rounded-lg flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium mb-1">{course.title}</h3>
                    <p className="text-sm text-muted-foreground">{course.lessons}</p>
                    <div className="flex items-center gap-1 text-[#FFA500]">
                      {"★".repeat(course.rating)}
                      {"☆".repeat(5 - course.rating)}
                    </div>
                  </div>
                  <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-foreground">
                    <Play className="h-5 w-5" />
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-card border-t border-border">
        <div className="grid grid-cols-3 h-full">
          <Link href="/" className="flex items-center justify-center">
            <Button 
              variant="ghost" 
              className={`flex flex-col items-center justify-center h-full w-full rounded-none ${
                pathname === "/" ? "text-foreground" : "text-muted-foreground"
              } hover:text-foreground hover:bg-accent/10`}
            >
              <Home className="h-5 w-5" />
              <span className="text-xs mt-1">Home</span>
            </Button>
          </Link>
          <Link href="/courses" className="flex items-center justify-center">
            <Button 
              variant="ghost" 
              className={`flex flex-col items-center justify-center h-full w-full rounded-none ${
                pathname === "/courses" ? "text-foreground" : "text-muted-foreground"
              } hover:text-foreground hover:bg-accent/10`}
            >
              <BookOpen className="h-5 w-5" />
              <span className="text-xs mt-1">Courses</span>
            </Button>
          </Link>
          <Link href="/profile" className="flex items-center justify-center">
            <Button 
              variant="ghost" 
              className={`flex flex-col items-center justify-center h-full w-full rounded-none ${
                pathname === "/profile" ? "text-foreground" : "text-muted-foreground"
              } hover:text-foreground hover:bg-accent/10`}
            >
              <User className="h-5 w-5" />
              <span className="text-xs mt-1">Profile</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
} 