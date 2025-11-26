import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 bg-deluxe-black relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
                <Quote className="absolute -top-10 -left-10 w-96 h-96 text-white transform -rotate-12" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                        O QUE DIZEM <span className="text-deluxe-orange">NOSSOS CLIENTES</span>
                    </h2>
                    <div className="h-1 w-24 bg-deluxe-orange mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-deluxe-dark/50 p-8 rounded-2xl border border-deluxe-gray hover:border-deluxe-orange/50 transition-all duration-300 group hover:-translate-y-2"
                        >
                            <div className="flex items-center gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={18}
                                        className={`${i < testimonial.rating ? 'text-deluxe-orange fill-deluxe-orange' : 'text-gray-600'} transition-colors`}
                                    />
                                ))}
                            </div>

                            <p className="text-gray-300 mb-8 italic leading-relaxed">"{testimonial.content}"</p>

                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-deluxe-orange/50 group-hover:border-deluxe-orange transition-colors"
                                />
                                <div>
                                    <h4 className="text-white font-bold font-display">{testimonial.name}</h4>
                                    <span className="text-sm text-gray-500">{testimonial.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
