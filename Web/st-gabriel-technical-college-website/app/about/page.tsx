import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Lightbulb, Handshake, TrendingUp, Users, GraduationCap, Wrench, Quote, Target, BookOpen, Award } from "lucide-react"

export default function AboutUsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section for About Us */}
      <section className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center text-center overflow-hidden pt-16 md:pt-24">
        {/* Solid background color or subtle overlay if desired */}
        <div className="absolute inset-0 bg-stg-sky-blue" />
        {/* Replace with your actual image path */}
        <Image
          src="/front-w.jpg"
          alt="St. Gabriel Technical Institute Front"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="relative z-10 px-4 md:px-6 max-w-4xl space-y-6">
          <Badge className="mb-4 bg-stg-yellow text-stg-gray border-stg-yellow hover:bg-stg-yellow/90 transition-all duration-300">
            Excellence in Technical Education
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-stg-yellow">About St. Gabriel</span>
            <br />
            <span className="text-white">Technical Institute</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Discover our journey, mission, and commitment to transforming lives through quality technical education
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Premium gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-stg-sky-blue/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(74,148,196,0.05),transparent_50%)]" />
        
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-stg-sky-blue/10 text-stg-sky-blue border-stg-sky-blue/20 hover:bg-stg-sky-blue/20 transition-all duration-300">
              Our Foundation
            </Badge>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-stg-yellow">Mission, Vision & Values</span>
            </h2>
            <p className="text-xl md:text-2xl text-stg-gray max-w-4xl mx-auto leading-relaxed">
              The principles that guide our commitment to excellence in technical education
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Mission Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-stg-sky-blue/5 to-stg-sky-blue/10 rounded-3xl transform group-hover:scale-105 transition-all duration-300" />
              <div className="relative p-8 md:p-10 space-y-6 text-center lg:text-left">
                <div className="w-16 h-16 bg-gradient-to-br from-stg-sky-blue to-stg-sky-blue/80 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-stg-gray mb-6">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  At St. Gabriel Technical Institute, our mission centers on empowering individuals with practical skills
                  and knowledge that enable them to thrive in their chosen careers while contributing meaningfully to
                  society. We remain committed to delivering high-quality technical education that is accessible,
                  affordable, and directly relevant to the needs of our community and the broader economy.
                </p>
              </div>
            </div>
            
            {/* Vision Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-stg-yellow/5 to-stg-yellow/10 rounded-3xl transform group-hover:scale-105 transition-all duration-300" />
              <div className="relative p-8 md:p-10 space-y-6 text-center lg:text-left">
                <div className="w-16 h-16 bg-gradient-to-br from-stg-yellow to-stg-yellow/80 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6">
                  <BookOpen className="w-8 h-8 text-stg-gray" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-stg-gray mb-6">Our Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We aspire to become a leading center of excellence in technical education, renowned for our commitment
                  to innovation, industry relevance, and student success. Our vision encompasses creating a vibrant
                  learning community where individuals from diverse backgrounds can realize their full potential and make
                  positive impacts in their professions and communities.
                </p>
              </div>
            </div>
            
            {/* Values Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-stg-gray/5 to-stg-gray/10 rounded-3xl transform group-hover:scale-105 transition-all duration-300" />
              <div className="relative p-8 md:p-10 space-y-6 text-center lg:text-left">
                <div className="w-16 h-16 bg-gradient-to-br from-stg-gray to-stg-gray/80 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-stg-gray mb-6">Core Values</h3>
                <ul className="space-y-4 text-lg text-gray-700 leading-relaxed list-none p-0">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-stg-sky-blue mt-1 flex-shrink-0" />
                    <span><strong>Excellence:</strong> We strive for the highest standards in all aspects of our educational programs and services.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-stg-sky-blue mt-1 flex-shrink-0" />
                    <span><strong>Innovation:</strong> We embrace new technologies and teaching methods to enhance learning outcomes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-stg-sky-blue mt-1 flex-shrink-0" />
                    <span><strong>Integrity:</strong> We maintain the highest ethical standards in all our interactions and decisions.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-stg-sky-blue mt-1 flex-shrink-0" />
                    <span><strong>Inclusivity:</strong> We welcome and support students from all backgrounds and circumstances.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-stg-sky-blue mt-1 flex-shrink-0" />
                    <span><strong>Community:</strong> We foster strong connections between students, faculty, and industry partners.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Advantages Section */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-white via-slate-50/50 to-stg-sky-blue/5">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-stg-yellow/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-stg-sky-blue/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-stg-yellow/10 text-stg-yellow border-stg-yellow/20 hover:bg-stg-yellow/20 transition-all duration-300">
              Our Advantages
            </Badge>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-stg-sky-blue">What Sets Us Apart</span>
            </h2>
            <p className="text-xl md:text-2xl text-stg-gray max-w-4xl mx-auto leading-relaxed">
              Discover the unique advantages that make St. Gabriel Technical Institute your best choice for technical education
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Industry-Relevant Curriculum */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white to-stg-sky-blue/5 rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-300" />
              <div className="relative p-8 space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-stg-sky-blue to-stg-sky-blue/80 rounded-2xl flex items-center justify-center mb-6">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-stg-gray mb-4">Industry-Relevant Curriculum</h3>
                <p className="text-gray-600 leading-relaxed">
                  Developed in collaboration with industry experts, ensuring our training programs align with current
                  market needs and technological advancements.
                </p>
              </div>
            </div>
            {/* Experienced Faculty */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white to-stg-yellow/5 rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-300" />
              <div className="relative p-8 space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-stg-yellow to-stg-yellow/80 rounded-2xl flex items-center justify-center mb-6">
                  <GraduationCap className="w-8 h-8 text-stg-gray" />
                </div>
                <h3 className="text-2xl font-bold text-stg-gray mb-4">Experienced Faculty</h3>
                <p className="text-gray-600 leading-relaxed">
                  Brings real-world expertise and insights into every classroom, combining extensive industry experience
                  with educational excellence.
                </p>
              </div>
            </div>
            {/* State-of-the-Art Facilities */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white to-stg-gray/5 rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-300" />
              <div className="relative p-8 space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-stg-gray to-stg-gray/80 rounded-2xl flex items-center justify-center mb-6">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-stg-gray mb-4">State-of-the-Art Facilities</h3>
                <p className="text-gray-600 leading-relaxed">
                  Feature modern equipment and cutting-edge technology, providing students with hands-on experience
                  using industry-standard tools.
                </p>
              </div>
            </div>
            
            {/* Comprehensive Support Services */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white to-stg-sky-blue/5 rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-300" />
              <div className="relative p-8 space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-stg-sky-blue to-stg-sky-blue/80 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-stg-gray mb-4">Comprehensive Support Services</h3>
                <p className="text-gray-600 leading-relaxed">
                  Include academic counseling, career guidance, and financial assistance, providing personalized
                  attention to help each student succeed.
                </p>
              </div>
            </div>
            
            {/* Strong Industry Partnerships */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white to-stg-yellow/5 rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-300" />
              <div className="relative p-8 space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-stg-yellow to-stg-yellow/80 rounded-2xl flex items-center justify-center mb-6">
                  <Handshake className="w-8 h-8 text-stg-gray" />
                </div>
                <h3 className="text-2xl font-bold text-stg-gray mb-4">Strong Industry Partnerships</h3>
                <p className="text-gray-600 leading-relaxed">
                  With leading companies and organizations provide students with internship opportunities, industry
                  projects, and networking events.
                </p>
              </div>
            </div>
            
            {/* Job Placement Assistance */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white to-stg-gray/5 rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-300" />
              <div className="relative p-8 space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-stg-gray to-stg-gray/80 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-stg-gray mb-4">Job Placement Assistance</h3>
                <p className="text-gray-600 leading-relaxed">
                  Includes resume building, interview preparation, and direct connections with potential employers,
                  actively connecting graduates with employment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Success Stories Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Premium gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-stg-gray/5 via-white to-stg-yellow/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,193,7,0.05),transparent_50%)]" />
        
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-stg-gray/10 text-stg-gray border-stg-gray/20 hover:bg-stg-gray/20 transition-all duration-300">
              Success Stories
            </Badge>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-stg-gray">Student Success Stories</span>
            </h2>
            <p className="text-xl md:text-2xl text-stg-gray max-w-4xl mx-auto leading-relaxed">
              Real stories from our graduates who have transformed their careers and achieved their dreams
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white to-stg-sky-blue/5 rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-300" />
              <div className="relative p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-stg-sky-blue to-stg-sky-blue/80 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Quote className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  "St. Gabriel Technical Institute transformed my career prospects completely. The hands-on
                  training with modern diagnostic equipment prepared me for immediate employment at a leading automotive
                  service center."
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <div className="font-bold text-stg-gray text-lg">Emmanuel Okoro</div>
                  <div className="text-stg-sky-blue font-medium">AutoCare Graduate</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white to-stg-yellow/5 rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-300" />
              <div className="relative p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-stg-yellow to-stg-yellow/80 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Quote className="w-8 h-8 text-stg-gray" />
                </div>
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  "The digital marketing program at St. Gabriel exceeded my expectations. I launched my own
                  marketing consultancy immediately after graduation and now serve clients across Nigeria."
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <div className="font-bold text-stg-gray text-lg">Chioma Nnamdi</div>
                  <div className="text-stg-yellow font-medium">Digital Marketing Specialist</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white to-stg-gray/5 rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-300" />
              <div className="relative p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-stg-gray to-stg-gray/80 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Quote className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  "After completing the electrical installation program, I started my own electrical services
                  company. The comprehensive training gave me confidence to take on diverse projects."
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <div className="font-bold text-stg-gray text-lg">Joseph Eze</div>
                  <div className="text-stg-gray font-medium">Electrical Installation Entrepreneur</div>
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white to-stg-sky-blue/5 rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-300" />
              <div className="relative p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-stg-sky-blue to-stg-sky-blue/80 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Quote className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  "The fashion design program provided me with both creative skills and business knowledge. Now I
                  run a successful fashion boutique and have dressed several celebrities."
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <div className="font-bold text-stg-gray text-lg">Blessing Ugwu</div>
                  <div className="text-stg-sky-blue font-medium">Fashion Design Success</div>
                </div>
              </div>
            </div>

            {/* Testimonial 5 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white to-stg-yellow/5 rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-300" />
              <div className="relative p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-stg-yellow to-stg-yellow/80 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Quote className="w-8 h-8 text-stg-gray" />
                </div>
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  "The cybersecurity program at St. Gabriel prepared me for one of the fastest-growing fields in
                  technology. I now work as a cybersecurity analyst for a major financial institution."
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <div className="font-bold text-stg-gray text-lg">Michael Okafor</div>
                  <div className="text-stg-yellow font-medium">Cybersecurity Professional</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
