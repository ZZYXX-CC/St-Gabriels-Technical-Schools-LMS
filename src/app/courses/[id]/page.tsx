"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/layout/navigation";
import {
  ChevronLeft,
  Play,
  Clock,
  Users,
  Star,
  Award,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  BookOpen,
  User,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// This would come from your API in a real application
const courseData = {
  id: 1,
  title: "Mobile App Development",
  description:
    "Learn to build mobile apps with React Native. This comprehensive course covers everything from the basics to advanced topics in mobile development.",
  instructor: {
    name: "Jane Smith",
    title: "Senior Mobile Developer",
    avatar: "/jane-smith.jpg",
  },
  duration: "8h 30m",
  rating: 4.8,
  students: 1234,
  price: 59.99,
  level: "Intermediate",
  lastUpdated: "March 2024",
  language: "English",
  curriculum: [
    {
      title: "Getting Started",
      lessons: [
        {
          title: "Introduction to Mobile Development",
          duration: "10:00",
          isPreview: true,
        },
        {
          title: "Setting Up Your Development Environment",
          duration: "15:00",
          isPreview: true,
        },
        {
          title: "React Native Basics",
          duration: "20:00",
          isPreview: false,
        },
      ],
    },
    {
      title: "Building User Interfaces",
      lessons: [
        {
          title: "Components and Props",
          duration: "25:00",
          isPreview: false,
        },
        {
          title: "Styling in React Native",
          duration: "30:00",
          isPreview: false,
        },
        {
          title: "Layout with Flexbox",
          duration: "20:00",
          isPreview: false,
        },
      ],
    },
    // Add more sections...
  ],
  whatYouWillLearn: [
    "Build mobile apps for iOS and Android using React Native",
    "Understand mobile app architecture and design patterns",
    "Implement user authentication and data persistence",
    "Deploy your apps to the App Store and Google Play",
    "Work with native device features like camera and GPS",
  ],
};

export default function CourseDetailPage({ params }: { params: { courseId: string } }) {
  const [expandedSections, setExpandedSections] = useState<number[]>([0]);

  const toggleSection = (index: number) => {
    setExpandedSections((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="px-6 h-16 flex items-center justify-between">
          <Link href="/courses">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </Link>
          <h1 className="text-lg font-semibold line-clamp-1 flex-1 mx-4">
            {courseData.title}
          </h1>
        </div>
      </header>

      <main className="flex-1 px-6 pb-16">
        <div className="max-w-3xl mx-auto space-y-8 pt-6">
          {/* Course Preview */}
          <div className="aspect-video relative bg-primary/10 rounded-lg">
            <div className="absolute inset-0 flex items-center justify-center">
              <Button size="lg" className="gap-2">
                <Play className="h-5 w-5" />
                Watch Preview
              </Button>
            </div>
          </div>

          {/* Course Info */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">{courseData.title}</h1>
            <p className="text-muted-foreground">{courseData.description}</p>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>{courseData.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{courseData.students.toLocaleString()} students</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{courseData.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <Award className="h-4 w-4" />
                <span>{courseData.level}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-medium">{courseData.instructor.name}</p>
                <p className="text-sm text-muted-foreground">
                  {courseData.instructor.title}
                </p>
              </div>
            </div>
          </div>

          {/* What You'll Learn */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">What You'll Learn</h2>
            <div className="grid gap-3">
              {courseData.whatYouWillLearn.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Course Content */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Course Content</h2>
            <div className="space-y-2">
              {courseData.curriculum.map((section, sectionIndex) => (
                <Card key={sectionIndex} className="overflow-hidden">
                  <button
                    className="w-full p-4 flex items-center justify-between hover:bg-accent/10 transition-colors"
                    onClick={() => toggleSection(sectionIndex)}
                  >
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <span className="font-medium">{section.title}</span>
                    </div>
                    {expandedSections.includes(sectionIndex) ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </button>
                  <AnimatePresence>
                    {expandedSections.includes(sectionIndex) && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-border">
                          {section.lessons.map((lesson, lessonIndex) => (
                            <div
                              key={lessonIndex}
                              className="p-4 flex items-center justify-between hover:bg-accent/10 transition-colors"
                            >
                              <div className="flex items-center gap-3">
                                <Play className="h-4 w-4 text-muted-foreground" />
                                <span
                                  className={
                                    lesson.isPreview
                                      ? "text-primary"
                                      : undefined
                                  }
                                >
                                  {lesson.title}
                                </span>
                                {lesson.isPreview && (
                                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                                    Preview
                                  </span>
                                )}
                              </div>
                              <span className="text-sm text-muted-foreground">
                                {lesson.duration}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Sticky Footer */}
      <div className="fixed bottom-16 left-0 right-0 p-4 bg-background border-t border-border">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold">₦{courseData.price.toLocaleString()}</p>
          </div>
          <Button size="lg" className="min-w-[200px]">
            Enroll Now
          </Button>
        </div>
      </div>

      <Navigation />
    </div>
  );
} 