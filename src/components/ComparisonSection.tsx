"use client";

import { useEffect, useRef, useState } from "react";

const criteria = [
  {
    label: "Gain de temps",
    icon: "⏱️",
    locagestion: { text: "Total – Zéro gestion de votre côté", status: "yes" },
    selfManage: { text: "Chronophage – Des heures par semaine", status: "no" },
    classical: { text: "Partiel – Encore des démarches", status: "partial" },
  },
  {
    label: "Sécurité Financière (GLI)",
    icon: "🛡️",
    locagestion: { text: "GLI + Dégradations + Protection Juridique", status: "yes" },
    selfManage: { text: "Aucune garantie – Risque total", status: "no" },
    classical: { text: "GLI optionnelle & payante", status: "partial" },
  },
  {
    label: "Rentabilité nette",
    icon: "📈",
    locagestion: { text: "Optimisée – Loyers reversés automatiquement", status: "yes" },
    selfManage: { text: "Variable – Risque d'erreurs & impayés", status: "partial" },
    classical: { text: "Réduite – Honoraires élevés", status: "no" },
  },
  {
    label: "Conformité Légale",
    icon: "⚖️",
    locagestion: { text: "Veille juridique permanente & mise à jour", status: "yes" },
    selfManage: { text: "À votre charge – Risque de non-conformité", status: "no" },
    classical: { text: "Partielle – Dépend de l'agence", status: "partial" },
  },
  {
    label: "Outils Digitaux",
    icon: "💻",
    locagestion: { text: "Espace en ligne, signature électronique, IA", status: "yes" },
    selfManage: { text: "Inexistant – Gestion papier/mail", status: "no" },
    classical: { text: "Limité – Portail basique", status: "partial" },
  },
  {
    label: "Sérénité d'esprit",
    icon: "😌",
    locagestion: { text: "Totale – Experts dédiés & réactifs 24/7", status: "yes" },
    selfManage: { text: "Inexistante – Stress permanent", status: "no" },
    classical: { text: "Limitée – Suivi irrégulier", status: "partial" },
  },
  {
    label: "Propriété du client (B2B)",
    icon: "🔐",
    locagestion: { text: "100% garantie – Renvoi systématique au partenaire", status: "yes" },
    selfManage: { text: "N/A", status: "partial" },
    classical: { text: "Risque de captation client", status: "no" },
  },
];

function StatusIcon({ status }: { status: string }) {
  if (status === "yes") return <span className="text-green-500 text-xl">✓</span>;
  if (status === "no") return <span className="text-red-500 text-xl">✗</span>;
  return <span className="text-yellow-500 text-xl">⚬</span>;
}

export default function ComparisonSection() {
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
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 bg-yellow-500 rounded-full" />
            <span className="text-yellow-700 text-xs font-semibold uppercase tracking-wider">L'avantage concurrentiel</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Pourquoi choisir <span className="gold-text">LOCAGESTION</span> ?
          </h2>
          <div className="section-divider mx-auto mb-4" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comparez les solutions et découvrez pourquoi +2000 agences et des milliers de propriétaires nous font confiance.
          </p>
        </div>

        {/* Comparison table */}
        <div
          ref={ref}
          className={`bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Table header */}
          <div className="grid grid-cols-4 bg-[#0f2547] text-white">
            <div className="p-5 font-semibold text-sm text-white/60">Critère</div>
            <div className="p-5 text-center">
              <div className="inline-flex items-center gap-2 bg-yellow-400/20 rounded-xl px-3 py-2">
                <span className="text-yellow-400 font-black text-sm">LOCAGESTION</span>
                <span className="badge bg-yellow-400 text-[#0f2547] text-xs">N°1</span>
              </div>
            </div>
            <div className="p-5 text-center">
              <span className="text-white/70 font-semibold text-sm">Gestion Personnelle</span>
            </div>
            <div className="p-5 text-center">
              <span className="text-white/70 font-semibold text-sm">Agence Classique</span>
            </div>
          </div>

          {/* Rows */}
          {criteria.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-4 border-b border-gray-100 last:border-0 transition-all duration-500 hover:bg-blue-50/30 ${
                visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="p-4 flex items-center gap-2.5">
                <span className="text-xl">{row.icon}</span>
                <span className="font-semibold text-gray-800 text-sm">{row.label}</span>
              </div>
              <div className="p-4 flex items-start gap-2 bg-green-50/50">
                <StatusIcon status={row.locagestion.status} />
                <span className="text-sm text-gray-700 leading-snug">{row.locagestion.text}</span>
              </div>
              <div className="p-4 flex items-start gap-2">
                <StatusIcon status={row.selfManage.status} />
                <span className="text-sm text-gray-500 leading-snug">{row.selfManage.text}</span>
              </div>
              <div className="p-4 flex items-start gap-2">
                <StatusIcon status={row.classical.status} />
                <span className="text-sm text-gray-500 leading-snug">{row.classical.text}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
          <div className="flex items-center gap-2"><span className="text-green-500 font-bold text-lg">✓</span><span className="text-gray-600">Inclus & optimal</span></div>
          <div className="flex items-center gap-2"><span className="text-yellow-500 font-bold text-lg">⚬</span><span className="text-gray-600">Partiel ou optionnel</span></div>
          <div className="flex items-center gap-2"><span className="text-red-500 font-bold text-lg">✗</span><span className="text-gray-600">Absent ou risqué</span></div>
        </div>

        {/* B2B 5 pillars */}
        <div className="mt-16">
          <h3 className="text-2xl font-black text-center text-gray-900 mb-8">
            Les 5 Piliers de l'Offre <span className="gold-text">Partenaire B2B</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { num: "1", title: "Rémunération Récurrente", desc: "Partage des honoraires de gestion avec l'agence partenaire.", icon: "💸" },
              { num: "2", title: "Propriété Client Garantie", desc: "Locagestion gère le locataire, vous gardez 100% de votre client.", icon: "🔐" },
              { num: "3", title: "Zéro Coût de Structure", desc: "Pas besoin de carte G ni de logiciel de gestion.", icon: "🎯" },
              { num: "4", title: "Outils Digitaux Avancés", desc: "Mandats automatisés, baux numériques, signature électronique.", icon: "💻" },
              { num: "5", title: "Sécurité Totale", desc: "GLI, dégradations immobilières et protection juridique.", icon: "🛡️" },
            ].map((pillar, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-5 text-center border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-3xl mb-3">{pillar.icon}</div>
                <div className="w-7 h-7 rounded-full bg-[#1a3c6e] text-white text-xs font-black flex items-center justify-center mx-auto mb-2">
                  {pillar.num}
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-2">{pillar.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
