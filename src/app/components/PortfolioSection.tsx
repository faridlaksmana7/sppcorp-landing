import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface Props { lang: "en" | "id" }

const projects = [
  { img: "https://images.unsplash.com/photo-1774988353278-b01caf489c4e?w=1080", title: "Large Concert & Event Setup", cat: "Event", client: "Major Entertainment Corp", scopeEn: "Full event production, stage design, lighting", scopeId: "Produksi event penuh, desain panggung, pencahayaan", areaEn: "Jakarta, Surabaya, Bandung", areaId: "Jakarta, Surabaya, Bandung" },
  { img: "https://images.unsplash.com/photo-1763671872042-decff1375c06?w=1080", title: "Pertamina Rest Area Branding", cat: "Advertising", client: "Pertamina", scopeEn: "OOH branding, signage, environmental design", scopeId: "Branding OOH, signage, desain lingkungan", areaEn: "National (50+ rest areas)", areaId: "Nasional (50+ rest area)" },
  { img: "https://images.unsplash.com/photo-1582203422342-1541a90a0103?w=1080", title: "Gojek Multi-City Activation", cat: "Activation", client: "Gojek", scopeEn: "Brand activation, booth design, SPG management", scopeId: "Aktivasi brand, desain booth, manajemen SPG", areaEn: "15 cities across Indonesia", areaId: "15 kota di seluruh Indonesia" },
  { img: "https://images.unsplash.com/photo-1547621008-d6d6d2e28e81?w=1080", title: "Digital Campaign Management", cat: "Digital", client: "Multiple FMCG Brands", scopeEn: "Social media, content creation, KOL management", scopeId: "Media sosial, pembuatan konten, manajemen KOL", areaEn: "National Digital Campaign", areaId: "Kampanye Digital Nasional" },
  { img: "https://images.unsplash.com/photo-1773291933751-1fcff40c6133?w=1080", title: "Retail Branding - Teh Pucuk", cat: "Advertising", client: "Teh Pucuk Harum", scopeEn: "Store branding, POSM, visual merchandising", scopeId: "Branding toko, POSM, visual merchandising", areaEn: "West Java & Banten", areaId: "Jawa Barat & Banten" },
];

const filters = ["All", "Advertising", "Event", "Digital", "Activation"];

export function PortfolioSection({ lang }: Props) {
  const [active, setActive] = useState("All");
  const [modal, setModal] = useState<typeof projects[0] | null>(null);
  const filtered = active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <section id="portfolio" className="relative py-28 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <p className="text-cyan-400 tracking-widest mb-3" style={{ fontSize: "0.8rem", fontWeight: 600 }}>PORTFOLIO</p>
          <h2 className="text-white" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 700 }}>{lang === "en" ? "See Our Latest Creative Work" : "Lihat Karya Kreatif Terbaru Kami"}</h2>
        </motion.div>
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {filters.map((f) => (<button key={f} onClick={() => setActive(f)} className={`px-5 py-2 rounded-full transition-all ${active === f ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white" : "bg-white/5 text-gray-400 hover:text-white border border-white/10"}`} style={{ fontSize: "0.8rem", fontWeight: 600 }}>{f}</button>))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div key={p.title} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }} onClick={() => setModal(p)} className="group cursor-pointer rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.06] hover:border-cyan-400/30 transition-all">
                <div className="relative overflow-hidden h-56">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <span className="text-cyan-400" style={{ fontSize: "0.7rem", fontWeight: 600 }}>{p.cat.toUpperCase()}</span>
                  <h3 className="text-white mt-1" style={{ fontSize: "1.05rem", fontWeight: 600 }}>{p.title}</h3>
                  <p className="text-gray-500 mt-1" style={{ fontSize: "0.8rem" }}>{p.client}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <AnimatePresence>
        {modal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6" onClick={() => setModal(null)}>
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} onClick={(e) => e.stopPropagation()} className="bg-[#0A1628] border border-white/10 rounded-2xl max-w-2xl w-full overflow-hidden">
              <div className="relative">
                <img src={modal.img} alt={modal.title} className="w-full h-64 object-cover" />
                <button onClick={() => setModal(null)} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70"><X size={18} /></button>
              </div>
              <div className="p-8">
                <span className="text-cyan-400" style={{ fontSize: "0.7rem", fontWeight: 600 }}>{modal.cat.toUpperCase()}</span>
                <h3 className="text-white mt-2 mb-4" style={{ fontSize: "1.5rem", fontWeight: 700 }}>{modal.title}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[{ label: "Client", value: modal.client }, { label: "Scope", value: lang === "en" ? modal.scopeEn : modal.scopeId }, { label: lang === "en" ? "Location" : "Lokasi", value: lang === "en" ? modal.areaEn : modal.areaId }].map((d, i) => (<div key={i}><p className="text-gray-500" style={{ fontSize: "0.75rem", fontWeight: 600 }}>{d.label}</p><p className="text-gray-300" style={{ fontSize: "0.9rem" }}>{d.value}</p></div>))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
