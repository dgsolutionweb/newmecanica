export interface ServiceItem {
  id: string;
  name: string;
  image: string;
}

export enum ChatSender {
  USER = 'user',
  BOT = 'bot'
}

export interface ChatMessage {
  id: string;
  sender: ChatSender;
  text: string;
}

export interface BookingDetails {
  service: string;
  date: string;
  name: string;
  phone: string;
}