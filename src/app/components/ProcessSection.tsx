import { motion } from "motion/react";
import { Search, Lightbulb, Rocket, BarChart3 } from "lucide-react";

interface Props { lang: "en" | "id" }

const steps = [
  { icon: <Search size={24} />, en: "Discovery & Strategy", id: "Riset & Strategi", descEn: "Understanding your brand, audience, and goals", descId: "Memahami brand, audiens, dan tujuan Anda" },
  { icon: <Lightbulb size={24} />, en: "Concept & Planning", id: "Konsep & Perencanaan", descEn: "Crafting creative concepts and detailed plans", descId: "Merancang konsep kreatif dan rencana detail" },
  { icon: <Rocket size={24} />, en: "Production & Execution", id: "Produksi & Eksekusi", descEn: "Bringing ideas to life with precision", descId: "Mewujudkan ide dengan presisi" },
  { icon: <BarChart3 size={24} />, en: "Monitoring & Optimization", id: "Monitoring & Optimasi", descEn: "Tracking results and optimizing performance", descId: "Melacak hasil dan mengoptimalkan kinerja" },
];

export function ProcessSection({ lang }: Props) {
  return (
    <section className="relative py-28 bg-[#060E1F]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-cyan-400 tracking-widest mb-3" style={{ fontSize: "0.8rem", fontWeight: 600 }}>{lang === "en" ? "HOW WE WORK" : "CARA KAMI BEKERJA"}</p>
          <h2 className="text-white" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 700 }}>{lang === "en" ? "Our Process, Design and Deliver Simplified" : "Proses Kami, Desain dan Pengiriman yang Disederhanakan"}</h2>
        </motion.div>
        <div className="grid md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
          {steps.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="text-center relative">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/20 flex items-center justify-center text-cyan-400 mx-auto mb-5 relative z-10">{s.icon}</div>
              <span className="text-cyan-400/50 mb-2 block" style={{ fontSize: "0.7rem", fontWeight: 700 }}>0{i + 1}</span>
              <h3 className="text-white mb-2" style={{ fontSize: "1rem", fontWeight: 600 }}>{lang === "en" ? s.en : s.id}</h3>
              <p className="text-gray-500" style={{ fontSize: "0.8rem", lineHeight: 1.6 }}>{lang === "en" ? s.descEn : s.descId}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
