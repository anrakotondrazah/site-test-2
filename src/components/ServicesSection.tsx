"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: "📋",
    emoji: "🏠",
    title: "Gestion Locative & Suivi Administratif",
    desc: "Prise en charge complète de la gestion administrative de vos biens : rédaction des baux, état des lieux, gestion des entrées/sorties, correspondances locataires.",
    features: ["Rédaction & signature des baux", "États des lieux d'entrée/sortie", "Gestion des correspondances", "Archivage numérique"],
    color: "#1a3c6e",
    bg: "bg-blue-50",
    image: "/images/services-bg.jpg",
  },
  {
    icon: "🔍",
    emoji: "✅",
    title: "Agrément & Solvabilité des Candidats",
    desc: "Étude rigoureuse des dossiers de candidature. Vérification approfondie de la solvabilité, score FNAIS, références et garanties.",
    features: ["Score FNAIS & vérification revenus", "Analyse des garanties", "Vérification de références", "Présélection des meilleurs dossiers"],
    color: "#c9a84c",
    bg: "bg-yellow-50",
    image: "/images/gestion-conseil.jpg",
  },
  {
    icon: "💰",
    emoji: "📊",
    title: "Comptabilité Immobilière",
    desc: "Reversement des loyers, édition des quittances, aide à la déclaration fiscale, comptes rendus de gestion mensuels et annuels.",
    features: ["Reversement mensuel des loyers", "Quittances automatisées", "Aide fiscale & déclaration 2044", "Comptes rendus de gestion"],
    color: "#22c55e",
    bg: "bg-green-50",
    image: "/images/slide-4.jpg",
  },
  {
    icon: "🔧",
    emoji: "⚙️",
    title: "Maintenance Technique & Sinistres",
    desc: "Coordination des interventions techniques : pannes, sinistres, entretien courant. Réseau de prestataires qualifiés. Suivi jusqu'à la résolution complète.",
    features: ["Réseau de prestataires agréés", "Gestion des sinistres assurance", "Suivi des travaux & devis", "Urgences 24h/24 & 7j/7"],
    color: "#ef4444",
    bg: "bg-red-50",
    image: "/images/hero-bg.jpg",
  },
  {
    icon: "⚖️",
    emoji: "🛡️",
    title: "Recouvrement & Contentieux Juridique",
    desc: "Pôle dédié au traitement des impayés et litiges locatifs. GLI (Garantie Loyers Impayés), protection juridique et procédures contentieuses.",
    features: ["GLI – Garantie Loyers Impayés", "Dégradations immobilières", "Protection juridique locative", "Procédures contentieuses"],
    color: "#8b5cf6",
    bg: "bg-purple-50",
    image: "/images/slide-2.jpg",
  },
  {
    icon: "🏙️",
    emoji: "📍",
    title: "Mise en Location Locale (Toulouse)",
    desc: "Service complet de mise en location sur le secteur Toulousain : annonces, visites, sélection des candidats, rédaction et signature des baux.",
    features: ["Diffusion multi-portails", "Visites accompagnées", "Sélection des locataires", "Rédaction bail & signature"],
    color: "#06b6d4",
    bg: "bg-cyan-50",
    image: "/images/slide-5.jpg",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`service-card bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm cursor-pointer transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative h-48 img-zoom overflow-hidden">
        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-3 left-3 text-3xl">{service.icon}</div>
        <div
          className="absolute bottom-3 right-3 w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-lg"
          style={{ background: service.color }}
        >
          {service.emoji}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-gray-900 text-base mb-2 leading-snug">{service.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.desc}</p>

        {/* Features */}
        <ul className="space-y-1.5">
          {service.features.map((f, i) => (
            <li key={i} className="flex items-center gap-2 text-xs text-gray-600">
              <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: service.color }}>
                <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              {f}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className={`mt-4 transition-all duration-300 ${hovered ? "opacity-100 max-h-10" : "opacity-0 max-h-0"} overflow-hidden`}>
          <button
            className="w-full py-2 rounded-xl text-white text-sm font-semibold transition-colors"
            style={{ background: service.color }}
          >
            En savoir plus →
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 bg-blue-600 rounded-full" />
            <span className="text-blue-700 text-xs font-semibold uppercase tracking-wider">Nos Pôles d'Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Nos <span className="gold-text">Services</span> Complets
          </h2>
          <div className="section-divider mx-auto mb-4" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            De la mise en location au recouvrement, en passant par la comptabilité et la maintenance technique — 
            une gestion intégrale pour une tranquillité d'esprit totale.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div className="mt-14 bg-gradient-to-r from-[#0f2547] to-[#1a3c6e] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white">
            <h3 className="text-2xl font-black mb-2">Une offre sur-mesure pour chaque profil</h3>
            <p className="text-white/70 text-sm">
              Propriétaire bailleur, Agence immobilière ou CGP — nous adaptons notre offre à vos besoins.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap">
              Demander un audit gratuit
            </a>
            <a href="#processus" className="btn-secondary px-6 py-3 rounded-full text-sm whitespace-nowrap">
              Voir le processus
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
