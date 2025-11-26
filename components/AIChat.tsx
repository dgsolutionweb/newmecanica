import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { MessageSquare, Send, X, Bot, User, Wrench } from 'lucide-react';
import { ChatMessage, ChatSender } from '../types';
import { SERVICES } from '../constants';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'init', sender: ChatSender.BOT, text: "Olá! Sou o Mecânico Virtual da Deluxe. Descreva o problema do seu carro e eu sugerirei um serviço." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: ChatSender.USER,
      text: input
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const serviceNames = SERVICES.map(s => s.name).join(', ');
      
      const systemInstruction = `
        Você é um assistente mecânico especialista da 'Deluxe Auto Services'. 
        Seu objetivo é ajudar os clientes a identificar possíveis problemas com seus carros com base em suas descrições 
        e recomendar serviços específicos oferecidos por nossa oficina.
        
        Nossos serviços disponíveis são: ${serviceNames}.
        
        Regras:
        1. Seja conciso, profissional e prestativo.
        2. Se um usuário descrever um sintoma (por exemplo, "freios rangendo"), explique o que pode ser e recomende o serviço correspondente (por exemplo, "Reparo de Freios").
        3. Sempre termine com um convite amigável para agendar um horário usando o botão "AGENDE AGORA" na página.
        4. Não ofereça serviços que não estejam na lista, mas você pode sugerir uma inspeção geral ("Ajuste de Motor") se não tiver certeza.
        5. Responda sempre em Português do Brasil.
      `;

      const response: GenerateContentResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          ...messages.map(m => ({
            role: m.sender === ChatSender.USER ? 'user' : 'model',
            parts: [{ text: m.text }]
          })),
          { role: 'user', parts: [{ text: input }] }
        ],
        config: {
          systemInstruction: systemInstruction,
        }
      });

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: ChatSender.BOT,
        text: response.text || "Estou com problemas para conectar ao servidor de diagnóstico. Por favor, tente novamente."
      };

      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        sender: ChatSender.BOT,
        text: "Desculpe, estou offline no momento. Por favor, ligue para nós diretamente."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
          isOpen ? 'bg-deluxe-gray text-white rotate-90' : 'bg-deluxe-orange text-white'
        }`}
        title="Falar com Mecânico IA"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-deluxe-dark border border-deluxe-gray rounded-xl shadow-2xl z-40 flex flex-col overflow-hidden animate-fade-in-up" style={{ height: '500px', maxHeight: '80vh' }}>
          {/* Header */}
          <div className="bg-deluxe-orange p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Wrench className="text-white" size={20} />
              <h3 className="font-display font-bold text-white">Mecânico IA</h3>
            </div>
            <span className="text-xs bg-black/20 px-2 py-1 rounded text-white">Online</span>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin bg-deluxe-black">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 ${msg.sender === ChatSender.USER ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  msg.sender === ChatSender.USER ? 'bg-deluxe-gray' : 'bg-deluxe-orange'
                }`}>
                  {msg.sender === ChatSender.USER ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
                  msg.sender === ChatSender.USER 
                    ? 'bg-deluxe-gray text-white rounded-tr-none' 
                    : 'bg-deluxe-dark border border-deluxe-gray text-gray-200 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-2">
                 <div className="w-8 h-8 rounded-full bg-deluxe-orange flex items-center justify-center shrink-0">
                  <Bot size={16} />
                </div>
                <div className="bg-deluxe-dark border border-deluxe-gray p-3 rounded-lg rounded-tl-none">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-deluxe-dark border-t border-deluxe-gray">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Descreva o problema do carro..."
                className="flex-1 bg-deluxe-black border border-deluxe-gray rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-deluxe-orange transition-colors"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-deluxe-orange text-white p-2 rounded-lg hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;