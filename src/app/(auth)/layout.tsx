"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ErrorBoundary } from '@/components/error-boundary';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ErrorBoundary>
      <div className="flex min-h-screen flex-col md:flex-row bg-[#E6E6E6] font-sans relative">
        {/* Enhanced Background Elements */}
        <div className="absolute w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-[#3D6FD1] to-[#294A8B] blur-[400px] opacity-30 -top-[400px] -left-[400px] animate-pulse"></div>
          <div className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-l from-[#3D6FD1] to-[#294A8B] blur-[400px] opacity-30 top-[200px] -right-[400px] animate-pulse"></div>
          <div className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-t from-[#3D6FD1] to-[#294A8B] blur-[400px] opacity-30 bottom-[0px] left-[30%] animate-pulse"></div>
        </div>
        
        {/* Left Side - Branding and Information */}
        <div className="relative hidden md:flex md:w-1/2 bg-gradient-to-br from-[#3D6FD1] to-[#294A8B] p-8 flex-col justify-between">
          <div className="z-10">
            <Link href="/" className="flex items-center">
              <div className="font-arial text-[24px] font-normal leading-[1.21em] text-white">
                <span className="block">SmartNation</span>
                <span className="block">COLLEGE</span>
              </div>
            </Link>
          </div>
          
          <div className="z-10 mb-8">
            <h1 className="text-4xl font-bold text-white mb-6">Добро пожаловать в SmartNation College</h1>
            <p className="text-xl text-white/80 mb-8">
              Единый портал для получения государственных услуг в сфере технического и профессионального образования.
            </p>
            <div className="flex space-x-4">
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="text-white text-lg font-medium mb-2">14+</h3>
                <p className="text-white/70 text-sm">Колледжей</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="text-white text-lg font-medium mb-2">18 385+</h3>
                <p className="text-white/70 text-sm">Студентов</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="text-white text-lg font-medium mb-2">159+</h3>
                <p className="text-white/70 text-sm">Госуслуг</p>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-tl-full z-0"></div>
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white/5 rounded-full z-0"></div>
        </div>
        
        {/* Right Side - Auth Forms */}
        <div className="relative flex flex-col w-full md:w-1/2 p-8 items-center justify-center">
          <div className="md:hidden mb-8">
            <Link href="/" className="flex items-center justify-center">
              <div className="font-arial text-[24px] font-normal leading-[1.21em] gradient-text text-center">
                <span className="block">SmartNation</span>
                <span className="block">COLLEGE</span>
              </div>
            </Link>
          </div>
          
          <div className="w-full max-w-md">
            {children}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              &copy; 2025 College - SmartNation. Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}
