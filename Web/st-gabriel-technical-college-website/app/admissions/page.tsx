import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  Users,
  Calendar,
  CheckCircle,
  Clock,
  GraduationCap,
  BookOpen,
  UserCheck,
  AlertCircle,
  Download,
  Globe,
  MapPin,
} from "lucide-react"

const programRequirements = [
  {
    category: "Technical and Engineering Programs",
    programs: [
      "AutoCare Technology",
      "Electrical Installation and Maintenance",
      "Plumbing and Pipeline Services",
      "HVAC Systems Technology",
      "Welding and Fabrication",
      "Carpentry and Joinery",
    ],
    requirements: {
      age: "16-35 years",
      education: "SSCE/WAEC with at least 3 credits including Mathematics and English",
      entrance: "Basic technical aptitude test",
      duration: "6-12 months",
    },
  },
  {
    category: "Digital Technology Programs",
    programs: [
      "Cybersecurity Fundamentals",
      "Computer System Repairs and Maintenance",
      "Digital Marketing Strategies",
      "Data Analytics and Business Intelligence",
    ],
    requirements: {
      age: "16-40 years",
      education: "SSCE/WAEC with at least 3 credits including Mathematics and English",
      entrance: "Computer literacy assessment and logical reasoning test",
      duration: "4-8 months",
    },
  },
  {
    category: "Creative and Hospitality Programs",
    programs: [
      "Fashion Design and Tailoring",
      "Catering and Hospitality Management",
      "Photography and Visual Arts",
      "Videography and Media Production",
    ],
    requirements: {
      age: "16-45 years",
      education: "SSCE/WAEC with at least 2 credits including English",
      entrance: "Portfolio review and creative assessment",
      duration: "6-10 months",
    },
  },
  {
    category: "Construction and Building Programs",
    programs: ["Masonry and Stonework", "Painting and Decoration", "Tiling and Floor Installation"],
    requirements: {
      age: "18-40 years",
      education: "SSCE/WAEC with at least 2 credits or equivalent trade experience",
      entrance: "Practical skills assessment",
      duration: "4-8 months",
    },
  },
  {
    category: "Emerging Technologies",
    programs: ["Renewable Energy Systems", "Animal Husbandry and Agricultural Technology"],
    requirements: {
      age: "18-45 years",
      education: "SSCE/WAEC with at least 3 credits including Mathematics and English or relevant experience",
      entrance: "Technical aptitude and interest assessment",
      duration: "6-12 months",
    },
  },
]

const applicationSteps = [
  {
    step: 1,
    title: "Choose Your Program",
    description:
      "Browse our comprehensive program offerings and select the technical field that aligns with your career goals.",
    icon: BookOpen,
  },
  {
    step: 2,
    title: "Check Requirements",
    description:
      "Review the specific admission requirements for your chosen program, including age criteria and academic qualifications.",
    icon: CheckCircle,
  },
  {
    step: 3,
    title: "Submit Application",
    description:
      "Complete your application online through our portal or visit our campus to apply in person with required documents.",
    icon: FileText,
  },
  {
    step: 4,
    title: "Take Entrance Assessment",
    description: "Participate in the program-specific entrance examination or skills assessment as required.",
    icon: UserCheck,
  },
  {
    step: 5,
    title: "Interview & Counseling",
    description: "Attend a personal interview and receive academic counseling to ensure program suitability.",
    icon: Users,
  },
  {
    step: 6,
    title: "Enrollment Confirmation",
    description:
      "Receive admission decision and complete enrollment process including fee payment and orientation scheduling.",
    icon: GraduationCap,
  },
]

export default function AdmissionsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center text-center overflow-hidden bg-stg-sky-blue">
        <Image
          src="/placeholder.svg?height=500&width=1600"
          alt="Students filling out application forms"
          layout="fill"
          objectFit="cover"
          className="z-0 brightness-50"
        />
        <div className="relative z-10 px-4 md:px-6 max-w-4xl space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight drop-shadow-lg">
            Join St. Gabriel Technical School
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Start your journey toward a rewarding technical career. Learn about our admission process and requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-stg-yellow text-stg-gray hover:bg-stg-yellow/90 px-8 py-3 text-lg font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <Link href="#application-process">Application Process</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-stg-sky-blue px-8 py-3 text-lg font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <Link href="#requirements">View Requirements</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section id="application-process" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stg-gray mb-4">Application Process</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Applying to St. Gabriel Technical School is straightforward and accessible. Follow our step-by-step
              process to begin your technical education journey.
            </p>
          </div>

          {/* Application Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-white shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105 hover:shadow-xl">
              <CardHeader className="text-center">
                <Globe className="h-16 w-16 text-stg-sky-blue mx-auto mb-4" />
                <CardTitle className="text-2xl font-bold text-stg-gray">Apply Online</CardTitle>
                <CardDescription className="text-gray-600">
                  Complete your application from anywhere, anytime
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-stg-sky-blue" />
                    24/7 access to application portal
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-stg-sky-blue" />
                    Upload documents digitally
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-stg-sky-blue" />
                    Track application status online
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-stg-sky-blue" />
                    Instant confirmation receipt
                  </li>
                </ul>
                <Button className="w-full bg-stg-sky-blue text-white hover:bg-stg-sky-blue/90">Apply Online Now</Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105 hover:shadow-xl">
              <CardHeader className="text-center">
                <MapPin className="h-16 w-16 text-stg-yellow mx-auto mb-4" />
                <CardTitle className="text-2xl font-bold text-stg-gray">Apply In Person</CardTitle>
                <CardDescription className="text-gray-600">
                  Visit our campus for personalized assistance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-stg-yellow" />
                    Face-to-face guidance from admissions staff
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-stg-yellow" />
                    Campus tour and facility viewing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-stg-yellow" />
                    Immediate document verification
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-stg-yellow" />
                    Meet with program coordinators
                  </li>
                </ul>
                <Button asChild className="w-full bg-stg-yellow text-stg-gray hover:bg-stg-yellow/90">
                  <Link href="/contact">Visit Our Campus</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Step-by-Step Process */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-stg-gray mb-8 text-center">
              Step-by-Step Application Guide
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applicationSteps.map((step, index) => (
                <Card key={step.step} className="bg-white shadow-lg rounded-lg p-6 relative">
                  <div className="absolute -top-4 -left-4 bg-stg-sky-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <CardHeader className="pt-4">
                    <step.icon className="h-12 w-12 text-stg-yellow mb-4" />
                    <CardTitle className="text-xl font-bold text-stg-gray">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Required Documents */}
          <Card className="bg-stg-gray text-white p-8">
            <CardHeader className="text-center">
              <FileText className="h-16 w-16 text-stg-yellow mx-auto mb-4" />
              <CardTitle className="text-2xl font-bold">Required Documents</CardTitle>
              <CardDescription className="text-gray-300">Prepare these documents for your application</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-stg-yellow mb-3">Academic Documents</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-stg-yellow" />
                      SSCE/WAEC/NECO Certificate
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-stg-yellow" />
                      School Leaving Certificate
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-stg-yellow" />
                      Transcript (if applicable)
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-stg-yellow mb-3">Personal Documents</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-stg-yellow" />
                      Birth Certificate or Age Declaration
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-stg-yellow" />
                      Valid ID (National ID, Voter's Card, etc.)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-stg-yellow" />
                      Passport Photographs (4 copies)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-stg-yellow" />
                      Local Government Identification Letter
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Button
                  variant="outline"
                  className="bg-transparent border-stg-yellow text-stg-yellow hover:bg-stg-yellow hover:text-stg-gray"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Application Form
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Admission Requirements Section */}
      <section id="requirements" className="py-16 md:py-24 bg-stg-sky-blue text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Admission Requirements</h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Our admission requirements are designed to ensure students have the foundation needed for success in their
              chosen technical programs.
            </p>
          </div>

          {/* General Requirements */}
          <Card className="bg-white text-stg-gray shadow-lg rounded-lg p-8 mb-12">
            <CardHeader className="text-center">
              <AlertCircle className="h-16 w-16 text-stg-yellow mx-auto mb-4" />
              <CardTitle className="text-2xl font-bold">General Admission Criteria</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Users className="h-12 w-12 text-stg-sky-blue mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Age Requirements</h4>
                  <p className="text-gray-700">
                    Minimum age of 16 years for most programs, with upper age limits varying by program type.
                  </p>
                </div>
                <div className="text-center">
                  <GraduationCap className="h-12 w-12 text-stg-sky-blue mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Academic Qualifications</h4>
                  <p className="text-gray-700">
                    SSCE/WAEC certificate with required credit passes in relevant subjects.
                  </p>
                </div>
                <div className="text-center">
                  <FileText className="h-12 w-12 text-stg-sky-blue mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Entrance Assessment</h4>
                  <p className="text-gray-700">
                    Program-specific aptitude tests, practical assessments, or portfolio reviews.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Program-Specific Requirements */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">Program-Specific Requirements</h3>
            {programRequirements.map((category, index) => (
              <Card key={category.category} className="bg-white text-stg-gray shadow-lg rounded-lg overflow-hidden">
                <CardHeader className="bg-stg-gray text-white">
                  <CardTitle className="text-xl font-bold">{category.category}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-stg-sky-blue mb-3">Programs Included:</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {category.programs.map((program, pIndex) => (
                          <Badge
                            key={pIndex}
                            variant="outline"
                            className="bg-stg-sky-blue/10 text-stg-sky-blue border-stg-sky-blue"
                          >
                            {program}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-stg-sky-blue mb-3">Requirements:</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Calendar className="h-5 w-5 text-stg-yellow" />
                          <span>
                            <strong>Age Range:</strong> {category.requirements.age}
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <GraduationCap className="h-5 w-5 text-stg-yellow mt-1" />
                          <span>
                            <strong>Education:</strong> {category.requirements.education}
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <FileText className="h-5 w-5 text-stg-yellow mt-1" />
                          <span>
                            <strong>Entrance Test:</strong> {category.requirements.entrance}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="h-5 w-5 text-stg-yellow" />
                          <span>
                            <strong>Duration:</strong> {category.requirements.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Assistance Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-stg-gray mb-6">Financial Assistance Available</h2>
          <p className="text-lg text-gray-700 mb-8">
            We believe quality technical education should be accessible to all qualified students. Explore our financial
            assistance options.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white shadow-lg rounded-lg p-6">
              <CardHeader>
                <GraduationCap className="h-12 w-12 text-stg-sky-blue mx-auto mb-4" />
                <CardTitle className="text-xl font-bold text-stg-gray">Scholarships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Merit-based and need-based scholarships for outstanding students.</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg rounded-lg p-6">
              <CardHeader>
                <Calendar className="h-12 w-12 text-stg-yellow mx-auto mb-4" />
                <CardTitle className="text-xl font-bold text-stg-gray">Payment Plans</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Flexible installment options to manage tuition costs effectively.</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg rounded-lg p-6">
              <CardHeader>
                <Clock className="h-12 w-12 text-stg-sky-blue mx-auto mb-4" />
                <CardTitle className="text-xl font-bold text-stg-gray">Deferred Payment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Start tuition payments after securing employment through our job placement services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-stg-gray text-white text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Apply?</h2>
          <p className="text-lg text-gray-200 mb-8">
            Take the first step toward your technical career. Our admissions team is here to guide you through the
            process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-stg-yellow text-stg-gray hover:bg-stg-yellow/90 px-10 py-4 text-xl font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <Link href="/contact">Start Your Application</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-stg-gray px-10 py-4 text-xl font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <Link href="/contact">Contact Admissions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
