import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  const [timeLeft, setTimeLeft] = useState({ hours: 47, minutes: 59, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        clearInterval(timer);
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <img
          src="https://cdn.poehali.dev/projects/3a888b7d-962d-4f4f-8d2f-6908d3764042/files/00467a73-82cc-40b3-b75c-a573b45ec4b6.jpg"
          alt="LADA — линейка автомобилей в городе"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
        <div className="inline-block bg-[#e30613] text-white text-xs uppercase tracking-widest px-4 py-1 mb-6 font-semibold">
          Специальное предложение — только 3 дня!
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-tight">
          СПЕЦ. ЦЕНА<br />
          <span className="text-[#e30613]">НА ВСЕ МОДЕЛИ LADA</span>
        </h1>
        <p className="text-lg md:text-2xl mb-8 opacity-90 font-light">
          Выгода для вас — до <span className="font-bold text-white">500 000 ₽</span>
        </p>

        <div className="flex justify-center gap-4 mb-10">
          {[
            { label: "Часов", value: pad(timeLeft.hours) },
            { label: "Минут", value: pad(timeLeft.minutes) },
            { label: "Секунд", value: pad(timeLeft.seconds) },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="bg-black/60 border border-white/20 backdrop-blur-sm w-20 md:w-28 h-20 md:h-28 flex items-center justify-center">
                <span className="text-3xl md:text-5xl font-bold tabular-nums">{item.value}</span>
              </div>
              <span className="text-xs uppercase tracking-widest mt-2 text-white/70">{item.label}</span>
            </div>
          ))}
        </div>

        <button className="group bg-[#e30613] hover:bg-red-700 text-white px-10 py-5 text-base md:text-lg uppercase tracking-widest font-bold transition-all duration-300 flex items-center gap-3 mx-auto">
          Узнать цену
          <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>

        <p className="text-xs text-white/50 mt-4 uppercase tracking-wider">
          Грanta • Веста • Нива • Ларгус
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <Icon name="ChevronDown" size={28} className="text-white/60" />
      </div>
    </div>
  );
}
