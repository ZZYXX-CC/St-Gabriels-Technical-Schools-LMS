"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, User } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navigation() {
  const pathname = usePathname();

  const links = [
    {
      href: "/",
      label: "Home",
      icon: Home,
    },
    {
      href: "/courses",
      label: "Courses",
      icon: BookOpen,
    },
    {
      href: "/profile",
      label: "Profile",
      icon: User,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 h-16 bg-card border-t border-border">
      <div className="grid h-full grid-cols-3">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex flex-col items-center justify-center h-full w-full transition-colors",
                isActive 
                  ? "text-foreground" 
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/10"
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs mt-1">{link.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
} 