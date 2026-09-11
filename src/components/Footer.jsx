import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className="bg-brand-violet-deep text-[#B79AB7] font-mono text-[12.5px] leading-[2] border-t border-brand-violet/20">
      <div className="max-w-[1100px] mx-auto w-full">
        <div className="grid grid-cols-2 gap-8 px-7 py-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <strong className="text-white font-display text-[15px] tracking-[0.04em] block mb-3">
              2hmFinance
            </strong>
            <p className="m-0">Ingénierie financière &amp; contrôle de gestion</p>
            <p className="m-0 text-brand-amber font-medium">
              Prix subi, coût maîtrisé.
            </p>
          </div>
          {/* Navigation */}
          <div>
            <h2 className="mb-4 text-[11px] font-semibold text-white uppercase tracking-wide">
              Navigation
            </h2>
            <ul className="font-medium">
              <li className="mb-2">
                <Link
                  to="/"
                  className="hover:underline hover:text-white"
                >
                  Accueil
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/nos-expertises"
                  className="hover:underline hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/le-cabinet"
                  className="hover:underline hover:text-white"
                >
                  À propos
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/contact"
                  className="hover:underline hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h2 className="mb-4 text-[11px] font-semibold text-white uppercase tracking-wide">
              Contact
            </h2>
            <ul className="font-medium">
              <li className="mb-2">
                <a
                  href="mailto:hhonvo@2hmfinance.com"
                  className="text-[#E7C8E7] hover:underline hover:text-white"
                >
                  hhonvo@2hmfinance.com
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="tel:+242055179230"
                  className="text-[#E7C8E7] hover:underline hover:text-white"
                >
                  +242 05 517 92 30
                </a>
              </li>
              <li className="mb-2">
                <Link
                  to="/contact"
                  className="text-brand-amber hover:underline"
                >
                  honvoherve@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom bar */}
        <div className="px-7 py-6 border-t border-brand-violet/10 text-[11px]">
          ©️ {new Date().getFullYear()} 2HM FINANCE CONSEIL Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}