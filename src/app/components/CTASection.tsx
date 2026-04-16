import { useState } from "react";
import { motion } from "motion/react";
import { Send } from "lucide-react";

interface Props { lang: "en" | "id" }

export function CTASection({ lang }: Props) {
  const [form, setForm] = useState({ name: "", company: "", needs: "" });
  return (
    <section id="contact" className="relative py-28 bg-[#060E1F] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[200px]" />
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-white mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800 }}>{lang === "en" ? "Let's Build Something Impactful Together" : "Mari Bangun Sesuatu yang Berdampak Bersama"}</h2>
          <p className="text-gray-400" style={{ fontSize: "1rem" }}>{lang === "en" ? "Tell us about your project and let's get started." : "Ceritakan proyek Anda dan mari kita mulai."}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <input placeholder={lang === "en" ? "Your Name" : "Nama Anda"} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-5 py-3.5 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder-gray-500 focus:border-cyan-400/50 focus:outline-none transition-colors" style={{ fontSize: "0.9rem" }} />
            <input placeholder={lang === "en" ? "Company" : "Perusahaan"} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="w-full px-5 py-3.5 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder-gray-500 focus:border-cyan-400/50 focus:outline-none transition-colors" style={{ fontSize: "0.9rem" }} />
          </div>
          <textarea placeholder={lang === "en" ? "Tell us about your needs..." : "Ceritakan kebutuhan Anda..."} value={form.needs} onChange={(e) => setForm({ ...form, needs: e.target.value })} rows={4} className="w-full px-5 py-3.5 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder-gray-500 focus:border-cyan-400/50 focus:outline-none transition-colors resize-none mb-4" style={{ fontSize: "0.9rem" }} />
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-xl hover:shadow-cyan-500/25 transition-all hover:scale-105 flex items-center gap-2" style={{ fontSize: "0.9rem", fontWeight: 600 }}><Send size={16} />{lang === "en" ? "Start Project" : "Mulai Proyek"}</button>
            <button className="px-8 py-3.5 rounded-full border border-white/20 text-white hover:bg-white/5 transition-all" style={{ fontSize: "0.9rem", fontWeight: 600 }}>{lang === "en" ? "Contact Us" : "Hubungi Kami"}</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
