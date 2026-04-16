import { motion } from "motion/react";
import { Megaphone, PartyPopper, Monitor, Users } from "lucide-react";

interface Props { lang: "en" | "id" }

const services = [
  { icon: <Megaphone size={28} />, titleEn: "Advertising & Branding", titleId: "Periklanan & Branding", tagEn: "Awareness & Visibility", tagId: "Awareness & Visibilitas", items: { en: ["Outdoor Media (Billboard, Videotron, Building Wrap)", "Retail Branding (POSM, Booth, Store Branding)", "Visual Identity & Rebranding"], id: ["Media Luar Ruang (Billboard, Videotron, Building Wrap)", "Branding Ritel (POSM, Booth, Store Branding)", "Identitas Visual & Rebranding"] } },
  { icon: <PartyPopper size={28} />, titleEn: "Event & Activation", titleId: "Event & Aktivasi", tagEn: "Experience & Engagement", tagId: "Pengalaman & Engagement", items: { en: ["Brand Activation", "Product Launching", "Concert & Large Scale Event", "Community Engagement"], id: ["Aktivasi Brand", "Peluncuran Produk", "Konser & Event Skala Besar", "Keterlibatan Komunitas"] } },
  { icon: <Monitor size={28} />, titleEn: "Digital Solutions", titleId: "Solusi Digital", tagEn: "Digital Growth & Engagement", tagId: "Pertumbuhan & Engagement Digital", items: { en: ["Social Media Management", "Website & App Development", "Video & Motion Graphics", "KOL & Influencer Management"], id: ["Manajemen Media Sosial", "Pengembangan Website & Aplikasi", "Video & Motion Graphics", "Manajemen KOL & Influencer"] } },
  { icon: <Users size={28} />, titleEn: "Agency & Manpower", titleId: "Agensi & Tenaga Kerja", tagEn: "Execution & Conversion", tagId: "Eksekusi & Konversi", items: { en: ["SPG / Direct Selling", "Telemarketing", "Field Activation Team", "Program Consulting"], id: ["SPG / Penjualan Langsung", "Telemarketing", "Tim Aktivasi Lapangan", "Konsultasi Program"] } },
];

export function ServicesSection({ lang }: Props) {
  return (
    <section id="services" className="relative py-28 bg-[#060E1F]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-cyan-400 tracking-widest mb-3" style={{ fontSize: "0.8rem", fontWeight: 600 }}>{lang === "en" ? "OUR SERVICES" : "LAYANAN KAMI"}</p>
          <h2 className="text-white" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 700 }}>{lang === "en" ? "Integrated Solutions for Every Need" : "Solusi Terintegrasi untuk Setiap Kebutuhan"}</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-cyan-400/30 transition-all duration-500 hover:bg-white/[0.05]">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center text-cyan-400 mb-5">{s.icon}</div>
                <h3 className="text-white mb-1" style={{ fontSize: "1.25rem", fontWeight: 700 }}>{lang === "en" ? s.titleEn : s.titleId}</h3>
                <p className="text-cyan-400/70 mb-4" style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.05em" }}>{lang === "en" ? s.tagEn : s.tagId}</p>
                <ul className="space-y-2">
                  {s.items[lang].map((item, j) => (<li key={j} className="text-gray-400 flex items-start gap-2" style={{ fontSize: "0.85rem" }}><span className="text-cyan-400 mt-1">&#8226;</span>{item}</li>))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
