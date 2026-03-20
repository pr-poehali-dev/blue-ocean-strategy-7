import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@/components/ui/icon";

const colors = [
  { name: "Белый", hex: "#F5F5F5", border: "#ccc" },
  { name: "Красный", hex: "#C0392B", border: "#C0392B" },
  { name: "Чёрный", hex: "#1a1a1a", border: "#1a1a1a" },
  { name: "Синий", hex: "#1a3a6e", border: "#1a3a6e" },
  { name: "Серебро", hex: "#A8A9AD", border: "#A8A9AD" },
];

const slides = [
  {
    src: "https://cdn.poehali.dev/projects/3a888b7d-962d-4f4f-8d2f-6908d3764042/files/1de0cc87-6a7a-4845-88a8-d42cb1773590.jpg",
    label: "Вид спереди",
  },
  {
    src: "https://cdn.poehali.dev/projects/3a888b7d-962d-4f4f-8d2f-6908d3764042/files/2b213574-e049-46f1-a0e2-3c3219a172b5.jpg",
    label: "Вид сбоку",
  },
  {
    src: "https://cdn.poehali.dev/projects/3a888b7d-962d-4f4f-8d2f-6908d3764042/files/00467a73-82cc-40b3-b75c-a573b45ec4b6.jpg",
    label: "В городе",
  },
];

const utp = [
  { icon: "Tag", text: "Выгода до 500 000 ₽" },
  { icon: "Percent", text: "Первоначальный взнос от 0%" },
  { icon: "Gift", text: "Подарок: 4 ТО бесплатно" },
  { icon: "CreditCard", text: "В кредит под 4,7%" },
];

export default function GrantaCard() {
  const [activeColor, setActiveColor] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section id="granta" className="bg-neutral-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#e30613] text-xs uppercase tracking-widest font-semibold">Горячее предложение</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            LADA <span className="text-[#e30613]">GRANTA</span>
          </h2>
          <p className="text-neutral-400 mt-3 text-lg">Лидер продаж в России — доступный и надёжный</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="relative bg-neutral-900 overflow-hidden aspect-[4/3]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeSlide}
                  src={slides[activeSlide].src}
                  alt={slides[activeSlide].label}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.35 }}
                  style={{ filter: activeColor > 0 ? `hue-rotate(${activeColor * 40}deg) saturate(1.2)` : "none" }}
                />
              </AnimatePresence>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex justify-between items-end">
                <span className="text-white text-sm">{slides[activeSlide].label}</span>
                <span className="text-white/60 text-xs">{activeSlide + 1} / {slides.length}</span>
              </div>
            </div>

            <div className="flex gap-2 mt-3">
              {slides.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className={`flex-1 aspect-video overflow-hidden border-2 transition-all duration-200 ${activeSlide === i ? "border-[#e30613]" : "border-transparent opacity-60 hover:opacity-90"}`}
                >
                  <img src={s.src} alt={s.label} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            <div className="mt-6">
              <p className="text-neutral-400 text-xs uppercase tracking-wider mb-3">Цвет кузова: <span className="text-white">{colors[activeColor].name}</span></p>
              <div className="flex gap-3">
                {colors.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveColor(i)}
                    title={c.name}
                    className={`w-8 h-8 rounded-full transition-all duration-200 ${activeColor === i ? "ring-2 ring-offset-2 ring-offset-neutral-950 ring-[#e30613] scale-110" : "hover:scale-105"}`}
                    style={{ backgroundColor: c.hex, border: `2px solid ${c.border}` }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {utp.map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-neutral-900 p-4 border border-neutral-800">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#e30613]/10 flex-shrink-0">
                    <Icon name={item.icon as "Tag"} size={18} className="text-[#e30613]" />
                  </div>
                  <span className="text-white text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-6 mb-8">
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-4xl font-bold text-white">от 750 000 ₽</span>
              </div>
              <p className="text-neutral-500 text-sm">или от 14 900 ₽ / мес. в кредит под 4,7%</p>
            </div>

            <div className="flex flex-col gap-3">
              <button className="group w-full bg-[#e30613] hover:bg-red-700 text-white py-4 uppercase tracking-wider font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2">
                <Icon name="Car" size={18} />
                Записаться на пробную поездку
              </button>
              <button className="group w-full bg-transparent border border-white/30 hover:border-white text-white py-4 uppercase tracking-wider font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2">
                <Icon name="Settings" size={18} />
                Подобрать комплектацию
              </button>
              <button className="group w-full bg-transparent border border-[#e30613]/50 hover:border-[#e30613] text-[#e30613] py-4 uppercase tracking-wider font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2">
                <Icon name="Tag" size={18} />
                Узнать цену по акции
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
