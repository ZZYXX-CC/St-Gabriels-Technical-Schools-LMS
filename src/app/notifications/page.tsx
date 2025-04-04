"use client";

import { Navigation } from "@/components/layout/navigation";
import { Card } from "@/components/ui/card";
import { Bell, Clock, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

// This would come from your API in a real application
const notifications = [
  {
    id: 1,
    title: "New Course Available",
    message: "Mobile App Development course is now available",
    time: "2 hours ago",
    type: "course",
    read: false,
  },
  {
    id: 2,
    title: "Course Progress",
    message: "You've completed 65% of Mobile App Development",
    time: "1 day ago",
    type: "progress",
    read: true,
  },
  {
    id: 3,
    title: "New Achievement",
    message: "You've earned the 'Fast Learner' badge!",
    time: "2 days ago",
    type: "achievement",
    read: true,
  },
];

export default function NotificationsPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="px-6 pt-6 pb-4 flex items-center gap-4">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => router.back()}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-semibold">Notifications</h1>
      </header>

      <main className="flex-1 px-6 pb-16">
        <div className="space-y-4">
          {notifications.map((notification) => (
            <Card
              key={notification.id}
              className={`bg-card border-none p-4 ${
                !notification.read ? "border-l-4 border-l-primary" : ""
              }`}
            >
              <div className="flex gap-4">
                <div className={`w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center ${
                  !notification.read ? "text-primary" : "text-muted-foreground"
                }`}>
                  <Bell className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className={`font-medium ${
                    !notification.read ? "text-foreground" : "text-muted-foreground"
                  }`}>
                    {notification.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {notification.message}
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{notification.time}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <Navigation />
    </div>
  );
} 