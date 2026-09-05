import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#160616] text-[#B79AB7] py-12 border-t border-[#862586]/20 font-mono text-[12.5px] leading-[2]">
      <div className="max-w-[1100px] mx-auto px-7 flex flex-col md:flex-row justify-between gap-8 items-start">
        
        {/* Brand & Slogan */}
        <div>
          <strong className="text-white font-display text-[15px] tracking-[0.04em] block mb-1">
            2HM.FINANCE
          </strong>
          <p className="m-0">Ingénierie financière &amp; contrôle de gestion</p>
          <p className="m-0 text-[#E8A33D] font-medium">Prix subi, coût maîtrisé.</p>
        </div>

        {/* Legal Info */}
        <div>
          <p className="m-0">RCCM CG-BZV-01-2021-B13-00530</p>
          <p className="m-0">SARL unipersonnelle au capital de 1 000 000 FCFA</p>
          <p className="m-0">Bureau : Pointe-Noire</p>
        </div>

        {/* Quick Links / Contact */}
        <div>
          <a href="mailto:hhonvo@2hmfinance.com" className="text-[#E7C8E7] hover:underline block">
            hhonvo@2hmfinance.com
          </a>
          <a href="tel:+242055179230" className="text-[#E7C8E7] hover:underline block">
            +242 05 517 92 30
          </a>
          <Link to="/" className="text-[#E8A33D] hover:underline block mt-1">
            www.2hmfinance.com
          </Link>
        </div>

      </div>
    </footer>
  );
}
