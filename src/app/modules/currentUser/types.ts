export interface UserState {
  isLoading: boolean;
  userData: UserData | null | undefined;
}

export interface UserData {
  _id: string;
  email: string;
  userName: string;
}
