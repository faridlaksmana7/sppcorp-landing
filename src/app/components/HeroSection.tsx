import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

interface Props { lang: "en" | "id"; }

function AnimatedGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId: number;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);
    let t = 0;
    const draw = () => {
      t += 0.005;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const spacing = 60;
      ctx.strokeStyle = "rgba(56,189,248,0.06)";
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += spacing) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke(); }
      for (let y = 0; y < canvas.height; y += spacing) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke(); }
      for (let i = 0; i < 40; i++) {
        const px = ((Math.sin(t + i * 0.7) + 1) / 2) * canvas.width;
        const py = ((Math.cos(t + i * 1.1) + 1) / 2) * canvas.height;
        const r = 1.5 + Math.sin(t + i) * 0.5;
        ctx.beginPath(); ctx.arc(px, py, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56,189,248,${0.15 + Math.sin(t + i) * 0.1})`; ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

export function HeroSection({ lang }: Props) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#060E1F]">
      <AnimatedGrid />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1C3D]/60 via-transparent to-[#060E1F]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-[100px]" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-cyan-400 tracking-widest mb-6" style={{ fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.15em" }}>
            {lang === "en" ? "FULL-SERVICE CREATIVE & ACTIVATION PARTNER" : "PARTNER KREATIF & AKTIVASI LAYANAN PENUH"}
          </p>
          <h1 className="text-white mb-6" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1.1 }}>
            {lang === "en" ? "Building Impactful Brands Through Integrated Experience" : "Membangun Brand Berdampak Melalui Pengalaman Terintegrasi"}
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10" style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
            {lang === "en" ? "We combine strategy, creativity, and execution to deliver high-impact branding, activation, and digital solutions across Indonesia." : "Kami menggabungkan strategi, kreativitas, dan eksekusi untuk menghadirkan solusi branding, aktivasi, dan digital berdampak tinggi di seluruh Indonesia."}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#contact" className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-xl hover:shadow-cyan-500/25 transition-all hover:scale-105" style={{ fontSize: "0.9rem", fontWeight: 600 }}>
              {lang === "en" ? "Start Your Project" : "Mulai Proyek Anda"}
            </a>
            <a href="#portfolio" className="px-8 py-3.5 rounded-full border border-white/20 text-white hover:bg-white/5 transition-all hover:scale-105" style={{ fontSize: "0.9rem", fontWeight: 600 }}>
              {lang === "en" ? "View Portfolio" : "Lihat Portfolio"}
            </a>
          </div>
        </motion.div>
      </div>
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500" animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}
