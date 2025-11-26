import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

interface ContactProps {
    onScheduleClick: () => void;
}

const Contact = ({ onScheduleClick }: ContactProps) => {
    return (
        <section id="contact" className="py-12 md:py-20 bg-deluxe-black relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 md:mb-6">
                            ENTRE EM <span className="text-deluxe-orange">CONTATO</span>
                        </h2>
                        <p className="text-gray-400 text-base md:text-lg mb-8 md:mb-12">
                            Estamos prontos para atender você e resolver qualquer problema com seu veículo. Agende uma visita ou tire suas dúvidas.
                        </p>

                        <div className="space-y-6 md:space-y-8 mb-8 md:mb-12">
                            <div className="flex items-start gap-4 md:gap-6">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-deluxe-dark rounded-full flex items-center justify-center border border-deluxe-gray shrink-0">
                                    <MapPin className="text-deluxe-orange w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base md:text-lg mb-1">Endereço</h4>
                                    <p className="text-gray-400 text-sm md:text-base">{COMPANY_INFO.address_line1}</p>
                                    <p className="text-gray-400 text-sm md:text-base">{COMPANY_INFO.address_line2}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 md:gap-6">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-deluxe-dark rounded-full flex items-center justify-center border border-deluxe-gray shrink-0">
                                    <Phone className="text-deluxe-orange w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base md:text-lg mb-1">Telefone / WhatsApp</h4>
                                    <p className="text-gray-400 text-sm md:text-base">{COMPANY_INFO.phone}</p>
                                    <a
                                        href={`https://wa.me/${COMPANY_INFO.whatsapp_number}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-deluxe-orange hover:text-white transition-colors text-sm mt-1 inline-flex items-center gap-1"
                                    >
                                        Iniciar conversa <ArrowRight size={14} />
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 md:gap-6">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-deluxe-dark rounded-full flex items-center justify-center border border-deluxe-gray shrink-0">
                                    <Clock className="text-deluxe-orange w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base md:text-lg mb-1">Horário de Funcionamento</h4>
                                    <p className="text-gray-400 text-sm md:text-base">Segunda a Sexta: 08:00 - 18:00</p>
                                    <p className="text-gray-400 text-sm md:text-base">Sábado: 08:00 - 12:00</p>
                                </div>
                            </div>
                        </div>

                        {/* Promo Box Moved Here */}
                        <div className="bg-deluxe-orange p-6 md:p-8 rounded-2xl relative overflow-hidden group cursor-pointer max-w-md" onClick={onScheduleClick}>
                            <div className="absolute right-0 top-0 p-24 md:p-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-all"></div>

                            <h4 className="text-lg md:text-xl font-light mb-1 uppercase">Agende Agora</h4>
                            <div className="text-4xl md:text-5xl font-display font-bold mb-2">40%<span className="text-xl md:text-2xl ml-1 align-top">OFF</span></div>
                            <div className="flex items-center gap-2 mt-4 text-xs md:text-sm font-bold bg-black/20 w-fit px-3 py-1.5 md:px-4 md:py-2 rounded-full">
                                <span>AGENDAR NO WHATSAPP</span>
                                <ArrowRight size={14} />
                            </div>
                        </div>
                    </div>

                    {/* Map / Form Placeholder */}
                    <div className="bg-deluxe-dark rounded-3xl p-2 border border-deluxe-gray h-[300px] md:h-[400px] lg:h-auto overflow-hidden relative group">
                        {/* Simple Map Placeholder using an iframe or image */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197586021598!2d-46.65657118502227!3d-23.56134958468294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                            allowFullScreen={true}
                            loading="lazy"
                            className="rounded-2xl w-full h-full group-hover:filter-none transition-all duration-500"
                        ></iframe>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
