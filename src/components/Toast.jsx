import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export default function Toast({ type = 'success', message, onClose }) {
  if (!message) return null;

  // Utilisation de useEffect pour gérer l'effacement automatique
  useEffect(() => {
    if (!onClose) return;

    const timer = setTimeout(() => {
      onClose(); // Appel de la fonction reçue en prop
    }, 3000); // Temps réglable (ex: 3000ms = 3s)

    // Nettoyage du timer si le composant se démonte
    return () => clearTimeout(timer);
  }, [message, onClose]);

  return (
    <div className={`fixed backdrop-blur-3xl shadow-xl bottom-15 right-15 p-4 rounded-[2px] font-mono text-sm flex items-center justify-between gap-4 animate-fadeIn ${type === 'success'
        ? "bg-emerald-500/15 border border-emerald-500/40 text-emerald-200"
        : "bg-rose-500/15 border border-rose-500/40 text-rose-200"
      }`}>
      <div className="flex items-center gap-3">
        {type === 'success' ? (
          <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
        ) : (
          <AlertCircle className="w-6 h-6 text-rose-400 flex-shrink-0" />
        )}
        <span>{message}</span>
      </div>

      {onClose && (
        <button
          onClick={onClose}
          className={`p-1 transition-colors cursor-pointer ${type === 'success' ? "text-emerald-400 hover:text-emerald-100" : "text-rose-400 hover:text-rose-100"
            }`}
          aria-label="Fermer"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}