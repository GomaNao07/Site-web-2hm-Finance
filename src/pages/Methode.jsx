import React from 'react';

export default function Methode() {
  const steps = [
    { day: "Jour 1", title: "Cadrage", desc: "Périmètre, accès aux données, désignation des interlocuteurs et calendrier de restitution." },
    { day: "Jours 2–3", title: "Sondage", desc: "Exécution des trois sondes sur pièces et entretiens avec les responsables concernés." },
    { day: "Jour 4", title: "Chiffrage", desc: "Quantification de l'exposition et des gisements de récupération identifiés." },
    { day: "Jour 5", title: "Restitution", desc: "Présentation à la direction, remise du rapport et du plan d'action hiérarchisé." },
    { day: "Ensuite", title: "Décision", desc: "Vous poursuivez en interne, ou vous nous confiez la mise en œuvre. Le diagnostic reste utile dans les deux cas." }
  ];

  return (
    <div className="bg-[#FAF7F9]">
      
      {/* SECTION: LE DIAGNOSTIC */}
      <section className="bg-white py-16 md:py-24 text-[#1A1418]">
        <div className="max-w-[1100px] mx-auto px-7">
          <p className="font-mono text-[11.5px] tracking-[0.16em] uppercase text-[#862586] mb-[18px]">
            Notre méthode
          </p>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#1A1418] max-w-[16ch] leading-[1.06] tracking-[-0.02em]">
            Le diagnostic « Prix subi, coût maîtrisé »
          </h1>
          <p className="font-corps text-xl text-[#3A2E38] max-w-[58ch] mt-6 font-light leading-relaxed">
            Cinq jours ouvrés, trois sondes, une restitution chiffrée. C'est notre porte d'entrée : suffisamment courte pour être décidée sans procédure lourde, suffisamment ciblée pour être concluante.
          </p>

          {/* 3 Sondes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-[#862586]/18 mt-12">
            <div className="bg-[#FAF7F9] p-[34px_30px_32px] flex flex-col gap-3">
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#862586]">Sonde 01</span>
              <h3 className="font-display font-semibold text-xl text-[#1A1418]">Recouvrabilité du Cost Oil</h3>
              <p className="text-[16.5px] text-[#3A2E38] m-0 leading-relaxed">
                Nous testons l'éligibilité effective de vos coûts déclarés et mesurons l'exposition en cas de requalification.
              </p>
            </div>

            <div className="bg-[#FAF7F9] p-[34px_30px_32px] flex flex-col gap-3">
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#862586]">Sonde 02</span>
              <h3 className="font-display font-semibold text-xl text-[#1A1418]">Certification du R-Factor</h3>
              <p className="text-[16.5px] text-[#3A2E38] m-0 leading-relaxed">
                Nous vérifions le calcul du R-Factor et de ses composantes, dont dépend directement votre part de Profit Oil.
              </p>
            </div>

            <div className="bg-[#FAF7F9] p-[34px_30px_32px] flex flex-col gap-3">
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#862586]">Sonde 03</span>
              <h3 className="font-display font-semibold text-xl text-[#1A1418]">Lifting cost par centre de coûts</h3>
              <p className="text-[16.5px] text-[#3A2E38] m-0 leading-relaxed">
                Nous décomposons le coût de production par centre pour localiser précisément les postes qui dérivent.
              </p>
            </div>
          </div>

          {/* 5 Steps timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0.5 bg-[#862586]/18 mt-10">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white p-[26px_20px] flex flex-col gap-2.5 min-h-[190px]">
                <span className="font-mono text-[11px] tracking-[0.12em] text-[#E8A33D] font-semibold">
                  {step.day}
                </span>
                <h4 className="font-display font-bold text-base text-[#1A1418]">
                  {step.title}
                </h4>
                <p className="text-[14.5px] text-[#3A2E38] m-0 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* SECTION: CONTRAT DE PERFORMANCE COÛTS */}
      <section className="bg-[#2A0B2C] text-[#F3E6F3] py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-7 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="font-mono text-[11.5px] tracking-[0.16em] uppercase text-[#E8A33D] mb-[18px]">
              Contrat de Performance Coûts
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white max-w-[20ch] leading-[1.06]">
              Nous ne facturons que ce que vous récupérez.
            </h2>
            <p className="text-[#D9BFD9] text-[17.5px] mt-6 leading-relaxed">
              Le Contrat de Performance Coûts est notre format d'engagement le plus exigeant, pour les deux parties. Notre rémunération y est indexée sur l'Économie Nette Vérifiée : le gain effectivement constaté, contradictoirement établi, après déduction de tout effet de partage et d'impôt.
            </p>
            <p className="text-[#D9BFD9] text-[17.5px] mt-4 leading-relaxed">
              Aucun gain vérifié, aucun honoraire de performance. Ce format n'est proposé que lorsque le diagnostic préalable établit un gisement de récupération suffisamment documenté pour être défendu.
            </p>
          </div>

          <div className="bg-white/6 border border-white/18 p-7">
            <span className="font-mono text-xs text-[#E8A33D] uppercase tracking-widest block mb-4">
              Nos engagements de mission
            </span>
            <ul className="space-y-3 text-[16.5px] text-[#EAD8EA] pl-5 list-disc marker:text-[#E8A33D]">
              <li>Confidentialité contractuelle sur l'ensemble des données confiées</li>
              <li>Traçabilité intégrale : chaque conclusion renvoie à sa pièce justificative</li>
              <li>Transfert de compétence systématique aux équipes internes</li>
              <li>Aucune sous-traitance de l'analyse hors du cabinet</li>
              <li>Restitution orale à la direction, jamais un rapport déposé sans commentaire</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}
