"use client";

import React, { useState } from 'react';
import { Button } from './button';
import Link from 'next/link';
import { useAuth } from '@/store/context/AuthContext';
import { useRouter } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
    setIsOpen(false);
  };

  const menuItems = [
    { label: 'О нас', href: '/about' },
    { label: 'Контакты', href: '/#contact' },
    { label: 'Документы', href: '/documents' },
  ];

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50"
      >
        <div className={`w-6 h-5 flex flex-col justify-between transition-all duration-300 ${isOpen ? 'transform' : ''}`}>
          <span className={`w-full h-0.5 bg-black transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-full h-0.5 bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-full h-0.5 bg-black transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-40">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-2xl font-arial hover:text-[#3D6FD1] transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button variant="outline" size="lg" className="mt-8">
              ru ^
            </Button>

            {user ? (
              <>
                <div className="flex items-center gap-3 mt-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="bg-[#3D6FD1] text-white">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 mt-4 w-full max-w-xs">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full"
                    onClick={() => {
                      router.push('/profile');
                      setIsOpen(false);
                    }}
                  >
                    Профиль
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full"
                    onClick={() => {
                      router.push('/documents');
                      setIsOpen(false);
                    }}
                  >
                    Мои документы
                  </Button>

                  <Button
                    variant="destructive"
                    size="lg"
                    className="w-full"
                    onClick={handleLogout}
                  >
                    Выйти
                  </Button>
                </div>
              </>
            ) : (
              <Link href="/login" onClick={() => setIsOpen(false)}>
                <Button variant="default" size="lg">
                  Войти / Регистрация
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}