import React from 'react';

export default function ImageSlot({ refCode, brief, heightClass = "min-h-[230px]", imageSrc }) {
  return (
    <div 
      className={`relative border border-[#862586]/45 bg-[#3C1240] bg-cover bg-center ${heightClass} flex flex-col justify-end p-[22px] gap-2 rounded-[2px] overflow-hidden group`}
      style={imageSrc ? { backgroundImage: `url(${imageSrc})` } : {}}
    >
      {/* Bichromie overlay gradient */}
      <div 
        className="absolute inset-0 z-[1] pointer-events-none transition-opacity duration-300"
        style={{
          background: 'linear-gradient(150deg, rgba(134,37,134,0.62), rgba(26,4,28,0.86))',
          mixBlendMode: 'multiply'
        }}
      />

      {/* Ref Code Tag */}
      <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#E8A33D] absolute top-[18px] left-[22px] z-[3]">
        {refCode}
      </span>

      {/* Brief / Details */}
      {brief && (
        <p className="font-corps text-[15px] leading-[1.45] text-[#EBD7EB] font-light m-0 relative z-[3]">
          {brief}
        </p>
      )}
    </div>
  );
}
