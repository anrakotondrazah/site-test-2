import LogoSVG from "./LogoSVG";

const footerLinks = {
  Services: [
    "Gestion Locative",
    "Mise en Location",
    "Agrément & Solvabilité",
    "Comptabilité Immobilière",
    "Maintenance Technique",
    "Recouvrement & Contentieux",
  ],
  "Propriétaires Bailleurs": [
    "Pourquoi déléguer ?",
    "Nos garanties",
    "GLI – Loyers Impayés",
    "Espace propriétaire",
    "Audit gratuit",
    "Estimation du loyer",
  ],
  "Partenaires B2B": [
    "Agences immobilières",
    "Conseillers en Patrimoine",
    "Devenir partenaire",
    "Notre réseau",
    "Outils digitaux",
    "Contact partenariat",
  ],
  "Innovation & IA": [
    "Sophie – Assistante IA",
    "Signature électronique",
    "Mandats automatisés",
    "Espace en ligne",
    "Application mobile",
    "API & intégrations",
  ],
  "À Propos": [
    "Notre histoire depuis 2004",
    "MBM Immobilier",
    "Nos certifications",
    "Garantie GALIAN",
    "ANACAFI & ORIAS",
    "Mentions légales",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#060d1f] text-white">
      {/* Top footer */}
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <LogoSVG variant="white" size="md" />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Votre partenaire de gestion locative externalisée depuis 2004. 
              N°1 en France avec +2000 agences partenaires.
            </p>
            <div className="space-y-2 text-xs text-white/50">
              <p className="flex items-center gap-2">
                <span>📞</span> 05 61 62 23 45
              </p>
              <p className="flex items-center gap-2">
                <span>✉️</span> contact@locagestion.com
              </p>
              <p className="flex items-center gap-2">
                <span>📍</span> Toulouse, France
              </p>
            </div>

            {/* Social icons */}
            <div className="flex gap-3 mt-5">
              {["LinkedIn", "Facebook", "Twitter", "YouTube"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-xs font-bold"
                  title={s}
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-bold text-sm mb-4 pb-2 border-b border-white/10">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/50 hover:text-yellow-400 text-xs transition-colors leading-relaxed"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications banner */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 py-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-4">
              {[
                { label: "Garantie Financière", sub: "GALIAN · Paris", icon: "🏛️" },
                { label: "Membre ANACAFI", sub: "Immo Professionnel", icon: "🏆" },
                { label: "Enregistré ORIAS", sub: "Courtier Certifié", icon: "✅" },
                { label: "Carte Pro CPI", sub: "3101 2018 000 036 886", icon: "📋" },
              ].map((cert, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                  <span className="text-lg">{cert.icon}</span>
                  <div>
                    <p className="text-white text-xs font-semibold">{cert.label}</p>
                    <p className="text-white/40 text-xs">{cert.sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="n1-badge px-4 py-2 rounded-full">
              <span className="text-[#0f2547] font-black text-sm">★ N°1 EN FRANCE ★</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
            <div className="text-center md:text-left">
              <p>© {new Date().getFullYear()} SAS MBM Immobilier – Enseigne LOCAGESTION · Capital 100 000 € · RCS B 404 821 373</p>
              <p className="mt-1">Siège : Domaine d'Avranches, 40 route d'Albi, CS 92333, 31021 Toulouse Cedex 2</p>
            </div>
            <div className="flex flex-wrap gap-4">
              {["Mentions légales", "Politique de confidentialité", "RGPD", "CGU", "Plan du site"].map((l) => (
                <a key={l} href="#" className="hover:text-yellow-400 transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
