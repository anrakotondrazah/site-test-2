"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 2000, suffix: "+", label: "Agences Partenaires", sublabel: "En France Métropolitaine, Corse & DOM-TOM", icon: "🏢", color: "#1a3c6e" },
  { value: 20, suffix: " ans", label: "D'Expertise", sublabel: "Fondée en 2004 – Groupe MBM depuis 1996", icon: "📅", color: "#c9a84c" },
  { value: 98, suffix: "%", label: "Taux d'Occupation", sublabel: "Moyenne des biens en gestion", icon: "🏠", color: "#22c55e" },
  { value: 100, suffix: "%", label: "Client Protégé", sublabel: "Propriété exclusive garantie au partenaire", icon: "🔒", color: "#3b82f6" },
  { value: 7, suffix: "", label: "Partenaires Nationaux", sublabel: "ERA, BNP, Arthurimmo, Cyrus Conseil…", icon: "🤝", color: "#8b5cf6" },
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ stat, delay }: { stat: typeof stats[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(stat.value, 2000, visible);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`text-center p-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-4xl mb-3">{stat.icon}</div>
      <div className="text-4xl md:text-5xl font-black mb-1" style={{ color: stat.color }}>
        {count.toLocaleString("fr-FR")}{stat.suffix}
      </div>
      <div className="font-bold text-gray-800 text-sm mb-1">{stat.label}</div>
      <div className="text-gray-500 text-xs leading-snug">{stat.sublabel}</div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-white border-b border-gray-100 py-2">
      {/* N°1 Banner */}
      <div className="n1-badge w-full py-3 flex items-center justify-center gap-4 mb-0">
        <span className="text-[#0f2547] font-black text-sm tracking-widest uppercase">
          ★ N°1 EN FRANCE DE LA GESTION LOCATIVE EXTERNALISÉE ★
        </span>
        <span className="text-[#0f2547] font-medium text-xs">
          Garantie Financière GALIAN · Membre ANACAFI Immo · Enregistré ORIAS
        </span>
      </div>

      {/* Stats grid */}
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-x divide-gray-100">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} delay={i * 100} />
          ))}
        </div>
      </div>

      {/* Partner logos scroll */}
      <div className="bg-gray-50 border-t border-gray-100 py-4 overflow-hidden">
        <p className="text-center text-xs text-gray-400 font-medium uppercase tracking-widest mb-3">
          Nos partenaires nationaux de confiance
        </p>
        <div className="overflow-hidden relative">
          <div className="partner-track">
            {[
              "ERA Immobilier",
              "BNP Paribas Immobilier",
              "Groupe National Immobilier",
              "Arthurimmo.com",
              "Côté Particuliers",
              "La Maison de l'Investisseur",
              "Cyrus Conseil",
              "ERA Immobilier",
              "BNP Paribas Immobilier",
              "Groupe National Immobilier",
              "Arthurimmo.com",
              "Côté Particuliers",
              "La Maison de l'Investisseur",
              "Cyrus Conseil",
            ].map((partner, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-8 flex items-center gap-2 text-gray-400 hover:text-[#1a3c6e] transition-colors cursor-default"
              >
                <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs">🏢</div>
                <span className="text-sm font-semibold whitespace-nowrap">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
