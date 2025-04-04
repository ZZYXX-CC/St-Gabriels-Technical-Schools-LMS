"use client";

import { Home, BookOpen, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-1">
          <Link
            href="/"
            className={cn(
              "flex flex-col items-center justify-center py-3 px-2 relative group transition-colors",
              pathname === "/" ? "text-primary" : "text-muted-foreground hover:text-foreground"
            )}
          >
            <div className="relative">
              <Home className="h-5 w-5" />
              {pathname === "/" && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute -bottom-4 left-1/2 w-1 h-1 bg-primary rounded-full -translate-x-1/2"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
            </div>
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link
            href="/courses"
            className={cn(
              "flex flex-col items-center justify-center py-3 px-2 relative group transition-colors",
              pathname.startsWith("/courses") ? "text-primary" : "text-muted-foreground hover:text-foreground"
            )}
          >
            <div className="relative">
              <BookOpen className="h-5 w-5" />
              {pathname.startsWith("/courses") && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute -bottom-4 left-1/2 w-1 h-1 bg-primary rounded-full -translate-x-1/2"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
            </div>
            <span className="text-xs mt-1">Courses</span>
          </Link>
          <Link
            href="/profile"
            className={cn(
              "flex flex-col items-center justify-center py-3 px-2 relative group transition-colors",
              pathname === "/profile" ? "text-primary" : "text-muted-foreground hover:text-foreground"
            )}
          >
            <div className="relative">
              <User className="h-5 w-5" />
              {pathname === "/profile" && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute -bottom-4 left-1/2 w-1 h-1 bg-primary rounded-full -translate-x-1/2"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
            </div>
            <span className="text-xs mt-1">Profile</span>
          </Link>
        </div>
      </div>
    </nav>
  );
} 