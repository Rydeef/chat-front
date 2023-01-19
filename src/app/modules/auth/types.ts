export interface AuthState {
  isLoading: boolean;
  isAuthorized: boolean;
  userData: null | UserPayload;
}

export interface LoginPayload {
  userName: string;
  password: string;
}

export interface RegisterPayload {
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
}

export interface UserPayload {
  status: boolean;
  user: UserData;
  token: string;
}

interface UserData {
  avatarColor: string;
  email: string;
  password: string;
  userName: string;
}
