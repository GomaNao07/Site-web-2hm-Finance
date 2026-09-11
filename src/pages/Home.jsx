import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ImageSlot from '../components/ImageSlot';
import img_1 from '../assets/persons/img_1.jpeg';
import logo from '../assets/icon.png';
import platform_1 from '../assets/platforms/platform_1.jpeg';
import platform_2 from '../assets/platforms/platform_2.jpeg';
import platform_3 from '../assets/platforms/platform_3.jpeg';

export default function Home() {
  const homeJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "FinancialService",
      "name": "2HM Finance",
      "alternateName": "2HM.FINANCE",
      "url": "https://2hmfinance.com/",
      "logo": "https://2hmfinance.com/images/logo.png",
      "image": "https://2hmfinance.com/images/og-share-2hmfinance.jpg",
      "description": "Cabinet d'ingénierie financière et de contrôle de gestion spécialisé dans l'amont pétrolier en zone CEMAC-OHADA.",
      "telephone": "+242055179230",
      "email": "hhonvo@2hmfinance.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "106, rue Benoît louembet, Km4",
        "addressLocality": "Pointe-Noire",
        "addressCountry": "CG"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-4.777",
        "longitude": "11.864"
      },
      "areaServed": ["CG", "GA", "CM", "GQ", "TD"],
      "founder": {
        "@type": "Person",
        "name": "Hervé HONVO",
        "jobTitle": "Associé-Gérant"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "2HM Finance",
      "url": "https://2hmfinance.com/"
    }
  ];

  return (
    <div>
      <SEO
        title="2HM Finance | Conseil Financier & Contrôle de Gestion Pétrolier"
        description="Cabinet d'ingénierie financière & contrôle de gestion pétrolier amont en zone CEMAC. Maîtrise des coûts, Cost Recovery & optimisation de la rente."
        canonical="https://2hmfinance.com/"
        ogType="website"
        jsonLd={homeJsonLd}
      />

      {/* HERO SECTION */}
      <section className="bg-[#2A0B2C]  text-[#FBF4FB] relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-55 w-full h-full object-cover pointer-events-none"
        >
          <ImageSlot
            refCode="IMG-01"
            images={[platform_1, platform_2, platform_3]}
            heightClass="min-h-[1100px]"
            alt="Plateforme pétrolière offshore au crépuscule - 2HM Finance ingénierie financière"
            brief="Photographie d'ouverture : plateforme offshore ou installation de production au crépuscule, cadrage large et horizon dégagé. Traitement bichromie violet #862586 / noir, densité suffisante pour laisser lire le texte."
          />

        </div>
        <div
          className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: 'linear-gradient(150deg, rgba(134,37,134,.9), rgba(26,4,28,.9))',
            mixBlendMode: 'multiply'
          }}
        />
        <div className="flex max-w-5xl mx-auto relative z-10">
          <div className=" px-7   pt-20 pb-20 md:pt-24 md:pb-22 ">
            <p className="font-mono text-[11.5px] tracking-[0.16em] text-bold text-[#E8A33D] uppercase mb-[18px] py-2 px-4 backdrop-blur-xl"
              style={{ background: ' rgba(26, 4, 28, 0.52)' }}
            >
              Ingénierie financière &amp; contrôle de gestion — Zone CEMAC / OHADA
            </p>

            <h1 className="font-display font-extrabold text-xl sm:text-5xl  leading-[1.06] tracking-[-0.02em] text-white max-w-[17ch]">
              Le prix du baril, vous le subissez. Vos coûts, vous les maîtrisez.
            </h1>

            <p className="font-corps text-md sm:text-xl text- [#DFC6DF] leading-[1.5] max-w-[52ch] mt-6 font-light">
              2HM.FINANCE accompagne les opérateurs, contractants et sous-traitants de l'amont pétrolier dans le contrôle de leurs coûts, la gouvernance financière de leurs projets et l'optimisation de la rente qu'ils partagent avec l'État.
            </p>

            <div className="flex flex-wrap gap-3.5 mt-9">
              <Link
                to="/contact"
                className="font-display font-semibold text-[15px] px-6 py-3.5 bg-[#E8A33D] text-[#2A0B2C] rounded-[2px] hover:bg-[#F4B85C] transition-colors"
              >
                Demander un diagnostic
              </Link>
              <Link
                to="/nos-expertises"
                className="font-display font-semibold text-[15px] px-6 py-3.5 border border-white/40 text-white rounded-[2px] hover:border-white hover:bg-white/10 transition-colors"
              >
                Voir nos expertises
              </Link>
            </div>

            <p className="mt-[52px] pt-[22px] border-t border-white/18 font-display font-bold text-lg md:text-[21px] text-white">
              Prix subi, <em className="not-italic text-[#E8A33D]">coût maîtrisé.</em>
            </p>
          </div>
          <div className='h-full flex items-center mt-30'>
            <img
              src={logo}
              className="w-90"
            />
          </div>
        </div>
      </section>


      {/* SECTION: LE CONSTAT */}
      <section className="bg-white py-16 md:py-20 text-[#1A1418] relative">
        <div className="max-w-[1100px] mx-auto px-7 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-start">
          <div>
            <h2 className="font-mono text-[11.5px] tracking-[0.16em] uppercase text-[#862586] mb-[18px]">
              Le constat
            </h2>
            <p className="font-corps text-2xl sm:text-3xl md:text-[32px] leading-[1.42] font-light max-w-[26ch]">
              Dans l'amont pétrolier, le prix de vente ne se négocie pas. La marge, elle, se joue sur ce que vous parvenez à faire <strong className="font-medium text-[#862586] bg-[#E8A33D]/30 px-1">reconnaître, certifier et recouvrer</strong>.
            </p>
            <p className="mt-6 max-w-[52ch] text-[#3A2E38] leading-relaxed">
              Un coût écarté du Cost Oil n'est pas un coût différé : c'est un coût définitivement supporté. Il ne réapparaît dans aucun exercice ultérieur, il ne se rattrape par aucun volume supplémentaire, et il pèse exactement au même endroit qu'une chute des cours — sur votre résultat net.
            </p>
          </div>

        </div>
      </section>


      {/* SECTION: NOS TROIS DOMAINES D'INTERVENTION */}
      <section className="py-16 md:py-20 bg-[#FAF7F9]">
        <div className="max-w-[1100px] mx-auto px-7">
          <p className="font-mono text-[11.5px] tracking-[0.16em] uppercase text-[#862586] mb-[18px]">
            Nos trois domaines d'intervention
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#1A1418] max-w-[20ch] leading-[1.06] tracking-[-0.02em]">
            Trois leviers, une seule finalité : ce qui reste après partage.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-[#862586]/18 mt-11">

            {/* Pilier 01 */}
            <div className="bg-white p-[34px_30px_32px] flex flex-col gap-[14px]">
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#862586]">01</span>
              <h3 className="font-display font-semibold text-xl text-[#1A1418] leading-snug">
                Contrôle des coûts pétroliers<br />
                <span className="font-normal text-[#6E6472] text-base">CAPEX, OPEX &amp; Cost Recovery</span>
              </h3>
              <p className="text-[16.5px] text-[#3A2E38] m-0">
                Nous auditons vos coûts pétroliers ligne à ligne, éprouvons leur éligibilité au Cost Oil et sécurisons leur recouvrabilité avant que l'audit de l'État ne s'en charge.
              </p>
              <Link to="/nos-expertises#exp1" className="mt-auto pt-3 font-display font-semibold text-sm text-[#862586] hover:underline">
                Découvrir &rarr;
              </Link>
            </div>

            {/* Pilier 02 */}
            <div className="bg-white p-[34px_30px_32px] flex flex-col gap-[14px]">
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#862586]">02</span>
              <h3 className="font-display font-semibold text-xl text-[#1A1418] leading-snug">
                Gouvernance financière<br />
                <span className="font-normal text-[#6E6472] text-base">Projets d'hydrocarbures</span>
              </h3>
              <p className="text-[16.5px] text-[#3A2E38] m-0">
                Nous installons le contrôle de gestion, les procédures d'engagement et le reporting JV qui rendent vos projets pilotables au mois et défendables en audit.
              </p>
              <Link to="/nos-expertises#exp2" className="mt-auto pt-3 font-display font-semibold text-sm text-[#862586] hover:underline">
                Découvrir &rarr;
              </Link>
            </div>

            {/* Pilier 03 */}
            <div className="bg-white p-[34px_30px_32px] flex flex-col gap-[14px]">
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#862586]">03</span>
              <h3 className="font-display font-semibold text-xl text-[#1A1418] leading-snug">
                Optimisation de la rente<br />
                <span className="font-normal text-[#6E6472] text-base">Partage de production</span>
              </h3>
              <p className="text-[16.5px] text-[#3A2E38] m-0">
                Nous modélisons le partage entre l'État, l'opérateur et le contractant pour éclairer chaque arbitrage d'investissement avant qu'il soit irréversible.
              </p>
              <Link to="/nos-expertises#exp3" className="mt-auto pt-3 font-display font-semibold text-sm text-[#862586] hover:underline">
                Découvrir &rarr;
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* SECTION: NOTRE THÈSE (JAUGE DE COÛT) */}
      <section className="bg-[#2A0B2C] text-[#F3E6F3] py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-7">
          <p className="font-mono text-[11.5px] tracking-[0.16em] uppercase text-[#E8A33D] mb-[18px]">
            Notre thèse
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white max-w-[22ch] leading-[1.06]">
            Maîtriser le coût, ce n'est pas dépenser moins. C'est recouvrer davantage.
          </h2>
          <p className="font-corps text-xl text-[#D9BFD9] font-light max-w-[56ch] mt-6">
            Nous avons établi et vérifié le coefficient de perte nette qui mesure ce qu'un coût requalifié retire réellement au contractant, une fois déroulés les effets de partage de production et d'impôt.
          </p>

          {/* Jauge box */}
          <div className="mt-11 bg-black/22 border border-white/16 p-6 sm:p-8">
            <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#E8A33D] mb-6">
              Effet d'une requalification de 12 M USD de coûts
            </p>

            {/* Visual Bar */}
            <div className="relative h-16 bg-white/9 flex items-stretch rounded-[1px] overflow-hidden">
              <div className="bg-[#E8A33D] text-[#2A0B2C] w-[70.75%] flex items-center px-4 font-mono text-xs tracking-[0.03em] font-semibold">
                8,49 M USD supportés en net par le contractant
              </div>
              <div className="text-[#C9A8C9] flex-1 flex items-center justify-end px-4 font-mono text-xs tracking-[0.03em]">
                3,51 M USD absorbés par le partage
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap justify-between gap-5 mt-4 font-mono text-[11.5px] text-[#C9A8C9] tracking-[0.03em]">
              <span>Coûts requalifiés : 12,00 M USD</span>
              <span>Perte nette : 8,49 M USD</span>
              <span>Équivalent : baisse de 10 % du Brent</span>
            </div>

            {/* Formula */}
            <p className="mt-6 pt-5 border-t border-white/14 font-mono text-sm text-white">
              &kappa; = 1 &minus; s(1 &minus; t) = <b className="text-[#E8A33D] font-semibold">0,7075</b>
            </p>

            {/* Note */}
            <p className="text-[15.5px] text-[#D9BFD9] max-w-[60ch] mt-3.5 font-corps font-light leading-relaxed">
              Autrement dit : chaque dollar refusé au Cost Oil ne coûte pas un dollar au contractant, il en coûte 0,7075. Sur un dossier de 12 millions, la sanction équivaut à un choc de marché que personne n'accepterait sans réagir — sauf qu'ici, elle est évitable.
            </p>
          </div>
        </div>
      </section>


      {/* SECTION: COMMENT NOUS TRAVAILLONS ENSEMBLE */}
      <section className="bg-white py-16 md:py-20 text-[#1A1418]">
        <div className="max-w-[1100px] mx-auto px-7">
          <p className="font-mono text-[11.5px] tracking-[0.16em] uppercase text-[#862586] mb-[18px]">
            Comment nous travaillons ensemble
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#1A1418] max-w-[18ch] mb-8">
            Quatre portes d'entrée.
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse mt-8 text-base">
              <thead>
                <tr className="border-b border-[#862586]/18">
                  <th className="font-mono text-[11px] tracking-[0.12em] uppercase text-[#862586] font-semibold p-4">Format</th>
                  <th className="font-mono text-[11px] tracking-[0.12em] uppercase text-[#862586] font-semibold p-4">Ce que vous obtenez</th>
                  <th className="font-mono text-[11px] tracking-[0.12em] uppercase text-[#862586] font-semibold p-4">Durée</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#862586]/18">
                <tr>
                  <td className="p-4 font-display font-semibold w-[30%] text-[#1A1418]">Diagnostic éclair</td>
                  <td className="p-4 text-[#3A2E38]">Trois sondes ciblées sur vos fuites de marge, restitution chiffrée et plan d'action hiérarchisé.</td>
                  <td className="p-4 text-[#3A2E38] font-mono text-sm">5 jours ouvrés</td>
                </tr>
                <tr>
                  <td className="p-4 font-display font-semibold w-[30%] text-[#1A1418]">Mission de conseil</td>
                  <td className="p-4 text-[#3A2E38]">Audit de coûts, dossier de financement, mise en place du contrôle de gestion, assistance en contrôle fiscal.</td>
                  <td className="p-4 text-[#3A2E38] font-mono text-sm">Selon périmètre</td>
                </tr>
                <tr>
                  <td className="p-4 font-display font-semibold w-[30%] text-[#1A1418]">Contrat de Performance Coûts</td>
                  <td className="p-4 text-[#3A2E38]">Intervention rémunérée sur l'Économie Nette Vérifiée : nous ne sommes payés que sur ce que vous récupérez réellement.</td>
                  <td className="p-4 text-[#3A2E38] font-mono text-sm">6 à 18 mois</td>
                </tr>
                <tr>
                  <td className="p-4 font-display font-semibold w-[30%] text-[#1A1418]">Abonnement mensuel</td>
                  <td className="p-4 text-[#3A2E38]">Tenue de comptabilité SYSCOHADA, déclarations fiscales périodiques et obligations CNSS, en forfait mensuel.</td>
                  <td className="p-4 text-[#3A2E38] font-mono text-sm">Reconductible</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>


      {/* SECTION: L'ASSOCIÉ-GÉRANT */}
      <section className="py-16 md:py-20 bg-[#FAF7F9]">
        <div className="max-w-[1100px] mx-auto px-7 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ImageSlot
            refCode=""
            url={img_1}
            heightClass="min-h-[640px]"
            alt="Hervé HONVO - Associé-Gérant 2HM Finance, expert en ingénierie financière pétrolière"
            brief=""
          />

          <div>
            <p className="font-mono text-[11.5px] tracking-[0.16em] uppercase text-[#862586] mb-[18px]">
              L'associé-gérant
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#1A1418] mb-1">
              Hervé HONVO
            </h2>
            <p className="font-display text-[15px] font-bold text-black track ing-[0.04em] mb-5">
              Associé-Gérant · 2HM.FINANCE
            </p>
            <p className="text-[17.5px] text-[#3A2E38] leading-relaxed mb-4">
              Praticien de l'ingénierie financière et du contrôle de gestion appliqués à l'amont pétrolier, il conduit personnellement les missions de diagnostic et les mandats sensibles. Son travail porte sur un point précis : la frontière entre le coût engagé et le coût effectivement recouvré.
            </p>
            <p className="text-[17.5px] text-[#3A2E38] leading-relaxed mb-6">
              Il est également le formateur d'AFRIKAN CAMPUS, plateforme de formation professionnelle de niveau MBA dédiée à la gestion financière du secteur pétrolier amont.
            </p>
            <Link
              to="/le-cabinet"
              className="inline-block font-display font-semibold text-[15px] px-6 py-3.5 bg-[#862586] text-white rounded-[2px] hover:bg-[#5C1560] transition-colors"
            >
              Découvrir le cabinet
            </Link>
          </div>
        </div>
      </section>


      {/* SECTION: FORMATION */}
      <section className="bg-[#862586] text-white py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-7 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-mono text-[11.5px] tracking-[0.16em] uppercase text-[#F0CDA0] mb-[18px]">
              Formation
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white max-w-[18ch]">
              Nous transmettons ce que nous pratiquons.
            </h2>
            <p className="text-[#F0DBF0] text-lg max-w-[50ch] mt-5 leading-relaxed">
              Un cabinet qui audite des coûts sans former ceux qui les engagent ne produit qu'un effet ponctuel. Nos séminaires intra-entreprise et les modules d'AFRIKAN CAMPUS portent la même doctrine que nos missions, avec les mêmes cas et les mêmes modèles.
            </p>
            <Link
              to="/formation"
              className="inline-block mt-6 font-display font-semibold text-[15px] px-6 py-3.5 bg-[#E8A33D] text-[#2A0B2C] rounded-[2px] hover:bg-[#F4B85C] transition-colors"
            >
              Voir le catalogue de formation
            </Link>
          </div>


          {/* <ImageSlot
            refCode="IMG-03"
            url={""}
            heightClass="min-h-[560px]"
            brief="Séance de formation ou atelier de travail : petit groupe de cadres autour d'une table, tableau ou écran visible, ambiance de travail réelle."
          /> */}
        </div>
      </section>


      {/* SECTION: CTA FINAL */}
      <section className="bg-[#2A0B2C] text-[#F3E6F3] py-20 text-center">
        <div className="max-w-[1100px] mx-auto px-7">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white max-w-[24ch] mx-auto leading-tight">
            Où se situe votre prochaine fuite de marge ?
          </h2>
          <p className="font-corps text-xl text-[#D9BFD9] max-w-[52ch] mx-auto mt-6 leading-relaxed font-light">
            Cinq jours suffisent pour le savoir. Le diagnostic est cadré, chiffré, et vous repartez avec un plan d'action, que vous poursuiviez avec nous ou non.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-9">
            <Link
              to="/contact"
              className="font-display font-semibold text-[15px] px-7 py-3.5 bg-[#E8A33D] text-[#2A0B2C] rounded-[2px] hover:bg-[#F4B85C] transition-colors"
            >
              Prendre rendez-vous
            </Link>
            <Link
              to="/notre-methode"
              className="font-display font-semibold text-[15px] px-7 py-3.5 border border-white/40 text-white rounded-[2px] hover:border-white hover:bg-white/10 transition-colors"
            >
              Comprendre la méthode
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
