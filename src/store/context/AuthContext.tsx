"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, AuthState } from '@/data/models/user';
import { getLocalStorage, setLocalStorage, removeLocalStorage } from '@/utils/storage';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>(initialState);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Check if user is stored in localStorage
        const storedUser = getLocalStorage<User | null>('user', null);

        if (storedUser) {
          setAuthState({
            user: storedUser,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
        } else {
          setAuthState({
            ...initialState,
            isLoading: false,
          });
        }
      } catch (error) {
        setAuthState({
          ...initialState,
          isLoading: false,
          error: 'Failed to authenticate',
        });
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setAuthState((prev) => ({ ...prev, isLoading: true, error: null }));

      // Mock login - replace with actual API call
      // const response = await apiClient.post<{ user: User }>('/auth/login', { email, password });

      // Mock user for demo purposes
      const mockUser: User = {
        id: '1',
        name: 'Test User',
        email,
        role: 'student',
      };

      setLocalStorage('user', mockUser);

      setAuthState({
        user: mockUser,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });

      return true;
    } catch (error) {
      setAuthState((prev) => ({
        ...prev,
        isLoading: false,
        error: 'Invalid email or password',
      }));

      return false;
    }
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      setAuthState((prev) => ({ ...prev, isLoading: true, error: null }));

      // Mock registration - replace with actual API call
      // const response = await apiClient.post<{ user: User }>('/auth/register', { name, email, password });

      // Mock user for demo purposes
      const mockUser: User = {
        id: '1',
        name,
        email,
        role: 'student',
      };

      setLocalStorage('user', mockUser);

      setAuthState({
        user: mockUser,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });

      return true;
    } catch (error) {
      setAuthState((prev) => ({
        ...prev,
        isLoading: false,
        error: 'Registration failed',
      }));

      return false;
    }
  };

  const logout = () => {
    removeLocalStorage('user');

    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
    });
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
