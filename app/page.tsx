"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Mail,
  Phone,
  Clock,
  Sparkles,
  ShieldCheck,
  Compass,
  ArrowRight,
  CheckCircle2,
  RefreshCw,
  Globe2,
  ExternalLink,
} from "lucide-react";

export default function MaintenancePage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
    }, 600);
  };

  return (
    <div className="relative flex flex-col min-h-screen justify-between overflow-hidden">
      {/* Background aesthetic touches */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#FFF3DF] via-[#F6EFE6]/60 to-transparent pointer-events-none -z-10" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#C46A3A]/10 blur-3xl pointer-events-none -z-10 animate-pulse-subtle" />
      <div className="absolute top-1/2 -left-32 w-96 h-96 rounded-full bg-[#2F5D50]/10 blur-3xl pointer-events-none -z-10 animate-pulse-subtle" />

      {/* HEADER */}
      <header className="w-full border-b border-[#E6DED4] bg-[#FFF9EE]/90 backdrop-blur-md sticky top-0 z-40 transition-all">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="inline-block transition-transform hover:opacity-95">
            <Image
              src="/common/logo.png"
              alt="TravelOne Global"
              width={165}
              height={55}
              priority
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          <div className="flex items-center gap-3 md:gap-6 text-xs md:text-sm">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-[#E6DED4] text-[#2F5D50] font-medium shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C46A3A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C46A3A]"></span>
              </span>
              Platform Upgrade in Progress
            </div>

            <a
              href="mailto:connect@traveloneglobal.com"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1E1E1E] text-white hover:bg-[#C46A3A] transition-colors font-medium shadow-xs"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Desk</span>
            </a>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 py-12 md:py-16 max-w-5xl mx-auto w-full text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF9EE] border border-[#d9cec1] text-[#C46A3A] text-xs md:text-sm font-semibold tracking-wider uppercase mb-6 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#C46A3A]" />
          System Maintenance & Architecture Enhancement
        </div>

        {/* Hero Title */}
        <h1 className="cinzel-font text-3xl sm:text-5xl md:text-6xl text-[#1E1E1E] font-medium tracking-tight max-w-4xl leading-[1.15] mb-6">
          Crafting an Even More Seamless Journey For You
        </h1>

        {/* Narrative Description */}
        <p className="text-base sm:text-lg md:text-xl text-[#6F6F6F] max-w-2xl leading-relaxed mb-10 font-normal">
          We are upgrading our <span className="text-[#1E1E1E] font-medium">Traveler DNA intelligence engine</span> and core infrastructure to elevate how your tailored global itineraries are curated and delivered. We will be back online shortly.
        </p>

        {/* Key Feature Highlights Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mb-12 text-left">
          <div className="p-5 rounded-xl bg-[#FFF9EE]/90 border border-[#E6DED4] backdrop-blur-xs shadow-xs hover:border-[#C46A3A]/40 transition-all">
            <div className="w-10 h-10 rounded-lg bg-[#F6EFE6] flex items-center justify-center text-[#C46A3A] mb-3">
              <Compass className="w-5 h-5" />
            </div>
            <h2 className="text-sm font-semibold text-[#1E1E1E] mb-1">Traveler DNA Logic</h2>
            <p className="text-xs text-[#6F6F6F] leading-normal">
              Enhanced personalized profiling algorithm for non-generic travel blueprints.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#FFF9EE]/90 border border-[#E6DED4] backdrop-blur-xs shadow-xs hover:border-[#2F5D50]/40 transition-all">
            <div className="w-10 h-10 rounded-lg bg-[#F6EFE6] flex items-center justify-center text-[#2F5D50] mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="text-sm font-semibold text-[#1E1E1E] mb-1">ASTA & JATA Standards</h2>
            <p className="text-xs text-[#6F6F6F] leading-normal">
              Secured corporate booking infrastructure compliant with top international benchmarks.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#FFF9EE]/90 border border-[#E6DED4] backdrop-blur-xs shadow-xs hover:border-[#C46A3A]/40 transition-all">
            <div className="w-10 h-10 rounded-lg bg-[#F6EFE6] flex items-center justify-center text-[#C46A3A] mb-3">
              <Clock className="w-5 h-5" />
            </div>
            <h2 className="text-sm font-semibold text-[#1E1E1E] mb-1">Fast Restoration</h2>
            <p className="text-xs text-[#6F6F6F] leading-normal">
              Continuous deployment in progress. All client accounts and bookings remain secure.
            </p>
          </div>
        </div>

        {/* Notification Subscription Card */}
        <div className="w-full max-w-xl p-6 sm:p-8 rounded-2xl bg-white border border-[#E6DED4] shadow-md mb-12">
          <div className="mb-4">
            <h2 className="text-lg sm:text-xl font-semibold text-[#1E1E1E]">
              Get notified when we go live
            </h2>
            <p className="text-xs sm:text-sm text-[#6F6F6F] mt-1">
              Leave your email address to receive priority access the moment our platform resumes.
            </p>
          </div>

          {subscribed ? (
            <div className="p-4 rounded-xl bg-[#2F5D50]/10 border border-[#2F5D50]/20 flex items-center justify-center gap-2 text-[#2F5D50] text-sm font-medium animate-fadeIn">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>Thank you! We’ve added you to our priority launch announcement list.</span>
            </div>
          ) : (
            <form onSubmit={handleNotifySubmit} className="flex flex-col sm:flex-row gap-2.5">
              <div className="relative flex-1">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-[#FBF9F5] text-sm text-[#1E1E1E] focus:outline-none focus:ring-2 focus:ring-[#C46A3A] focus:border-transparent transition"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 rounded-lg bg-[#C46A3A] hover:bg-[#a9572c] text-white text-sm font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-70"
              >
                {loading ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <span>Notify Me</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

          <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2F5D50]" /> No spam, guaranteed
            </span>
            <span>•</span>
            <span>Zero impact on booked itineraries</span>
          </div>
        </div>

        {/* Immediate Support Desk Grid */}
        <div className="w-full max-w-4xl bg-[#FFF9EE]/70 rounded-2xl border border-[#E6DED4] p-6 sm:p-8">
          <div className="text-center mb-6">
            <p className="text-xs uppercase tracking-widest text-[#C46A3A] font-semibold mb-1">Immediate Assistance</p>
            <h2 className="text-xl sm:text-2xl font-medium text-[#1E1E1E] cinzel-font">
              Need Urgent Travel or Booking Support?
            </h2>
            <p className="text-xs sm:text-sm text-[#6F6F6F] mt-1 max-w-xl mx-auto">
              Our concierge team and regional operations desks remain completely operational during this scheduled maintenance window.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            {/* Desk 1: Global Operations */}
            <div className="p-4 rounded-xl bg-white border border-[#E6DED4] shadow-2xs hover:shadow-sm transition">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1E1E1E] uppercase tracking-wide mb-2">
                <Globe2 className="w-3.5 h-3.5 text-[#C46A3A]" />
                Corporate Headquarters
              </div>
              <p className="text-xs font-medium text-gray-800">TravelOne Global Travel Services LLC</p>
              <p className="text-xs text-gray-500 mb-3">30 N Gould St, Suite R, Sheridan, WY</p>
              <a
                href="mailto:connect@traveloneglobal.com"
                className="text-xs text-[#C46A3A] font-medium hover:underline flex items-center gap-1"
              >
                <Mail className="w-3 h-3" /> connect@traveloneglobal.com
              </a>
            </div>

            {/* Desk 2: Operations Phone Desk */}
            <div className="p-4 rounded-xl bg-white border border-[#E6DED4] shadow-2xs hover:shadow-sm transition">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1E1E1E] uppercase tracking-wide mb-2">
                <Phone className="w-3.5 h-3.5 text-[#2F5D50]" />
                Client Direct Desk
              </div>
              <p className="text-xs font-medium text-gray-800">North American Operations</p>
              <p className="text-xs text-gray-500 mb-3">Priority group & consumer desk</p>
              <a
                href="tel:7032003901"
                className="text-xs text-[#1E1E1E] font-semibold hover:text-[#C46A3A] transition flex items-center gap-1"
              >
                <Phone className="w-3 h-3 text-[#2F5D50]" /> +1 703-200-3901
              </a>
            </div>

            {/* Desk 3: Tech & Partner Support */}
            <div className="p-4 rounded-xl bg-white border border-[#E6DED4] shadow-2xs hover:shadow-sm transition">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1E1E1E] uppercase tracking-wide mb-2">
                <Mail className="w-3.5 h-3.5 text-[#C46A3A]" />
                Tech & Integration Support
              </div>
              <p className="text-xs font-medium text-gray-800">TravelOne Technologies Inc.</p>
              <p className="text-xs text-gray-500 mb-3">Toronto, ON, Canada</p>
              <a
                href="mailto:bhavin@travelone.io"
                className="text-xs text-[#C46A3A] font-medium hover:underline flex items-center gap-1"
              >
                <Mail className="w-3 h-3" /> bhavin@travelone.io
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-[#FFF9EE] border-t border-[#E6DED4] mt-auto">
        {/* Industry Accreditation Bar */}
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap items-center justify-center gap-8 md:gap-12 border-b border-[#E6DED4]/70">
          <div className="flex items-center gap-2 text-xs font-medium text-[#6F6F6F]">
            Accredited Global Member:
          </div>
          <div className="flex items-center gap-8">
            <Image
              src="/common/ASTA-Logo.png"
              alt="ASTA Proud Member"
              width={100}
              height={45}
              className="h-7 md:h-8 w-auto object-contain grayscale hover:grayscale-0 transition opacity-80 hover:opacity-100"
            />
            <Image
              src="/common/JATA-logo.gif"
              alt="JATA Member"
              width={100}
              height={45}
              className="h-7 md:h-8 w-auto object-contain grayscale hover:grayscale-0 transition opacity-80 hover:opacity-100"
            />
          </div>
          <div className="h-4 w-px bg-gray-300 hidden sm:block" />
          <div className="flex items-center gap-3">
            <span className="text-xs text-[#6F6F6F]">As Featured in:</span>
            <Image
              src="/common/et-travelworld.svg"
              alt="ET TravelWorld"
              width={110}
              height={30}
              className="h-5 w-auto object-contain opacity-75"
            />
          </div>
        </div>

        {/* Copyright & Tagline */}
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6F6F6F] gap-3">
          <div>
            © {new Date().getFullYear()} TravelOne Global Travel Services LLC. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-400">Sheridan, WY • Toronto, ON</span>
            <span>•</span>
            <span className="italic font-serif">Decoding the DNA of Journey</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
