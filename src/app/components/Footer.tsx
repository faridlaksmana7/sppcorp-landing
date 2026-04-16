import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

interface Props { lang: "en" | "id" }

export function Footer({ lang }: Props) {
  return (
    <footer className="bg-[#040B18] border-t border-white/[0.05] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <span className="text-white tracking-wider" style={{ fontSize: "1.5rem", fontWeight: 700 }}>SPP<span className="text-cyan-400">CORP</span></span>
            <p className="text-gray-500 mt-4" style={{ fontSize: "0.85rem", lineHeight: 1.7 }}>{lang === "en" ? "Full-service creative & activation company delivering impactful brand solutions across Indonesia." : "Perusahaan kreatif & aktivasi layanan penuh yang menghadirkan solusi brand berdampak di seluruh Indonesia."}</p>
          </div>
          <div>
            <h4 className="text-white mb-4" style={{ fontSize: "0.85rem", fontWeight: 600 }}>{lang === "en" ? "Services" : "Layanan"}</h4>
            {["Advertising & Branding", "Event & Activation", "Digital Solutions", "Agency & Manpower"].map((s) => (<a key={s} href="#services" className="block text-gray-500 hover:text-cyan-400 transition-colors mb-2" style={{ fontSize: "0.8rem" }}>{s}</a>))}
          </div>
          <div>
            <h4 className="text-white mb-4" style={{ fontSize: "0.85rem", fontWeight: 600 }}>{lang === "en" ? "Quick Links" : "Tautan Cepat"}</h4>
            {[{ en: "About", id: "Tentang", href: "#about" }, { en: "Portfolio", id: "Portfolio", href: "#portfolio" }, { en: "Coverage", id: "Jangkauan", href: "#coverage" }, { en: "Contact", id: "Kontak", href: "#contact" }].map((l) => (<a key={l.href} href={l.href} className="block text-gray-500 hover:text-cyan-400 transition-colors mb-2" style={{ fontSize: "0.8rem" }}>{lang === "en" ? l.en : l.id}</a>))}
          </div>
          <div>
            <h4 className="text-white mb-4" style={{ fontSize: "0.85rem", fontWeight: 600 }}>{lang === "en" ? "Contact" : "Kontak"}</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-500" style={{ fontSize: "0.8rem" }}><span className="text-cyan-400"><Mail size={14} /></span>hello@sppcorp.com</div>
              <div className="flex items-center gap-2 text-gray-500" style={{ fontSize: "0.8rem" }}><span className="text-cyan-400"><Phone size={14} /></span>+62 21 1234 5678</div>
              <div className="flex items-center gap-2 text-gray-500" style={{ fontSize: "0.8rem" }}><span className="text-cyan-400"><MapPin size={14} /></span>Jakarta, Indonesia</div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/[0.05] pt-6 text-center">
          <p className="text-gray-600" style={{ fontSize: "0.75rem" }}>&copy; 2026 SPPCORP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
