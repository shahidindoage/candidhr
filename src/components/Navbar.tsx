import React, { useState } from 'react';
import { ChevronDown, Menu, X, ArrowRight, ArrowUpRight, Shield, ShieldCheck, Zap, Server, Globe, Users, Headphones, RadioTower, Router, Store, Hotel, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  onOpenDemo?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [mobileServiceIdx, setMobileServiceIdx] = useState<number | null>(null);

  const toggleMobileSection = (key: string) => {
    setMobileSection((prev) => (prev === key ? null : key));
  };

  // Mega Menu Data Structures
  const productFeatures = [
    { name: 'Billing & Finance', desc: 'Invoicing & payment gateways', href: '/features/billing-and-finance' },
    { name: 'Subscriber Management', desc: 'Portal & user lifecycles', href: '#subscriber' },
    { name: 'Franchise & Reseller', desc: 'Multi-tier partner nodes', href: '#franchise' },
    { name: 'Ticketing System', desc: 'Automated SLA support', href: '#ticketing' },
    { name: 'Network Map', desc: 'Real-time topology view', href: '#network-map' },
    { name: 'Wi-Fi Hotspot', desc: 'Captive portal manager', href: '#wifi-hotspot' },
    { name: 'ACS (TR-069)', desc: 'Remote device management', href: '#acs' },
    { name: 'Inventory Management', desc: 'Stock & hardware tracking', href: '#inventory' },
  ];

  const solutionsList = [
    { title: 'ISP Billing Systems', desc: 'End-to-end ISP automation', icon: Server, href: '/solutions/internet-management-and-billing-system-for-isp' },
    { title: 'Hotel Wi-Fi Hotspots', desc: 'PMS integrations & guest passes', icon: Globe, href: '/solutions/wi-fi-management-system-for-hotels' },
    { title: 'OTP Public Wi-Fi', desc: 'SMS auth & legal compliance', icon: Shield, href: '/solutions/public-hotspot-wifi-management-system' },
    { title: 'Institute & Campus', desc: 'Bandwidth quota controls', icon: Users, href: '/solutions/hotspot-wi-fi-management-system-for-educational-institutes' },
    { title: 'Library Systems', desc: 'Timed access management', icon: Zap, href: '/solutions/library-wi-fi-management-system' },
    { title: 'Retail Business Wi-Fi', desc: 'Marketing & splash screens', icon: Headphones, href: '/solutions/retail-business-wi-fi-management-system' },
  ];

  const servicesCategories = [
    {
      title: 'ISP Billing and Management',
      desc: 'Fiber, broadband & ISP operations',
      icon: Server,
      href: '/isp-billing-and-management-software-in-india-netzur',
      links: [
        { name: 'ISP Billing and Management Software in India', desc: 'UPI, GST & regional compliance', href: '/isp-billing-and-management-software-in-india-netzur' },
        { name: 'ISP Billing and Management Software in Philippines', desc: 'LGU & multi-branch ready', href: 'isp-billing-and-management-software-in-philippines-netzur' },
        { name: 'ISP Billing and Management Software in Kenya', desc: 'M-Pesa & CA compliance', href: 'isp-billing-and-management-software-in-kenya-netzur' },
        { name: 'ISP Billing and Management Software in Nigeria', desc: 'NCC-ready deployments', href: 'isp-billing-and-management-software-in-nigeria-netzur' },
        { name: 'ISP Billing and Management Software in Africa', desc: 'Multi-country scale', href: 'isp-billing-and-management-software-in-africa-netzur' },
      ]
    },
    {
      title: 'Radius Billing Software',
      desc: 'AAA, RADIUS & core authentication',
      icon: ShieldCheck,
      href: '/radius-billing-software-in-india-netzur',
      links: [
        { name: 'Radius Billing Software in India', desc: 'High-density BNG scale', href: '/radius-billing-software-in-india-netzur' },
        { name: 'Radius Billing Software in Africa', desc: 'Low-latency core nodes', href: 'radius-billing-software-in-africa-netzur' },
        { name: 'Radius Billing Software in Kenya', desc: 'Metro & edge PoPs', href: 'radius-billing-software-in-kenya-netzur' },
        { name: 'Radius Billing Software in Nigeria', desc: 'Redundant core design', href: 'radius-billing-software-in-nigeria-netzur' },
        { name: 'Radius Billing Software in Philippines', desc: 'Island-ready backhaul', href: 'radius-billing-software-in-philippines-netzur' },
      ]
    },
    {
      title: 'WISP Billing Software',
      desc: 'Wireless, towers & subscriber control',
      icon: RadioTower,
      href: '/wisp-billing-software-in-india-netzur',
      links: [
        { name: 'WISP Billing Software in Africa', desc: 'Tower-aware shaping & FUP', href: 'wisp-billing-software-in-africa-netzur' },
        { name: 'WISP Billing Software in India', desc: 'PM-WANI & hotspot ready', href: '/wisp-billing-software-in-india-netzur' },
        { name: 'WISP Billing Software in Kenya', desc: 'Sector & CPE manager', href: 'wisp-billing-software-in-kenya-netzur' },
        { name: 'WISP Billing Software in Nigeria', desc: 'Prepaid & voucher flows', href: 'wisp-billing-software-in-nigeria-netzur' },
        { name: 'WISP Billing Software in Philippines', desc: 'CBRS & fixed wireless', href: 'wisp-billing-software-in-philippines-netzur' },
      ]
    },
    {
      title: 'MikroTik Billing System',
      desc: 'RouterOS & hotspot automation',
      icon: Router,
      href: '/mikrotik-billing-system-in-india-netzur',
      links: [
        { name: 'MikroTik Billing System in Africa', desc: 'Native API & RADIUS CoA', href: 'mikrotik-billing-system-in-africa-netzur' },
        { name: 'MikroTik Billing System in India', desc: 'Hotspot & PPPoE automation', href: '/mikrotik-billing-system-in-india-netzur' },
        { name: 'MikroTik Billing System in Kenya', desc: 'Queue & burst policies', href: 'mikrotik-billing-system-in-kenya-netzur' },
        { name: 'MikroTik Billing System in Nigeria', desc: 'Voucher & captive portal', href: 'mikrotik-billing-system-in-nigeria-netzur' },
        { name: 'MikroTik Billing System in Philippines', desc: 'Multi-site centralized control', href: 'mikrotik-billing-system-in-philippines-netzur' },
      ]
    },
    {
      title: 'Retail Business WiFi Software',
      desc: 'Stores, outlets & marketing Wi-Fi',
      icon: Store,
      href: '/retail-business-wifi-software-in-india-netzur',
      links: [
        { name: 'Retail Business WiFi Software in Africa', desc: 'Mall & chain deployments', href: 'retail-business-wifi-software-in-africa-netzur' },
        { name: 'Retail Business WiFi Software in India', desc: 'Multi-outlet control', href: '/retail-business-wifi-software-in-india-netzur' },
        { name: 'Retail Business WiFi Software in Nigeria', desc: 'Splash & promo campaigns', href: 'retail-business-wifi-software-in-nigeria-netzur' },
        { name: 'Retail Business WiFi Software in Philippines', desc: 'Branch analytics & insights', href: 'retail-business-wifi-software-in-philippines-netzur' },
        { name: 'Retail Business WiFi Software in Kenya', desc: 'Loyalty & footfall Wi-Fi', href: 'retail-business-wifi-software-in-kenya-netzur' },
      ]
    },
    {
      title: 'Hotel WiFi Hotspot Solutions',
      desc: 'Guests, PMS & hospitality',
      icon: Hotel,
      href: '/hotel-wifi-hotspot-solutions-in-india-netzur',
      links: [
        { name: 'Hotel WiFi Hotspot Solutions in Africa', desc: 'Resort & lodge scale', href: 'hotel-wifi-hotspot-solutions-in-africa-netzur' },
        { name: 'Hotel WiFi Hotspot Solutions in India', desc: 'PMS & guest passes', href: '/hotel-wifi-hotspot-solutions-in-india-netzur' },
        { name: 'Hotel WiFi Hotspot Solutions in Kenya', desc: 'Conference & banquet Wi-Fi', href: 'hotel-wifi-hotspot-solutions-in-kenya-netzur' },
        { name: 'Hotel WiFi Hotspot Solutions in Nigeria', desc: 'Room-plan & timed access', href: 'hotel-wifi-hotspot-solutions-in-nigeria-netzur' },
        { name: 'Hotel WiFi Hotspot Solutions in Philippines', desc: 'Island resort coverage', href: 'hotel-wifi-hotspot-solutions-in-philippines-netzur' },
      ]
    }
  ];

  return (
    <header className="absolute top-0 inset-x-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Brand Logo */}
        {/* <Link to="/" className="l2-brand flex items-center gap-3 shrink-0">
          <img 
            src="https://res.cloudinary.com/dx6zonqrt/image/upload/v1791975517/about_logo-If45L9FG_xv0vpy.png" 
            alt="Netzur Logo" 
            className="h-14 object-contain"
          />
          <span>CandidHR.ai</span>
        </Link> */}

        <Link
          to="/"
          className="l2-brand flex items-center gap-2.5 shrink-0 cursor-pointer  text-[17px] font-semibold tracking-[-0.025em] text-black no-underline"
        >
          <img
            src="https://res.cloudinary.com/dx6zonqrt/image/upload/v1791975517/about_logo-If45L9FG_xv0vpy.png"
            alt="CandidHR.ai Logo"
            className="h-14 w-auto object-contain"
          />
          <span className='text-white'>CandidHR.ai</span>
        </Link>


        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-semibold text-white/85">

          {/* 1. PRODUCT MEGA MENU */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('product')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 px-3.5 py-2  border-b-2 border-transparent text-white/85 hover:text-[#937ae7] hover:border-[#937ae7]  transition-colors">
              <a href="#hero-section">Home </a>
            </button>

            {/* {activeDropdown === 'product' && (
              <div className="absolute top-full -left-12 w-[600px] bg-white border border-slate-200 rounded-2xl shadow-xl p-5 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                  <span className="text-xs font-bold text-[#F13B0A] uppercase tracking-wider">Product Modules</span>
                  <a href="#product" onClick={() => setActiveDropdown(null)} className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 hover:text-[#F13B0A] transition-colors">
                    View all <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  {productFeatures.map((item, idx) => (
                    <Link key={idx} to={item.href} className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors flex items-start justify-between group">
                      <div>
                        <div className="text-xs font-semibold text-slate-800 group-hover:text-[#F13B0A] transition-colors">{item.name}</div>
                        <div className="text-[11px] text-slate-400 font-normal">{item.desc}</div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all mt-0.5" />
                    </Link>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-100 mt-3 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-normal">Looking for custom bandwidth configurations?</span>
                  <a href="/contact-us" className="inline-flex items-center gap-1 text-xs font-semibold text-[#F13B0A] hover:underline">
                    <span>Contact Engineering</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )} */}
          </div>

          {/* 2. SOLUTIONS MEGA MENU */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('solutions')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
         <button className="flex items-center gap-1 px-3.5 py-2  border-b-2 border-transparent text-white/85 hover:text-[#937ae7] hover:border-[#937ae7]  transition-colors">
              <a href="#features">Features</a>
            </button>

            {/* {activeDropdown === 'solutions' && (
              <div className="absolute top-full -left-16 w-[540px] bg-white border border-slate-200 rounded-2xl shadow-xl p-5 animate-in fade-in slide-in-from-top-2 duration-150">
                <span className="block text-xs font-bold text-[#F13B0A] uppercase tracking-wider border-b border-slate-100 pb-2 mb-3">
                  Industry Deployments
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {solutionsList.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <Link to={item.href} key={idx} className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 group transition-colors">
                        <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 group-hover:bg-[#F13B0A]/10 group-hover:text-[#F13B0A] flex items-center justify-center shrink-0 transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-800 group-hover:text-[#F13B0A] transition-colors">{item.title}</div>
                          <div className="text-[11px] text-slate-400 font-normal">{item.desc}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                <div className="pt-3 border-t border-slate-100 mt-3 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-normal">Need a deployment tailored to your vertical?</span>
                  <a href="/contact-us" className="inline-flex items-center gap-1 text-xs font-semibold text-[#F13B0A] hover:underline">
                    <span>Talk to Sales</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )} */}
          </div>

          {/* 3. SERVICES PARENT / CHILD MEGA MENU */}
          <div
            className="relative"
            onMouseEnter={() => { setActiveDropdown('services'); setActiveServiceIdx(0); }}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 px-3.5 py-2  border-b-2 border-transparent text-white/85 hover:text-[#937ae7] hover:border-[#937ae7]  transition-colors">
              <a href="#solutions">Solution</a>
            </button>

            {/* {activeDropdown === 'services' && (
              <div className="absolute top-full -left-64 w-[780px] bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="flex items-stretch min-h-[478px] text-left">
                 
                  <div className="w-[300px] shrink-0 bg-[#F8F9FB] border-r border-slate-100 p-2.5 flex flex-col gap-1">
                    <span className="px-2.5 pt-1.5 pb-1 text-xs font-bold text-[#F13B0A] uppercase tracking-wider">
                      Services
                    </span>
                    {servicesCategories.map((cat, idx) => {
                      const Icon = cat.icon;
                      const isActive = idx === activeServiceIdx;
                      return (
                        <Link
                          key={idx}
                          to={cat.href}
                          onMouseEnter={() => setActiveServiceIdx(idx)}
                          onClick={() => setActiveDropdown(null)}
                          className={`w-full flex items-center gap-2.5 p-2 rounded-xl border text-left transition-all duration-150 group ${
                            isActive
                              ? 'bg-white border-slate-200 shadow-sm'
                              : 'bg-transparent border-transparent hover:bg-white hover:border-slate-100'
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                            isActive ? 'bg-[#F13B0A]/10 text-[#F13B0A]' : 'bg-white border border-slate-200 text-slate-500 group-hover:text-[#F13B0A] group-hover:border-[#F13B0A]/20'
                          }`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className={`text-[12.5px] font-semibold leading-tight truncate ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>
                              {cat.title}
                            </div>
                            <div className="text-[11px] text-slate-400 font-normal truncate mt-0.5">
                              {cat.desc}
                            </div>
                          </div>
                          <ArrowRight className={`w-3.5 h-3.5 shrink-0 transition-all ${isActive ? 'text-[#F13B0A] translate-x-0 opacity-100' : 'text-slate-300 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                        </Link>
                      );
                    })}

                    <div className="mt-auto px-2.5 pt-3 pb-1 border-t border-slate-200/70">
                      <p className="text-[11px] text-slate-500 font-normal leading-relaxed">
                        Not sure where to start?
                      </p>
                      <a href="/contact-us" className="inline-flex items-center gap-1 text-xs font-semibold text-[#F13B0A] hover:underline mt-1">
                        Talk to an expert <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  
                  <div className="flex-1 p-5" key={activeServiceIdx}>
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                      <div className="flex items-center gap-2">
                        <Link
                          to={servicesCategories[activeServiceIdx].href}
                          onClick={() => setActiveDropdown(null)}
                          className="text-xs font-bold text-slate-900 hover:text-[#F13B0A] transition-colors"
                        >
                          {servicesCategories[activeServiceIdx].title}
                        </Link>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#F13B0A]/10 text-[#F13B0A]">
                          {servicesCategories[activeServiceIdx].links.length} solutions
                        </span>
                      </div>
                      <Link to={'/services'} onClick={() => setActiveDropdown(null)} className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 hover:text-[#F13B0A] transition-colors">
                        View all <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    <div className="flex flex-col gap-1">
                      {servicesCategories[activeServiceIdx].links.map((link, lIdx) => (
                        <Link
                          key={lIdx}
                          to={link.href}
                          onClick={() => setActiveDropdown(null)}
                          className="px-3 py-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all flex items-center justify-between gap-3 group animate-in fade-in slide-in-from-top-1 duration-150"
                          style={{ animationDelay: `${lIdx * 30}ms` }}
                        >
                          <div className="min-w-0">
                            <div className="text-[13px] font-semibold text-slate-800 group-hover:text-[#F13B0A] transition-colors leading-snug">
                              {link.name}
                            </div>
                            <div className="text-[11px] text-slate-400 font-normal mt-0.5 leading-snug">
                              {link.desc}
                            </div>
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-slate-300 opacity-0 group-hover:opacity-100 group-hover:text-[#F13B0A] transition-all shrink-0" />
                        </Link>
                      ))}
                    </div>

                    <div className="mt-4 rounded-xl bg-slate-900 text-white p-3.5 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-[#F13B0A] flex items-center justify-center shrink-0">
                          <Wifi className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold leading-tight">Need a custom deployment?</div>
                          <div className="text-[11px] text-slate-400 font-normal">Migration in 48 hours, zero downtime.</div>
                        </div>
                      </div>
                      <button
                        onClick={() => { setActiveDropdown(null); onOpenDemo?.(); }}
                        className="shrink-0 px-4 py-2 rounded-full bg-white text-slate-900 text-[11px] font-semibold hover:bg-[#F13B0A] hover:text-white transition-colors"
                      >
                        Book a Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )} */}
          </div>

          {/* <Link to="/integrations" className="px-3.5 py-2 rounded-lg hover:text-[#F13B0A] hover:bg-slate-100 transition-colors">Integrations</Link>
          <Link to="/pricing" className="px-3.5 py-2 rounded-lg hover:text-[#F13B0A] hover:bg-slate-100 transition-colors">Pricing</Link> */}

          {/* COMPANY DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('company')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
           <button className="flex items-center gap-1 px-3.5 py-2  border-b-2 border-transparent text-white/85 hover:text-[#937ae7] hover:border-[#937ae7]  transition-colors">
              <a href="#why-netzur">Why CandidHR</a>
            </button>

            {/* {activeDropdown === 'company' && (
              <div className="absolute top-full left-0 w-48 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 flex flex-col gap-0.5 animate-in fade-in slide-in-from-top-2 duration-150">
                <a href="/who-we-are" className="px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#F13B0A]">Who We Are</a>
                <a href="/join-the-team" className="px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#F13B0A]">Join the Team</a>
                <a href="/contact-us" className="px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#F13B0A]">Contact</a>
              </div>
            )} */}
          </div>

          {/* RESOURCES DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('resources')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
       <button className="flex items-center gap-1 px-3.5 py-2  border-b-2 border-transparent text-white/85 hover:text-[#937ae7] hover:border-[#937ae7]  transition-colors">
              <a href="#results">Results</a>
            </button>

            {/* {activeDropdown === 'resources' && (
              <div className="absolute top-full right-0 w-48 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 flex flex-col gap-0.5 animate-in fade-in slide-in-from-top-2 duration-150">
                <a href="/blog" className="px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#F13B0A]">Blog</a>
                <a href="https://docs.netzur.com" target="_blank" className="px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#F13B0A]">Knowledge Base</a>
                <a href="/rebranding" className="px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#F13B0A]">Rebranding</a>
              </div>
            )} */}
          </div>

        </nav>

        {/* Right CTA Area */}
        <div className="hidden md:flex items-center gap-3">
          {/* <a 
            href="https://billing.netzur.com"
            target="_blank"
            className="text-xs font-semibold text-slate-700 hover:text-[#F13B0A] px-3 py-2 transition-colors"
          >
            Login
          </a> */}

          <Link

            to="#"
            className="inline-flex items-center justify-center gap-2 bg-[#937AE7] hover:bg-[#462ec8] text-white font-semibold py-2.5 px-5 rounded-full shadow-md hover:shadow-lg mb-6 md:m-0"
          // className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#F13B0A]  text-white text-xs font-semibold hover:bg-[#d43105] active:scale-[0.98] transition-all shadow-sm"

          >
            <span>Book a Demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-white hover:bg-white/10"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Accordion Style) - Full Screen */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute inset-x-0 top-full z-40 bg-white border-t border-slate-200 flex flex-col h-[calc(100dvh-5rem)] animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex-1 overflow-y-auto px-4 pt-2 pb-6 overscroll-contain">
            {/* PRODUCT */}
            <div className="border-b border-slate-100">
              <button
                onClick={() => toggleMobileSection('product')}
                className="w-full flex items-center justify-between py-3.5 px-2 text-sm font-semibold text-slate-800"
              >
                <a href="#hero-section">Home </a>

              </button>
              {/* {mobileSection === 'product' && (
              <div className="pb-3 pl-2 space-y-0.5 animate-in fade-in slide-in-from-top-1 duration-150">
                {productFeatures.map((item, idx) => (
                  <a key={idx} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-2 text-[13px] font-medium text-slate-600 hover:text-[#F13B0A] border-l-2 border-slate-100 hover:border-[#F13B0A] ml-2">
                    {item.name}
                  </a>
                ))}
                <a href="#product" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-1 py-2 px-2 ml-2 text-[13px] font-semibold text-[#F13B0A]">
                  View all <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            )} */}
            </div>

            {/* SOLUTIONS */}
            <div className="border-b border-slate-100">
              <button
                onClick={() => toggleMobileSection('solutions')}
                className="w-full flex items-center justify-between py-3.5 px-2 text-sm font-semibold text-slate-800"
              >

                <a href="#features">Features</a>
              </button>
              {/* {mobileSection === 'solutions' && (
              <div className="pb-3 pl-2 space-y-0.5 animate-in fade-in slide-in-from-top-1 duration-150">
                {solutionsList.map((item, idx) => (
                  <a key={idx} href="#solutions" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2.5 py-2 px-2 ml-2 border-l-2 border-slate-100">
                    <item.icon className="w-4 h-4 text-slate-400 shrink-0" />
                    <span className="text-[13px] font-medium text-slate-600">{item.title}</span>
                  </a>
                ))}
              </div>
            )} */}
            </div>

            {/* SERVICES */}
            <div className="border-b border-slate-100">
              <button
                onClick={() => toggleMobileSection('services')}
                className="w-full flex items-center justify-between py-3.5 px-2 text-sm font-semibold text-slate-800"
              >
                <a href="#solutions">Solution</a>
              </button>
              {/* {mobileSection === 'services' && (
              <div className="pb-3 space-y-1 animate-in fade-in slide-in-from-top-1 duration-150">
                {servicesCategories.map((cat, idx) => {
                  const Icon = cat.icon;
                  const isOpen = mobileServiceIdx === idx;
                  return (
                    <div key={idx} className={`ml-2 rounded-xl border overflow-hidden ${isOpen ? 'border-slate-200 bg-[#F8F9FB]' : 'border-transparent'}`}>
                      <div className="flex items-center gap-1 pr-1">
                        <Link
                          to={cat.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex-1 flex items-center gap-2.5 p-2.5 text-left"
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${isOpen ? 'bg-[#F13B0A]/10 text-[#F13B0A]' : 'bg-white border border-slate-200 text-slate-500'}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-[13px] font-semibold text-slate-800 leading-tight">{cat.title}</span>
                        </Link>
                        <button
                          onClick={() => setMobileServiceIdx(isOpen ? null : idx)}
                          aria-label={`Toggle ${cat.title}`}
                          className="p-2 rounded-lg hover:bg-white shrink-0"
                        >
                          <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#F13B0A]' : ''}`} />
                        </button>
                      </div>
                      {isOpen && (
                        <div className="pb-2 px-2 space-y-0.5">
                          {cat.links.map((link, lIdx) => (
                            <Link key={lIdx} to={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block py-2 pl-12 pr-2 text-[13px] font-normal text-slate-600 border-l-2 border-slate-200 ml-[22px] hover:text-[#F13B0A] hover:border-[#F13B0A]">
                              {link.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )} */}
            </div>

            {/* <div className="space-y-1 border-b border-slate-100 py-2">
            <Link to="/integrations" onClick={() => setIsMobileMenuOpen(false)} className="block py-2.5 px-2 text-sm font-semibold text-slate-800">Integrations</Link>
            <Link to="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="block py-2.5 px-2 text-sm font-semibold text-slate-800">Pricing</Link>
          </div> */}

            {/* COMPANY */}
            <div className="border-b border-slate-100">
              <button
                onClick={() => toggleMobileSection('company')}
                className="w-full flex items-center justify-between py-3.5 px-2 text-sm font-semibold text-slate-800"
              >
                <a href="#why-netzur">Why CandidHR</a>

                {/* <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${mobileSection === 'company' ? 'rotate-180 text-[#F13B0A]' : ''}`} /> */}
              </button>
              {/* {mobileSection === 'company' && (
              <div className="pb-3 pl-2 space-y-0.5">
                <a href="/who-we-are" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-2 ml-2 text-[13px] font-medium text-slate-600 border-l-2 border-slate-100">Who We Are</a>
                <a href="/join-the-team" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-2 ml-2 text-[13px] font-medium text-slate-600 border-l-2 border-slate-100">Join the Team</a>
                <a href="/contact-us" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-2 ml-2 text-[13px] font-medium text-slate-600 border-l-2 border-slate-100">Contact</a>
              </div>
            )} */}
            </div>

            {/* RESOURCES */}
            <div className="border-b border-slate-100">
              <button
                onClick={() => toggleMobileSection('resources')}
                className="w-full flex items-center justify-between py-3.5 px-2 text-sm font-semibold text-slate-800"
              >
                <a href="#results">Results</a>
                {/* <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${mobileSection === 'resources' ? 'rotate-180 text-[#F13B0A]' : ''}`} /> */}
              </button>
              {/* {mobileSection === 'resources' && (
              <div className="pb-3 pl-2 space-y-0.5">
                <a href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-2 ml-2 text-[13px] font-medium text-slate-600 border-l-2 border-slate-100">Blog</a>
                <a href="#kb" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-2 ml-2 text-[13px] font-medium text-slate-600 border-l-2 border-slate-100">Knowledge Base</a>
                <a href="/rebranding" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-2 ml-2 text-[13px] font-medium text-slate-600 border-l-2 border-slate-100">Rebranding</a>
              </div>
            )} */}
            </div>
          </div>

          <div className="shrink-0 border-t border-slate-200 bg-white p-4 flex flex-col gap-2">
            {/* <button 
              onClick={() => { setIsMobileMenuOpen(false); onOpenDemo?.(); }} 
              className="w-full py-3 rounded-full border border-slate-200 text-sm font-semibold text-slate-700"
            >
             Login
            </button> */}
            <Link
              to="#"
              onClick={() => { setIsMobileMenuOpen(false); }}
              className="w-full py-3 rounded-full bg-[#F13B0A] text-white text-sm font-semibold text-center"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};