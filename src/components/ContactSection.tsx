"use client";

import { useState } from "react";

const tabs = [
  { id: "proprietaire", label: "Propriétaire Bailleur", icon: "🏠", color: "#1a3c6e" },
  { id: "agence", label: "Agence / CGP Partenaire", icon: "🏢", color: "#c9a84c" },
];

const contactTypes = [
  { icon: "📋", label: "Demander un audit gratuit" },
  { icon: "📞", label: "Être rappelé par un conseiller" },
  { icon: "💰", label: "Obtenir une estimation" },
  { icon: "🤝", label: "Devenir agence partenaire" },
];

export default function ContactSection() {
  const [activeTab, setActiveTab] = useState("proprietaire");
  const [contactType, setContactType] = useState(contactTypes[0].label);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
    type: "proprietaire",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
            <span className="text-blue-700 text-xs font-semibold uppercase tracking-wider">Contact & Audit Gratuit</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Démarrez <span className="gold-text">Maintenant</span>
          </h2>
          <div className="section-divider mx-auto mb-4" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Réponse sous 24h. Audit gratuit et sans engagement. Nos conseillers experts sont à votre disposition.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Contact form */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            {/* Tab selector */}
            <div className="flex">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setForm((f) => ({ ...f, type: tab.id }));
                  }}
                  className={`flex-1 py-4 px-4 text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                    activeTab === tab.id
                      ? "bg-[#0f2547] text-white"
                      : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <span>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Contact type selector */}
            <div className="p-5 border-b border-gray-100">
              <p className="text-xs text-gray-500 font-medium mb-3 uppercase tracking-wider">Je souhaite :</p>
              <div className="grid grid-cols-2 gap-2">
                {contactTypes.map((ct) => (
                  <button
                    key={ct.label}
                    onClick={() => setContactType(ct.label)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                      contactType === ct.label
                        ? "bg-[#1a3c6e] text-white"
                        : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <span>{ct.icon}</span>
                    {ct.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Form */}
            {submitted ? (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">✅</div>
                <h3 className="text-xl font-black text-gray-900 mb-2">Message envoyé !</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Notre équipe vous contactera dans les 24h. Merci pour votre confiance.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", city: "", message: "", type: activeTab }); }}
                  className="btn-primary px-6 py-2.5 rounded-full text-sm font-bold"
                >
                  Nouvelle demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Nom complet *</label>
                    <input
                      type="text"
                      required
                      placeholder="Jean Dupont"
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Téléphone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="06 12 34 56 78"
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="jean.dupont@email.com"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Ville du bien *</label>
                  <input
                    type="text"
                    required
                    placeholder="Toulouse, Paris, Lyon…"
                    value={form.city}
                    onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))}
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Message</label>
                  <textarea
                    rows={3}
                    placeholder={
                      activeTab === "agence"
                        ? "Décrivez votre agence et vos besoins en gestion locative externalisée…"
                        : "Décrivez votre bien : type, surface, localisation, situation actuelle…"
                    }
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#0f2547]/30 border-t-[#0f2547] rounded-full animate-spin" />
                      Envoi en cours…
                    </>
                  ) : (
                    <>
                      {contactType}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-gray-400 text-xs text-center">
                  🔒 Vos données sont protégées · Réponse sous 24h · Sans engagement
                </p>
              </form>
            )}
          </div>

          {/* Right: Info + Map */}
          <div className="space-y-6">
            {/* Contact info cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: "📞", title: "Téléphone", lines: ["05 61 62 23 45", "Lun-Ven 9h-18h"], color: "#1a3c6e" },
                { icon: "✉️", title: "Email", lines: ["contact@locagestion.com", "secretariat@locagestion.com"], color: "#c9a84c" },
                { icon: "🤝", title: "Partenariat B2B", lines: ["partenariat@locagestion.com", "Agences & CGP"], color: "#22c55e" },
                { icon: "📍", title: "Siège Social", lines: ["40 route d'Albi – CS 92333", "31021 Toulouse Cedex 2"], color: "#8b5cf6" },
              ].map((info, i) => (
                <div key={i} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{ background: `${info.color}15` }}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm mb-1">{info.title}</p>
                      {info.lines.map((line, j) => (
                        <p key={j} className="text-gray-500 text-xs">{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Why choose us quick points */}
            <div className="bg-gradient-to-br from-[#0f2547] to-[#1a3c6e] rounded-2xl p-6 text-white">
              <h3 className="font-black text-lg mb-4">Pourquoi nous contacter ?</h3>
              <ul className="space-y-3">
                {[
                  "✅ Audit gratuit et sans engagement",
                  "✅ Réponse personnalisée sous 24h",
                  "✅ Conseiller dédié à votre profil",
                  "✅ Estimation précise du loyer de marché",
                  "✅ Présentation complète de nos outils digitaux",
                  "✅ Garantie financière GALIAN – Certifié ORIAS",
                ].map((point, i) => (
                  <li key={i} className="text-white/90 text-sm">{point}</li>
                ))}
              </ul>
            </div>

            {/* Legal info */}
            <div className="bg-white rounded-xl p-4 border border-gray-100 text-xs text-gray-500 space-y-1">
              <p className="font-semibold text-gray-700 mb-2">Informations légales</p>
              <p>SAS MBM Immobilier · Capital 100 000 € · RCS B 404 821 373</p>
              <p>Carte pro : CPI 3101 2018 000 036 886</p>
              <p>Garantie Financière GALIAN (Paris) · Membre ANACAFI Immo · ORIAS</p>
              <p>Enseigne LOCAGESTION lancée en 2004</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
