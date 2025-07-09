import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Car,
  Zap,
  Droplet,
  Thermometer,
  Hammer,
  HardHat,
  ShieldCheck,
  Laptop,
  Megaphone,
  BarChart,
  Shirt,
  Utensils,
  Camera,
  Video,
  BrickWallIcon as Brick,
  Paintbrush,
  Tally1Icon as Tally,
  Sun,
  PiggyBank,
  Code,
  Building,
  Lightbulb,
} from "lucide-react"

const programsData = [
  {
    category: "Construction and Building Programs",
    icon: Building,
    programs: [
      {
        title: "Masonry and Stonework",
        description: "Master brick laying, stone cutting, and structural masonry techniques for construction projects.",
        image: "/placeholder.svg?height=200&width=300",
        icon: Brick,
      },
      {
        title: "Painting and Decoration",
        description:
          "Covers surface preparation, color theory, and decorative techniques for residential and commercial applications.",
        image: "/placeholder.svg?height=200&width=300",
        icon: Paintbrush,
      },
      {
        title: "Tiling and Floor Installation",
        description:
          "Specialized program teaching ceramic, stone, and specialty tile installation with precision techniques.",
        image: "/placeholder.svg?height=200&width=300",
        icon: Tally,
      },
    ],
  },
  {
    category: "Technical and Engineering Programs",
    icon: Hammer,
    programs: [
      {
        title: "AutoCare Technology",
        description:
          "Comprehensive automotive program equipping students with modern vehicle maintenance and repair skills.",
        image: "/placeholder.svg?height=200&width=300",
        icon: Car,
      },
      {
        title: "Electrical Installation and Maintenance",
        description:
          "Thorough training in electrical systems, wiring, and safety protocols for residential and commercial work.",
        image: "/placeholder.svg?height=200&width=300",
        icon: Zap,
      },
      {
        title: "Plumbing and Pipeline Services",
        description: "Covers modern plumbing techniques, pipe installation, and water system maintenance.",
        image: "/placeholder.svg?height=200&width=300",
        icon: Droplet,
      },
      {
        title: "HVAC Systems Technology",
        description:
          "Master heating, ventilation, and air conditioning systems installation and maintenance, including energy-efficient technologies.",
        image: "/placeholder.svg?height=200&width=300",
        icon: Thermometer,
      },
      {
        title: "Welding and Fabrication",
        description:
          "Hands-on program teaching various welding techniques and metal fabrication skills with modern equipment.",
        image: "/placeholder.svg?height=200&width=300",
        icon: Hammer,
      },
      {
        title: "Carpentry and Joinery",
        description:
          "Combines traditional woodworking techniques with modern construction methods for furniture making and construction carpentry.",
        image: "/placeholder.svg?height=200&width=300",
        icon: HardHat,
      },
    ],
  },
  {
    category: "Digital Technology Programs",
    icon: Code,
    programs: [
      {
        title: "Cybersecurity Fundamentals",
        description:
          "Cutting-edge program addressing the growing demand for cybersecurity professionals, covering network security and threat assessment.",
        image: "/placeholder.svg?height=200&width=300",
        icon: ShieldCheck,
      },
      {
        title: "Computer System Repairs and Maintenance",
        description:
          "Master hardware troubleshooting, system optimization, and computer maintenance, preparing graduates for technical support.",
        image: "/placeholder.svg?height=200&width=300",
        icon: Laptop,
      },
      {
        title: "Digital Marketing Strategies",
        description:
          "Covers social media marketing, content creation, and online advertising strategies for business growth.",
        image: "/placeholder.svg?height=200&width=300",
        icon: Megaphone,
      },
      {
        title: "Data Analytics and Business Intelligence",
        description: "Teaches students to collect, analyze, and interpret data for business decision-making.",
        image: "/placeholder.svg?height=200&width=300",
        icon: BarChart,
      },
    ],
  },
  {
    category: "Creative and Hospitality Programs",
    icon: Utensils,
    programs: [
      {
        title: "Fashion Design and Tailoring",
        description:
          "Develop skills in garment construction, pattern making, and fashion design, combining traditional and contemporary trends.",
        image: "/placeholder.svg?height=200&width=300",
        icon: Shirt,
      },
      {
        title: "Catering and Hospitality Management",
        description:
          "Comprehensive program covering food preparation, service excellence, and hospitality business management.",
        image: "/placeholder.svg?height=200&width=300",
        icon: Utensils,
      },
      {
        title: "Photography and Visual Arts",
        description:
          "Learn traditional and digital photography techniques, including photo editing and visual storytelling.",
        image: "/placeholder.svg?height=200&width=300",
        icon: Camera,
      },
      {
        title: "Videography and Media Production",
        description: "Teaches video production, editing, and media content creation with professional equipment.",
        image: "/placeholder.svg?height=200&width=300",
        icon: Video,
      },
    ],
  },
  {
    category: "Emerging Technologies",
    icon: Lightbulb,
    programs: [
      {
        title: "Renewable Energy Systems",
        description:
          "Learn solar panel installation, wind energy systems, and sustainable energy technologies for the growing renewable energy sector.",
        image: "/placeholder.svg?height=200&width=300",
        icon: Sun,
      },
      {
        title: "Animal Husbandry and Agricultural Technology",
        description:
          "Combines traditional animal care with modern agricultural practices, including livestock management and agricultural business principles.",
        image: "/placeholder.svg?height=200&width=300",
        icon: PiggyBank,
      },
    ],
  },
]

export default function ProgramsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section for Programs */}
      <section className="relative w-full h-[400px] flex items-center justify-center text-center overflow-hidden bg-stg-gray pt-16 md:pt-20">
        <Image
          src="/placeholder.svg?height=400&width=1600"
          alt="Students in a lab setting"
          layout="fill"
          objectFit="cover"
          className="z-0 brightness-50"
        />
        <div className="relative z-10 px-4 md:px-6 max-w-3xl space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight drop-shadow-lg">
            Our Comprehensive Programs
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Explore our diverse range of technical and vocational training programs designed to equip you with in-demand
            skills.
          </p>
        </div>
      </section>

      {/* Programs List Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          {programsData.map((category, index) => (
            <div key={category.category} className="mb-16 last:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-stg-gray mb-8 flex items-center gap-3">
                <category.icon className="h-10 w-10 text-stg-sky-blue" />
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.programs.map((program, pIndex) => (
                  <Card
                    key={program.title}
                    className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl"
                  >
                    <Image
                      src={program.image || "/placeholder.svg"}
                      alt={program.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-stg-gray flex items-center gap-2">
                        <program.icon className="h-6 w-6 text-stg-yellow" />
                        {program.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">{program.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button asChild className="bg-stg-sky-blue text-white hover:bg-stg-sky-blue/90">
                        <Link href="/contact">Inquire Now</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Online Learning Section */}
      <section className="py-16 md:py-24 bg-stg-yellow">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-stg-gray mb-6">
            Can't Attend On-Campus? Try Our Online Courses
          </h2>
          <p className="text-lg text-stg-gray mb-8 max-w-3xl mx-auto">
            Access many of our technical programs through our comprehensive Learning Management System. Perfect for
            working professionals, remote learners, and those seeking flexible scheduling.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-stg-gray mb-3">Short Programs</h3>
              <p className="text-gray-700">
                Intensive courses designed for quick skill acquisition and career advancement.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-stg-gray mb-3">Specialized Courses</h3>
              <p className="text-gray-700">Focused training in specific technical areas and emerging technologies.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-stg-gray mb-3">Flexible Learning</h3>
              <p className="text-gray-700">Study at your own pace with 24/7 access to course materials and support.</p>
            </div>
          </div>
          <Button
            asChild
            className="bg-stg-sky-blue text-white hover:bg-stg-sky-blue/90 px-10 py-4 text-xl font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <Link
              href="https://st-gabriels-technical-schools-lms.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Online Courses
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
