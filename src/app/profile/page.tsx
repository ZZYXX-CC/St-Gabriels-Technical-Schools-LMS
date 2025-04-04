"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Navigation } from "@/components/layout/navigation";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Bell, 
  Globe, 
  CreditCard, 
  Lock, 
  HelpCircle, 
  Info,
  LogOut,
  ChevronRight,
  ChevronLeft,
  Camera,
  Pencil
} from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// This would come from your API in a real application
const userProfile = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+234 123 456 7890",
  location: "Lagos, Nigeria",
  avatar: "", // Add avatar URL if available
  role: "Student",
  enrolledCourses: 5,
  completedCourses: 3,
  averageScore: 85
};

const currencies = [
  { code: "NGN", symbol: "₦", name: "Nigerian Naira" },
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "GBP", symbol: "£", name: "British Pound" },
  { code: "EUR", symbol: "€", name: "Euro" },
];

const languages = [
  { code: "en", name: "English" },
  { code: "fr", name: "French" },
  { code: "es", name: "Spanish" },
  { code: "de", name: "German" },
];

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [profile, setProfile] = useState(userProfile);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [currency, setCurrency] = useState("NGN");
  const [language, setLanguage] = useState("en");

  const handleSave = () => {
    setActiveSection(null);
  };

  const menuItems = [
    { 
      id: "personal",
      icon: User, 
      label: "Personal Information",
      content: (
        <div className="space-y-6">
          <div className="flex items-center justify-center">
            <div className="relative">
              <Avatar className="h-24 w-24">
                <AvatarImage src={profile.avatar} />
                <AvatarFallback className="bg-primary/20 text-primary text-xl">
                  {profile.name.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <Button 
                size="icon" 
                variant="secondary" 
                className="absolute bottom-0 right-0 rounded-full h-8 w-8"
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Full Name</Label>
              <Input
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                className="bg-card"
              />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                className="bg-card"
              />
            </div>
            <div className="space-y-2">
              <Label>Phone</Label>
              <Input
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                className="bg-card"
              />
            </div>
            <div className="space-y-2">
              <Label>Location</Label>
              <Input
                value={profile.location}
                onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                className="bg-card"
              />
            </div>
            <div className="flex gap-2 pt-2">
              <Button onClick={handleSave} className="flex-1">Save Changes</Button>
              <Button variant="outline" onClick={() => setActiveSection(null)} className="flex-1">
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )
    },
    { 
      id: "notifications",
      icon: Bell, 
      label: "Notifications",
      content: (
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-card rounded-lg">
            <div className="space-y-1">
              <Label>Email Notifications</Label>
              <p className="text-sm text-muted-foreground">
                Receive updates about your courses via email
              </p>
            </div>
            <Switch
              checked={emailNotifications}
              onCheckedChange={setEmailNotifications}
            />
          </div>
          <div className="flex items-center justify-between p-4 bg-card rounded-lg">
            <div className="space-y-1">
              <Label>Push Notifications</Label>
              <p className="text-sm text-muted-foreground">
                Receive push notifications on your device
              </p>
            </div>
            <Switch
              checked={pushNotifications}
              onCheckedChange={setPushNotifications}
            />
          </div>
        </div>
      )
    },
    { 
      id: "language",
      icon: Globe, 
      label: "Language",
      content: (
        <div className="space-y-4">
          {languages.map((lang) => (
            <div 
              key={lang.code} 
              className={cn(
                "flex items-center justify-between p-4 rounded-lg transition-colors cursor-pointer",
                language === lang.code ? "bg-primary/10" : "bg-card hover:bg-accent/10"
              )}
              onClick={() => setLanguage(lang.code)}
            >
              <Label className="cursor-pointer">{lang.name}</Label>
              <input
                type="radio"
                id={lang.code}
                name="language"
                value={lang.code}
                checked={language === lang.code}
                onChange={(e) => setLanguage(e.target.value)}
                className="text-primary"
              />
            </div>
          ))}
        </div>
      )
    },
    { 
      id: "currency",
      icon: CreditCard, 
      label: "Currency",
      content: (
        <div className="space-y-4">
          {currencies.map((curr) => (
            <div 
              key={curr.code}
              className={cn(
                "flex items-center justify-between p-4 rounded-lg transition-colors cursor-pointer",
                currency === curr.code ? "bg-primary/10" : "bg-card hover:bg-accent/10"
              )}
              onClick={() => setCurrency(curr.code)}
            >
              <Label className="cursor-pointer">
                <span className="font-medium">{curr.symbol}</span> - {curr.name}
              </Label>
              <input
                type="radio"
                id={curr.code}
                name="currency"
                value={curr.code}
                checked={currency === curr.code}
                onChange={(e) => setCurrency(e.target.value)}
                className="text-primary"
              />
            </div>
          ))}
        </div>
      )
    },
    { 
      id: "security",
      icon: Lock, 
      label: "Privacy & Security",
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-card rounded-lg">
            <p className="text-sm text-muted-foreground">
              Privacy and security settings will be available in a future update.
            </p>
          </div>
        </div>
      )
    },
    { 
      id: "help",
      icon: HelpCircle, 
      label: "Help & Support",
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-card rounded-lg">
            <p className="text-sm text-muted-foreground">
              For support, please contact our help desk at support@sgtlearn.com
            </p>
          </div>
        </div>
      )
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="px-6 pt-6 pb-4 flex items-center gap-4">
        {activeSection ? (
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setActiveSection(null)}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
        ) : null}
        <h1 className="text-xl font-semibold">
          {activeSection ? menuItems.find(item => item.id === activeSection)?.label : "Profile"}
        </h1>
      </header>

      <main className="flex-1 px-6 pb-16">
        {activeSection === null ? (
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Profile Overview */}
            <Card className="p-6 bg-card">
              <div className="flex items-start gap-4">
                <div className="relative">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={profile.avatar} />
                    <AvatarFallback className="bg-primary/20 text-primary text-xl">
                      {profile.name.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <Button 
                    size="icon" 
                    variant="secondary" 
                    className="absolute -bottom-2 -right-2 rounded-full h-8 w-8"
                    onClick={() => setActiveSection("personal")}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{profile.name}</h2>
                  <p className="text-sm text-muted-foreground">{profile.role}</p>
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="text-center p-2 bg-primary/5 rounded-lg">
                      <p className="text-lg font-semibold text-primary">{profile.enrolledCourses}</p>
                      <p className="text-xs text-muted-foreground">Enrolled</p>
                    </div>
                    <div className="text-center p-2 bg-primary/5 rounded-lg">
                      <p className="text-lg font-semibold text-primary">{profile.completedCourses}</p>
                      <p className="text-xs text-muted-foreground">Completed</p>
                    </div>
                    <div className="text-center p-2 bg-primary/5 rounded-lg">
                      <p className="text-lg font-semibold text-primary">{profile.averageScore}%</p>
                      <p className="text-xs text-muted-foreground">Average</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Menu Items */}
            <div className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card
                      className="p-4 bg-card hover:bg-accent/10 transition-colors cursor-pointer"
                      onClick={() => setActiveSection(item.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <Icon className="h-5 w-5" />
                          </div>
                          <span>{item.label}</span>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                      </div>
                    </Card>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: menuItems.length * 0.1 }}
              >
                <Card
                  className="p-4 bg-card hover:bg-destructive/10 transition-colors cursor-pointer text-destructive"
                  onClick={() => {/* Handle logout */}}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                      <LogOut className="h-5 w-5" />
                    </div>
                    <span>Log Out</span>
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-6 bg-card">
              {menuItems.find(item => item.id === activeSection)?.content}
            </Card>
          </motion.div>
        )}
      </main>

      <Navigation />
    </div>
  );
} 