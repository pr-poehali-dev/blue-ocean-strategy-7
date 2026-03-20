export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-neutral-950 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between border-t-4 border-[#e30613]">
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-500 text-xs sm:text-sm tracking-widest">Модели</h3>
                <a href="#granta" className="text-white hover:text-[#e30613] transition-colors duration-300 text-sm sm:text-base">
                  LADA Granta
                </a>
                <a href="#vesta" className="text-white hover:text-[#e30613] transition-colors duration-300 text-sm sm:text-base">
                  LADA Vesta
                </a>
                <a href="#niva" className="text-white hover:text-[#e30613] transition-colors duration-300 text-sm sm:text-base">
                  LADA Niva
                </a>
                <a href="#largus" className="text-white hover:text-[#e30613] transition-colors duration-300 text-sm sm:text-base">
                  LADA Largus
                </a>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-500 text-xs sm:text-sm tracking-widest">Покупателям</h3>
                <a href="#credit" className="text-white hover:text-[#e30613] transition-colors duration-300 text-sm sm:text-base">
                  Кредит и лизинг
                </a>
                <a href="#trade-in" className="text-white hover:text-[#e30613] transition-colors duration-300 text-sm sm:text-base">
                  Trade-in
                </a>
                <a href="#service" className="text-white hover:text-[#e30613] transition-colors duration-300 text-sm sm:text-base">
                  Сервис и ТО
                </a>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-500 text-xs sm:text-sm tracking-widest">Контакты</h3>
                <a href="tel:+78001234567" className="text-white hover:text-[#e30613] transition-colors duration-300 text-sm sm:text-base">
                  8 800 123-45-67
                </a>
                <a href="https://www.lada.ru" target="_blank" rel="noreferrer" className="text-white hover:text-[#e30613] transition-colors duration-300 text-sm sm:text-base">
                  lada.ru
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1 className="text-[18vw] sm:text-[16vw] lg:text-[14vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-10 text-white font-bold tracking-tight">
                LADA
              </h1>
              <div className="text-right">
                <p className="text-neutral-500 text-xs">© {new Date().getFullYear()} LADA. Все права защищены.</p>
                <p className="text-neutral-600 text-xs mt-1">Официальный дилер</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
