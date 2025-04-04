"use client";

import { BookOpen, Clock, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

// This would come from your API in a real application
const savedCourses = [
  {
    id: 1,
    title: "Mobile App Development",
    instructor: "Jane Smith",
    thumbnail: "/mobile-dev.jpg",
    duration: "8h 30m",
    totalLessons: 24,
    lastSaved: "2 days ago",
  },
  {
    id: 2,
    title: "Web Development Fundamentals",
    instructor: "John Doe",
    thumbnail: "/web-dev.jpg",
    duration: "12h 15m",
    totalLessons: 32,
    lastSaved: "1 week ago",
  },
  {
    id: 3,
    title: "UX Design Principles",
    instructor: "Sarah Wilson",
    thumbnail: "/ux-design.jpg",
    duration: "6h 45m",
    totalLessons: 18,
    lastSaved: "2 weeks ago",
  }
];

export default function SavedCoursesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Saved Courses</h1>
          <p className="text-muted-foreground">
            Your collection of saved courses for later
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {savedCourses.map((course) => (
          <Link key={course.id} href={`/courses/${course.id}`}>
            <Card className="h-full hover:bg-accent/5 transition-colors">
              <CardContent className="p-6">
                <div className="aspect-video rounded-lg bg-primary/10 mb-4 flex items-center justify-center">
                  <Play className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-medium mb-2">{course.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{course.instructor}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    <span>{course.totalLessons} lessons</span>
                  </div>
                </div>
                <div className="mt-4 text-xs text-muted-foreground">
                  Saved {course.lastSaved}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {savedCourses.length === 0 && (
        <div className="text-center py-12">
          <div className="mb-4">
            <BookOpen className="h-12 w-12 text-muted-foreground mx-auto" />
          </div>
          <h3 className="text-lg font-medium mb-2">No saved courses yet</h3>
          <p className="text-muted-foreground mb-4">
            Start saving courses to access them later
          </p>
          <Button asChild>
            <Link href="/courses">Browse Courses</Link>
          </Button>
        </div>
      )}
    </div>
  );
} 