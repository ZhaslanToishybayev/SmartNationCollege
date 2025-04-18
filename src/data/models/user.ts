export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'admin' | 'staff';
  avatar?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}
