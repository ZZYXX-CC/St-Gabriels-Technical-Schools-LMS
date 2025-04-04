"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, MessageSquare, User } from "lucide-react";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background lg:hidden">
      <nav className="flex h-16">
        <Link
          href="/"
          className={cn(
            "flex flex-1 flex-col items-center justify-center gap-1",
            pathname === "/" ? "text-primary" : "text-muted-foreground"
          )}
        >
          <Home className="h-5 w-5" />
          <span className="text-xs">Home</span>
        </Link>
        <Link
          href="/courses"
          className={cn(
            "flex flex-1 flex-col items-center justify-center gap-1",
            pathname === "/courses" ? "text-primary" : "text-muted-foreground"
          )}
        >
          <BookOpen className="h-5 w-5" />
          <span className="text-xs">Courses</span>
        </Link>
        <Link
          href="/messages"
          className={cn(
            "flex flex-1 flex-col items-center justify-center gap-1",
            pathname === "/messages" ? "text-primary" : "text-muted-foreground"
          )}
        >
          <MessageSquare className="h-5 w-5" />
          <span className="text-xs">Messages</span>
        </Link>
        <Link
          href="/profile"
          className={cn(
            "flex flex-1 flex-col items-center justify-center gap-1",
            pathname === "/profile" ? "text-primary" : "text-muted-foreground"
          )}
        >
          <User className="h-5 w-5" />
          <span className="text-xs">Profile</span>
        </Link>
      </nav>
    </div>
  );
} 