import React from 'react';
import { Link } from 'react-router-dom';
import { Home, } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-[#2A0B2C] text-[#F3E6F3] min-h-[85vh] flex items-center justify-center py-16 md:py-24 relative overflow-hidden">
      {/* Background Subtle Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle at 50% 30%, rgba(134,37,134,0.35) 0%, rgba(42,11,44,0) 70%)'
        }}
      />

      <div className="max-w-[900px] mx-auto px-7 relative z-10 text-center">



        {/* Large 404 Display */}
        <div className="relative mb-6 select-none">
          <h1 className="font-display font-extrabold text-8xl sm:text-[140px] leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-[#DFC6DF] to-white/10 opacity-90">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-[#E8A33D] bg-[#2A0B2C]/90 px-4 py-1 border border-[#E8A33D]/40 rounded-[2px] shadow-lg">
              Hors périmètre
            </span>
          </div>
        </div>

        {/* Main Heading & Message */}
        <h2 className="font-display font-bold text-2xl sm:text-4xl text-white max-w-[22ch] mx-auto leading-tight mb-4">
          La page que vous recherchez est introuvable.
        </h2>

        <p className="font-corps text-lg sm:text-xl text-[#DFC6DF] max-w-[48ch] mx-auto font-light leading-relaxed mb-10">
          Comme une dépense non éligible au Cost Recovery, cette adresse ne correspond à aucun élément répertorié sur notre plateforme.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-14">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-display font-semibold text-[15px] px-6 py-3.5 bg-[#E8A33D] text-[#2A0B2C] rounded-[2px] hover:bg-[#F4B85C] transition-all shadow-lg hover:shadow-[#E8A33D]/20"
          >
            <Home size={18} />
            <span>Retour à l'accueil</span>
          </Link>

        </div>



      </div>
    </div>
  );
}
