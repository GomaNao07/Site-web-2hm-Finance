import React, { useState, useEffect } from 'react';


/**
 * @typedef {Object} ImageSlotProps
 * @property {string} [refCode] - Code de référence affiché en haut à gauche (ex: "REF-01").
 * @property {React.ReactNode} [brief] - Texte explicatif ou composant affiché en bas de la carte.
 * @property {string} [heightClass="min-h-[230px]"] - Classe CSS Tailwind définissant la hauteur minimale du composant.
 * @property {string} [imageSrc] - URL d'une image unique (alternative à `url` et `images`).
 * @property {string | string[]} [url] - URL d'une image unique ou tableau d'URLs pour le diaporama.
 * @property {string[]} [images] - Tableau d'URLs d'images pour le diaporama (prioritaire).
 * @property {number} [interval=4000] - Intervalle de défilement automatique des images en millisecondes.
 */

/**
 * Composant de carte avec diaporama d'images en arrière-plan et filtre coloré.
 * 
 * @param {ImageSlotProps} props - Les propriétés du composant.
 */

export default function ImageSlot({
  refCode,
  brief,
  heightClass = "min-h-[230px]",
  imageSrc,
  url,
  images,
  interval = 4000
}) {
  // Support single image or array of images passed via images, url, or imageSrc
  const imageList = Array.isArray(images)
    ? images
    : (Array.isArray(url) ? url : (imageSrc || url ? [imageSrc || url] : []));

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (imageList.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, interval);

    return () => clearInterval(timer);
  }, [imageList.length, interval]);

  return (
    <div
      className={`relative border border-[#862586]/45 bg-[#3C1240] ${heightClass} flex flex-col justify-end p-[22px] gap-2 rounded-[2px] overflow-hidden group`}
    >
      {/* Background Images for Slideshow */}
      {imageList.length > 0 && (
        imageList.map((img, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
            style={{
              backgroundImage: `url(${img})`,
              opacity: index === currentIndex ? 1 : 0,
            }}
          />
        ))
      )}

      {/* Bichromie overlay gradient */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none transition-opacity duration-300"
        style={{
          background: 'linear-gradient(150deg, rgba(134,37,134,0.2), rgba(26,4,28,0.6))',
          mixBlendMode: 'multiply'
        }}
      />

      {/* Header: Ref Code Tag & Slideshow Indicators */}
      <div className="absolute top-[18px] left-[22px] right-[22px] z-[3] flex items-center justify-between pointer-events-none">
        {refCode && (
          <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#E8A33D]">
            {refCode}
          </span>
        )}

        {/* Dots for slideshow */}
        {imageList.length > 1 && (
          <div className="flex items-center gap-1.5 pointer-events-auto">
            {imageList.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Aller à la diapositive ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${index === currentIndex
                  ? 'w-5 bg-[#E8A33D]'
                  : 'w-1.5 bg-white/40 hover:bg-white/70'
                  }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Brief / Details */}
      {brief && (
        <p className="font-corps text-[15px] leading-[1.45] text-[#EBD7EB] font-light m-0 relative z-[3]">
          {brief}
        </p>
      )}
    </div>
  );
}
