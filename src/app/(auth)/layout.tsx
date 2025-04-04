"use client";

import { ModeToggle } from "@/components/mode-toggle";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Decorative background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,#424874,#a6b1e1)]" style={{ opacity: 0.05 }} />
        <div className="absolute right-0 top-0 h-full w-1/2">
          <svg viewBox="0 0 100 100" className="h-full w-full" preserveAspectRatio="none">
            <circle cx="80" cy="20" r="30" fill="#dcd6f7" style={{ opacity: 0.1 }} />
            <circle cx="60" cy="70" r="20" fill="#a6b1e1" style={{ opacity: 0.1 }} />
          </svg>
        </div>
      </div>

      {/* Header with logo and theme toggle */}
      <header className="absolute top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">SGT</span>
            </div>
            <span className="text-lg font-semibold text-foreground">Learn</span>
          </div>
          <ModeToggle />
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} St. Gabriel's Technical Schools. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
} 