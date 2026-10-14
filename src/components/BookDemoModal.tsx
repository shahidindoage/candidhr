import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Activity, ShieldCheck } from 'lucide-react';

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookDemoModal: React.FC<BookDemoModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    architecture: 'Fiber (FTTH / GPON)',
    subscribers: '10,000 - 50,000',
    hardware: 'MikroTik + Calix',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl border border-[#E2E6EA] shadow-2xl w-full max-w-xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#353F4F] px-6 py-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#28303C] flex items-center justify-center">
              <Activity className="w-4 h-4 text-[#F13B0A]" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-base text-white">
                {submitted ? 'Sandbox Instance Provisioned' : 'Schedule Netzur Platform Demo'}
              </h3>
              <p className="text-[11px] text-slate-300">
                {submitted ? 'Your private tenant is ready' : 'Tailored for your broadband architecture'}
              </p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center space-y-5 py-4">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h4 className="font-heading font-extrabold text-2xl text-[#353F4F]">
                  Welcome to Netzur, {formData.company || 'Partner'}!
                </h4>
                <p className="text-xs text-[#667085] max-w-md mx-auto leading-relaxed">
                  We’ve configured a dedicated ISP sandbox environment pre-populated with {formData.architecture} billing templates and RADIUS speed profiles.
                </p>
              </div>

              <div className="p-4 bg-[#F8F9FB] rounded-xl border border-[#E2E6EA] text-left text-xs space-y-2 max-w-sm mx-auto">
                <div className="flex justify-between">
                  <span className="text-[#667085]">Tenant URL:</span>
                  <span className="font-mono font-bold text-[#353F4F]">https://sandbox.netzur.io/demo-noc</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#667085]">Operator Account:</span>
                  <span className="font-mono text-[#353F4F]">{formData.email || 'operator@isp.net'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#667085]">Hardware Profile:</span>
                  <span className="font-mono text-[#353F4F]">{formData.hardware}</span>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-[#F13B0A] text-white font-semibold text-xs hover:bg-[#D73307] transition-all"
                >
                  Close & Explore Features
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#353F4F]">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-[#E2E6EA] text-xs text-[#353F4F] focus:outline-none focus:border-[#353F4F]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#353F4F]">Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@metrofiber.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-[#E2E6EA] text-xs text-[#353F4F] focus:outline-none focus:border-[#353F4F]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#353F4F]">ISP / Operator Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Apex Broadband"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-[#E2E6EA] text-xs text-[#353F4F] focus:outline-none focus:border-[#353F4F]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#353F4F]">Broadband Model</label>
                  <select
                    value={formData.architecture}
                    onChange={(e) => setFormData({ ...formData, architecture: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-[#E2E6EA] text-xs text-[#353F4F] bg-white focus:outline-none focus:border-[#353F4F]"
                  >
                    <option value="Fiber (FTTH / GPON)">Fiber (FTTH / GPON)</option>
                    <option value="Wireless ISP (WISP / CBRS)">Wireless ISP (WISP / CBRS)</option>
                    <option value="Municipal Open-Access">Municipal Open-Access</option>
                    <option value="MDU & Enterprise Commercial">MDU & Enterprise Commercial</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#353F4F]">Subscriber Base</label>
                  <select
                    value={formData.subscribers}
                    onChange={(e) => setFormData({ ...formData, subscribers: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-[#E2E6EA] text-xs text-[#353F4F] bg-white focus:outline-none focus:border-[#353F4F]"
                  >
                    <option value="Under 2,500 Subscribers">Under 2,500 Subscribers</option>
                    <option value="2,500 - 10,000 Subscribers">2,500 - 10,000 Subscribers</option>
                    <option value="10,000 - 50,000 Subscribers">10,000 - 50,000 Subscribers</option>
                    <option value="50,000+ Tier-1 Carrier">50,000+ Tier-1 Carrier</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#353F4F]">Core Routing / OLT</label>
                  <input
                    type="text"
                    placeholder="e.g. MikroTik CCR + Calix OLT"
                    value={formData.hardware}
                    onChange={(e) => setFormData({ ...formData, hardware: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-[#E2E6EA] text-xs text-[#353F4F] focus:outline-none focus:border-[#353F4F]"
                  />
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#F13B0A] text-white font-bold text-xs hover:bg-[#D73307] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  Request Personalized ISP Demo & Sandbox
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#667085] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F13B0A]" />
                <span>NDA Protected • 48-Hour Turnkey Migration Guarantee</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
