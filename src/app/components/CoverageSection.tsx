import { motion } from "motion/react";
import { MapPin } from "lucide-react";

interface Props { lang: "en" | "id" }

const cities = [
  { name: "Jakarta", x: 42, y: 58 }, { name: "Bandung", x: 38, y: 62 },
  { name: "Surabaya", x: 55, y: 60 }, { name: "Semarang", x: 48, y: 58 },
  { name: "Medan", x: 22, y: 28 }, { name: "Makassar", x: 62, y: 65 },
  { name: "Bali", x: 58, y: 64 }, { name: "Yogyakarta", x: 46, y: 62 },
];

export function CoverageSection({ lang }: Props) {
  return (
    <section id="coverage" className="relative py-28 bg-[#060E1F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-cyan-400 tracking-widest mb-3" style={{ fontSize: "0.8rem", fontWeight: 600 }}>{lang === "en" ? "COVERAGE & NETWORK" : "JANGKAUAN & JARINGAN"}</p>
          <h2 className="text-white" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 700 }}>{lang === "en" ? "Nationwide Execution Capability" : "Kapabilitas Eksekusi Nasional"}</h2>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="relative w-full aspect-[2.5/1] rounded-2xl bg-white/[0.02] border border-white/[0.06] overflow-hidden">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(56,189,248,0.05) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
          {cities.map((c, i) => (
            <motion.div key={c.name} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, type: "spring" }} className="absolute group" style={{ left: `${c.x}%`, top: `${c.y}%` }}>
              <div className="relative flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
                <div className="absolute w-8 h-8 rounded-full bg-cyan-400/20 animate-ping" style={{ animationDuration: "3s" }} />
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-[#0B1C3D] border border-cyan-400/30 text-cyan-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity" style={{ fontSize: "0.65rem", fontWeight: 600 }}>{c.name}</div>
              </div>
            </motion.div>
          ))}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {[[42,58,38,62],[42,58,48,58],[48,58,55,60],[55,60,58,64]].map(([x1,y1,x2,y2], i) => (<line key={i} x1={`${x1}%`} y1={`${y1}%`} x2={`${x2}%`} y2={`${y2}%`} stroke="rgba(56,189,248,0.15)" strokeWidth="1" strokeDasharray="4 4" />))}
          </svg>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[{ en: "West Java, Banten & National Expansion", id: "Jawa Barat, Banten & Ekspansi Nasional" }, { en: "80+ OOH Strategic Locations", id: "80+ Lokasi OOH Strategis" }, { en: "Multi-City Activation Capability", id: "Kapabilitas Aktivasi Multi-Kota" }].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-center gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <div className="text-cyan-400"><MapPin size={20} /></div>
              <span className="text-gray-300" style={{ fontSize: "0.9rem" }}>{lang === "en" ? item.en : item.id}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
