import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall, Sparkles } from "lucide-react";

function CTA() {
  return (
    <div className="w-full py-20 lg:py-28 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Illustration Space */}
          <div className="relative h-96 lg:h-[500px] order-2 lg:order-1">
            <div className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
              {/* SVG illustration will be added here */}
              <div className="text-gray-400 text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm font-medium">Illustration placeholder</p>
              </div>
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="flex flex-col gap-8 order-1 lg:order-2">
            {/* Modern badge with animation */}
            <div className="animate-fade-in-up delay-100">
              <Badge className="bg-gradient-to-r from-stg-sky-blue to-stg-sky-blue/80 text-white hover:from-stg-sky-blue/90 hover:to-stg-sky-blue/70 px-6 py-2 text-sm font-semibold rounded-full shadow-lg">
                <Sparkles className="w-4 h-4 mr-2" />
                Start Your Journey
              </Badge>
            </div>
            
            {/* Enhanced typography with animations */}
            <div className="flex flex-col gap-6 animate-fade-in-up delay-200">
              <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-gray-900 leading-tight">
                Ready to Build Your
                <span className="block bg-gradient-to-r from-stg-yellow to-stg-sky-blue bg-clip-text text-transparent">
                  Future?
                </span>
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-gray-600 font-light">
                Join St. Gabriel Technical Institute and gain the practical skills employers demand. 
                Our industry-focused programs prepare you for immediate employment and long-term career success.
              </p>
            </div>
          
            {/* Modern button group with enhanced styling */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up delay-300">
              <Button 
                className="group gap-3 bg-gradient-to-r from-stg-sky-blue to-stg-sky-blue/90 hover:from-stg-sky-blue/90 hover:to-stg-sky-blue/80 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300" 
                variant="default"
              >
                Apply Now 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                className="group gap-3 border-2 border-stg-sky-blue text-stg-sky-blue bg-white hover:bg-stg-sky-blue hover:text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300" 
                variant="outline"
              >
                Schedule a Visit 
                <PhoneCall className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </Button>
            </div>
          
            {/* Additional modern elements */}
            <div className="flex flex-wrap items-center gap-6 mt-8 text-gray-500 animate-fade-in-up delay-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-stg-yellow rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Industry-Ready Skills</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-stg-sky-blue rounded-full animate-pulse delay-300"></div>
                <span className="text-sm font-medium">Career Success</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-700"></div>
                <span className="text-sm font-medium">Expert Faculty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CTA };
