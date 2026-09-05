import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    jobTitle: '',
    email: '',
    phone: '',
    subject: 'diagnostic',
    message: '',
    consent: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.company || !formData.email || !formData.message || !formData.consent) {
      alert("Veuillez remplir tous les champs obligatoires et accepter les conditions.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="bg-[#2A0B2C] text-[#F3E6F3] min-h-screen py-16 md:py-24">
      <div className="max-w-[1100px] mx-auto px-7">
        
        {/* HEADER */}
        <p className="font-mono text-[11.5px] tracking-[0.16em] uppercase text-[#E8A33D] mb-[18px]">
          Contact
        </p>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white max-w-[16ch] leading-[1.06] tracking-[-0.02em]">
          Parlons de vos coûts.
        </h1>
        <p className="font-corps text-xl text-[#D9BFD9] max-w-[54ch] mt-6 font-light leading-relaxed">
          Un premier échange d'une heure suffit généralement à déterminer si un diagnostic se justifie, et sur quel périmètre. Il est sans engagement.
        </p>

        {/* CONTACT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0.5 bg-white/20 mt-11">
          <div className="bg-[#2A0B2C] p-8">
            <span className="font-mono text-xs text-[#E8A33D] uppercase tracking-widest block mb-3">
              Bureau opérationnel
            </span>
            <p className="m-0 text-[17px] text-[#EAD8EA] leading-relaxed">
              106, rue Benoît Loembet<br />
              Km4 — Pointe-Noire<br />
              République du Congo
            </p>
          </div>
 

          <div className="bg-[#2A0B2C] p-8">
            <span className="font-mono text-xs text-[#E8A33D] uppercase tracking-widest block mb-3">
              Téléphone
            </span>
            <p className="m-0 text-[17px] text-[#EAD8EA] leading-relaxed">
              <a href="tel:+242055179230" className="text-white hover:underline border-b border-white/35 pb-0.5">
                +242 05 517 92 30
              </a>
              <br />
              <span className="text-sm text-[#C9A8C9]">Du lundi au vendredi, 8h – 17h</span>
            </p>
          </div>

          <div className="bg-[#2A0B2C] p-8">
            <span className="font-mono text-xs text-[#E8A33D] uppercase tracking-widest block mb-3">
              Courriel &amp; Web
            </span>
            <p className="m-0 text-[17px] text-[#EAD8EA] leading-relaxed">
              <a href="mailto:hhonvo@2hmfinance.com" className="text-white hover:underline border-b border-white/35 pb-0.5 block mb-1">
                hhonvo@2hmfinance.com
              </a>
              <a href="https://www.2hmfinance.com" className="text-[#E8A33D] hover:underline">
                www.2hmfinance.com
              </a>
            </p>
          </div>
        </div>

        {/* INTERACTIVE FORM */}
        <div className="mt-12 bg-white/6 border border-white/18 p-8 md:p-10">
          <span className="font-mono text-xs text-[#E8A33D] uppercase tracking-widest block mb-6 font-semibold">
            Formulaire de contact
          </span>

          {submitted ? (
            <div className="bg-emerald-500/15 border border-emerald-500/40 p-6 rounded-[2px] text-emerald-200 font-corps text-lg">
              Demande envoyée. Nous revenons vers vous sous 48 heures ouvrées.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#EAD8EA] mb-2">
                    Nom et prénom <span className="text-[#E8A33D]">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom complet"
                    className="w-full bg-[#1A061C] border border-white/20 rounded-[2px] px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#E8A33D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#EAD8EA] mb-2">
                    Société <span className="text-[#E8A33D]">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nom de votre entreprise"
                    className="w-full bg-[#1A061C] border border-white/20 rounded-[2px] px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#E8A33D]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#EAD8EA] mb-2">
                    Fonction
                  </label>
                  <input 
                    type="text" 
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    placeholder="Ex: Directeur Financier"
                    className="w-full bg-[#1A061C] border border-white/20 rounded-[2px] px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#E8A33D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#EAD8EA] mb-2">
                    Adresse email professionnelle <span className="text-[#E8A33D]">*</span>
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="nom@entreprise.com"
                    className="w-full bg-[#1A061C] border border-white/20 rounded-[2px] px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#E8A33D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#EAD8EA] mb-2">
                    Téléphone
                  </label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+242..."
                    className="w-full bg-[#1A061C] border border-white/20 rounded-[2px] px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#E8A33D]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#EAD8EA] mb-2">
                  Objet de la demande
                </label>
                <select 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-[#1A061C] border border-white/20 rounded-[2px] px-4 py-3 text-white focus:outline-none focus:border-[#E8A33D]"
                >
                  <option value="diagnostic">Diagnostic de coûts (5 jours)</option>
                  <option value="gouvernance">Gouvernance financière de projet</option>
                  <option value="partage">Modélisation du partage de production</option>
                  <option value="comptabilite">Abonnement comptable SYSCOHADA</option>
                  <option value="formation">Programme de formation</option>
                  <option value="autre">Autre demande</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#EAD8EA] mb-2">
                  Votre message <span className="text-[#E8A33D]">*</span>
                </label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre besoin ou votre situation..."
                  className="w-full bg-[#1A061C] border border-white/20 rounded-[2px] px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#E8A33D]"
                />
              </div>

              <div className="flex items-start gap-3">
                <input 
                  type="checkbox"
                  id="consent"
                  name="consent"
                  required
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1 accent-[#E8A33D] cursor-pointer"
                />
                <label htmlFor="consent" className="text-xs text-[#C9A8C9] leading-relaxed cursor-pointer">
                  J'accepte que les informations saisies soient traitées par 2HM.FINANCE dans le cadre de ma demande de contact et de la relation commerciale qui peut en découler.
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="font-display font-semibold text-base px-8 py-3.5 bg-[#E8A33D] text-[#2A0B2C] rounded-[2px] hover:bg-[#F4B85C] transition-colors cursor-pointer disabled:opacity-50"
                >
                  {loading ? 'Envoi en cours...' : 'Envoyer ma demande'}
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
}
