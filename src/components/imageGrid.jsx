import React, { useState } from 'react';

const ImageGrid = ({ images = [] }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!images || images.length === 0) {
    return (
      <div className="text-center p-8 text-gray-500">
        Aucune image à afficher.
      </div>
    );
  }

  return (
    <div className="container mx-auto ">
      {/* Grille d'images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="group relative aspect-square overflow-hidden rounded-md bg-gray-100 hover:shadow-md cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
              loading="lazy"
              onError={(e) => {
                // Image de secours si le lien est cassé
                e.target.src = 'https://via.placeholder.com/400?text=Erreur+Chargement';
              }}
            />
          </div>
        ))}
      </div>

      {/* Modale d'agrandissement (Lightbox) */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-lg">
            {/* Bouton Fermer */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 focus:outline-none"
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Vue agrandie"
              className="max-h-[85vh] max-w-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGrid;