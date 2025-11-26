import { ServiceItem } from './types';

export const SERVICES: ServiceItem[] = [
  { id: '1', name: 'Mecânica Geral', image: '/mecanicageral.jpeg' },
  { id: '2', name: 'Troca de Óleo', image: '/oleo.jpeg' },
  { id: '3', name: 'Reparo de Freios', image: '/freios.jpeg' },
  { id: '4', name: 'Injeção Eletrônica', image: '/injecao.jpeg' },
  { id: '5', name: 'Suspensão', image: '/suspensao.jpeg' },
  { id: '6', name: 'Baterias', image: '/bateria.jpeg' },
];

export const COMPANY_INFO = {
  name: 'DGSoluções Mecanicas',
  address_line1: 'Rua 14b, 64',
  address_line2: 'Guaíra, SP 14790-000',
  phone: '(17) 999975-4390',
  whatsapp_number: '55179999754390', // Formato internacional sem + ou traços
  website: 'www.dgsolutionweb.com.br',
  tagline: 'PEÇAS ORIGINAIS'
};

export const NAV_LINKS = [
  { name: 'Início', href: '#home' },
  { name: 'Serviços', href: '#services' },
  { name: 'Sobre', href: '#about' },
  { name: 'Depoimentos', href: '#testimonials' },
  { name: 'Contato', href: '#contact' },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Carlos Silva',
    role: 'Motorista de App',
    content: 'Excelente serviço! Meu carro ficou novo em folha. O atendimento foi rápido e muito profissional. Recomendo a todos!',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5
  },
  {
    id: 2,
    name: 'Ana Oliveira',
    role: 'Empresária',
    content: 'Confiança é tudo quando se trata de mecânica. A equipe da DG Soluções sempre foi transparente e honesta comigo.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5
  },
  {
    id: 3,
    name: 'Roberto Santos',
    role: 'Cliente Antigo',
    content: 'Faço a revisão do meu carro aqui há anos. Nunca tive problemas. Preço justo e qualidade impecável.',
    image: 'https://randomuser.me/api/portraits/men/67.jpg',
    rating: 4
  }
];

export const ABOUT_CONTENT = {
  title: 'Sobre Nós',
  subtitle: 'Excelência e Tradição em Serviços Automotivos',
  description: 'Com mais de 15 anos de experiência no mercado, a DG Soluções Automotivas se destaca pela qualidade técnica e atendimento personalizado. Nossa equipe é formada por profissionais altamente qualificados e apaixonados por carros.',
  features: [
    'Equipe Certificada',
    'Equipamentos de Última Geração',
    'Garantia em Todos os Serviços',
    'Atendimento Ágil'
  ],
  image: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
};