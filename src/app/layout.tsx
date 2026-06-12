import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "LOCAGESTION – La Solution Gestion | N°1 en France",
  description:
    "LOCAGESTION, votre partenaire de gestion locative externalisée depuis 2004. Plus de 2000 agences partenaires en France. Gestion administrative, juridique, comptable et technique de vos biens immobiliers.",
  keywords:
    "gestion locative, gestion immobilière, mandataire, propriétaire bailleur, agence partenaire, GLI, Toulouse, France",
  openGraph: {
    title: "LOCAGESTION – N°1 de la Gestion Locative en France",
    description:
      "Déléguez votre gestion locative à LOCAGESTION. Plus de 2000 agences partenaires en France depuis 2004.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
