import { motion } from "motion/react";
import { Layers, Wifi, Clock, Scaling, Cpu } from "lucide-react";

interface Props { lang: "en" | "id" }

const points = [
  { icon: <Layers size={24} />, en: "End-to-End Solution", id: "Solusi Menyeluruh", descEn: "Strategy to execution, all under one roof", descId: "Strategi hingga eksekusi, dalam satu atap" },
  { icon: <Wifi size={24} />, en: "Offline + Digital Integration", id: "Integrasi Offline + Digital", descEn: "Seamless online and offline brand experience", descId: "Pengalaman brand online dan offline yang mulus" },
  { icon: <Clock size={24} />, en: "10+ Years Ecosystem", id: "Ekosistem 10+ Tahun", descEn: "Proven track record with major brands", descId: "Rekam jejak terbukti dengan brand besar" },
  { icon: <Scaling size={24} />, en: "Scalable Execution", id: "Eksekusi Terukur", descEn: "Small to massive campaigns nationwide", descId: "Kampanye kecil hingga besar se-nasional" },
  { icon: <Cpu size={24} />, en: "Creative + Technical", id: "Kreatif + Teknis", descEn: "Best of both worlds in one team", descId: "Yang terbaik dari kedua dunia dalam satu tim" },
];

export function WhyChooseSection({ lang }: Props) {
  return (
    <section className="relative py-28 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-cyan-400 tracking-widest mb-3" style={{ fontSize: "0.8rem", fontWeight: 600 }}>{lang === "en" ? "WHY CHOOSE US" : "MENGAPA MEMILIH KAMI"}</p>
          <h2 className="text-white" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 700 }}>{lang === "en" ? "What Sets Us Apart" : "Yang Membedakan Kami"}</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group p-7 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-cyan-400/30 transition-all duration-500 cursor-default">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 transition-transform">{p.icon}</div>
              <h3 className="text-white mb-2" style={{ fontSize: "1.1rem", fontWeight: 600 }}>{lang === "en" ? p.en : p.id}</h3>
              <p className="text-gray-500" style={{ fontSize: "0.85rem", lineHeight: 1.6 }}>{lang === "en" ? p.descEn : p.descId}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
