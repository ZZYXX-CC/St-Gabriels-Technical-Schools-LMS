"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Paperclip, Send, Phone, Video, MoreVertical, ChevronLeft, Image as ImageIcon, File, Mic } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

interface Message {
  id: number;
  content: string;
  sender: "user" | "instructor";
  time: string;
}

interface ChatData {
  id: string;
  instructor: {
    name: string;
    role: string;
    avatar: string;
  };
  messages: Message[];
}

// This would typically come from an API
const getChatData = async (chatId: string): Promise<ChatData> => {
  // Simulated chat data - in a real app, this would be an API call
  return {
    id: chatId,
    instructor: {
      name: "Sarah Wilson",
      role: "Data Science Instructor",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3"
    },
    messages: [
      {
        id: 1,
        content: "Hi Sarah, I have a question about the latest data visualization assignment.",
        sender: "user",
        time: "10:30 AM",
      },
      {
        id: 2,
        content: "Of course! What's your question?",
        sender: "instructor",
        time: "10:32 AM",
      },
    ]
  };
};

const attachmentTypes = [
  { icon: ImageIcon, label: "Send Image", value: "image" },
  { icon: File, label: "Send Document", value: "document" },
  { icon: Mic, label: "Send Voice Message", value: "audio" },
];

export default function ChatPage() {
  const params = useParams();
  const chatId = params.id as string;
  const [message, setMessage] = useState("");
  const [chatData, setChatData] = useState<ChatData | null>(null);

  useEffect(() => {
    const loadChatData = async () => {
      const data = await getChatData(chatId);
      setChatData(data);
    };
    loadChatData();
  }, [chatId]);

  const handleSendMessage = () => {
    if (message.trim()) {
      // Send message logic here
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!chatData) {
    return (
      <div className="flex items-center justify-center h-screen bg-background/95 backdrop-blur">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-pulse">
            <Avatar className="h-16 w-16">
              <AvatarFallback>...</AvatarFallback>
            </Avatar>
          </div>
          <p className="text-muted-foreground">Loading conversation...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center px-4">
          <Link 
            href="/messages" 
            className="mr-4 rounded-full p-2 hover:bg-muted transition-colors"
          >
            <ChevronLeft className="h-5 w-5 text-muted-foreground" />
          </Link>
          
          <div className="flex flex-1 items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 border-2 border-primary/10">
                <AvatarImage src={chatData.instructor.avatar} alt={chatData.instructor.name} />
                <AvatarFallback className="bg-primary/5 text-primary">
                  {chatData.instructor.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-sm">{chatData.instructor.name}</h3>
                <p className="text-xs text-muted-foreground">{chatData.instructor.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full hover:bg-primary/5 text-primary"
              >
                <Phone className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full hover:bg-primary/5 text-primary"
              >
                <Video className="h-5 w-5" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="rounded-full hover:bg-primary/5 text-primary"
                  >
                    <MoreVertical className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem>View Profile</DropdownMenuItem>
                  <DropdownMenuItem>Search in Conversation</DropdownMenuItem>
                  <DropdownMenuItem>Mute Notifications</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">Report Issue</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto px-4">
        <div className="flex flex-col justify-end min-h-full">
          <div className="space-y-4 py-4">
            {chatData.messages.map((msg) => (
              <div
                key={msg.id}
                className={`group flex items-start gap-3 ${
                  msg.sender === "user" ? "flex-row-reverse" : ""
                }`}
              >
                <Avatar className={`h-8 w-8 ${msg.sender === "user" ? "order-2" : ""}`}>
                  <AvatarImage 
                    src={msg.sender === "user" 
                      ? "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=2960&ixlib=rb-4.0.3"
                      : chatData.instructor.avatar
                    } 
                    alt={msg.sender === "user" ? "You" : chatData.instructor.name} 
                  />
                  <AvatarFallback className={msg.sender === "user" ? "bg-primary/5" : "bg-secondary/10"}>
                    {msg.sender === "user" ? "You" : chatData.instructor.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className={`flex flex-col gap-1 max-w-[75%] ${msg.sender === "user" ? "items-end" : "items-start"}`}>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">
                      {msg.sender === "user" ? "You" : chatData.instructor.name}
                    </span>
                    <span className="text-xs text-muted-foreground">{msg.time}</span>
                  </div>
                  <div className={`rounded-2xl px-4 py-2.5 text-sm shadow-sm
                    ${msg.sender === "user" 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted"
                    }`}>
                    {msg.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t bg-background p-4">
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2 max-w-4xl mx-auto"
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                type="button"
                variant="ghost" 
                size="icon"
                className="rounded-full hover:bg-primary/5 text-primary"
              >
                <Paperclip className="h-5 w-5" />
                <span className="sr-only">Add attachment</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {attachmentTypes.map((type) => (
                <DropdownMenuItem key={type.value} className="gap-2">
                  <type.icon className="h-4 w-4" />
                  {type.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="relative flex-1">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type a message..."
              className="rounded-full pl-4 pr-12 py-6 bg-muted border-0 focus-visible:ring-1 focus-visible:ring-primary"
            />
            <Button 
              type="submit"
              size="icon"
              className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full h-8 w-8 bg-primary hover:bg-primary/90"
              disabled={!message.trim()}
            >
              <Send className="h-4 w-4 text-primary-foreground" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}