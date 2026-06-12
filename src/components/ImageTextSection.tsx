"use client";

import { useEffect, useRef, useState } from "react";

export default function ImageTextSection() {
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
    <section className="py-20 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Block 1 – Image Left, Text Right */}
        <div className={`grid lg:grid-cols-2 gap-12 items-center mb-24 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="relative rounded-2xl overflow-hidden h-[420px] img-zoom shadow-2xl">
            <img src="/images/gestion-conseil.jpg" alt="Conseil en gestion immobilière" className="w-full h-full object-cover" />
            {/* Floating badge */}
            <div className="absolute top-5 left-5 bg-white rounded-xl shadow-lg px-4 py-3">
              <p className="text-xs font-bold text-gray-900">💼 Expertise & Conseil</p>
              <p className="text-xs text-gray-500">Depuis 1996</p>
            </div>
            {/* Floating stat */}
            <div className="absolute bottom-5 right-5 bg-[#1a3c6e] text-white rounded-xl px-4 py-3 shadow-lg">
              <p className="text-2xl font-black">+2000</p>
              <p className="text-xs text-white/80">Agences partenaires</p>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
              <span className="w-2 h-2 bg-blue-600 rounded-full" />
              <span className="text-blue-700 text-xs font-semibold uppercase tracking-wider">Propriétaires Bailleurs</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Maximisez vos revenus<br />
              <span className="gold-text">sans la contrainte</span>
            </h2>
            <div className="section-divider mb-5" />
            <p className="text-gray-600 leading-relaxed mb-5">
              Propriétaire d'un appartement, d'une maison ou d'un immeuble de rapport ? 
              LOCAGESTION prend en charge l'intégralité de la gestion locative à votre place.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              De la recherche du locataire à la comptabilité, en passant par les sinistres et le recouvrement, 
              nos experts gèrent tout. Vous percevez vos loyers à date fixe, chaque mois.
            </p>

            {/* Key points */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { icon: "🛡️", text: "GLI incluse" },
                { icon: "📅", text: "Loyers à date fixe" },
                { icon: "📊", text: "Bilan annuel & fiscal" },
                { icon: "⚡", text: "Réponse sous 24h" },
              ].map((p, i) => (
                <div key={i} className="flex items-center gap-2 bg-gray-50 rounded-xl p-3">
                  <span className="text-lg">{p.icon}</span>
                  <span className="text-sm font-semibold text-gray-700">{p.text}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary px-7 py-3.5 rounded-full text-sm font-bold inline-flex items-center gap-2"
            >
              Demander un audit gratuit
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Block 2 – Text Left, Image Right */}
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-full px-4 py-1.5 mb-4">
              <span className="w-2 h-2 bg-yellow-500 rounded-full" />
              <span className="text-yellow-700 text-xs font-semibold uppercase tracking-wider">Agences & CGP – Partenaires B2B</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Développez vos revenus<br />
              <span className="gold-text">sans carte G</span>
            </h2>
            <div className="section-divider mb-5" />
            <p className="text-gray-600 leading-relaxed mb-5">
              Vous êtes une agence immobilière sans carte G, ou un Conseiller en Gestion de Patrimoine ? 
              Notre offre partenaire vous permet de proposer la gestion locative à vos clients et de percevoir des honoraires récurrents.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              <strong>Propriété exclusive garantie :</strong> Locagestion gère le locataire mais n'intervient 
              <em> jamais</em> sur la revente ou la relocation, systématiquement renvoyées vers vous.
            </p>

            {/* Pillars highlight */}
            <div className="space-y-3 mb-6">
              {[
                { icon: "💸", title: "Rémunération récurrente", desc: "Partage des honoraires de gestion dès le 1er mois" },
                { icon: "🔐", title: "Propriété client 100% garantie", desc: "Vous gardez vos clients. Toujours." },
                { icon: "🎯", title: "Zéro coût de structure", desc: "Pas de carte G, pas de logiciel, pas de personnel dédié" },
              ].map((p, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl p-3">
                  <span className="text-2xl">{p.icon}</span>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{p.title}</p>
                    <p className="text-gray-500 text-xs">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-[#c9a84c] text-[#0f2547] font-bold px-7 py-3.5 rounded-full text-sm hover:bg-[#b8962e] transition-colors shadow-lg"
            >
              Devenir Agence Partenaire
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="relative rounded-2xl overflow-hidden h-[420px] img-zoom shadow-2xl order-1 lg:order-2">
            <img src="/images/slide-2.jpg" alt="Agence partenaire LOCAGESTION" className="w-full h-full object-cover" />
            {/* Floating card */}
            <div className="absolute bottom-5 left-5 bg-white rounded-xl shadow-xl p-4 max-w-[220px]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-sm">💸</div>
                <p className="font-bold text-gray-900 text-sm">Revenus récurrents</p>
              </div>
              <p className="text-gray-500 text-xs">Honoraires partagés dès le 1er mois. Croissance mensuelle garantie.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
