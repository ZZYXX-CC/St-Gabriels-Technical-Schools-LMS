"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Check, Bell, BellOff } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  sender: {
    id: string;
    name: string;
    role: string;
    avatar: string;
    online?: boolean;
  };
  lastMessage: string;
  time: string;
  unread?: boolean;
  muted?: boolean;
}

const messages: Message[] = [
  {
    id: "1",
    sender: {
      id: "jane",
      name: "Jane Smith",
      role: "Course Instructor",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3",
      online: true
    },
    lastMessage: "Great progress on your latest assignment!",
    time: "2m ago",
    unread: true
  },
  {
    id: "2",
    sender: {
      id: "michael",
      name: "Michael Chen",
      role: "Design Mentor",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3",
      online: true
    },
    lastMessage: "Let me know if you have questions about the design principles.",
    time: "1h ago"
  },
  {
    id: "3",
    sender: {
      id: "sarah",
      name: "Sarah Johnson",
      role: "Data Science Instructor",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3"
    },
    lastMessage: "The next session will cover machine learning basics.",
    time: "3h ago",
    muted: true
  }
];

export default function MessagesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      const scrollTop = target.scrollTop;
      setIsScrolled(scrollTop > 20 && scrollTop > lastScrollY);
      setLastScrollY(scrollTop);
    };

    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.addEventListener('scroll', handleScroll);
      return () => mainContent.removeEventListener('scroll', handleScroll);
    }
  }, [lastScrollY]);

  const filteredMessages = messages.filter(message =>
    message.sender.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    message.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col w-[412px] mx-auto h-[100dvh] bg-background sm:w-full lg:container lg:max-w-3xl xl:max-w-4xl">
      <header className={cn(
        "sticky top-0 z-10 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b",
        "transition-transform duration-300",
        isScrolled && "-translate-y-full"
      )}>
        <div className="flex items-center justify-center h-14 px-3">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            <Input
              placeholder="Search messages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 pr-3 h-9 bg-muted/50 border-0 rounded-full text-sm w-full"
            />
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto">
        <div className="py-4">
          {filteredMessages.length === 0 ? (
            <div className="flex flex-col items-center justify-center min-h-[50vh] p-4">
              <div className="rounded-full bg-primary/10 p-3 mb-3">
                <Search className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-base font-medium mb-1">No messages found</h3>
              <p className="text-sm text-muted-foreground">
                Try adjusting your search terms
              </p>
            </div>
          ) : (
            <div className="divide-y divide-border">
              {filteredMessages.map((message) => (
                <Link
                  key={message.id}
                  href={`/messages/${message.sender.id}`}
                  className="group flex items-start gap-3 px-3 py-3 hover:bg-muted/50 transition-colors lg:px-6 lg:py-4 lg:gap-4"
                >
                  <div className="relative flex-shrink-0">
                    <Avatar className="h-10 w-10 lg:h-12 lg:w-12">
                      <AvatarImage src={message.sender.avatar} alt={message.sender.name} />
                      <AvatarFallback>
                        {message.sender.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    {message.sender.online && (
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 lg:w-3 lg:h-3 border-2 border-background rounded-full bg-green-500" />
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="font-medium truncate text-sm lg:text-base">
                          {message.sender.name}
                        </span>
                        {message.unread && (
                          <span className="flex-shrink-0 w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-primary" />
                        )}
                      </div>
                      <span className="text-[11px] lg:text-xs text-muted-foreground flex-shrink-0">
                        {message.time}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate mt-0.5 lg:mt-1">
                      {message.lastMessage}
                    </p>
                    <p className="text-[11px] lg:text-xs text-muted-foreground truncate mt-0.5 lg:mt-1">
                      {message.sender.role}
                    </p>
                  </div>

                  <div className="flex-shrink-0 self-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="rounded-full opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 lg:h-9 lg:w-9"
                        >
                          {message.muted ? (
                            <BellOff className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
                          ) : (
                            <Bell className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
                          )}
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-44 lg:w-48">
                        <DropdownMenuItem>
                          <Check className="mr-2 h-4 w-4" />
                          Mark as read
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          {message.muted ? (
                            <>
                              <Bell className="mr-2 h-4 w-4" />
                              Unmute notifications
                            </>
                          ) : (
                            <>
                              <BellOff className="mr-2 h-4 w-4" />
                              Mute notifications
                            </>
                          )}
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          Delete conversation
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
} 