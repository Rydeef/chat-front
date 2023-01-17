export interface ChatState {
  isLoading: boolean;
  selectedChat: MessageItem[] | null;
  chatList: Chat[] | null;
}

export interface MessageItem {
  id: string;
  data: {
    title: string;
    color: string;
  };
  messages: { id: string; userName: string; message: string; time: string }[];
}

export interface Chat {
  id: string;
  title: string;
  lastMessage?: string;
  color: string;
  time: string;
  avatar?: string;
}
