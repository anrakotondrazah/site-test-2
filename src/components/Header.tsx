"use client";

import { useState, useEffect } from "react";
import LogoSVG from "./LogoSVG";

const navItems = [
  { label: "Accueil", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Processus", href: "#processus" },
  { label: "Partenaires", href: "#partenaires" },
  { label: "Innovation IA", href: "#ia" },
  { label: "Contact", href: "#contact" },
];

const searchSuggestions = [
  "Gestion locative Toulouse",
  "Devenir agence partenaire",
  "Estimation de gestion",
  "GLI – Garantie loyers impayés",
  "Audit gratuit propriétaire",
  "Comptabilité immobilière",
  "Signature électronique bail",
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filtered = searchSuggestions.filter((s) =>
    s.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Top info bar */}
      <div className="bg-[#0a1937] text-white text-xs py-1.5 px-4 hidden md:flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <span>📞</span>
            <span className="font-medium">05 61 62 23 45</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span>✉️</span>
            <span>contact@locagestion.com</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <span className="text-yellow-400">★★★★★</span>
            <span className="text-yellow-400 font-semibold">N°1</span>
            <span className="text-gray-300">Gestion Locative France</span>
          </span>
          <a href="#contact" className="bg-yellow-500 text-[#0a1937] font-bold text-xs px-3 py-0.5 rounded-full hover:bg-yellow-400 transition-colors">
            Espace Client →
          </a>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "header-scrolled top-0"
            : "bg-gradient-to-b from-[rgba(10,25,55,0.95)] to-[rgba(10,25,55,0.7)] md:top-[28px]"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 h-16 flex items-center gap-4">
          {/* Logo */}
          <button
            onClick={() => handleNav("#hero")}
            className="flex-shrink-0 hover:opacity-90 transition-opacity"
          >
            <LogoSVG variant="white" size="md" />
          </button>

          {/* Search Bar (center, dominant) */}
          <div className="flex-1 max-w-2xl mx-auto hidden md:block relative">
            <div className="search-bar flex items-center rounded-full overflow-hidden shadow-lg">
              <div className="bg-[#c9a84c] px-3 py-2.5">
                <span className="text-[#0f2547] font-semibold text-xs whitespace-nowrap">Rechercher</span>
              </div>
              <input
                type="text"
                placeholder="Gestion locative, audit gratuit, devenir partenaire…"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                className="flex-1 px-4 py-2.5 text-sm text-gray-800 outline-none bg-white placeholder:text-gray-400"
              />
              <button className="bg-[#c9a84c] hover:bg-[#b8962e] px-4 py-2.5 transition-colors">
                <svg className="w-4 h-4 text-[#0f2547]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            {/* Suggestions dropdown */}
            {showSuggestions && filtered.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-2xl overflow-hidden z-50 border border-gray-100">
                {filtered.map((s, i) => (
                  <button
                    key={i}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1a3c6e] flex items-center gap-2 transition-colors"
                    onMouseDown={() => {
                      setSearchQuery(s);
                      setShowSuggestions(false);
                    }}
                  >
                    <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Nav items */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.slice(0, 5).map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className="text-white/90 hover:text-[#c9a84c] text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA buttons */}
          <div className="flex items-center gap-2 ml-auto md:ml-0">
            <button
              onClick={() => handleNav("#contact")}
              className="hidden md:block btn-primary px-4 py-2 rounded-full text-sm font-bold"
            >
              Audit Gratuit
            </button>
            <button
              onClick={() => handleNav("#contact")}
              className="hidden lg:block btn-secondary px-4 py-2 rounded-full text-sm"
            >
              Devenir Partenaire
            </button>
            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#0a1937] border-t border-white/10 px-4 py-4">
            {/* Mobile search */}
            <div className="flex items-center bg-white rounded-full overflow-hidden mb-4 shadow">
              <input
                type="text"
                placeholder="Rechercher…"
                className="flex-1 px-4 py-2 text-sm text-gray-800 outline-none"
              />
              <button className="bg-[#c9a84c] px-4 py-2">
                <svg className="w-4 h-4 text-[#0f2547]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNav(item.href)}
                  className="text-white/90 hover:text-[#c9a84c] text-sm font-medium px-3 py-2.5 rounded-lg hover:bg-white/10 transition-all text-left"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="mt-4 flex flex-col gap-2">
              <button
                onClick={() => handleNav("#contact")}
                className="btn-primary w-full py-2.5 rounded-full text-sm font-bold text-center"
              >
                Demander un audit gratuit
              </button>
              <button
                onClick={() => handleNav("#contact")}
                className="btn-secondary w-full py-2.5 rounded-full text-sm text-center"
              >
                Devenir Partenaire
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
