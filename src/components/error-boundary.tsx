"use client";

import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full p-6 bg-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Что-то пошло не так</h2>
            <p className="text-gray-600 mb-4">
              Произошла ошибка при загрузке страницы. Пожалуйста, обновите страницу или попробуйте позже.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-[#3D6FD1] text-white px-4 py-2 rounded-lg hover:bg-[#294A8B] transition-colors"
            >
              Обновить страницу
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}