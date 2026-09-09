import React, { useState } from 'react';
import { Wrench, Clock, Mail, Phone, MapPin, RefreshCw, ShieldAlert, CheckCircle2 } from 'lucide-react';
import logoImg from '../assets/Translucent_logo.png';

export default function Maintenance() {
  const [reloading, setReloading] = useState(false);

  const handleRefresh = () => {
    setReloading(true);
    setTimeout(() => {
      window.location.reload();
    }, 600);
  };

  return (
    <div className="bg-[#2A0B2C] text-[#F3E6F3] min-h-[85vh] flex items-center justify-center py-16 md:py-24 relative overflow-hidden">
      {/* Subtle Background Glow & Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30" 
        style={{
          background: 'radial-gradient(circle at 50% 20%, rgba(232,163,61,0.25) 0%, rgba(42,11,44,0) 65%)'
        }} 
      />

      <div className="max-w-[850px] mx-auto px-7 relative z-10 text-center">

        {/* Maintenance Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#E8A33D]/15 border border-[#E8A33D]/30 text-[#E8A33D] font-mono text-xs tracking-[0.16em] uppercase mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8A33D] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E8A33D]"></span>
          </span>
          <span>Intervention technique en cours</span>
        </div>

        {/* Brand Icon / Logo */}
        <div className="flex justify-center items-center mb-6">
          <div className="p-4 bg-[#862586]/30 border border-white/10 rounded-full text-[#E8A33D] shadow-inner">
            <Wrench size={42} className="animate-pulse" />
          </div>
        </div>

        {/* Main Title & Description */}
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white max-w-[20ch] mx-auto leading-tight tracking-[-0.02em] mb-5">
          Notre site est actuellement en maintenance
        </h1>

        <p className="font-corps text-xl sm:text-2xl text-[#DFC6DF] max-w-[48ch] mx-auto font-light leading-relaxed mb-8">
          Nous effectuons des travaux d'optimisation sur nos systèmes d'ingénierie financière et de contrôle de gestion amont pétrolier.
        </p>

        {/* Status Callout Box */}
        <div className="bg-black/25 border border-white/16 rounded-[4px] p-6 sm:p-8 max-w-[680px] mx-auto mb-10 text-left">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-[#E8A33D] pb-4 border-b border-white/12">
            <Clock size={16} />
            <span>Disponibilité du service</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5 text-sm">
            <div>
              <span className="block text-xs font-mono text-[#C9A8C9] uppercase">Statut des systèmes</span>
              <span className="font-display font-semibold text-white text-base mt-0.5 block flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-400" />
                Mise à jour planifiée
              </span>
            </div>
            <div>
              <span className="block text-xs font-mono text-[#C9A8C9] uppercase">Reprise estimée</span>
              <span className="font-display font-semibold text-[#E8A33D] text-base mt-0.5 block">
                Sous peu
              </span>
            </div>
          </div>

          <p className="mt-5 pt-4 border-t border-white/10 text-xs sm:text-sm text-[#DFC6DF] leading-relaxed">
            Nos équipes restent totalement opérationnelles et joignables pendant la durée des travaux. Pour toute demande urgente ou concernant un dossier en cours, veuillez nous contacter directement.
          </p>
        </div>

        {/* Action Button */}
        <div className="flex justify-center mb-12">
          <button
            onClick={handleRefresh}
            disabled={reloading}
            className="inline-flex items-center gap-2 font-display font-semibold text-[15px] px-7 py-3.5 bg-[#E8A33D] text-[#2A0B2C] rounded-[2px] hover:bg-[#F4B85C] transition-all cursor-pointer shadow-lg disabled:opacity-50"
          >
            <RefreshCw size={18} className={reloading ? "animate-spin" : ""} />
            <span>{reloading ? 'Vérification...' : 'Actualiser la page'}</span>
          </button>
        </div>

        {/* Direct Contacts Grid */}
        <div className="pt-10 border-t border-white/12 max-w-[750px] mx-auto text-left">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#C9A8C9] mb-5 text-center">
            Vos contacts directs 2HM.FINANCE
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Phone */}
            <div className="p-4 bg-white/5 border border-white/10 rounded-[2px]">
              <div className="flex items-center gap-2 text-[#E8A33D] font-mono text-xs uppercase mb-1">
                <Phone size={14} />
                <span>Téléphone</span>
              </div>
              <a href="tel:+242055179230" className="font-display font-semibold text-sm text-white hover:text-[#E8A33D] transition-colors block">
                +242 05 517 92 30
              </a>
              <span className="text-xs text-[#C9A8C9] mt-0.5 block">Lu - Ve : 8h – 17h</span>
            </div>

            {/* Email */}
            <div className="p-4 bg-white/5 border border-white/10 rounded-[2px]">
              <div className="flex items-center gap-2 text-[#E8A33D] font-mono text-xs uppercase mb-1">
                <Mail size={14} />
                <span>Courriel</span>
              </div>
              <a href="mailto:hhonvo@2hmfinance.com" className="font-display font-semibold text-sm text-white hover:text-[#E8A33D] transition-colors block truncate">
                hhonvo@2hmfinance.com
              </a>
              <span className="text-xs text-[#C9A8C9] mt-0.5 block">Réponse sous 24h</span>
            </div>

            {/* Address */}
            <div className="p-4 bg-white/5 border border-white/10 rounded-[2px]">
              <div className="flex items-center gap-2 text-[#E8A33D] font-mono text-xs uppercase mb-1">
                <MapPin size={14} />
                <span>Bureau</span>
              </div>
              <p className="font-display font-semibold text-sm text-white m-0">
                Pointe-Noire
              </p>
              <span className="text-xs text-[#C9A8C9] mt-0.5 block">République du Congo</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
