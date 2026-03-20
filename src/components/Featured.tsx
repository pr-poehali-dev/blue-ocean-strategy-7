import Icon from "@/components/ui/icon";

const advantages = [
  {
    icon: "Shield",
    title: "Гарантия до 6 лет",
    subtitle: "или до 180 000 км",
    desc: "Расширенная заводская гарантия на все модели LADA без скрытых условий",
  },
  {
    icon: "Percent",
    title: "Первоначальный взнос",
    subtitle: "от 0%",
    desc: "Доступное автокредитование — уедете на новом автомобиле уже сегодня",
  },
  {
    icon: "Award",
    title: "Технологии Volvo",
    subtitle: "мировой стандарт",
    desc: "Платформы и решения, разработанные совместно с инженерами Volvo Group",
  },
  {
    icon: "RefreshCw",
    title: "Выгода по Trade-in",
    subtitle: "обменяйте старое авто",
    desc: "Сдайте ваш автомобиль в зачёт — получите дополнительную скидку на новый",
  },
];

export default function Featured() {
  return (
    <section id="advantages" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#e30613] text-xs uppercase tracking-widest font-semibold">Почему LADA</span>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mt-3">
            Преимущества,<br />которые решают
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-neutral-200">
          {advantages.map((item, i) => (
            <div
              key={i}
              className="group p-8 border-r border-b border-neutral-200 last:border-r-0 hover:bg-[#e30613] transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 flex items-center justify-center border border-neutral-300 group-hover:border-white/40 mb-6 transition-colors">
                <Icon name={item.icon as "Shield"} size={22} className="text-[#e30613] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 group-hover:text-white transition-colors mb-1">
                {item.title}
              </h3>
              <p className="text-[#e30613] group-hover:text-white/80 font-semibold text-sm mb-3 transition-colors">
                {item.subtitle}
              </p>
              <p className="text-neutral-500 group-hover:text-white/80 text-sm leading-relaxed transition-colors">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
