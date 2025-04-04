"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  HelpCircle,
  MessageCircle,
  Mail,
  Info,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const helpSections = [
  {
    title: "FAQ",
    description: "Frequently asked questions",
    icon: HelpCircle,
    href: "/help/faq",
  },
  {
    title: "Contact Support",
    description: "Get in touch with our support team",
    icon: MessageCircle,
    href: "/help/contact",
  },
  {
    title: "Email Us",
    description: "Send us an email directly",
    icon: Mail,
    href: "mailto:support@sgtlearn.com",
  },
];

export default function HelpPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Help Center</h1>
          <p className="text-muted-foreground">
            Get help with SGT Learn. Find answers to common questions or chat with our support team.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Link href="/help/faq">
            <Card className="h-full hover:bg-accent/5 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <HelpCircle className="h-6 w-6 text-primary" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardTitle className="mt-4">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Find answers to common questions about courses, payments, and more.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/help/support">
            <Card className="h-full hover:bg-accent/5 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardTitle className="mt-4">Support Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Chat with our support team for personalized assistance.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>

        <Card className="mt-6 md:mt-8">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              <CardTitle className="text-base md:text-lg">About SGT Learn</CardTitle>
            </div>
            <CardDescription>
              The official learning platform of St. Gabriel's Technical Schools
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-1">
              <p className="text-sm font-medium">Version</p>
              <p className="text-xs text-muted-foreground md:text-sm">1.0.0</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Last Updated</p>
              <p className="text-xs text-muted-foreground md:text-sm">April 4, 2024</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Build</p>
              <p className="text-xs text-muted-foreground md:text-sm">#2024.04.1</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 