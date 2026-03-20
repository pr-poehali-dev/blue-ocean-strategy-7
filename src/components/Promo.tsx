import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/3a888b7d-962d-4f4f-8d2f-6908d3764042/files/00467a73-82cc-40b3-b75c-a573b45ec4b6.jpg"
            alt="LADA в городе"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-[#e30613]/30" />
        </motion.div>
      </div>

      <h3 className="absolute top-12 right-6 text-white/70 uppercase z-10 text-sm tracking-widest">
        Российское качество
      </h3>

      <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <p className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Более <span className="text-[#e30613]">80 лет</span> на дорогах России.
            Надёжность, проверенная временем.
          </p>
          <button className="mt-10 bg-[#e30613] hover:bg-red-700 text-white px-10 py-4 uppercase tracking-widest font-bold text-sm transition-all duration-300">
            Смотреть все модели
          </button>
        </div>
      </div>
    </div>
  );
}
