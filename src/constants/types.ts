export interface ChatHeader {
  color: string;
  title: string;
}

export interface Chat {
  id: string;
  title: string;
  lastMessage?: string;
  color: string;
  time: string;
  avatar?: string;
}
