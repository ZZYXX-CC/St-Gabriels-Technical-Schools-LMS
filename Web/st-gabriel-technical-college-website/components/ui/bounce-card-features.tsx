import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Zap, Users, Award } from "lucide-react";

interface BounceCardProps {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

interface CardTitleProps {
  children: React.ReactNode;
}

export const BouncyCardsFeatures = () => {
  return (
    <div className="relative">
      {/* Radial Blue Glow Effect - Behind Hero Image */}
       <motion.div 
         className="absolute -top-64 left-1/2 transform -translate-x-1/2 w-screen h-[40rem] bg-gradient-radial from-stg-sky-blue/20 via-stg-sky-blue/10 to-transparent rounded-full blur-3xl -z-10"
         animate={{
           opacity: [0.3, 0.6, 0.3],
           scale: [0.95, 1.1, 0.95]
         }}
         transition={{
           duration: 6,
           repeat: Infinity,
           ease: "easeInOut"
         }}
       ></motion.div>
       <motion.div 
         className="absolute -top-48 left-1/2 transform -translate-x-1/2 w-full max-w-none h-96 bg-gradient-radial from-stg-sky-blue/25 via-stg-sky-blue/15 to-transparent rounded-full blur-2xl -z-10"
         animate={{
           opacity: [0.4, 0.8, 0.4],
           y: [-8, 8, -8]
         }}
         transition={{
           duration: 4,
           repeat: Infinity,
           ease: "easeInOut",
           delay: 0.8
         }}
       ></motion.div>
       <motion.div 
          className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-full max-w-none h-80 bg-gradient-radial from-stg-sky-blue/30 via-stg-sky-blue/20 to-transparent rounded-full blur-xl -z-10"
         animate={{
           opacity: [0.5, 0.9, 0.5]
         }}
         transition={{
           duration: 3,
           repeat: Infinity,
           ease: "easeInOut",
           delay: 1.5
         }}
       ></motion.div>
      
      {/* Card Container with Smoke Transparency Effect */}
      <div className="relative bg-white/70 backdrop-blur-xs rounded-t-[2rem] shadow-2xl shadow-white/20 mx-4 md:mx-8 z-10">
        <section className="mx-auto max-w-7xl px-4 py-16 text-slate-800">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
            <h2 className="max-w-lg text-4xl font-bold md:text-5xl">
              Our Accredited
              <span className="text-stg-sky-blue"> Technical Courses</span>
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block whitespace-nowrap rounded-lg bg-stg-sky-blue px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-stg-sky-blue/90"
            >
              View All Programs
            </motion.button>
          </div>
          <div className="mb-8 grid grid-cols-12 gap-6">
            <BounceCard 
              className="col-span-12 md:col-span-4"
              style={{
                backgroundImage: 'url(/asset/auto.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
               <div className="absolute inset-0 bg-blue-500/5 border border-blue-300/15 rounded-2xl"></div>
                <CardTitle>
                   <div className="inline-block text-white drop-shadow-2xl font-bold bg-gradient-to-t from-blue-600/30 via-blue-500/20 to-transparent backdrop-blur-[4px] border-2 border-blue-400/40 px-4 py-2 rounded-xl">
                     AutoCare Technology
                   </div>
                 </CardTitle>
                <div className="absolute bottom-0 left-4 right-4 top-28 translate-y-8 rounded-t-2xl bg-gradient-to-br from-blue-400/30 to-sky-400/30 backdrop-blur-[2px] p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <GraduationCap className="w-12 h-12 text-blue-50 mb-2" />
                    <span className="block font-semibold text-blue-50 text-sm">
                      Modern vehicle maintenance and repair skills with industry-standard diagnostic equipment
                    </span>
                  </div>
                </div>
            </BounceCard>
            <BounceCard 
              className="col-span-12 md:col-span-8"
              style={{
                backgroundImage: 'url(/asset/cyber.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
               <div className="absolute inset-0 bg-blue-500/5 border border-blue-300/15 rounded-2xl"></div>
              <CardTitle>
                 <div className="inline-block text-white drop-shadow-2xl font-bold bg-emerald-500/10 backdrop-blur-sm px-4 py-2 rounded-xl border-2 border-emerald-400/40">
                   Cybersecurity Fundamentals
                 </div>
               </CardTitle>
               <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-emerald-400/50 to-teal-400/50 backdrop-blur-sm p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <Zap className="w-12 h-12 text-teal-50 mb-2" />
                  <span className="block font-semibold text-teal-50 text-sm">
                    Network security, threat assessment, and protective measures for modern digital infrastructure
                  </span>
                </div>
              </div>
            </BounceCard>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <BounceCard 
              className="col-span-12 md:col-span-8"
              style={{
                 backgroundImage: 'url(/asset/electricals.png)',
                 backgroundSize: 'cover',
                 backgroundPosition: 'center'
               }}
            >
               <div className="absolute inset-0 bg-orange-500/5 border border-orange-300/15 rounded-2xl"></div>
              <CardTitle>
                 <div className="inline-block text-white drop-shadow-2xl font-bold bg-gradient-to-t from-orange-600/30 via-orange-500/20 to-transparent backdrop-blur-[4px] border-2 border-orange-400/40 px-4 py-2 rounded-xl">
                   Electrical Installation & Maintenance
                 </div>
               </CardTitle>
              <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400/30 to-orange-400/30 backdrop-blur-[2px] p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <Users className="w-12 h-12 text-orange-50 mb-2" />
                  <span className="block font-semibold text-orange-50 text-sm">
                    Comprehensive training in electrical systems, wiring, and safety protocols for residential and commercial work
                  </span>
                </div>
              </div>
            </BounceCard>
            <BounceCard 
              className="col-span-12 md:col-span-4"
              style={{
                backgroundImage: 'url(/asset/welding.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
               <div className="absolute inset-0 bg-pink-500/5 border border-pink-300/15 rounded-2xl"></div>
              <CardTitle>
                 <div className="inline-block text-white drop-shadow-2xl font-bold bg-gradient-to-t from-pink-600/30 via-pink-500/20 to-transparent backdrop-blur-[4px] border-2 border-pink-400/40 px-4 py-2 rounded-xl">
                   Welding & Fabrication
                 </div>
               </CardTitle>
              <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-rose-400/30 to-pink-400/30 backdrop-blur-[2px] p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <Award className="w-12 h-12 text-pink-50 mb-2" />
                  <span className="block font-semibold text-pink-50 text-sm">
                    Various welding techniques and metal fabrication skills with modern equipment
                  </span>
                </div>
              </div>
            </BounceCard>
          </div>
          {/* Mobile View All Programs Button */}
          <div className="mt-8 flex justify-center md:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg bg-stg-sky-blue px-6 py-3 font-medium text-white shadow-xl transition-colors hover:bg-stg-sky-blue/90"
            >
              View All Programs
            </motion.button>
          </div>
        </section>
      </div>
    </div>
  );
};

const BounceCard: React.FC<BounceCardProps> = ({ className, children, style }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
      style={style}
    >
      {children}
    </motion.div>
  );
};

const CardTitle: React.FC<CardTitleProps> = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
  );
};