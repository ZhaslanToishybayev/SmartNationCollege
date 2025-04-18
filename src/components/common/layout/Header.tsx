"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MobileNav } from '@/components/ui/mobile-nav';
import { useAuth } from '@/store/context/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useRouter } from 'next/navigation';

export const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };
  return (
    <header className="relative z-10 w-full backdrop-blur-md bg-white/50 shadow-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="font-arial text-[16.24px] font-normal leading-[1.21em] text-center gradient-text">
          <span className="block">SmartNation</span>
          <span className="block">COLLEGE</span>
        </div>
        <nav className="hidden items-center justify-center gap-8 md:flex">
          <Link
            href="/about"
            className="font-arial text-[16px] font-normal hover:text-[#3D6FD1] transition-all duration-300 hover:scale-105"
          >
            О нас
          </Link>
          <Link
            href="/#contact"
            className="font-arial text-[16px] font-normal hover:text-[#3D6FD1] transition-all duration-300 hover:scale-105"
          >
            Контакты
          </Link>
          <Link
            href="/documents"
            className="font-arial text-[16px] font-normal hover:text-[#3D6FD1] transition-all duration-300 hover:scale-105"
          >
            Документы
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm">
            ru ^
          </Button>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="bg-[#3D6FD1] text-white">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => router.push('/profile')}>
                  Профиль
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push('/documents')}>
                  Мои документы
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  Выйти
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login">
              <Button variant="ghost">
                Войти / Регистрация
              </Button>
            </Link>
          )}
        </div>
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
