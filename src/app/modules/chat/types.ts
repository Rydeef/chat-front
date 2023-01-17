export interface ChatState {
  isLoading: boolean;
  selectedChat: any;
  chatList: Chat[] | null;
}

export interface MessageItem {
  id: string;
  data: {
    color: string;
    title: string;
  };
  messages: { id: string;message: string;   time: string; userName: string}[];
}

export interface Chat {
  id: string;
  title: string;
  lastMessage?: string;
  color: string;
  time: string;
  avatar?: string;
}
