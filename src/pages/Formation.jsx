import React from 'react';
import { Link } from 'react-router-dom';
import ImageSlot from '../components/ImageSlot';

export default function Formation() {
  return (
    <div className="bg-[#FAF7F9]">
      
      {/* SECTION: FORMATION PROFESSIONNELLE */}
      <section className="bg-white py-16 md:py-24 text-[#1A1418]">
        <div className="max-w-[1100px] mx-auto px-7">
          <p className="font-mono text-[11.5px] tracking-[0.16em] uppercase text-[#862586] mb-[18px]">
            Formation professionnelle
          </p>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#1A1418] max-w-[17ch] leading-[1.06] tracking-[-0.02em]">
            La compétence reste, le consultant part.
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 mt-11 items-start">
            <div className="max-w-[68ch] space-y-5 text-[17.5px] text-[#3A2E38] leading-relaxed">
              <p>
                Nous formons les équipes financières du secteur pétrolier à ce que nous pratiquons en mission : la lecture des contrats de partage de production, la mécanique du recouvrement des coûts, le contrôle de gestion appliqué aux opérations amont.
              </p>
              <p>
                Nos formations se déclinent sous deux formes. En intra-entreprise, sur mesure, à partir de vos propres contrats et de vos propres données. Ou via <strong>AFRIKAN CAMPUS</strong>, notre plateforme de formation professionnelle de niveau MBA dédiée à la gestion financière du secteur pétrolier amont.
              </p>

              {/* Encart */}
              <div className="border-l-4 border-[#862586] pl-6 py-2 my-8 bg-[#862586]/5">
                <span className="font-mono text-xs text-[#862586] uppercase tracking-widest block mb-1.5 font-semibold">
                  À qui s'adressent nos formations
                </span>
                <p className="font-corps text-lg leading-relaxed text-[#1A1418] m-0 font-normal">
                  Directeurs financiers, contrôleurs de gestion, comptables et auditeurs internes des opérateurs, des sociétés d'État et des entreprises de sous-traitance pétrolière. Également ouvertes aux cadres des administrations chargées du suivi du secteur.
                </p>
              </div>
            </div>

            <ImageSlot 
              refCode="IMG-05" 
              heightClass="min-h-[360px]"
              brief="Photographie de session : formateur devant un groupe, ou plan rapproché de participants prenant des notes sur un cas chiffré. Privilégier une vraie session plutôt qu'une mise en scène."
            />
          </div>
        </div>
      </section>


      {/* SECTION: NOS AXES DE FORMATION */}
      <section className="py-16 md:py-20 bg-[#FAF7F9]">
        <div className="max-w-[1100px] mx-auto px-7">
          <p className="font-mono text-[11.5px] tracking-[0.16em] uppercase text-[#862586] mb-[18px]">
            Nos axes de formation
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#1A1418] max-w-[20ch]">
            Quatre programmes, tous adossés à des cas réels.
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse mt-8 text-base bg-white border border-[#862586]/18">
              <thead>
                <tr className="border-b border-[#862586]/18 bg-[#FAF7F9]">
                  <th className="font-mono text-[11px] tracking-[0.12em] uppercase text-[#862586] font-semibold p-4">Programme</th>
                  <th className="font-mono text-[11px] tracking-[0.12em] uppercase text-[#862586] font-semibold p-4">Contenu</th>
                  <th className="font-mono text-[11px] tracking-[0.12em] uppercase text-[#862586] font-semibold p-4">Format</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#862586]/18">
                <tr>
                  <td className="p-4 font-display font-semibold w-[30%] text-[#1A1418]">Contrat de partage de production</td>
                  <td className="p-4 text-[#3A2E38]">Mécanique du CPP, redevance, Cost Oil, Profit Oil, R-Factor, traitement de l'impôt sur les sociétés et calcul du Government Take.</td>
                  <td className="p-4 text-[#3A2E38] font-mono text-sm">2 à 3 jours</td>
                </tr>
                <tr>
                  <td className="p-4 font-display font-semibold w-[30%] text-[#1A1418]">Contrôle des coûts pétroliers</td>
                  <td className="p-4 text-[#3A2E38]">Éligibilité des CAPEX et OPEX, compte de récupération, préparation et défense d'un audit contradictoire.</td>
                  <td className="p-4 text-[#3A2E38] font-mono text-sm">2 à 3 jours</td>
                </tr>
                <tr>
                  <td className="p-4 font-display font-semibold w-[30%] text-[#1A1418]">Contrôle de gestion &amp; stratégie financière</td>
                  <td className="p-4 text-[#3A2E38]">Architecture budgétaire, analyse des écarts, tableaux de bord et pilotage de la performance en environnement projet.</td>
                  <td className="p-4 text-[#3A2E38] font-mono text-sm">3 à 5 jours</td>
                </tr>
                <tr>
                  <td className="p-4 font-display font-semibold w-[30%] text-[#1A1418]">Contenu local</td>
                  <td className="p-4 text-[#3A2E38]">Obligations, structuration financière et mise à niveau des sous-traitants et prestataires nationaux du secteur.</td>
                  <td className="p-4 text-[#3A2E38] font-mono text-sm">2 jours</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8">
            <Link 
              to="/contact" 
              className="inline-block font-display font-semibold text-[15px] px-7 py-3.5 bg-[#862586] text-white rounded-[2px] hover:bg-[#5C1560] transition-colors"
            >
              Demander le programme détaillé
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
