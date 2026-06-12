"use client";

import { useState, useEffect } from "react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setExpanded(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded options */}
      {expanded && (
        <div className="flex flex-col gap-2 animate-fadeInUp">
          {[
            { label: "Audit gratuit", icon: "📋", href: "#contact" },
            { label: "Être rappelé", icon: "📞", href: "#contact" },
            { label: "Estimation", icon: "💰", href: "#contact" },
            { label: "Devenir Partenaire", icon: "🤝", href: "#contact" },
          ].map((action) => (
            <button
              key={action.label}
              onClick={() => handleNav(action.href)}
              className="flex items-center gap-2 bg-white text-[#0f2547] font-semibold text-sm px-4 py-2.5 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all border border-gray-100"
            >
              <span>{action.icon}</span>
              {action.label}
            </button>
          ))}
        </div>
      )}

      {/* Main FAB button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-14 h-14 rounded-full btn-primary flex items-center justify-center shadow-2xl text-2xl hover:scale-110 transition-transform animate-pulse-glow"
      >
        {expanded ? "✕" : "💬"}
      </button>
    </div>
  );
}
