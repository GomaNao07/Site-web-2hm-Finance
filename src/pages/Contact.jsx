import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Globe, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import Toast from '../components/Toast';

const OFFICE_LATITUDE = -4.7966762;
const OFFICE_LONGITUDE = 11.8619983;
const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${OFFICE_LATITUDE},${OFFICE_LONGITUDE}`;
const LINKEDIN_URL = "https://www.linkedin.com/company/2hm-finance/";

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
  const [error, setError] = useState(null);

  const contactJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contactez 2HM Finance",
      "description": "Prenez rendez-vous avec les experts 2HM Finance à Pointe-Noire pour un diagnostic de vos coûts pétroliers.",
      "url": "https://2hmfinance.com/contact",
      "mainEntity": {
        "@type": "Organization",
        "name": "2HM Finance",
        "telephone": "+242055179230",
        "email": "hhonvo@2hmfinance.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "106, rue Benoît loembet, Km4",
          "addressLocality": "Pointe-Noire",
          "addressCountry": "CG"
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Accueil",
          "item": "https://2hmfinance.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Contact",
          "item": "https://2hmfinance.com/contact"
        }
      ]
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.company || !formData.email || !formData.message || !formData.consent) {
      alert("Veuillez remplir tous les champs obligatoires et accepter les conditions.");
      return;
    }

    setLoading(true);
    setError(null);

    const subjectMap = {
      diagnostic: "Diagnostic de coûts (5 jours)",
      gouvernance: "Gouvernance financière de projet",
      partage: "Modélisation du partage de production",
      comptabilite: "Abonnement comptable SYSCOHADA",
      formation: "Programme de formation",
      autre: "Autre demande"
    };

    const objetText = subjectMap[formData.subject] || formData.subject;

    if (formData.consent) {
      try {
        const response = await fetch("https://formspree.io/f/xovkwowr", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            _subject: `Contact 2HM.FINANCE : ${objetText}`,
            "Objet de la demande": objetText,
            "Nom et prénom": formData.name,
            "Société": formData.company,
            "Fonction": formData.jobTitle || "Non spécifié",
            "Email": formData.email,
            "Téléphone": formData.phone || "Non spécifié",
            "Message": formData.message
          })
        });

        if (response.ok) {
          setSubmitted(true);
          setFormData({
            name: '',
            company: '',
            jobTitle: '',
            email: '',
            phone: '',
            subject: 'diagnostic',
            message: '',
            consent: false
          });
        } else {
          const data = await response.json();
          if (data && data.errors) {
            setError(data.errors.map(err => err.message).join(", "));
          } else {
            setError("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
          }
        }
      } catch (err) {
        setError("Erreur de connexion au serveur. Veuillez vérifier votre réseau.");
      } finally {
        setLoading(false);
      }
    }

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
      <SEO
        title="Contactez 2HM Finance | Diagnostic Financier Pétrolier"
        description="Prenez rendez-vous avec les experts 2HM Finance à Pointe-Noire pour un diagnostic de vos coûts pétroliers ou un entretien d'ingénierie financière."
        canonical="https://2hmfinance.com/contact"
        ogType="website"
        jsonLd={contactJsonLd}
      />

      <div className="max-w-[1100px] mx-auto px-7">

        {/* HEADER */}
        <p className="font-mono text-[11.5px] tracking-[0.16em]  text-[#E8A33D] mb-[18px]">
          Contact
        </p>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white max-w-[16ch] leading-[1.06] tracking-[-0.02em]">
          Parlons de vos coûts.
        </h1>
        <p className="font-corps text-xl text-[#D9BFD9] max-w-[54ch] mt-6 font-light leading-relaxed">
          Un premier échange d'une heure suffit généralement à déterminer si un diagnostic se justifie, et sur quel périmètre. Il est sans engagement.
        </p>

        {/* CONTACT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0.5 mt-11 rounded-2xl bg-black/22 hoverflow-hidden">
          <div className=" p-8">
            <h2 className="font-mono text-xs text-[#E8A33D]  tracking-widest block mb-3 font-normal">
              Bureau opérationnel
            </h2>
            <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" aria-label="Ouvrir l'adresse du bureau dans Google Maps (nouvel onglet)" className="group block">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 shrink-0 mt-1 text-[#EAD8EA] group-hover:text-white transition-colors" />
                <p className="m-0 text-[17px] text-[#EAD8EA] leading-relaxed group-hover:text-white transition-colors">
                  106, rue Benoît louembet<br />
                  Km4 — Pointe-Noire<br />
                  République du Congo
                </p>
              </div>
              <span className="mt-2 inline-block text-xs font-mono uppercase tracking-wide text-[#E8A33D] group-hover:underline">
                Voir sur Google Maps →
              </span>
            </a>
          </div>


          <div className=" p-8">
            <h2 className="font-mono text-xs text-[#E8A33D]  tracking-widest block mb-3 font-normal">
              Téléphone
            </h2>
            <a href="tel:+242055179230" className="flex items-center gap-2 w-fit text-white hover:underline">
              <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.36.101 11.943c0 2.105.549 4.159 1.595 5.968L0 24l6.235-1.634a11.94 11.94 0 005.71 1.454h.005c6.585 0 11.946-5.359 11.949-11.943a11.874 11.874 0 00-3.379-8.428" />
              </svg>
              <span className="text-[17px] border-b border-white/35 pb-0.5">+242 05 517 92 30</span>
            </a>
            <p className="m-0 mt-2 text-sm text-[#C9A8C9]">Du lundi au vendredi, 8h – 17h</p>
          </div>

          <div className=" p-8 ">
            <h2 className="font-mono text-xs text-[#E8A33D]  tracking-widest block mb-3 font-normal">
              Courriel &amp; Web
            </h2>
            <a href="mailto:hhonvo@2hmfinance.com" className="flex items-center gap-2 w-fit text-white hover:underline mb-2">
              <Mail className="w-5 h-5 shrink-0" />
              <span className="text-[17px]">hhonvo@2hmfinance.com</span>
            </a>
            <Link to="/" className="flex items-center gap-2 w-fit text-[#E8A33D] hover:underline">
              <Globe className="w-5 h-5 shrink-0" />
              <span className="text-[17px]">www.2hmfinance.com</span>
            </Link>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="Voir 2HM Finance sur LinkedIn" className="mt-4 inline-flex items-center gap-2 text-[#EAD8EA] hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="text-sm font-mono uppercase tracking-wide">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* INTERACTIVE FORM */}
        <div className="mt-12 bg-white border border-gray-200 p-8 md:p-10 rounded-md">
          <h2 className="font-mono text-xs text-[#E8A33D]  tracking-widest block mb-6 font-semibold">
            Formulaire de contact
          </h2>

          {submitted && (
            <div className="mb-6">
              <Toast
                type="success"
                message="Demande envoyée. Nous revenons vers vous sous 48 heures ouvrées."
                onClose={() => setSubmitted(false)}
              />
            </div>
          )}

          {error && (
            <div className="mb-6">
              <Toast
                type="error"
                message={error}
                onClose={() => setError(null)}
              />
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono  text-gray-700 mb-2">
                  Nom et prénom <span className="text-[#E8A33D]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom complet"
                  className="w-full bg-gray-50 border border-gray-300 rounded-[2px] px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#E8A33D] focus:ring-1 focus:ring-[#E8A33D]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono  text-gray-700 mb-2">
                  Société <span className="text-[#E8A33D]">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Nom de votre entreprise"
                  className="w-full bg-gray-50 border border-gray-300 rounded-[2px] px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#E8A33D] focus:ring-1 focus:ring-[#E8A33D]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-mono  text-gray-700 mb-2">
                  Fonction
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  placeholder="Ex: Directeur Financier"
                  className="w-full bg-gray-50 border border-gray-300 rounded-[2px] px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#E8A33D] focus:ring-1 focus:ring-[#E8A33D]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono  text-gray-700 mb-2">
                  Adresse email professionnelle <span className="text-[#E8A33D]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="nom@entreprise.com"
                  className="w-full bg-gray-50 border border-gray-300 rounded-[2px] px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#E8A33D] focus:ring-1 focus:ring-[#E8A33D]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono  text-gray-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+242..."
                  className="w-full bg-gray-50 border border-gray-300 rounded-[2px] px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#E8A33D] focus:ring-1 focus:ring-[#E8A33D]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono  text-gray-700 mb-2">
                Objet de la demande
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-300 rounded-[2px] px-4 py-3 text-gray-900 focus:outline-none focus:border-[#E8A33D] focus:ring-1 focus:ring-[#E8A33D]"
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
              <label className="block text-xs font-mono  text-gray-700 mb-2">
                Votre message <span className="text-[#E8A33D]">*</span>
              </label>
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Décrivez votre besoin ou votre situation..."
                className="w-full bg-gray-50 border border-gray-300 rounded-[2px] px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#E8A33D] focus:ring-1 focus:ring-[#E8A33D]"
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

              <label
                htmlFor="consent"
                className="text-xs text-gray-600 leading-relaxed cursor-pointer"
              >
                J'accepte que les informations saisies soient traitées par 2HM.FINANCE
                dans le cadre de ma demande de contact et de la relation commerciale
                qui peut en découler.
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
        </div>

      </div>
    </div>
  );
}