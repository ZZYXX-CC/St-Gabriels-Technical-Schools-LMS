import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="relative z-10 py-16 px-4 md:px-6">
        <div className="container mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <Link href="/" className="group flex items-center gap-3 w-fit">
                <div className="relative">
                  <Image
                    src="/asset/SGT-blue.svg"
                    alt="St Gabriel Technical School Logo"
                    width={48}
                    height={48}
                    className="rounded-xl bg-white p-2 shadow-lg group-hover:shadow-xl transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-xl bg-white/20 group-hover:scale-110 transition-transform duration-300"></div>
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">St. Gabriel</span>
                  <div className="text-sm font-medium text-stg-yellow">Technical College</div>
                </div>
              </Link>
              
              <p className="text-gray-300 leading-relaxed max-w-sm">
                Empowering the next generation through innovative technical education and hands-on learning experiences.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" }
                ].map(({ icon: Icon, href, label }) => (
                  <Link 
                    key={label}
                    href={href} 
                    className="group relative p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-stg-yellow/50 transition-all duration-300"
                  >
                    <Icon className="h-5 w-5 text-gray-400 group-hover:text-stg-yellow transition-colors duration-300" />
                    <span className="sr-only">{label}</span>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-stg-yellow/0 to-stg-yellow/0 group-hover:from-stg-yellow/10 group-hover:to-amber-400/10 transition-all duration-300"></div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white relative">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-stg-yellow to-amber-400 rounded-full"></div>
              </h3>
              <nav className="space-y-3">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About Us" },
                  { href: "/admissions", label: "Admissions" },
                  { href: "/programs", label: "Programs" },
                  { href: "/contact", label: "Contact" }
                ].map(({ href, label }) => (
                  <Link 
                    key={label}
                    href={href} 
                    className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300"
                  >
                    <div className="w-1 h-1 rounded-full bg-stg-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{label}</span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Resources */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white relative">
                Resources
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-stg-yellow to-amber-400 rounded-full"></div>
              </h3>
              <nav className="space-y-3">
                {[
                  { href: "#", label: "Student Portal", external: false },
                  { href: "https://st-gabriels-technical-schools-lms.vercel.app/", label: "Online Courses (LMS)", external: true },
                  { href: "#", label: "Student Life", external: false },
                  { href: "#", label: "Alumni Network", external: false },
                  { href: "#", label: "News & Events", external: false }
                ].map(({ href, label, external }) => (
                  <Link 
                    key={label}
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300"
                  >
                    <div className="w-1 h-1 rounded-full bg-stg-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{label}</span>
                    {external && <ExternalLink className="h-3 w-3 opacity-60" />}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white relative">
                Contact Us
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-stg-yellow to-amber-400 rounded-full"></div>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                    <MapPin className="h-5 w-5 text-stg-yellow" />
                  </div>
                  <div>
                    <p className="text-gray-300 leading-relaxed">
                      St. Gabriel Technical and<br />
                      Vocational Training Institute<br />
                      <span className="text-stg-yellow font-medium">Enugu State, Nigeria</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 group">
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                    <Mail className="h-5 w-5 text-stg-yellow" />
                  </div>
                  <Link 
                    href="mailto:info@stgabrieltech.com"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    info@stgabrieltech.com
                  </Link>
                </div>
                
                <div className="flex items-center gap-3 group">
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                    <Phone className="h-5 w-5 text-stg-yellow" />
                  </div>
                  <span className="text-gray-300">[Contact Number]</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <span>&copy; {new Date().getFullYear()} St. Gabriel Technical College.</span>
                <span className="hidden md:inline">All rights reserved.</span>
              </div>
              
              <div className="flex items-center gap-6 text-sm">
                <Link href="#" className="text-gray-400 hover:text-stg-yellow transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-gray-400 hover:text-stg-yellow transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link href="#" className="text-gray-400 hover:text-stg-yellow transition-colors duration-300">
                  Accessibility
                </Link>
              </div>
            </div>
            
            {/* Additional Bottom Text */}
            <div className="mt-4 text-center md:text-left">
              <p className="text-xs text-gray-500">
                Accredited by the National Board for Technical Education (NBTE) • {" "}
                <span className="text-stg-yellow">Building Tomorrow's Technical Leaders</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
