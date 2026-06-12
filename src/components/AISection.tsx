"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: "🎙️",
    title: "Sophie – Assistant Vocal IA",
    desc: "Disponible 24h/24, 7j/7. Sophie répond instantanément aux demandes de renseignements, pré-qualifie les locataires et oriente intelligemment chaque interlocuteur.",
  },
  {
    icon: "⚡",
    title: "Pré-qualification Instantanée",
    desc: "Analyse automatique des dossiers candidats en quelques secondes. Score de solvabilité, vérification des garanties et recommandation immédiate.",
  },
  {
    icon: "🔄",
    title: "Automatisation des Mandats",
    desc: "Génération automatique des mandats de gestion, envoi, suivi et signature électronique certifiée. Zéro paperasse, 100% digital.",
  },
  {
    icon: "📊",
    title: "Analytics & Prédiction",
    desc: "Tableaux de bord intelligents avec prédictions de revenus, alertes de risques, optimisation du taux d'occupation.",
  },
  {
    icon: "🤝",
    title: "Orientation Client Intelligente",
    desc: "L'IA dirige automatiquement chaque demande vers le bon interlocuteur humain. Réactivité maximale, satisfaction optimale.",
  },
  {
    icon: "🔐",
    title: "Signature Électronique Certifiée",
    desc: "Tous les documents signés électroniquement avec certification qualifiée. Valeur juridique complète, archivage automatique.",
  },
];

const chatMessages = [
  { role: "assistant", text: "Bonjour ! Je suis Sophie, votre assistante IA LOCAGESTION. Comment puis-je vous aider aujourd'hui ?", time: "10:02" },
  { role: "user", text: "Je voudrais des informations sur la gestion de mon appartement à Toulouse.", time: "10:03" },
  { role: "assistant", text: "Parfait ! J'analyse votre demande... Votre bien est situé à Toulouse ? Nous avons une équipe dédiée sur place. Puis-je connaître le type de bien et la surface approximative ?", time: "10:03" },
  { role: "user", text: "Un T3 de 65m² en centre-ville.", time: "10:04" },
  { role: "assistant", text: "Excellent choix ! Pour un T3 de 65m² en centre de Toulouse, nous estimons un loyer de marché entre 850€ et 950€/mois. Nos honoraires de gestion représentent 7% TTC. Souhaitez-vous un audit gratuit ?", time: "10:04" },
];

export default function AISection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [visibleMessages, setVisibleMessages] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const timer = setInterval(() => {
      setVisibleMessages((prev) => {
        if (prev >= chatMessages.length) { clearInterval(timer); return prev; }
        return prev + 1;
      });
    }, 800);
    return () => clearInterval(timer);
  }, [visible]);

  return (
    <section id="ia" className="py-20 bg-gradient-to-br from-[#060d1f] to-[#0f2547] overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-yellow-400/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-yellow-400 text-xs font-semibold uppercase tracking-wider">PropTech & Intelligence Artificielle</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            LOCAGESTION <span className="gold-text">IA Ready</span>
          </h2>
          <div className="section-divider mx-auto mb-4" />
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Notre plateforme intègre l'intelligence artificielle pour offrir une disponibilité renforcée, 
            une réactivité maximale et une expérience client exceptionnelle.
          </p>
        </div>

        {/* Main content: Chat mockup + Features */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* AI Chat Mockup */}
          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden shadow-2xl">
              {/* Chat header */}
              <div className="bg-white/10 p-4 flex items-center gap-3 border-b border-white/10">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center font-black text-[#0f2547]">
                    S
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-[#0f2547]" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Sophie IA</p>
                  <p className="text-green-400 text-xs">● En ligne – Répond en &lt;2 secondes</p>
                </div>
                <div className="ml-auto text-white/40 text-xs">24h/24 7j/7</div>
              </div>

              {/* Messages */}
              <div className="p-4 space-y-3 min-h-[300px]">
                {chatMessages.slice(0, visibleMessages).map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-fadeInUp`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-yellow-400 text-[#0f2547] font-medium rounded-tr-sm"
                          : "bg-white/15 text-white rounded-tl-sm"
                      }`}
                    >
                      {msg.text}
                      <p className={`text-xs mt-1 ${msg.role === "user" ? "text-[#0f2547]/60" : "text-white/40"}`}>
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
                {visibleMessages < chatMessages.length && (
                  <div className="flex justify-start">
                    <div className="bg-white/15 px-4 py-2.5 rounded-2xl rounded-tl-sm">
                      <div className="flex gap-1 items-center h-4">
                        <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                        <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                        <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="p-3 border-t border-white/10">
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                  <span className="text-white/40 text-sm flex-1">Posez votre question…</span>
                  <button className="w-7 h-7 rounded-full bg-yellow-400 flex items-center justify-center">
                    <svg className="w-3 h-3 text-[#0f2547]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Image below chat */}
            <div className="mt-6 rounded-2xl overflow-hidden h-40 img-zoom">
              <img src="/images/ai-section.jpg" alt="IA LOCAGESTION – Sophie" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#0f2547]/40" />
            </div>
          </div>

          {/* Features grid */}
          <div
            className={`grid sm:grid-cols-2 gap-4 transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
            style={{ transitionDelay: "200ms" }}
          >
            {features.map((feature, i) => (
              <div
                key={i}
                className="glass rounded-xl p-5 hover:bg-white/15 transition-all duration-300 group cursor-default"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h4 className="font-bold text-white text-sm mb-2">{feature.title}</h4>
                <p className="text-white/60 text-xs leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "< 2s", label: "Temps de réponse IA", icon: "⚡" },
            { value: "24/7", label: "Disponibilité Sophie", icon: "🕐" },
            { value: "98%", label: "Satisfaction client", icon: "😊" },
            { value: "100%", label: "Signature électronique", icon: "✍️" },
          ].map((stat, i) => (
            <div key={i} className="glass rounded-xl p-5 text-center">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <p className="text-2xl font-black gold-text mb-1">{stat.value}</p>
              <p className="text-white/60 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
