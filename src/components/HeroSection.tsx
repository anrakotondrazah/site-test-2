"use client";

import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    id: 0,
    image: "/images/hero-bg.jpg",
    badge: "N°1 en France · Depuis 2004",
    title: "POURQUOI GÉRER QUAND VOUS POUVEZ",
    titleAccent: "DÉLÉGUER ?",
    subtitle: "Nous sommes votre service de gestion immobilière nouvelle génération.",
    desc: "Confiez votre bien à des experts et maximisez votre rentabilité sans contraintes administratives.",
    cta1: "Demander un audit gratuit",
    cta2: "Découvrir nos services",
    tag: "Propriétaires Bailleurs",
  },
  {
    id: 1,
    image: "/images/slide-2.jpg",
    badge: "+2000 Agences Partenaires",
    title: "UNE OPPORTUNITÉ DE REVENUS",
    titleAccent: "RÉCURRENTS",
    subtitle: "Partenaires Agences & CGP — Développez vos revenus sans carte G.",
    desc: "Partagez les honoraires de gestion tout en conservant la pleine propriété de vos clients.",
    cta1: "Devenir Partenaire",
    cta2: "En savoir plus",
    tag: "Agences & CGP",
  },
  {
    id: 2,
    image: "/images/slide-3.jpg",
    badge: "Gestion 100% Digitale",
    title: "LA GESTION LOCATIVE",
    titleAccent: "NOUVELLE GÉNÉRATION",
    subtitle: "Mandats automatisés, baux numériques, signature électronique certifiée.",
    desc: "Espaces en ligne synchronisés en temps réel pour propriétaires et partenaires.",
    cta1: "Voir la démo",
    cta2: "Nos outils digitaux",
    tag: "PropTech & Innovation",
  },
  {
    id: 3,
    image: "/images/slide-4.jpg",
    badge: "Dashboard Temps Réel",
    title: "PILOTEZ VOS REVENUS",
    titleAccent: "EN TEMPS RÉEL",
    subtitle: "Un tableau de bord complet pour suivre vos biens, loyers et documents.",
    desc: "Statistiques détaillées, quittances automatiques, aide fiscale intégrée.",
    cta1: "Découvrir le dashboard",
    cta2: "Demander une démo",
    tag: "Technologie & Analytics",
  },
  {
    id: 4,
    image: "/images/slide-5.jpg",
    badge: "Toulouse & Toute la France",
    title: "PRÉSENTS PARTOUT",
    titleAccent: "EN FRANCE",
    subtitle: "France Métropolitaine, Corse et Outre-Mer — Un réseau national à votre service.",
    desc: "Garantie Financière GALIAN · Membre ANACAFI Immo · Enregistré ORIAS.",
    cta1: "Trouver un partenaire",
    cta2: "Notre réseau",
    tag: "Réseau National",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);

  const goTo = useCallback(
    (idx: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setProgress(0);
      setTimeout(() => {
        setCurrent(idx);
        setIsTransitioning(false);
      }, 600);
    },
    [isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          next();
          return 0;
        }
        return p + 100 / 60;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [next]);

  const slide = slides[current];

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative w-full h-screen min-h-[640px] overflow-hidden">
      {/* Background slides */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            backgroundImage: `url(${s.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}

      {/* Overlay gradient */}
      <div className="absolute inset-0 hero-overlay z-10" />

      {/* Decorative geometric shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full border border-white/10 z-10 hidden lg:block" />
      <div className="absolute top-32 right-32 w-40 h-40 rounded-full border border-yellow-400/20 z-10 hidden lg:block" />
      <div className="absolute bottom-32 left-10 w-32 h-32 rounded-full bg-yellow-400/5 z-10 hidden lg:block" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full grid lg:grid-cols-2 gap-10 items-center pt-24 md:pt-20">
          {/* Left column */}
          <div
            key={current}
            className={`text-white transition-all duration-700 ${
              isTransitioning ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-yellow-400/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              <span className="text-yellow-300 text-xs font-semibold tracking-wider uppercase">
                {slide.badge}
              </span>
            </div>

            {/* Main title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-3">
              {slide.title}{" "}
              <span className="gold-text">{slide.titleAccent}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/90 font-semibold mb-3">
              {slide.subtitle}
            </p>

            {/* Description */}
            <p className="text-white/70 text-sm md:text-base mb-8 max-w-lg">
              {slide.desc}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <button
                onClick={() => handleNav("#contact")}
                className="btn-primary px-7 py-3.5 rounded-full text-sm font-bold flex items-center gap-2 group"
              >
                {slide.cta1}
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button
                onClick={() => handleNav("#services")}
                className="btn-secondary px-7 py-3.5 rounded-full text-sm"
              >
                {slide.cta2}
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-5 text-xs text-white/60">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Garantie Financière GALIAN</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>+2000 Agences Partenaires</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Depuis 2004 – 20 ans d'expertise</span>
              </div>
            </div>
          </div>

          {/* Right column – Dashboard mockup */}
          <div
            className={`hidden lg:flex justify-center items-center transition-all duration-700 ${
              isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          >
            <DashboardMockup />
          </div>
        </div>
      </div>

      {/* Slide navigation dots + progress */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="group relative"
            aria-label={`Slide ${i + 1}`}
          >
            <div
              className={`h-1 rounded-full transition-all duration-300 ${
                i === current ? "bg-yellow-400 w-10" : "bg-white/40 w-6"
              }`}
            >
              {i === current && (
                <div
                  className="h-full bg-yellow-300 rounded-full transition-none"
                  style={{ width: `${progress}%` }}
                />
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Slide arrows */}
      <button
        onClick={() => goTo((current - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => goTo((current + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-10 z-30 flex-col items-center gap-2 text-white/50 text-xs hidden lg:flex">
        <span style={{ writingMode: "vertical-rl" }}>Défiler pour découvrir</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="relative w-[440px] h-[340px] animate-float">
      {/* Main dashboard card */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl p-5 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-white/60 text-xs">Tableau de bord</p>
            <p className="text-white font-bold text-sm">Espace Propriétaire</p>
          </div>
          <div className="flex gap-1">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { label: "Loyers perçus", value: "2 850 €", color: "#22c55e", icon: "💰" },
            { label: "Taux occupation", value: "98%", color: "#c9a84c", icon: "🏠" },
            { label: "Dossiers actifs", value: "3", color: "#3b82f6", icon: "📋" },
          ].map((stat, i) => (
            <div key={i} className="bg-white/10 rounded-xl p-3">
              <div className="text-lg mb-0.5">{stat.icon}</div>
              <p className="font-bold text-sm" style={{ color: stat.color }}>{stat.value}</p>
              <p className="text-white/50 text-xs leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Chart area */}
        <div className="bg-white/5 rounded-xl p-3 mb-3">
          <p className="text-white/60 text-xs mb-2">Revenus locatifs – 6 derniers mois</p>
          <div className="flex items-end gap-1.5 h-16">
            {[65, 80, 70, 90, 85, 98].map((h, i) => (
              <div key={i} className="flex-1 rounded-t-sm" style={{
                height: `${h}%`,
                background: i === 5
                  ? "linear-gradient(180deg, #c9a84c, #e8c97a)"
                  : "rgba(255,255,255,0.2)",
              }} />
            ))}
          </div>
        </div>

        {/* Recent notifications */}
        <div className="space-y-2">
          {[
            { text: "Loyer reçu – Apt. B, Toulouse", time: "Il y a 2h", dot: "bg-green-400" },
            { text: "Quittance envoyée – Locataire Martin", time: "Il y a 5h", dot: "bg-blue-400" },
          ].map((n, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${n.dot}`} />
              <p className="text-white/70 text-xs flex-1">{n.text}</p>
              <p className="text-white/40 text-xs">{n.time}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating badge top-right */}
      <div className="absolute -top-4 -right-4 bg-yellow-400 text-[#0f2547] rounded-xl px-3 py-2 shadow-lg">
        <p className="text-xs font-black">N°1</p>
        <p className="text-xs font-bold leading-tight">en France</p>
      </div>

      {/* Floating notification bottom-left */}
      <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-xl max-w-[160px]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-sm">✓</div>
          <div>
            <p className="text-xs font-bold text-gray-800">Loyer versé</p>
            <p className="text-xs text-gray-500">2 850 € • Aujourd'hui</p>
          </div>
        </div>
      </div>
    </div>
  );
}
