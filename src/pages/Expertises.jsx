import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Expertises() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div className="bg-[#FAF7F9]">
      
      {/* HEADER BANNER */}
      <section className="bg-[#2A0B2C] text-[#F3E6F3] py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-7">
          <p className="font-mono text-[11.5px] tracking-[0.16em] uppercase text-[#E8A33D] mb-[18px]">
            Nos expertises
          </p>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white max-w-[18ch] leading-[1.06] tracking-[-0.02em]">
            Ce que nous faisons, précisément.
          </h1>
          <p className="font-corps text-xl text-[#D9BFD9] max-w-[58ch] mt-6 font-light leading-relaxed">
            Trois domaines, décrits selon le même schéma : le problème que nous traitons, ce que nous faisons concrètement, ce que vous recevez, et sous quelle forme nous intervenons.
          </p>
        </div>
      </section>

      {/* EXPERTISES DETAILED LIST */}
      <section className="bg-white py-12 md:py-16 text-[#1A1418]">
        <div className="max-w-[1100px] mx-auto px-7 space-y-16">
          
          {/* EXPERTISE 01 */}
          <article className="pt-10 border-t border-[#862586]/18 first:border-t-0 first:pt-0" id="exp1">
            <p className="font-mono text-[11.5px] tracking-[0.16em] uppercase text-[#862586] mb-3">
              Expertise 01
            </p>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#1A1418] max-w-[22ch] mb-8">
              Contrôle des coûts pétroliers — CAPEX, OPEX &amp; Cost Recovery
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="bg-[#FAF7F9] p-6 border-l-2 border-[#862586]">
                <h3 className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#862586] font-semibold mb-3">
                  Le problème
                </h3>
                <p className="text-[16.5px] text-[#3A2E38] m-0 leading-relaxed">
                  Les coûts sont engagés selon les règles de l'entreprise, mais recouvrés selon celles du contrat de partage de production. L'écart entre les deux ne se révèle qu'au moment de l'audit de l'État — c'est-à-dire trop tard pour être corrigé, et au pire moment pour être discuté.
                </p>
              </div>

              <div className="bg-[#FAF7F9] p-6 border-l-2 border-[#862586]">
                <h3 className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#862586] font-semibold mb-3">
                  Ce que nous faisons
                </h3>
                <ul className="space-y-2 text-[16.5px] text-[#3A2E38] pl-5 list-disc marker:text-[#E8A33D]">
                  <li>Revue d'éligibilité des CAPEX et OPEX au regard du contrat et du code des hydrocarbures</li>
                  <li>Test de recouvrabilité du Cost Oil et reconstitution du compte de récupération</li>
                  <li>Certification du R-Factor et de ses composantes</li>
                  <li>Analyse du lifting cost par centre de coûts</li>
                  <li>Préparation et défense des dossiers en audit contradictoire</li>
                </ul>
              </div>

              <div className="bg-[#FAF7F9] p-6 border-l-2 border-[#862586]">
                <h3 className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#862586] font-semibold mb-3">
                  Vos livrables
                </h3>
                <ul className="space-y-2 text-[16.5px] text-[#3A2E38] pl-5 list-disc marker:text-[#E8A33D]">
                  <li>Rapport d'audit de coûts avec chiffrage de l'exposition</li>
                  <li>Registre des points de désaccord probables, argumentés</li>
                  <li>Compte de récupération reconstitué et documenté</li>
                  <li>Recommandations de correction hiérarchisées par enjeu financier</li>
                </ul>
              </div>

              <div className="bg-[#FAF7F9] p-6 border-l-2 border-[#862586]">
                <h3 className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#862586] font-semibold mb-3">
                  Format d'engagement
                </h3>
                <p className="text-[16.5px] text-[#3A2E38] m-0 leading-relaxed">
                  Diagnostic éclair de 5 jours, mission d'audit complète, ou Contrat de Performance Coûts avec rémunération indexée sur l'Économie Nette Vérifiée.
                </p>
              </div>
            </div>
          </article>


          {/* EXPERTISE 02 */}
          <article className="pt-14 border-t border-[#862586]/18" id="exp2">
            <p className="font-mono text-[11.5px] tracking-[0.16em] uppercase text-[#862586] mb-3">
              Expertise 02
            </p>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#1A1418] max-w-[22ch] mb-8">
              Gouvernance financière des projets d'hydrocarbures
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="bg-[#FAF7F9] p-6 border-l-2 border-[#862586]">
                <h3 className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#862586] font-semibold mb-3">
                  Le problème
                </h3>
                <p className="text-[16.5px] text-[#3A2E38] m-0 leading-relaxed">
                  Un projet peut être techniquement irréprochable et financièrement indéfendable : engagements non tracés, écarts budgétaires expliqués après coup, reporting de joint-venture reconstitué dans l'urgence. La qualité de la gouvernance ne se voit qu'au moment où elle manque.
                </p>
              </div>

              <div className="bg-[#FAF7F9] p-6 border-l-2 border-[#862586]">
                <h3 className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#862586] font-semibold mb-3">
                  Ce que nous faisons
                </h3>
                <ul className="space-y-2 text-[16.5px] text-[#3A2E38] pl-5 list-disc marker:text-[#E8A33D]">
                  <li>Conception et mise en place du contrôle de gestion projet</li>
                  <li>Procédures d'engagement de dépense et circuit d'autorisation</li>
                  <li>Architecture budgétaire et analyse des écarts</li>
                  <li>Reporting de joint-venture et documentation des cash-calls</li>
                  <li>Cartographie des risques financiers et dispositif de contrôle interne</li>
                </ul>
              </div>

              <div className="bg-[#FAF7F9] p-6 border-l-2 border-[#862586]">
                <h3 className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#862586] font-semibold mb-3">
                  Vos livrables
                </h3>
                <ul className="space-y-2 text-[16.5px] text-[#3A2E38] pl-5 list-disc marker:text-[#E8A33D]">
                  <li>Manuel de procédures financières applicable</li>
                  <li>Tableaux de bord de pilotage mensuels opérationnels</li>
                  <li>Modèle budgétaire et grille d'analyse des écarts</li>
                  <li>Formation des équipes à l'outil livré</li>
                </ul>
              </div>

              <div className="bg-[#FAF7F9] p-6 border-l-2 border-[#862586]">
                <h3 className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#862586] font-semibold mb-3">
                  Format d'engagement
                </h3>
                <p className="text-[16.5px] text-[#3A2E38] m-0 leading-relaxed">
                  Mission de mise en place, puis accompagnement au rythme convenu — mensuel, trimestriel, ou ponctuel sur les phases sensibles du projet.
                </p>
              </div>
            </div>
          </article>


          {/* EXPERTISE 03 */}
          <article className="pt-14 border-t border-[#862586]/18" id="exp3">
            <p className="font-mono text-[11.5px] tracking-[0.16em] uppercase text-[#862586] mb-3">
              Expertise 03
            </p>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#1A1418] max-w-[22ch] mb-8">
              Optimisation de la rente pétrolière
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="bg-[#FAF7F9] p-6 border-l-2 border-[#862586]">
                <h3 className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#862586] font-semibold mb-3">
                  Le problème
                </h3>
                <p className="text-[16.5px] text-[#3A2E38] m-0 leading-relaxed">
                  Redevance, Cost Oil, Profit Oil, impôt sur les sociétés : chaque paramètre du partage interagit avec les autres. Un arbitrage décidé sur une intuition de rentabilité brute peut détruire de la valeur nette sans que personne ne s'en aperçoive avant plusieurs exercices.
                </p>
              </div>

              <div className="bg-[#FAF7F9] p-6 border-l-2 border-[#862586]">
                <h3 className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#862586] font-semibold mb-3">
                  Ce que nous faisons
                </h3>
                <ul className="space-y-2 text-[16.5px] text-[#3A2E38] pl-5 list-disc marker:text-[#E8A33D]">
                  <li>Modélisation complète du partage de production et du Government Take</li>
                  <li>Simulation de scénarios de prix, de production et de coûts</li>
                  <li>Analyse de sensibilité des arbitrages d'investissement</li>
                  <li>Évaluation économique de projets et calcul de seuils de rentabilité</li>
                  <li>Appui à la négociation et à la renégociation contractuelle</li>
                </ul>
              </div>

              <div className="bg-[#FAF7F9] p-6 border-l-2 border-[#862586]">
                <h3 className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#862586] font-semibold mb-3">
                  Vos livrables
                </h3>
                <ul className="space-y-2 text-[16.5px] text-[#3A2E38] pl-5 list-disc marker:text-[#E8A33D]">
                  <li>Modèle financier paramétrable, remis avec sa documentation</li>
                  <li>Note de synthèse des arbitrages et de leurs conséquences chiffrées</li>
                  <li>Jeux de scénarios et tableaux de sensibilité</li>
                  <li>Argumentaire technique mobilisable en négociation</li>
                </ul>
              </div>

              <div className="bg-[#FAF7F9] p-6 border-l-2 border-[#862586]">
                <h3 className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#862586] font-semibold mb-3">
                  Format d'engagement
                </h3>
                <p className="text-[16.5px] text-[#3A2E38] m-0 leading-relaxed">
                  Mission d'étude à périmètre défini, ou assistance continue pendant toute la durée d'une négociation.
                </p>
              </div>
            </div>
          </article>

        </div>
      </section>


      {/* SECTION: PRESTATIONS TRANSVERSES */}
      <section className="py-16 md:py-20 bg-[#FAF7F9]">
        <div className="max-w-[1100px] mx-auto px-7">
          <p className="font-mono text-[11.5px] tracking-[0.16em] uppercase text-[#862586] mb-[18px]">
            Prestations transverses
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#1A1418] max-w-[22ch]">
            Les travaux financiers qui accompagnent l'expertise sectorielle.
          </h2>
          <p className="text-[#3A2E38] max-w-[56ch] mt-4 text-[17.5px] leading-relaxed">
            Nos clients nous confient également les fonctions financières qu'ils ne souhaitent pas internaliser. Ces prestations peuvent être souscrites seules ou en complément d'une mission d'expertise.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-[#862586]/18 mt-10">
            <div className="bg-white p-[34px_30px_32px] flex flex-col gap-3.5">
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#862586]">Abonnement mensuel</span>
              <h3 className="font-display font-semibold text-xl text-[#1A1418]">Externalisation comptable</h3>
              <p className="text-[16.5px] text-[#3A2E38] m-0 leading-relaxed">
                Tenue de comptabilité selon le SYSCOHADA révisé, déclarations fiscales périodiques et obligations CNSS, au forfait mensuel.
              </p>
            </div>

            <div className="bg-white p-[34px_30px_32px] flex flex-col gap-3.5">
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#862586]">À l'acte</span>
              <h3 className="font-display font-semibold text-xl text-[#1A1418]">Financement &amp; business plans</h3>
              <p className="text-[16.5px] text-[#3A2E38] m-0 leading-relaxed">
                Construction de business plans, montage et défense des dossiers de financement bancaire, prévisionnels et plans de trésorerie.
              </p>
            </div>

            <div className="bg-white p-[34px_30px_32px] flex flex-col gap-3.5">
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#862586]">À l'acte</span>
              <h3 className="font-display font-semibold text-xl text-[#1A1418]">Fiscal, juridique &amp; recouvrement</h3>
              <p className="text-[16.5px] text-[#3A2E38] m-0 leading-relaxed">
                Assistance en contrôle fiscal, sécurisation des obligations déclaratives, secrétariat juridique et recouvrement de créances.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
