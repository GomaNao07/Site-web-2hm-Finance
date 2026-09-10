import { Mail, Phone, MapPin } from 'lucide-react';
import logoImg from '../assets/Translucent_logo.png';

export default function Maintenance() {
  return (
    <div className="bg-[#862586] text-[#F3E6F3] min-h-[100vh] flex items-center justify-center  relative overflow-hidden">

      {/* Subtle Background Glow & Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 20%, rgba(232,163,61,0.25) 0%, rgba(42,11,44,0) 65%)'
        }}
      />

      <div className="max-w-[850px] mx-auto px-7 relative z-10 text-center">

        {/* Brand Logo */}
        <div className="flex justify-center items-center ">
          <img
            src={logoImg}
            alt="2HM Finance Logo"
            className="h-60  w-auto object-contain"
          />
        </div>

        {/* Main Title & Description */}
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white max-w-[50ch] mb-10 mx-auto leading-tight tracking-[-0.02em] ">
          Notre site est actuellement en maintenance
        </h1>


        {/* Direct Contacts Grid */}
        <div className="pt-10 border-t border-white/12 max-w-[750px] mx-auto text-left">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#C9A8C9] mb-5 text-center">
            Vos contacts directs 2HM.FINANCE
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Phone */}
            <div className="p-4  rounded-[2px]">
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
            <div className="p-4  rounded-[2px]">
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
            <div className="p-4  rounded-[2px]">
              <div className="flex items-center gap-2 text-[#E8A33D] font-mono text-xs uppercase mb-1">
                <MapPin size={14} />
                <span>Bureau</span>
              </div>
              <a className="font-display font-semibold text-sm text-white m-0">
                106, rue Benoît Louembet
                Km4 — Pointe-Noire
                République du Congo
              </a>
              <span className="text-xs text-[#C9A8C9] mt-0.5 block">République du Congo</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
