"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface About3Props {
  title?: string;
  description?: string;
  mainImage?: {
    src: string;
    alt: string;
  };
  breakout?: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
  };
}

export const About3 = ({
  title = "About Us",
  description = "St. Gabriel Technical Institute is a passionate team dedicated to creating innovative educational solutions that empower students to thrive in the technical industry.",
  mainImage = {
    src: "/asset/Y4-2_3 - Photo.jpg",
    alt: "Classroom with students raising hands at St. Gabriel Technical Institute",
  },
  breakout = {
    src: "/asset/SGT-blue.svg",
    alt: "St. Gabriel Technical Institute logo",
    title: "Excellence in Technical Education",
    description:
      "Providing students with cutting-edge facilities, expert instruction, and industry connections to build successful careers.",
    buttonText: "Discover more",
    buttonUrl: "https://stgabriel.edu.ng",
  },
}: About3Props = {}) => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-stg-sky-blue">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mt-12 md:mt-20">
          {/* Main Image on the left */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="overflow-hidden rounded-3xl shadow-2xl border-4 border-white/10 aspect-[4/3] bg-white/10 max-w-lg w-full">
              <img
                src={mainImage.src}
                alt={mainImage.alt}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
          {/* Text Content on the right */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start max-w-xl bg-white/80 rounded-2xl shadow-xl p-8 border border-light_blue/30">
            <Badge className="mb-4 bg-light_blue/20 text-rich_black border-light_blue/30 hover:bg-light_blue/30 transition-all duration-300">
              About Our Institution
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-rich_black mb-4 leading-tight">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-light_blue mb-6 leading-relaxed">
              {description}
            </p>
            <Button 
              variant="outline"
              className="bg-transparent border-2 border-rich_black text-rich_black hover:bg-rich_black/10 hover:text-rich_black transition-all duration-300 font-semibold px-6 py-2 rounded-lg shadow-none"
              asChild
            >
              <a href={breakout.buttonUrl} className="flex items-center gap-2">
                {breakout.buttonText}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
