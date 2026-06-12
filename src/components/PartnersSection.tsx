"use client";

import { useEffect, useRef, useState } from "react";

const partnerCards = [
  {
    name: "ERA Immobilier",
    type: "Réseau National",
    desc: "Premier réseau immobilier mondial en franchise, présent dans toute la France.",
    icon: "🏢",
    color: "#DC2626",
    region: "National",
  },
  {
    name: "BNP Paribas Immobilier",
    type: "Banque & Immobilier",
    desc: "Leader du marché immobilier d'entreprise et résidentiel en France.",
    icon: "🏦",
    color: "#059669",
    region: "National",
  },
  {
    name: "Groupe National Immobilier",
    type: "Réseau National",
    desc: "Réseau d'agences immobilières indépendantes à l'échelle nationale.",
    icon: "🏗️",
    color: "#2563EB",
    region: "National",
  },
  {
    name: "Arthurimmo.com",
    type: "PropTech & Réseau",
    desc: "Réseau digital d'agents immobiliers indépendants.",
    icon: "🌐",
    color: "#7C3AED",
    region: "National",
  },
  {
    name: "Côté Particuliers",
    type: "Réseau Régional",
    desc: "Réseau spécialisé dans la transaction immobilière entre particuliers.",
    icon: "🏠",
    color: "#D97706",
    region: "National",
  },
  {
    name: "La Maison de l'Investisseur",
    type: "Gestion Patrimoniale",
    desc: "Conseil en investissement immobilier et gestion de patrimoine.",
    icon: "💼",
    color: "#0891B2",
    region: "National",
  },
  {
    name: "Cyrus Conseil",
    type: "Conseil en Investissement",
    desc: "Cabinet de conseil en gestion de patrimoine indépendant de référence.",
    icon: "📊",
    color: "#BE185D",
    region: "National",
  },
];

const testimonials = [
  {
    quote: "Locagestion nous a permis d'élargir notre offre sans investissement structurel. Nos clients propriétaires sont ravis et nos revenus récurrents ont augmenté de 35%.",
    name: "Sophie M.",
    role: "Directrice d'agence ERA",
    location: "Lyon",
    avatar: "SM",
    rating: 5,
  },
  {
    quote: "Fini les nuits blanches à gérer les impayés ! Depuis que j'ai confié mes 3 appartements à Locagestion, je perçois mes loyers à date fixe chaque mois. Excellent service.",
    name: "Pierre L.",
    role: "Propriétaire bailleur",
    location: "Toulouse",
    avatar: "PL",
    rating: 5,
  },
  {
    quote: "La qualité des outils digitaux est impressionnante. Mes clients accèdent à leur espace en temps réel, les documents sont signés électroniquement. C'est du niveau PropTech.",
    name: "Jean-Marc D.",
    role: "CGP – Conseiller en Gestion de Patrimoine",
    location: "Paris",
    avatar: "JD",
    rating: 5,
  },
  {
    quote: "Partenaire depuis 8 ans. La garantie de propriété exclusive de mes clients est absolue. Locagestion ne fait jamais de concurrence sur la location ou la vente. Parfait.",
    name: "Catherine R.",
    role: "Gérante d'agence immobilière",
    location: "Bordeaux",
    avatar: "CR",
    rating: 5,
  },
];

function PartnerCard({ partner, index }: { partner: typeof partnerCards[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

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
      className={`bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="flex items-start gap-3 mb-3">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
          style={{ background: `${partner.color}15` }}
        >
          {partner.icon}
        </div>
        <div>
          <p className="font-bold text-gray-900 text-sm">{partner.name}</p>
          <p className="text-xs text-gray-500">{partner.type}</p>
        </div>
      </div>
      <p className="text-xs text-gray-600 leading-relaxed">{partner.desc}</p>
      <div className="mt-3 flex items-center gap-2">
        <span
          className="text-xs font-semibold px-2 py-0.5 rounded-full"
          style={{ color: partner.color, background: `${partner.color}15` }}
        >
          {partner.region}
        </span>
      </div>
    </div>
  );
}

export default function PartnersSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[activeTestimonial];

  return (
    <section id="partenaires" className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-100 rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 bg-purple-500 rounded-full" />
            <span className="text-purple-700 text-xs font-semibold uppercase tracking-wider">Un Réseau de Confiance</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Nos <span className="gold-text">Partenaires</span> Nationaux
          </h2>
          <div className="section-divider mx-auto mb-4" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Plus de 2000 agences partenaires en France Métropolitaine, Corse et Outre-Mer. Des partenariats d'envergure nationale établis.
          </p>
        </div>

        {/* Partner cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {partnerCards.map((partner, i) => (
            <PartnerCard key={i} partner={partner} index={i} />
          ))}

          {/* Special card */}
          <div className="bg-gradient-to-br from-[#0f2547] to-[#1a3c6e] rounded-2xl p-5 text-white flex flex-col justify-between">
            <div>
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="font-black text-lg mb-2">+2000 Agences</h3>
              <p className="text-white/70 text-xs leading-relaxed">
                Un réseau national couvrant toute la France Métropolitaine, la Corse et les Outre-Mers.
              </p>
            </div>
            <button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-4 btn-primary py-2.5 rounded-xl text-sm font-bold text-center block"
            >
              Rejoindre le réseau
            </button>
          </div>
        </div>

        {/* Full-width partner image */}
        <div className="relative rounded-2xl overflow-hidden mb-16 h-64">
          <img src="/images/partners-bg.jpg" alt="Réseau national LOCAGESTION" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f2547]/90 to-[#0f2547]/40 flex items-center">
            <div className="px-10 max-w-lg">
              <h3 className="text-3xl font-black text-white mb-3">
                Présents <span className="gold-text">partout en France</span>
              </h3>
              <p className="text-white/80 text-sm mb-5">
                France Métropolitaine, Corse, DOM-TOM — Notre réseau couvre l'intégralité du territoire national.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    const el = document.querySelector("#contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="btn-primary px-5 py-2.5 rounded-full text-sm font-bold"
                >
                  Trouver un partenaire
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-black text-center text-gray-900 mb-10">
            Ce que disent nos <span className="gold-text">clients & partenaires</span>
          </h3>
          <div className="relative">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              {/* Main testimonial */}
              <div className="bg-gradient-to-br from-[#0f2547] to-[#1a3c6e] rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 text-[120px] text-white/5 font-serif leading-none">"</div>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-white/90 text-base leading-relaxed mb-6 relative z-10">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center font-black text-[#0f2547]">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-white">{t.name}</p>
                    <p className="text-white/60 text-sm">{t.role}</p>
                    <p className="text-yellow-400 text-xs">📍 {t.location}</p>
                  </div>
                </div>
              </div>

              {/* Other testimonials */}
              <div className="space-y-4">
                {testimonials.filter((_, i) => i !== activeTestimonial).slice(0, 3).map((t2, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => {
                      const idx = testimonials.indexOf(t2);
                      setActiveTestimonial(idx);
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-600 text-xs flex-shrink-0">
                        {t2.avatar}
                      </div>
                      <div>
                        <div className="flex items-center gap-1 mb-1">
                          {Array.from({ length: t2.rating }).map((_, j) => (
                            <span key={j} className="text-yellow-400 text-sm">★</span>
                          ))}
                        </div>
                        <p className="text-gray-700 text-sm leading-snug line-clamp-2">"{t2.quote}"</p>
                        <p className="text-gray-500 text-xs mt-1">{t2.name} · {t2.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial navigation */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`rounded-full transition-all ${i === activeTestimonial ? "w-8 h-2 bg-yellow-400" : "w-2 h-2 bg-gray-300"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
