export interface ChatHeader {
  color: string;
  nameChat: string;
}

export interface Chat {
  id: string;
  title: string;
  lastMessage?: string;
  color: string;
  time: string;
  avatar?: string;
}
