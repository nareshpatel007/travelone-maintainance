"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";

export default function MaintenancePage() {
  return (
    <div className="relative flex flex-col min-h-screen justify-between bg-[#F6EFE6] text-[#1E1E1E]">
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-72 bg-gradient-to-b from-[#FFF5E6] to-transparent pointer-events-none -z-10" />

      {/* Minimal Header */}
      <header className="w-full pt-8 pb-4 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="inline-block">
            <Image
              src="/common/logo.png"
              alt="TravelOne"
              width={160}
              height={50}
              priority
              className="h-10 sm:h-11 w-auto object-contain"
            />
          </Link>

          <a
            href="mailto:connect@traveloneglobal.com"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#d9cec1] bg-white/70 hover:bg-white text-xs sm:text-sm font-medium text-[#1E1E1E] transition-all shadow-2xs"
          >
            <Mail className="w-3.5 h-3.5 text-[#C46A3A]" />
            <span>connect@traveloneglobal.com</span>
          </a>
        </div>
      </header>

      {/* Clean Centered Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 text-center max-w-2xl mx-auto my-auto">
        {/* Subtle pill tag */}
        <span className="inline-block px-3.5 py-1 rounded-full bg-[#FFF9EE] border border-[#d9cec1] text-[#C46A3A] text-xs font-semibold tracking-widest uppercase mb-6">
          Scheduled Maintenance
        </span>

        {/* Clean Luxury Heading */}
        <h1 className="cinzel-font text-3xl sm:text-5xl text-[#1E1E1E] font-medium tracking-tight leading-tight mb-5">
          We&apos;ll Be Back Shortly
        </h1>

        {/* Short, direct description */}
        <p className="text-base sm:text-lg text-[#6F6F6F] leading-relaxed max-w-lg mb-8 font-normal">
          Our website is currently undergoing planned system maintenance and upgrades to serve you better.
        </p>

        {/* Single primary contact / inquiry action */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a
            href="mailto:connect@traveloneglobal.com?subject=TravelOne%20Inquiry"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#1E1E1E] hover:bg-[#C46A3A] text-white text-sm font-medium transition-colors shadow-sm"
          >
            <span>Contact Support Desk</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="tel:7032003901"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#d9cec1] bg-white/60 hover:bg-white text-[#1E1E1E] text-sm font-medium transition-colors"
          >
            <span>Call +1 703-200-3901</span>
          </a>
        </div>
      </main>

      {/* Simple Minimal Footer */}
      <footer className="w-full pb-8 pt-4 px-6 text-center text-xs text-[#6F6F6F]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between border-t border-[#E6DED4] pt-6 gap-3">
          <div>
            © {new Date().getFullYear()} TravelOne Global Travel Services LLC.
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <span>Sheridan, WY</span>
            <span>•</span>
            <span>Toronto, ON</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
