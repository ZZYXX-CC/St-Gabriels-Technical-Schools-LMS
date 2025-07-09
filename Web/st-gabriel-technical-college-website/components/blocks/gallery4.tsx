"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
}

const data = [
  {
    id: "shadcn-ui",
    title: "shadcn/ui: Building a Modern Component Library",
    description:
      "Explore how shadcn/ui revolutionized React component libraries by providing a unique approach to component distribution and customization, making it easier for developers to build beautiful, accessible applications.",
    href: "https://ui.shadcn.com",
    image:
      "https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "tailwind",
    title: "Tailwind CSS: The Utility-First Revolution",
    description:
      "Discover how Tailwind CSS transformed the way developers style their applications, offering a utility-first approach that speeds up development while maintaining complete design flexibility.",
    href: "https://tailwindcss.com",
    image:
      "https://images.unsplash.com/photo-1551250928-e4a05afaed1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjR8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "astro",
    title: "Astro: The All-in-One Web Framework",
    description:
      "Learn how Astro's innovative 'Islands Architecture' and zero-JS-by-default approach is helping developers build faster websites while maintaining rich interactivity where needed.",
    href: "https://astro.build",
    image:
      "https://images.unsplash.com/photo-1536735561749-fc87494598cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxNzd8fHx8fHwyfHwxNzIzNjM0NDc0fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "react",
    title: "React: Pioneering Component-Based UI",
    description:
      "See how React continues to shape modern web development with its component-based architecture, enabling developers to build complex user interfaces with reusable, maintainable code.",
    href: "https://react.dev",
    image:
      "https://images.unsplash.com/photo-1548324215-9133768e4094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMzF8fHx8fHwyfHwxNzIzNDM1MzA1fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "nextjs",
    title: "Next.js: The React Framework for Production",
    description:
      "Explore how Next.js has become the go-to framework for building full-stack React applications, offering features like server components, file-based routing, and automatic optimization.",
    href: "https://nextjs.org",
    image:
      "https://images.unsplash.com/photo-1550070881-a5d71eda5800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjV8fHx8fHwyfHwxNzIzNDM1Mjk4fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Gallery4 = ({
  title = "Case Studies",
  description =
    "Discover how leading companies and developers are leveraging modern web technologies to build exceptional digital experiences. These case studies showcase real-world applications and success stories.",
  items = data,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-32 relative bg-[url('/asset/mobile.jpg')] md:bg-[url('/asset/bg-white.jpg')] bg-cover bg-center overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-20">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl bg-gradient-to-r from-stg-sky-blue to-stg-sky-blue/70 bg-clip-text text-transparent">
              {title}
            </h2>
            <p className="mt-4 text-lg md:text-xl text-stg-gray">
              {description}
            </p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full relative z-20">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 px-4 md:px-6 lg:px-8 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
              >
                <a href={item.href} className="group block">
                  <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                    {/* Image Container */}
                    <div className="relative h-48 overflow-hidden rounded-t-2xl">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Subtle gradient overlay for better text contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                      {/* Brand accent overlay */}
                      <div className="absolute top-4 right-4">
                        <div className="w-3 h-3 bg-stg-sky-blue rounded-full opacity-80"></div>
                      </div>
                    </div>
                    
                    {/* Content Container */}
                    <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                      {/* Title */}
                      <h3 className="text-xl font-bold text-stg-gray mb-3 line-clamp-2 group-hover:text-stg-sky-blue transition-colors duration-300">
                        {item.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 flex-grow mb-4">
                        {item.description}
                      </p>
                      
                      {/* Call to Action */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-stg-sky-blue font-medium text-sm group-hover:text-stg-sky-blue/80 transition-colors duration-300">
                          Learn More
                        </span>
                        <ArrowRight className="w-4 h-4 text-stg-sky-blue transition-all duration-300 group-hover:translate-x-1 group-hover:text-stg-sky-blue/80" />
                      </div>
                    </div>
                    
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stg-sky-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-primary" : "bg-primary/20"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button
            variant="default"
            className="bg-stg-sky-blue hover:bg-stg-sky-blue/90 text-white px-8 py-3"
            asChild
          >
            <a href="/programs">View All Programs</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };
