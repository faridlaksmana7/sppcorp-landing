import { motion } from "motion/react";
import { Zap, Globe, Award } from "lucide-react";

interface Props { lang: "en" | "id" }

export function AboutSection({ lang }: Props) {
  const points = [
    { icon: <Zap size={20} />, en: "Integrated services (online + offline)", id: "Layanan terintegrasi (online + offline)" },
    { icon: <Globe size={20} />, en: "Nationwide execution capability", id: "Kapabilitas eksekusi nasional" },
    { icon: <Award size={20} />, en: "Experience with major brands & multi-city activation", id: "Pengalaman dengan brand besar & aktivasi multi-kota" },
  ];

  return (
    <section id="about" className="relative py-28 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-cyan-400 tracking-widest mb-3" style={{ fontSize: "0.8rem", fontWeight: 600 }}>{lang === "en" ? "ABOUT US" : "TENTANG KAMI"}</p>
            <h2 className="text-white mb-6" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 700 }}>
              {lang === "en" ? "We Deliver Comprehensive Solutions to Help Businesses Grow" : "Kami Memberikan Solusi Komprehensif untuk Pertumbuhan Bisnis"}
            </h2>
            <p className="text-gray-400 mb-8" style={{ fontSize: "1rem", lineHeight: 1.8 }}>
              {lang === "en" ? "SPPCORP is a full-service creative and activation company specializing in Branding & Advertising, Event & Experience Activation, Digital & Technology Solutions, and Manpower & Agency Services. We deliver end-to-end solutions from concept to execution." : "SPPCORP adalah perusahaan kreatif dan aktivasi layanan penuh yang mengkhususkan diri dalam Branding & Periklanan, Event & Aktivasi Pengalaman, Solusi Digital & Teknologi, serta Layanan Tenaga Kerja & Agensi."}
            </p>
            <div className="space-y-4">
              {points.map((p, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">{p.icon}</div>
                  <span style={{ fontSize: "0.9rem" }}>{lang === "en" ? p.en : p.id}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="rounded-2xl overflow-hidden border border-white/5">
              <img src="https://images.unsplash.com/photo-1760346546771-a81d986459ff?w=1080" alt="Team" className="w-full h-80 object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
