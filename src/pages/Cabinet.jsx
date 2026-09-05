import React from 'react';
import ImageSlot from '../components/ImageSlot';

export default function Cabinet() {
  return (
    <div className="bg-[#FAF7F9]">

      {/* SECTION: QUI NOUS SOMMES */}
      <section className="bg-white py-16 md:py-24 text-[#1A1418]">
        <div className="max-w-[1100px] mx-auto px-7">
          <p className="font-mono text-[11.5px] tracking-[0.16em] uppercase text-[#862586] mb-[18px]">
            Qui nous sommes
          </p>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#1A1418] max-w-[16ch] leading-[1.06] tracking-[-0.02em]">
            Un cabinet né d'un déséquilibre.
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 mt-11 items-start">
            <div className="max-w-[68ch] space-y-5 text-[17.5px] text-[#3A2E38] leading-relaxed">
              <p>
                2HM.FINANCE est un cabinet d'ingénierie financière et de contrôle de gestion établi en République du Congo et intervenant sur l'ensemble de la zone CEMAC-OHADA.
              </p>
              <p>
                Le cabinet s'est construit autour d'une observation simple. Face à l'État et aux opérateurs internationaux, les contractants et sous-traitants du secteur pétrolier négocient des contrats d'une complexité redoutable, où la moindre clause de recouvrement engage des millions — souvent sans disposer en interne de la capacité d'analyse qui permettrait d'en mesurer la portée avant signature, ni de la défendre après.
              </p>
              <p>
                Nous avons choisi de combler exactement cet écart. Pas par de l'audit de conformité, ni par du conseil généraliste : par une expertise étroite, technique et outillée du coût pétrolier et de son recouvrement.
              </p>

              {/* Encart */}
              <div className="border-l-4 border-[#862586] pl-6 py-2 my-8 bg-[#862586]/5">
                <span className="font-mono text-xs text-[#862586] uppercase tracking-widest block mb-1.5 font-semibold">
                  Notre principe de travail
                </span>
                <p className="font-corps text-xl leading-relaxed text-[#1A1418] m-0 font-normal">
                  Nous n'installons rien que le client ne puisse faire tourner sans nous six mois plus tard. Chaque mission se termine par un transfert de compétence, pas par une dépendance.
                </p>
              </div>
            </div>

            <ImageSlot
              refCode="IMG-04"
              heightClass="min-h-[360px]"
              brief="Vue de Pointe-Noire : port pétrolier, front de mer ou skyline en fin de journée. Ancre géographiquement le cabinet et évite l'iconographie corporate interchangeable."
            />
          </div>
        </div>
      </section>


      {/* SECTION: CE QUI NOUS DISTINGUE */}
      <section className="py-16 md:py-20 bg-[#FAF7F9]">
        <div className="max-w-[1100px] mx-auto px-7">
          <p className="font-mono text-[11.5px] tracking-[0.16em] uppercase text-[#862586] mb-[18px]">
            Ce qui nous distingue
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#1A1418] max-w-[20ch]">
            Une doctrine écrite, pas un argumentaire.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-[#862586]/18 mt-10">
            <div className="bg-white p-[34px_30px_32px] flex flex-col gap-3.5">
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#862586]">Formalisation</span>
              <h3 className="font-display font-semibold text-xl text-[#1A1418]">Un corpus documenté</h3>
              <p className="text-[16.5px] text-[#3A2E38] m-0 leading-relaxed">
                Nos principes d'intervention sont consignés dans un cahier doctrinal et adossés à un modèle financier propriétaire. Nos clients savent sur quoi repose chacune de nos conclusions.
              </p>
            </div>

            <div className="bg-white p-[34px_30px_32px] flex flex-col gap-3.5">
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#862586]">Spécialisation</span>
              <h3 className="font-display font-semibold text-xl text-[#1A1418]">Un seul secteur</h3>
              <p className="text-[16.5px] text-[#3A2E38] m-0 leading-relaxed">
                Nous n'intervenons que sur l'amont pétrolier et sa chaîne de sous-traitance. Cette étroitesse est délibérée : elle est la condition de la profondeur.
              </p>
            </div>

            <div className="bg-white p-[34px_30px_32px] flex flex-col gap-3.5">
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#862586]">Ancrage</span>
              <h3 className="font-display font-semibold text-xl text-[#1A1418]">Un cadre juridique maîtrisé</h3>
              <p className="text-[16.5px] text-[#3A2E38] m-0 leading-relaxed">
                SYSCOHADA révisé, fiscalité CEMAC, contrats de partage de production congolais : nous travaillons dans le droit qui s'applique à vous, pas dans un référentiel importé.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION: ANCRAGE & FICHE LÉGALE */}
      <section className="bg-white py-16 md:py-20 text-[#1A1418]">
        <div className="max-w-[1100px] mx-auto px-7 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="font-mono text-[11.5px] tracking-[0.16em] uppercase text-[#862586] mb-[18px]">
              Notre ancrage
            </p>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#1A1418] mb-5">
              Pointe-Noire, et le bassin qui les relie.
            </h2>
            <p className="text-[17.5px] text-[#3A2E38] leading-relaxed mb-4">
              Le siège social et le bureau opérationnel du cabinet sont établis à Pointe-Noire, au plus près des installations, des opérateurs et de leurs sous-traitants.
            </p>
            <p className="text-[17.5px] text-[#3A2E38] leading-relaxed">
              Nos travaux d'analyse couvrent également les marchés voisins de la zone — Gabon, Cameroun, Guinée équatoriale, Tchad — dont les évolutions conditionnent directement la position concurrentielle des acteurs congolais.
            </p>
          </div>

          <div>
            <p className="font-mono text-[11.5px] tracking-[0.16em] uppercase text-[#862586] mb-[18px]">
              Identité juridique
            </p>

            <div className="bg-[#FAF7F9] border border-[#862586]/18 p-7 font-mono text-sm leading-[1.85] text-[#3A2E38]">
              <p className="m-0"><b className="text-[#862586] font-semibold">Dénomination</b> · 2HM.FINANCE</p>
              <p className="m-0"><b className="text-[#862586] font-semibold">Forme</b> · Société à responsabilité limitée unipersonnelle</p>
              <p className="m-0"><b className="text-[#862586] font-semibold">Capital social</b> · 1 000 000 FCFA</p>
              <p className="m-0"><b className="text-[#862586] font-semibold">RCCM</b> · CG-BZV-01-2021-B13-00530</p>
              <p className="m-0"><b className="text-[#862586] font-semibold">Immatriculation</b> · 11 juin 2021, Tribunal de commerce de Brazzaville</p>
              <p className="m-0"><b className="text-[#862586] font-semibold">Bureau opérationnel</b> · <a href="https://maps.app.goo.gl/N2xXfJquY37f7GcP9" target="_blank" rel="noopener noreferrer" className="underline text-[#862586] hover:opacity-80">106, rue Benoît Loembet, Km4 — Pointe-Noire</a></p>
              <p className="m-0"><b className="text-[#862586] font-semibold">Objet</b> · Conseil de gestion (M700002)</p>
              <p className="m-0"><b className="text-[#862586] font-semibold">Gérant</b> · Hervé HONVO</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
