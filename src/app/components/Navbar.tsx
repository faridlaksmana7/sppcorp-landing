import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  lang: "en" | "id";
  setLang: (l: "en" | "id") => void;
}

export function Navbar({ lang, setLang }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: lang === "en" ? "About" : "Tentang", href: "#about" },
    { label: lang === "en" ? "Services" : "Layanan", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: lang === "en" ? "Coverage" : "Jangkauan", href: "#coverage" },
    { label: lang === "en" ? "Contact" : "Kontak", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B1C3D]/80 backdrop-blur-xl shadow-lg shadow-blue-900/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-white tracking-wider" style={{ fontSize: "1.5rem", fontWeight: 700 }}>
          SPP<span className="text-cyan-400">CORP</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-gray-300 hover:text-cyan-400 transition-colors" style={{ fontSize: "0.875rem", fontWeight: 500 }}>
              {l.label}
            </a>
          ))}
          <button onClick={() => setLang(lang === "en" ? "id" : "en")} className="px-3 py-1 rounded-full border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 transition-colors" style={{ fontSize: "0.75rem", fontWeight: 600 }}>
            {lang === "en" ? "EN" : "ID"}
          </button>
          <a href="#contact" className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/30 transition-all" style={{ fontSize: "0.875rem", fontWeight: 600 }}>
            {lang === "en" ? "Start Project" : "Mulai Proyek"}
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#0B1C3D]/95 backdrop-blur-xl px-6 pb-6 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-cyan-400 py-2 border-b border-white/5" style={{ fontSize: "0.875rem" }}>
              {l.label}
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            <button onClick={() => setLang(lang === "en" ? "id" : "en")} className="px-4 py-2 rounded-full border border-cyan-400/40 text-cyan-400" style={{ fontSize: "0.75rem", fontWeight: 600 }}>
              {lang === "en" ? "EN" : "ID"}
            </button>
            <a href="#contact" onClick={() => setMobileOpen(false)} className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white" style={{ fontSize: "0.875rem", fontWeight: 600 }}>
              {lang === "en" ? "Start Project" : "Mulai Proyek"}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
