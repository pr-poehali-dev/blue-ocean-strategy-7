interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-20 px-6 py-4 ${className ?? ""}`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="text-white font-bold text-2xl tracking-widest uppercase">LADA</div>
          <div className="w-px h-6 bg-white/40" />
          <div className="text-white/80 text-xs uppercase tracking-wider">Официальный дилер</div>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#models" className="text-white hover:text-[#e30613] transition-colors duration-300 uppercase text-sm tracking-wide">
            Модели
          </a>
          <a href="#advantages" className="text-white hover:text-[#e30613] transition-colors duration-300 uppercase text-sm tracking-wide">
            Преимущества
          </a>
          <a href="#granta" className="text-white hover:text-[#e30613] transition-colors duration-300 uppercase text-sm tracking-wide">
            ГРANTA
          </a>
          <a
            href="tel:+78001234567"
            className="bg-[#e30613] text-white px-4 py-2 text-sm uppercase tracking-wide hover:bg-red-700 transition-colors duration-300"
          >
            8 800 123-45-67
          </a>
        </nav>
      </div>
    </header>
  );
}
