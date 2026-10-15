import React from 'react';
import { 
  Building2, 
  MapPin, 
  Mail, 
  Phone, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  ShieldCheck, 
  FileText, 
  RotateCcw, 
  Cookie
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-slate-600 border-t border-slate-200 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand & Overview Column */}
          <div className="lg:col-span-2 space-y-4">
             <Link
          to="/"
          className="l2-brand flex items-center gap-2.5 shrink-0 cursor-pointer  text-[17px] font-semibold tracking-[-0.025em] text-black no-underline"
        >
          <img
            src="https://res.cloudinary.com/dx6zonqrt/image/upload/v1791975517/about_logo-If45L9FG_xv0vpy.png"
            alt="CandidHR.ai Logo"
            className="h-14 w-auto object-contain"
          />
          <span className='text-[#110b2d]'>CandidHR.ai</span>
        </Link>

            <p className="text-slate-600 font-medium text-xs">
              AI recruitment software that screens, assesses and interviews candidates — so your recruiters spend their time on the people worth talking to.
            </p>

            <p className="text-[#110b2d] text-xs leading-relaxed max-w-sm">
               <a href="mailto:info@candidhr.ai">info@candidhr.ai</a>
               
            </p>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center gap-3">
              <a href="#" target="_blank" aria-label="Facebook" className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-[#7076F2]/10 flex items-center justify-center text-slate-500 hover:text-[#5a60e0] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" target="_blank" aria-label="X (Twitter)" className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-[#7076F2]/10 flex items-center justify-center text-slate-500 hover:text-[#5a60e0] transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" target="_blank" aria-label="LinkedIn" className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-[#7076F2]/10 flex items-center justify-center text-slate-500 hover:text-[#5a60e0] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" target="_blank" aria-label="Instagram" className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-[#7076F2]/10 flex items-center justify-center text-slate-500 hover:text-[#5a60e0] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#110b2d]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#hero-section" className="hover:text-[#5a60e0] transition-colors">Home</a></li>
              <li><a href="#feature" className="hover:text-[#5a60e0] transition-colors">Features</a></li>
              <li><a href="#solutions" className="hover:text-[#5a60e0] transition-colors">Solution</a></li>
              <li><a href="#why-netzur" className="hover:text-[#5a60e0] transition-colors">Why CandidHR</a></li>
              <li><a href="#" className="hover:text-[#5a60e0] transition-colors">Results</a></li>
              {/* <li><a href="https://netzur.com/wp-content/uploads/2025/06/NETZUR_IMBS_2.0_USER_MANUAL.pdf" target="_blank" className="hover:text-[#5a60e0] transition-colors">Knowledge Base</a></li> */}
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#110b2d]">
              Solutions
            </h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#">High-volume hiring</a></li>
              <li><a href="#">Campus hiring</a></li>
              <li><a href="#">Staffing agencies</a></li>
              <li><a href="#"></a>Startups</li>
              <li><a href="#"></a>Enterprises</li>
              
            </ul>
          </div>

          {/* Office Locations & Contact Column */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#110b2d]">
              Contact & Offices
            </h4>
            <div className="space-y-3 text-slate-600 text-[11px] leading-relaxed">
              <div>
                <strong className="text-[#110b2d] flex items-center gap-1.5 font-bold">
                  <MapPin className="w-3.5 h-3.5 text-[#7076F2]" />
                  Pune
                </strong>
                <span className="block pl-5"> Houston · Salt Lake City</span>
              </div>
              {/* <div>
                <strong className="text-[#110b2d] flex items-center gap-1.5 font-bold">
                  <Building2 className="w-3.5 h-3.5 text-[#7076F2]" />
                  Pune 
                </strong>
                <span className="block pl-5"> Houston · Salt Lake City</span>
              </div> */}
              {/* <div className="pt-2 space-y-1 pl-0.5">
                <a href="mailto:sales@netzur.com" className="flex items-center gap-2 hover:text-[#5a60e0] transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#7076F2]" />
                  <span>sales@netzur.com</span>
                </a>
                <a href="tel:+919408053196" className="flex items-center gap-2 hover:text-[#5a60e0] transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#7076F2]" />
                  <span>+91 94080 53196</span>
                </a>
                <a href="tel:+916355086848" className="flex items-center gap-2 hover:text-[#5a60e0] transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#7076F2]" />
                  <span>+91 63550 86848</span>
                </a>
              </div> */}
            </div>
          </div>

        </div>

        {/* Legal & Policy Highlights */}
        <div className="pt-8 pb-8 border-t border-slate-200 flex flex-wrap gap-6 justify-between text-slate-700 text-xs">
          <a href="#" className="flex items-center gap-2 hover:text-[#5a60e0] transition-colors">
            <ShieldCheck className="w-4 h-4 text-[#7076F2]" />
            <span>Privacy Policy</span>
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-[#5a60e0] transition-colors">
            <RotateCcw className="w-4 h-4 text-[#7076F2]" />
            <span>Refund Policy</span>
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-[#5a60e0] transition-colors">
            <FileText className="w-4 h-4 text-[#7076F2]" />
            <span>Terms & Conditions</span>
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-[#5a60e0] transition-colors">
            <Cookie className="w-4 h-4 text-[#7076F2]" />
            <span>Cookie Policies</span>
          </a>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-[11px] gap-4">
          <div>
            © 2026 CandidHR.ai. All Rights Reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};