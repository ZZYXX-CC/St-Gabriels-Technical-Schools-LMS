"use client";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import React from "react";

function Header(props: any) {
    const navigationItems = [
        {
            title: "Home",
            href: "/",
            description: "",
        },
        {
            title: "About Us",
            description: "Learn more about St. Gabriel Technical College.",
            items: [
                {
                    title: "Our History",
                    href: "/about#history",
                },
                {
                    title: "Mission & Vision",
                    href: "/about#mission",
                },
                {
                    title: "Faculty",
                    href: "/about#faculty",
                },
                {
                    title: "Campus",
                    href: "/about#campus",
                },
            ],
        },
        {
            title: "Programs",
            description: "Explore our technical and vocational programs.",
            items: [
                {
                    title: "All Programs",
                    href: "/programs",
                },
                {
                    title: "Engineering",
                    href: "/programs#engineering",
                },
                {
                    title: "Information Technology",
                    href: "/programs#it",
                },
                {
                    title: "Business",
                    href: "/programs#business",
                },
            ],
        },
        {
            title: "Admissions",
            href: "/admissions",
            description: "",
        },
    ];

    const [isOpen, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <header className="w-full z-40 fixed top-6 left-0 px-6 md:px-8 transition-all duration-300">
            <div className={`mx-auto max-w-6xl rounded-2xl transition-all duration-300 ${
                isScrolled 
                    ? 'bg-white/30 backdrop-blur-xl shadow-2xl border border-white/40' 
                    : 'bg-white/20 backdrop-blur-sm border border-white/30'
            }`}>
            <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center px-4 md:px-6">
                {/* Logo Section */}
                <div className="flex justify-start items-center">
                    <Link href="/" className="flex items-center">
                        <Image 
                            src="/asset/SGT-blue.svg" 
                            alt="St. Gabriel Technical College Logo" 
                            width={60} 
                            height={60} 
                            className="w-15 h-15"
                        />
                    </Link>
                </div>

                {/* Navigation Menu - Center */}
                <div className="justify-center items-center gap-4 lg:flex hidden flex-row">
                    <NavigationMenu className="flex justify-center items-center">
                        <NavigationMenuList className="flex justify-center gap-4 flex-row">
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    {item.href ? (
                                        <>
                                            <NavigationMenuLink asChild>
                                                <Link href={item.href}>
                                                    <Button variant="ghost" className="text-sm font-medium hover:text-stg-sky-blue">{item.title}</Button>
                                                </Link>
                                            </NavigationMenuLink>
                                        </>
                                    ) : (
                                        <>
                                            <NavigationMenuTrigger className="font-medium text-sm hover:text-stg-sky-blue">
                                                {item.title}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent className="!w-[450px] p-4">
                                                <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                                                    <div className="flex flex-col h-full justify-between">
                                                        <div className="flex flex-col">
                                                            <p className="text-base font-semibold">{item.title}</p>
                                                            <p className="text-muted-foreground text-sm">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                        <Button asChild className="mt-10 bg-stg-yellow hover:bg-stg-yellow/90 text-stg-gray">
                                                            <Link href={item.title === "About Us" ? "/about" : item.title === "Programs" ? "/programs" : "/"}>
                                                                Learn More
                                                            </Link>
                                                        </Button>
                                                    </div>
                                                    <div className="flex flex-col text-sm h-full justify-end">
                                                        {item.items?.map((subItem) => (
                                                            <NavigationMenuLink
                                                                asChild
                                                                key={subItem.title}
                                                            >
                                                                <Link
                                                                    href={subItem.href}
                                                                    className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded transition-colors"
                                                                >
                                                                    <span>{subItem.title}</span>
                                                                    <MoveRight className="w-4 h-4 text-muted-foreground" />
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        ))}
                                                    </div>
                                                </div>
                                            </NavigationMenuContent>
                                        </>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Right Side Actions */}
                <div className="flex justify-end w-full gap-4">
                    <Button 
                        variant="outline" 
                        className="bg-transparent border-stg-sky-blue text-stg-sky-blue hover:bg-transparent hover:border-stg-sky-blue/80 hover:text-stg-sky-blue/80"
                        asChild
                    >
                        <Link href="https://st-gabriels-technical-schools-lms.vercel.app/" target="_blank" rel="noopener noreferrer">
                            Online Courses
                        </Link>
                    </Button>
                    <div className="border-r hidden md:inline"></div>
                    <Button className="hidden md:flex bg-stg-yellow hover:bg-stg-yellow/90 text-stg-gray" asChild>
                        <Link href="/admissions">
                            Apply Now
                        </Link>
                    </Button>
                </div>

                {/* Mobile Menu */}
                <div className="flex w-12 shrink lg:hidden items-end justify-end">
                    <Button variant="ghost" onClick={() => { console.log('Hamburger clicked'); setOpen(!isOpen); }}>
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>
                    {isOpen && (
                        <div className="fixed top-20 left-0 right-0 z-50 mx-4 rounded-2xl overflow-hidden shadow-2xl border border-white/30 bg-white pointer-events-auto">
                            <div className="bg-white/60 p-6 space-y-6">
                                {navigationItems.map((item, idx) => {
    return (
        <div key={item.title}>
            <div className="flex flex-col gap-3">
                {item.href ? (
                    <Link
                        href={item.href}
                        className="flex justify-between items-center hover:text-stg-sky-blue transition-all duration-300 hover:bg-mint_cream-100 rounded-lg p-3 -m-3"
                        onClick={() => setOpen(false)}
                    >
                        <span className="text-lg font-medium text-rich_black-500">{item.title}</span>
                        <MoveRight className="w-5 h-5 stroke-1 text-light_blue-400" />
                    </Link>
                ) : (
                    <p className="text-lg font-semibold text-rich_black-500 px-3">{item.title}</p>
                )}
                {item.items &&
    item.items.map((subItem) => (
        <Link
            key={subItem.title}
            href={subItem.href}
            className="flex justify-between items-center hover:text-stg-sky-blue transition-all duration-300 hover:bg-mint_cream-100 rounded-lg p-3 ml-3 -m-3"
            onClick={() => setOpen(false)}
        >
            <span className="text-light_blue-400 font-medium">
                {subItem.title}
            </span>
            <MoveRight className="w-4 h-4 stroke-1" />
        </Link>
    ))}
            </div>
            {/* Divider between main sections */}
            {(idx > 0 || item.title === "Home") && (
    <div className="my-5 border-t border-mint_cream-300 opacity-80" />
)}
        </div>
    );
})}
                                {/* Mobile Apply Now Button */}
                                <div className="pt-4 border-t border-white/20">
                                    <Button 
                                        className="w-full bg-gradient-to-r from-yellow-200 to-yellow-300 hover:from-yellow-300 hover:to-yellow-400 text-gray-800 font-semibold py-3 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl" 
                                        asChild
                                    >
                                        <Link href="/admissions" onClick={() => setOpen(false)}>
                                            Apply Now
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            </div>
        </header>
    );
}

export default Header;
