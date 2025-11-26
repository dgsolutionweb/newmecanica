import React, { useState } from 'react';
import { Phone, MapPin, Wrench, Menu, X, ArrowRight, Cog, Calendar } from 'lucide-react';
import { SERVICES, COMPANY_INFO, NAV_LINKS } from './constants';

import BookingModal from './components/BookingModal';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-deluxe-black text-white overflow-x-hidden font-sans selection:bg-deluxe-orange selection:text-white">

      {/* Background Vertical Text - Decorative */}
      <div className="fixed left-0 top-0 bottom-0 w-24 hidden xl:flex items-center justify-center pointer-events-none z-0 opacity-10">
        <h1 className="text-[150px] font-black font-display tracking-widest text-white vertical-text whitespace-nowrap">
          DGSOLUÇÕES
        </h1>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navigation / Top Bar */}
        <header className="pt-8 pb-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 sticky top-0 z-50 bg-deluxe-black/90 backdrop-blur-md transition-all duration-300">
          <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto justify-between">

            {/* Logo Area - Integrated Style */}
            <div className="flex items-center gap-3 group cursor-default select-none">
              <div className="relative w-14 h-14 flex items-center justify-center">
                {/* Gear Icon (Back) */}
                <Cog className="w-14 h-14 text-orange-900 absolute animate-[spin_10s_linear_infinite] opacity-80" strokeWidth={1.5} />
                {/* Wrench Icon (Front) */}
                <Wrench className="w-8 h-8 text-gray-200 absolute z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" strokeWidth={2} />
              </div>
              <div className="flex flex-col justify-center h-full">
                <h2 className="text-2xl md:text-3xl font-bold font-display tracking-tight text-white leading-none">
                  DG<span className="text-deluxe-orange">Soluções</span>
                </h2>
                <span className="text-sm md:text-base text-gray-400 font-display tracking-[0.2em] leading-none mt-1 group-hover:text-deluxe-orange transition-colors duration-300">
                  MECÂNICAS
                </span>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-gray-300 hover:text-white hover:text-deluxe-orange transition-colors uppercase tracking-wide"
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="bg-deluxe-orange hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-deluxe-orange/20"
            >
              <Calendar size={16} />
              AGENDAR
            </button>
          </div>
        </header>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mb-8 bg-deluxe-dark p-4 rounded-lg border border-deluxe-gray animate-fade-in-up">
            <div className="flex items-center gap-2 text-deluxe-orange mb-4 font-bold">
              <Phone size={18} />
              <span>{COMPANY_INFO.phone}</span>
            </div>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map(item => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="py-2 text-left text-gray-300 hover:text-white border-b border-gray-800 last:border-0"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => {
                  setIsBookingOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="mt-4 w-full bg-deluxe-orange py-3 rounded-lg text-white font-bold"
              >
                AGENDAR AGORA
              </button>
            </nav>
          </div>
        )}

        {/* Hero Section */}
        <main id="home" className="mt-8 lg:mt-12">

          {/* Car Image Area */}
          <div className="relative w-full aspect-[4/5] sm:aspect-[16/9] md:aspect-[21/9] lg:aspect-[2.5/1] bg-gradient-to-b from-deluxe-gray/30 to-deluxe-black rounded-3xl overflow-hidden mb-16 group shadow-2xl shadow-blue-900/10">
            <div className="absolute inset-0 bg-[url('/hero.jpeg')] bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-deluxe-black via-transparent to-transparent"></div>

            {/* Overlay Contact Info */}
            <div className="absolute top-8 right-8 hidden md:flex items-center gap-3 bg-deluxe-black/80 backdrop-blur px-6 py-3 rounded-full border border-deluxe-gray/50">
              <div className="bg-deluxe-orange p-2 rounded-full">
                <Phone size={16} fill="white" />
              </div>
              <span className="font-display font-bold tracking-wider">{COMPANY_INFO.phone}</span>
            </div>

            {/* Hero Content Overlay */}
            <div className="absolute bottom-0 left-0 p-6 md:p-16 w-full md:w-2/3">
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black leading-none tracking-tighter mb-4 md:mb-6 text-white drop-shadow-2xl">
                EXCELÊNCIA<br />AUTOMOTIVA
              </h1>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="bg-deluxe-orange hover:bg-orange-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold tracking-wide transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-deluxe-orange/20 text-sm md:text-base"
                >
                  AGENDAR SERVIÇO <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => scrollToSection('#services')}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold tracking-wide transition-all border border-white/20 flex items-center justify-center text-sm md:text-base"
                >
                  CONHECER SERVIÇOS
                </button>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div id="services" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 lg:pb-20 pt-6 lg:pt-10">

            {/* Left Column: Title */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black leading-none tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500">
                NOSSOS<br />SERVIÇOS
              </h2>
              <p className="text-gray-400 text-base md:text-lg max-w-md">
                Oferecemos uma gama completa de serviços para manter seu veículo em perfeito estado. Tecnologia de ponta e profissionais qualificados.
              </p>
            </div>

            {/* Right Column: Services List & Promo */}
            <div className="lg:col-span-7 space-y-8">

              {/* Tagline */}
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-deluxe-orange"></div>
                <span className="font-display tracking-[0.2em] text-sm text-gray-400 uppercase">{COMPANY_INFO.tagline}</span>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {SERVICES.map((service) => (
                  <div
                    key={service.id}
                    className="bg-deluxe-dark/50 rounded-xl border border-deluxe-gray hover:border-deluxe-orange transition-all duration-300 group hover:-translate-y-1 overflow-hidden flex flex-col"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deluxe-black/80 to-transparent opacity-60"></div>
                      <div className="absolute bottom-3 left-3 bg-deluxe-orange p-2 rounded-lg">
                        <Wrench size={20} className="text-white" />
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-deluxe-orange transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-sm text-gray-400 mb-4 flex-1">
                        Serviço especializado com garantia de qualidade e peças originais.
                      </p>

                      <button
                        onClick={() => setIsBookingOpen(true)}
                        className="w-full py-2 border border-deluxe-gray rounded-lg text-sm font-bold text-gray-300 hover:bg-deluxe-orange hover:text-white hover:border-deluxe-orange transition-all uppercase tracking-wide"
                      >
                        Agendar
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </main>
      </div>

      <About />
      <Testimonials />
      <Contact onScheduleClick={() => setIsBookingOpen(true)} />

      {/* Footer Bar */}
      <footer className="border-t border-deluxe-gray py-8 bg-deluxe-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. Todos os direitos reservados.</p>

          <div className="flex gap-4">
            <div className="w-6 h-6 bg-white rounded-full border-2 border-deluxe-gray cursor-pointer hover:scale-110 transition-transform"></div>
            <div className="w-6 h-6 bg-deluxe-orange rounded-full border-2 border-deluxe-gray cursor-pointer hover:scale-110 transition-transform"></div>
            <div className="w-6 h-6 bg-blue-600 rounded-full border-2 border-deluxe-gray cursor-pointer hover:scale-110 transition-transform"></div>
          </div>
        </div>
      </footer>


      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}

export default App;