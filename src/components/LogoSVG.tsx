"use client";

interface LogoSVGProps {
  variant?: "white" | "dark" | "color";
  size?: "sm" | "md" | "lg";
}

export default function LogoSVG({ variant = "white", size = "md" }: LogoSVGProps) {
  const sizes = { sm: { w: 160, h: 48 }, md: { w: 220, h: 64 }, lg: { w: 300, h: 88 } };
  const { w, h } = sizes[size];

  const mainColor = variant === "white" ? "#FFFFFF" : variant === "dark" ? "#0f2547" : "#1a3c6e";
  const accentColor = variant === "white" ? "#e8c97a" : "#c9a84c";
  const textColor = variant === "white" ? "#FFFFFF" : "#0f2547";
  const sloganColor = variant === "white" ? "rgba(255,255,255,0.85)" : "rgba(15,37,71,0.75)";

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 300 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="logo-petals"
    >
      {/* ─── PICTOGRAMME : 4 pétales / gouttes fluides ─── */}
      {/* Point de convergence base en bas-droite ~(62,66) */}

      {/* Pétale 1 – Supérieur droit (le plus grand) ~45° vers haut-droite */}
      <path
        d="M62 66 C58 58, 52 44, 68 28 C80 16, 92 22, 88 38 C84 52, 72 62, 62 66 Z"
        fill={mainColor}
        opacity="0.95"
      />
      {/* Pétale 2 – Central vertical légèrement courbé gauche */}
      <path
        d="M62 66 C56 58, 46 46, 44 28 C42 14, 52 8, 60 18 C68 28, 68 52, 62 66 Z"
        fill={mainColor}
        opacity="0.85"
      />
      {/* Pétale 3 – Inférieur moyen ~45° vers bas-gauche */}
      <path
        d="M62 66 C54 64, 38 62, 28 52 C18 42, 22 32, 34 34 C48 36, 58 56, 62 66 Z"
        fill={mainColor}
        opacity="0.75"
      />
      {/* Pétale 4 – Inférieur bas : petite larme horizontale vers la gauche */}
      <path
        d="M62 66 C56 68, 42 70, 32 68 C22 66, 20 60, 30 60 C42 60, 56 64, 62 66 Z"
        fill={mainColor}
        opacity="0.60"
      />

      {/* Ligne courbe dynamique de convergence (base des pétales) */}
      <path
        d="M30 68 Q46 72 62 66"
        stroke={accentColor}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.8"
      />

      {/* ─── TEXTE PRINCIPAL : LOCAGESTION ─── */}
      {/*
        Police : sans-serif géométrique Extra Bold, majuscules compactes, tracking serré.
        Le "O" est un squircle (carré aux angles très arrondis).
        Le "A" a une barre positionnée très bas.
      */}
      <text
        x="100"
        y="52"
        fontFamily="'Inter', 'Arial Black', sans-serif"
        fontWeight="900"
        fontSize="30"
        letterSpacing="-0.5"
        fill={textColor}
        dominantBaseline="auto"
        textAnchor="start"
        style={{ fontFeatureSettings: '"ss01" 1' }}
      >
        LOCAGESTION
      </text>

      {/* ─── SLOGAN : LA SOLUTION GESTION ─── */}
      {/*
        Commence sous le "C" de LOCAGESTION → x≈122, s'arrête sous "I" → environ fin du texte
        Police : identique mais Regular/Light, tracking très large (letter-spacing maximal)
      */}
      <text
        x="104"
        y="68"
        fontFamily="'Inter', Arial, sans-serif"
        fontWeight="300"
        fontSize="8.5"
        letterSpacing="4.5"
        fill={sloganColor}
        dominantBaseline="auto"
        textAnchor="start"
      >
        LA SOLUTION GESTION
      </text>
    </svg>
  );
}
