"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  BookOpen,
  Clock,
  Settings,
  Trophy,
  Star,
  Target,
  Calendar,
  TrendingUp,
  Award,
  CheckCircle2,
  Medal,
  Zap,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const user = {
  name: "Samuel Chris",
  email: "samuel.chris@example.com",
  avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=2960&ixlib=rb-4.0.3",
  role: "Student",
  joinDate: "January 2024",
  bio: "Passionate about learning and technology. Currently focusing on web development and mobile app development.",
  achievements: [
    {
      id: 1,
      title: "Fast Learner",
      description: "Completed 5 courses in the first month",
      icon: Zap,
      date: "Feb 2024",
    },
    {
      id: 2,
      title: "Course Master",
      description: "Achieved 100% in Advanced JavaScript",
      icon: Trophy,
      date: "Mar 2024",
    },
    {
      id: 3,
      title: "Active Participant",
      description: "Participated in 10 course discussions",
      icon: MessageSquare,
      date: "Mar 2024",
    },
  ],
  stats: {
    coursesCompleted: 12,
    hoursLearned: 45,
    certificatesEarned: 3,
  },
  recentActivity: [
    {
      id: 1,
      type: "course_progress",
      course: "React Native Development",
      progress: 65,
      date: "2 hours ago",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
    },
    {
      id: 2,
      type: "certificate",
      course: "TypeScript Fundamentals",
      date: "Yesterday",
      thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=3274&ixlib=rb-4.0.3",
    },
    {
      id: 3,
      type: "course_started",
      course: "UI/UX Design Principles",
      date: "3 days ago",
      thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=3264&ixlib=rb-4.0.3",
    },
  ],
  enrolledCourses: [
    {
      id: 1,
      title: "React Native Development",
      progress: 65,
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
      instructor: "Jane Smith",
      lastAccessed: "2 hours ago",
    },
    {
      id: 2,
      title: "TypeScript Fundamentals",
      progress: 100,
      thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=3274&ixlib=rb-4.0.3",
      instructor: "John Doe",
      lastAccessed: "Yesterday",
    },
    {
      id: 3,
      title: "UI/UX Design Principles",
      progress: 15,
      thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=3264&ixlib=rb-4.0.3",
      instructor: "Sarah Wilson",
      lastAccessed: "3 days ago",
    },
  ],
};

const stats = [
  {
    title: "Courses Completed",
    value: "12",
    icon: CheckCircle2,
    color: "text-green-500",
  },
  {
    title: "Hours Learned",
    value: "156",
    icon: Clock,
    color: "text-blue-500",
  },
  {
    title: "Avg. Rating",
    value: "4.8",
    icon: Star,
    color: "text-yellow-500",
  },
  {
    title: "Current Streak",
    value: "15",
    icon: TrendingUp,
    color: "text-purple-500",
  },
];

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="flex-1">
      <div className="container max-w-screen-xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="relative">
          <div className="h-48 md:h-64 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=3270&auto=format&fit=crop"
              alt="Profile header"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>
          <div className="absolute -bottom-16 left-4 md:left-8">
            <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-background ring-2 ring-[#424874]/20">
              <AvatarImage src={user.avatar} />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Profile Content */}
        <div className="mt-20 space-y-8 pb-24">
          {/* Profile Info */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">{user.name}</h1>
              <p className="text-muted-foreground">{user.role} · Joined {user.joinDate}</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" asChild>
                <Link href="/settings">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Link>
              </Button>
              <Button>Edit Profile</Button>
            </div>
          </div>
          <p className="mt-4 text-muted-foreground max-w-2xl">{user.bio}</p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <Card key={stat.title} className="relative overflow-hidden">
                <CardContent className="p-6">
                  <stat.icon className={cn("h-8 w-8 mb-3", stat.color)} />
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {user.achievements.map((achievement) => (
                  <div key={achievement.id} className="space-y-2">
                    <div className="flex items-start gap-4">
                      <div className={cn("rounded-full p-2 bg-background", achievement.icon === Zap && "text-yellow-500", achievement.icon === Trophy && "text-purple-500")}>
                        <achievement.icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{achievement.title}</p>
                          <span className="text-sm text-muted-foreground">
                            {achievement.date}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative space-y-6">
                  {user.recentActivity.map((activity, index) => (
                    <div key={activity.id} className="flex gap-4">
                      <div className="relative">
                        <div
                          className={cn(
                            "rounded-full p-2",
                            activity.type === "course_progress" && "bg-blue-500/10 text-blue-500",
                            activity.type === "certificate" && "bg-green-500/10 text-green-500",
                            activity.type === "course_started" && "bg-purple-500/10 text-purple-500"
                          )}
                        >
                          <BookOpen className="h-4 w-4" />
                        </div>
                        {index !== user.recentActivity.length - 1 && (
                          <div className="absolute top-10 bottom-0 left-1/2 w-px -translate-x-1/2 bg-border" />
                        )}
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{activity.course}</p>
                          <span className="text-sm text-muted-foreground">
                            {activity.date}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {activity.progress && (
                            <Progress value={activity.progress} className="h-2 mt-2" />
                          )}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 