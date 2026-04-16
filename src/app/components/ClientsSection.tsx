import { motion } from "motion/react";

interface Props { lang: "en" | "id" }

const clients = ["Gojek", "Pertamina", "Telkomsel", "Teh Pucuk", "Bank BCA", "Unilever", "Samsung", "Tokopedia", "XL Axiata", "Indosat", "BRI", "Grab"];

export function ClientsSection({ lang }: Props) {
  return (
    <section className="relative py-24 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <p className="text-cyan-400 tracking-widest mb-3" style={{ fontSize: "0.8rem", fontWeight: 600 }}>{lang === "en" ? "OUR CLIENTS" : "KLIEN KAMI"}</p>
          <h2 className="text-white mb-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 700 }}>{lang === "en" ? "Trusted by Leading Brands" : "Dipercaya Brand Terkemuka"}</h2>
          <p className="text-gray-500" style={{ fontSize: "0.9rem" }}>{lang === "en" ? "Trusted by leading brands across industries" : "Dipercaya oleh brand terkemuka dari berbagai industri"}</p>
        </motion.div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {clients.map((c, i) => (
            <motion.div key={c} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="h-20 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center hover:border-cyan-400/20 transition-all group">
              <span className="text-gray-500 group-hover:text-cyan-400 transition-colors" style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.05em" }}>{c}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
