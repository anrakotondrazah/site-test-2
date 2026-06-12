"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    num: "01",
    icon: "📞",
    title: "Prise de contact & Audit du besoin",
    desc: "Un conseiller dédié vous contacte sous 24h. Analyse complète de votre situation : type de bien, localisation, revenus locatifs, contraintes particulières.",
    details: [
      "Entretien personnalisé téléphonique ou visio",
      "Analyse de la situation patrimoniale",
      "Identification des besoins et objectifs",
      "Présentation de l'offre adaptée",
    ],
    color: "#1a3c6e",
    delay: 0,
  },
  {
    num: "02",
    icon: "🔍",
    title: "Analyse du bien & Étude des dossiers",
    desc: "Expertise complète du bien et vérification de l'agrément des candidats locataires. Score FNAIS, solvabilité, garanties — rien n'est laissé au hasard.",
    details: [
      "Estimation du loyer de marché",
      "Analyse des dossiers candidats",
      "Vérification de la solvabilité (FNAIS)",
      "Validation et sélection du locataire",
    ],
    color: "#c9a84c",
    delay: 150,
  },
  {
    num: "03",
    icon: "⚙️",
    title: "Mise en place de l'externalisation",
    desc: "Signature du mandat de gestion, création de votre espace en ligne, paramétrage des outils digitaux. Tout est automatisé et synchronisé en temps réel.",
    details: [
      "Signature électronique du mandat",
      "Création de l'espace propriétaire en ligne",
      "Paramétrage des reversements automatiques",
      "Intégration des outils digitaux",
    ],
    color: "#22c55e",
    delay: 300,
  },
  {
    num: "04",
    icon: "📊",
    title: "Gestion quotidienne & Suivi en ligne",
    desc: "Votre bien est géré au quotidien par nos équipes. Accédez en temps réel à toutes vos informations : loyers, documents, sinistres, comptabilité.",
    details: [
      "Suivi en temps réel sur l'espace en ligne",
      "Reversement mensuel des loyers",
      "Gestion des sinistres et maintenance",
      "Bilan annuel et aide fiscale",
    ],
    color: "#8b5cf6",
    delay: 450,
  },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const isEven = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`flex flex-col lg:flex-row items-center gap-10 ${isEven ? "lg:flex-row-reverse" : ""} transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${step.delay}ms` }}
    >
      {/* Visual side */}
      <div className="lg:w-1/2 flex justify-center">
        <div className="relative">
          {/* Big number */}
          <div
            className="text-[120px] font-black leading-none select-none"
            style={{ color: step.color, opacity: 0.12 }}
          >
            {step.num}
          </div>
          {/* Icon card */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-3xl flex items-center justify-center text-5xl shadow-2xl"
            style={{ background: step.color }}
          >
            {step.icon}
          </div>
          {/* Decorative ring */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-4 border-dashed opacity-30"
            style={{ borderColor: step.color }}
          />
        </div>
      </div>

      {/* Text side */}
      <div className="lg:w-1/2">
        <div className="flex items-center gap-3 mb-3">
          <div
            className="px-3 py-1 rounded-full text-white text-xs font-bold"
            style={{ background: step.color }}
          >
            Étape {step.num}
          </div>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
        <h3 className="text-2xl font-black text-gray-900 mb-3">{step.title}</h3>
        <p className="text-gray-600 leading-relaxed mb-5">{step.desc}</p>
        <ul className="space-y-2">
          {step.details.map((d, i) => (
            <li key={i} className="flex items-center gap-3">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: step.color }}
              >
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700 text-sm">{d}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ProcessSection() {
  return (
    <section id="processus" className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-green-700 text-xs font-semibold uppercase tracking-wider">Simple & Efficace</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Notre <span className="gold-text">Processus</span> en 4 Étapes
          </h2>
          <div className="section-divider mx-auto mb-4" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            De la prise de contact à la gestion quotidienne, un accompagnement sur-mesure et transparent à chaque étape.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-20">
          {steps.map((step, i) => (
            <StepCard key={i} step={step} index={i} />
          ))}
        </div>

        {/* Timeline connector (decorative) */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-4">
            {steps.map((step, i) => (
              <div key={i} className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg"
                  style={{ background: step.color }}
                >
                  {step.num}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-12 h-px bg-gradient-to-r from-gray-300 to-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm mb-4">Prêt à déléguer votre gestion locative ?</p>
          <button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary px-8 py-4 rounded-full text-base font-bold inline-flex items-center gap-2 group"
          >
            Démarrer maintenant
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
