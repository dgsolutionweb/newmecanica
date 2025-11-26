import React, { useState } from 'react';
import { X, Calendar, User, Phone, CheckCircle, MessageCircle } from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../constants';
import { BookingDetails } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<BookingDetails>({
    service: SERVICES[0].name,
    date: '',
    name: '',
    phone: ''
  });

  if (!isOpen) return null;

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Formata a mensagem
    const message = `Olá, vim pelo site da *DGSoluções*! Gostaria de agendar um serviço.
    
🚗 *Serviço:* ${formData.service}
📅 *Data Preferida:* ${formData.date}
👤 *Nome:* ${formData.name}
📱 *Contato:* ${formData.phone}`;

    // Codifica para URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp_number}?text=${encodedMessage}`;

    // Abre em nova aba
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const handleClose = () => {
    setFormData({ service: SERVICES[0].name, date: '', name: '', phone: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-deluxe-dark border border-deluxe-gray w-full max-w-md rounded-2xl shadow-2xl overflow-hidden relative animate-fade-in">
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="p-8">
          <h2 className="text-2xl font-display font-bold text-white mb-2 flex items-center gap-2">
            Agendar via WhatsApp
            <MessageCircle className="text-green-500" />
          </h2>
          <p className="text-gray-400 text-sm mb-6">Preencha os dados abaixo para iniciar seu atendimento prioritário.</p>
          
          <form onSubmit={handleWhatsAppRedirect} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Tipo de Serviço</label>
              <select 
                className="w-full bg-deluxe-black border border-deluxe-gray rounded-lg p-3 text-white focus:outline-none focus:border-deluxe-orange"
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
              >
                {SERVICES.map(s => (
                  <option key={s.id} value={s.name}>{s.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Data Preferida</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3.5 text-gray-500" size={16} />
                <input 
                  type="date" 
                  required
                  className="w-full bg-deluxe-black border border-deluxe-gray rounded-lg p-3 pl-10 text-white focus:outline-none focus:border-deluxe-orange [color-scheme:dark]"
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Seu Nome</label>
              <div className="relative">
                <User className="absolute left-3 top-3.5 text-gray-500" size={16} />
                <input 
                  type="text" 
                  required
                  placeholder="João da Silva"
                  className="w-full bg-deluxe-black border border-deluxe-gray rounded-lg p-3 pl-10 text-white focus:outline-none focus:border-deluxe-orange"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
            </div>

             <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Seu Telefone (opcional)</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3.5 text-gray-500" size={16} />
                <input 
                  type="tel" 
                  placeholder="(11) 98765-4321"
                  className="w-full bg-deluxe-black border border-deluxe-gray rounded-lg p-3 pl-10 text-white focus:outline-none focus:border-deluxe-orange"
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-lg transition-all mt-4 flex items-center justify-center gap-2 shadow-lg hover:shadow-green-900/20"
            >
              <MessageCircle size={20} />
              CONFIRMAR NO WHATSAPP
            </button>
            <p className="text-center text-xs text-gray-500 mt-2">
              Você será redirecionado para o WhatsApp da oficina.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;