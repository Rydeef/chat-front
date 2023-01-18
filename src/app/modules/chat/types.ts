export interface ChatState {
  isLoadingMessages: boolean;
  isLoadingList: boolean;
  activeChat: ActiveChat | null;
  selectedChat: any;
  chatList: Chat[] | null;
}

export interface ActiveChat {
  id?: string;
  userName: string;
  avatarColor: string;
}

export interface SendMessage {
  id: string;
  message: string;
}

export interface MessageItem {
  id: string;
  data: {
    color: string;
    title: string;
  };
  messages: { id: string; message: string; time: string; userName: string }[];
}

export interface Chat {
  _id: string;
  avatarColor: string;
  userName: string;
}
