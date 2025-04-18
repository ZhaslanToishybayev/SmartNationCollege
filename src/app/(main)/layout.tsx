import React from 'react';
import { Header, Footer } from '@/components/common/layout';
import { ErrorBoundary } from '@/components/error-boundary';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ErrorBoundary>
      <div className="flex min-h-screen flex-col bg-[#E6E6E6] font-sans relative">
        {/* Enhanced Background Elements */}
        <div className="absolute w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-[#3D6FD1] to-[#294A8B] blur-[400px] opacity-30 -top-[400px] -left-[400px] animate-pulse"></div>
          <div className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-l from-[#3D6FD1] to-[#294A8B] blur-[400px] opacity-30 top-[200px] -right-[400px] animate-pulse"></div>
          <div className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-t from-[#3D6FD1] to-[#294A8B] blur-[400px] opacity-30 bottom-[0px] left-[30%] animate-pulse"></div>
        </div>
        
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
