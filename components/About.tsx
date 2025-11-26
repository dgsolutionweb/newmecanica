import React from 'react';
import { CheckCircle, ShieldCheck } from 'lucide-react';
import { ABOUT_CONTENT } from '../constants';

const About = () => {
    return (
        <section id="about" className="py-20 bg-deluxe-dark relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Image Side */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-deluxe-orange/20 rounded-3xl blur-xl group-hover:bg-deluxe-orange/30 transition-colors duration-500"></div>
                        <div className="relative rounded-3xl overflow-hidden border border-deluxe-gray shadow-2xl">
                            <img
                                src={ABOUT_CONTENT.image}
                                alt="Oficina DG Soluções"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-deluxe-black/80 to-transparent"></div>

                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="flex items-center gap-3 bg-deluxe-black/90 backdrop-blur p-4 rounded-xl border border-deluxe-gray/50 w-fit">
                                    <ShieldCheck className="text-deluxe-orange w-8 h-8" />
                                    <div>
                                        <p className="text-white font-bold text-sm">Garantia Total</p>
                                        <p className="text-gray-400 text-xs">Em todos os serviços</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div>
                        <span className="text-deluxe-orange font-display tracking-widest text-sm uppercase mb-2 block">
                            {ABOUT_CONTENT.title}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                            {ABOUT_CONTENT.subtitle}
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            {ABOUT_CONTENT.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {ABOUT_CONTENT.features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-deluxe-black/30 border border-transparent hover:border-deluxe-gray transition-colors">
                                    <CheckCircle className="text-deluxe-orange w-5 h-5 flex-shrink-0" />
                                    <span className="text-gray-200 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
