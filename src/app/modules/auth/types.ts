export interface AuthState {
  isLoading: boolean;
  isAuthorized: boolean;
  userData: null | object;
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
