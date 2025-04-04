"use client";

import { Home, BookOpen, User, Settings, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const user = {
  name: "Samuel Chris",
  email: "samuel.chris@example.com",
  avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=2960&ixlib=rb-4.0.3"
};

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 bottom-0 z-30 hidden lg:flex lg:w-72 lg:flex-col border-r bg-card">
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex h-16 items-center gap-2 px-6 border-b">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <div className="h-8 w-8 rounded-xl bg-[#424874]/10 flex items-center justify-center shadow-sm">
              <span className="text-[#424874] font-bold">S</span>
            </div>
            <span className="text-xl bg-gradient-to-r from-[#424874] to-[#a6b1e1] bg-clip-text text-transparent">
              SGT Learn
            </span>
          </Link>
        </div>

        <div className="flex-1 px-4">
          <div className="space-y-1">
            <Link href="/">
              <Button
                variant="ghost"
                className={`w-full justify-start gap-2 ${pathname === "/" ? "bg-accent" : ""}`}
              >
                <Home className="h-5 w-5" />
                Home
              </Button>
            </Link>
            <Link href="/courses">
              <Button
                variant="ghost"
                className={`w-full justify-start gap-2 ${pathname === "/courses" ? "bg-accent" : ""}`}
              >
                <BookOpen className="h-5 w-5" />
                Courses
              </Button>
            </Link>
            <Link href="/messages">
              <Button
                variant="ghost"
                className={`w-full justify-start gap-2 ${pathname === "/messages" ? "bg-accent" : ""}`}
              >
                <MessageSquare className="h-5 w-5" />
                Messages
              </Button>
            </Link>
            <Link href="/profile">
              <Button
                variant="ghost"
                className={`w-full justify-start gap-2 ${pathname === "/profile" ? "bg-accent" : ""}`}
              >
                <User className="h-5 w-5" />
                Profile
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-border mt-auto">
        <div className="flex items-center gap-3 mb-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="font-medium truncate">{user.name}</p>
            <p className="text-sm text-muted-foreground truncate">{user.email}</p>
          </div>
        </div>
        <Link href="/settings">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Settings className="h-5 w-5" />
            Settings
          </Button>
        </Link>
      </div>
    </div>
  );
} 