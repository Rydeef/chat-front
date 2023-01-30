export interface UserState {
  isLoading: boolean;
  userData: UserData | null | undefined;
}

export interface UserData {
  _id: string;
  userName: string;
  avatarColor: string;
}
