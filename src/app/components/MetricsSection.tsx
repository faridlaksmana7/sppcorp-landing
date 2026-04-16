import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

interface Props { lang: "en" | "id" }

const metrics = [
  { num: 10, suffix: "M+", en: "Reach Audience", id: "Jangkauan Audiens" },
  { num: 500, suffix: "+", en: "Projects Delivered", id: "Proyek Selesai" },
  { num: 30, suffix: "+", en: "Cities Covered", id: "Kota Terjangkau" },
  { num: 100, suffix: "+", en: "Brand Collaborations", id: "Kolaborasi Brand" },
  { num: 1000, suffix: "+", en: "Activation Days", id: "Hari Aktivasi" },
  { num: 80, suffix: "+", en: "OOH Strategic Points", id: "Titik OOH Strategis" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const dur = 2000; const start = performance.now();
        const tick = (now: number) => { const p = Math.min((now - start) / dur, 1); setCount(Math.floor(p * target)); if (p < 1) requestAnimationFrame(tick); };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);
  return (<div ref={ref} className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800 }}>{count.toLocaleString()}{suffix}</div>);
}

export function MetricsSection({ lang }: Props) {
  return (
    <section className="relative py-24 bg-[#060E1F] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-cyan-400 tracking-widest mb-3" style={{ fontSize: "0.8rem", fontWeight: 600 }}>{lang === "en" ? "OUR IMPACT" : "DAMPAK KAMI"}</p>
          <h2 className="text-white" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 700 }}>{lang === "en" ? "Driven by Results, Proven by Numbers" : "Didukung Data, Dibuktikan Hasil"}</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {metrics.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center group">
              <Counter target={m.num} suffix={m.suffix} />
              <p className="text-gray-400 mt-2" style={{ fontSize: "0.8rem" }}>{lang === "en" ? m.en : m.id}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
