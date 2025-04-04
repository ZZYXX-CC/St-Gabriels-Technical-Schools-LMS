"use client";



import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  Clock,
  ArrowLeft,
  Play,
  Users,
  Star,
  BarChart,
  CheckCircle2,
  Calendar,
  Award,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Lesson {
  id: number;
  title: string;
  duration: string;
  type: string;
  completed: boolean;
  thumbnail: string;
}

interface Module {
  id: number;
  title: string;
  duration: string;
  completed: boolean;
  lessons: Lesson[];
}

interface Course {
  id: number;
  title: string;
  instructor: string;
  thumbnail: string;
  headerImage: string;
  description: string;
  duration: string;
  totalLessons: number;
  category: string;
  price: number;
  level: string;
  rating: number;
  students: number;
  lastUpdated: string;
  language: string;
  certificate: boolean;
  progress: number;
  prerequisites: string[];
  whatYouWillLearn: string[];
  modules: Module[];
}

interface CoursesData {
  [key: string]: Course;
}

export default function CourseDetailsPage({
  params,
}: {
  params: { courseId: string };
}) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");

  const coursesData: CoursesData = {
    "1": {
      id: 1,
      title: "Mobile App Development",
      instructor: "Jane Smith",
      thumbnail: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80",
      headerImage: "https://images.unsplash.com/photo-1480506132288-68f7705954bd?auto=format&fit=crop&q=80",
      description: "Learn to build beautiful and functional mobile applications using modern frameworks and best practices. Master React Native and create cross-platform apps for iOS and Android.",
      duration: "8h 30m",
      totalLessons: 24,
      category: "Programming",
      price: 59.99,
      level: "Intermediate",
      rating: 4.8,
      students: 1234,
      lastUpdated: "March 2024",
      language: "English",
      certificate: true,
      progress: 65,
      prerequisites: ["Basic JavaScript knowledge", "Understanding of web technologies", "Familiarity with React"],
      whatYouWillLearn: [
        "Build cross-platform mobile apps",
        "Implement responsive UI designs",
        "Handle user authentication",
        "Work with device features",
        "Deploy to app stores"
      ],
      modules: [
        {
          id: 1,
          title: "Introduction to Mobile Development",
          duration: "2h 15m",
          completed: true,
          lessons: [
            {
              id: 1,
              title: "Understanding Mobile Platforms",
              duration: "45m",
              type: "video",
              completed: true,
              thumbnail: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&q=80"
            },
            {
              id: 2,
              title: "Setting Up Your Development Environment",
              duration: "45m",
              type: "video",
              completed: true,
              thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80"
            },
            {
              id: 3,
              title: "Your First Mobile App",
              duration: "45m",
              type: "video",
              completed: false,
              thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80"
            }
          ]
        }
      ]
    },
    "2": {
      id: 2,
      title: "Web Design Masterclass",
      instructor: "Michael Chen",
      thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80",
      headerImage: "https://images.unsplash.com/photo-1452830978618-d6feae7d0ffa?auto=format&fit=crop&q=80",
      description: "Master the art of modern web design. Learn UI/UX principles, design tools, and create stunning websites that engage users and drive conversions.",
      duration: "12h 45m",
      totalLessons: 32,
      category: "Design",
      price: 79.99,
      level: "Beginner",
      rating: 4.9,
      students: 2156,
      lastUpdated: "April 2024",
      language: "English",
      certificate: true,
      progress: 25,
      prerequisites: ["Basic HTML/CSS knowledge", "Familiarity with design concepts", "No prior design tool experience needed"],
      whatYouWillLearn: [
        "Design beautiful user interfaces",
        "Master popular design tools",
        "Create responsive layouts",
        "Implement modern design trends",
        "Build a professional portfolio"
      ],
      modules: [
        {
          id: 1,
          title: "Design Fundamentals",
          duration: "4h 30m",
          completed: true,
          lessons: [
            {
              id: 1,
              title: "Color Theory Basics",
              duration: "1h",
              type: "video",
              completed: true,
              thumbnail: "https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&q=80"
            },
            {
              id: 2,
              title: "Typography in Design",
              duration: "1h",
              type: "video",
              completed: false,
              thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80"
            },
            {
              id: 3,
              title: "Layout and Composition",
              duration: "1h",
              type: "video",
              completed: false,
              thumbnail: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&q=80"
            }
          ]
        }
      ]
    },
    "3": {
      id: 3,
      title: "Data Science Fundamentals",
      instructor: "Sarah Johnson",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
      headerImage: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80",
      description: "Dive into the world of data science. Learn Python, statistics, machine learning, and data visualization. Transform raw data into meaningful insights.",
      duration: "15h 20m",
      totalLessons: 40,
      category: "Data Science",
      price: 89.99,
      level: "Advanced",
      rating: 4.7,
      students: 1876,
      lastUpdated: "March 2024",
      language: "English",
      certificate: true,
      progress: 15,
      prerequisites: ["Python basics", "Understanding of statistics", "Mathematics fundamentals"],
      whatYouWillLearn: [
        "Master data analysis techniques",
        "Build machine learning models",
        "Create data visualizations",
        "Work with real-world datasets",
        "Deploy ML models to production"
      ],
      modules: [
        {
          id: 1,
          title: "Python for Data Science",
          duration: "5h 15m",
          completed: true,
          lessons: [
            {
              id: 1,
              title: "NumPy Fundamentals",
              duration: "1h 15m",
              type: "video",
              completed: true,
              thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80"
            },
            {
              id: 2,
              title: "Pandas for Data Analysis",
              duration: "1h 30m",
              type: "video",
              completed: false,
              thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80"
            },
            {
              id: 3,
              title: "Data Visualization with Matplotlib",
              duration: "1h 30m",
              type: "video",
              completed: false,
              thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
            }
          ]
        }
      ]
    },
    "4": {
      id: 4,
      title: "Digital Marketing Strategy",
      instructor: "Emily Rodriguez",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      headerImage: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80",
      description: "Master digital marketing strategies from social media to SEO. Learn to create effective campaigns, analyze metrics, and drive business growth.",
      duration: "10h 15m",
      totalLessons: 28,
      category: "Marketing",
      price: 69.99,
      level: "Intermediate",
      rating: 4.6,
      students: 1543,
      lastUpdated: "April 2024",
      language: "English",
      certificate: true,
      progress: 0,
      prerequisites: ["Basic marketing knowledge", "Social media familiarity", "Analytics basics"],
      whatYouWillLearn: [
        "Create effective marketing campaigns",
        "Master social media marketing",
        "Implement SEO strategies",
        "Analyze marketing metrics",
        "Build brand presence"
      ],
      modules: [
        {
          id: 1,
          title: "Digital Marketing Foundations",
          duration: "3h 45m",
          completed: false,
          lessons: [
            {
              id: 1,
              title: "Understanding Digital Marketing",
              duration: "1h",
              type: "video",
              completed: false,
              thumbnail: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80"
            },
            {
              id: 2,
              title: "Social Media Strategy",
              duration: "1h 15m",
              type: "video",
              completed: false,
              thumbnail: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80"
            },
            {
              id: 3,
              title: "Content Marketing",
              duration: "1h 30m",
              type: "video",
              completed: false,
              thumbnail: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80"
            }
          ]
        }
      ]
    }
  };

  const courseData = coursesData[params.courseId] || coursesData["1"];

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background border-b min-h-[300px]">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,#424874,#a6b1e1)] opacity-10" />
        <div className="container mx-auto px-4">
          <div className="relative py-12 md:py-16">
            <Button
              variant="ghost"
              className="mb-8 -ml-4 text-muted-foreground hover:text-foreground"
              onClick={() => router.back()}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Courses
            </Button>
            <div className="flex flex-col md:flex-row gap-12 items-start">
              {/* Course Info */}
              <div className="flex-1 space-y-6">
                <div className="space-y-4">
                  <h1 className="text-3xl md:text-4xl font-bold">{courseData.title}</h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">{courseData.description}</p>
                </div>
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <span className="font-medium text-base">{courseData.rating}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-5 w-5" />
                    <span className="text-base">{courseData.students} students</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-5 w-5" />
                    <span className="text-base">{courseData.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-5 w-5" />
                    <span className="text-base">Updated {courseData.lastUpdated}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="text-base px-3 py-1">
                    <BarChart className="h-4 w-4 mr-2" />
                    {courseData.level}
                  </Badge>
                  <Badge variant="secondary" className="text-base px-3 py-1">
                    <Globe className="h-4 w-4 mr-2" />
                    {courseData.language}
                  </Badge>
                  {courseData.certificate && (
                    <Badge variant="secondary" className="text-base px-3 py-1">
                      <Award className="h-4 w-4 mr-2" />
                      Certificate
                    </Badge>
                  )}
                </div>
              </div>

              {/* Action Card */}
              <Card className="w-full md:w-[400px] sticky top-4">
                <CardContent className="p-6">
                  <div className="aspect-video rounded-lg bg-primary/10 mb-6 relative overflow-hidden">
                    <img
                      src={courseData.headerImage}
                      alt={`${courseData.title} Preview`}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Button variant="ghost" className="text-white hover:text-white hover:bg-white/20">
                        <Play className="h-8 w-8" />
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-baseline justify-between">
                      <span className="text-3xl font-bold">${courseData.price}</span>
                    </div>
                    <div className="space-y-3">
                      <Button className="w-full text-base py-6" size="lg">
                        Continue Learning
                      </Button>
                      <Progress value={courseData.progress} className="h-2" />
                      <p className="text-sm text-center text-muted-foreground">
                        {courseData.progress}% complete
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="container mx-auto px-4 py-12 pb-24">
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="w-full justify-start border-b pb-px h-auto p-0 bg-transparent">
            <TabsTrigger 
              value="overview"
              className="data-[state=active]:border-primary data-[state=active]:bg-transparent border-b-2 border-transparent rounded-none pb-3 text-base"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger 
              value="curriculum"
              className="data-[state=active]:border-primary data-[state=active]:bg-transparent border-b-2 border-transparent rounded-none pb-3 text-base"
            >
              Curriculum
            </TabsTrigger>
            <TabsTrigger 
              value="reviews"
              className="data-[state=active]:border-primary data-[state=active]:bg-transparent border-b-2 border-transparent rounded-none pb-3 text-base"
            >
              Reviews
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>What you'll learn</CardTitle>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-2 gap-6">
                {courseData.whatYouWillLearn.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-base">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Prerequisites</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {courseData.prerequisites.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-base">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="curriculum" className="space-y-4">
            {coursesData[params.courseId].modules.map((module, index) => (
              <Card key={module.id}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <h3 className="font-medium">Module {index + 1}: {module.title}</h3>
                      <p className="text-sm text-muted-foreground">{module.duration}</p>
                    </div>
                    <Badge variant={module.completed ? "default" : "secondary"}>
                      {module.completed ? "Completed" : "In Progress"}
                    </Badge>
                  </div>
                  <div className="mt-4 space-y-2">
                    {module.lessons.map((lesson) => (
                      <div
                        key={lesson.id}
                        className="flex items-center gap-4 rounded-lg border p-3"
                      >
                        <div className="relative h-16 w-24 overflow-hidden rounded-md">
                          <img
                            src={lesson.thumbnail}
                            alt={lesson.title}
                            className="object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                            <Play className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">{lesson.title}</h4>
                          <p className="text-sm text-muted-foreground">{lesson.duration}</p>
                        </div>
                        {lesson.completed && (
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="reviews" className="space-y-8">
            <Card>
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <p className="text-5xl font-bold">{courseData.rating}</p>
                  <div className="flex items-center justify-center gap-1 my-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "h-6 w-6",
                          i < Math.floor(courseData.rating)
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-muted stroke-muted-foreground"
                        )}
                      />
                    ))}
                  </div>
                  <p className="text-lg text-muted-foreground">Course Rating</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 