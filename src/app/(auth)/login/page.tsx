"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/store/context/AuthContext';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const { login } = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все поля",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsLoading(true);
      const success = await login(email, password);

      if (success) {
        toast({
          title: "Успешно",
          description: "Вы успешно вошли в систему",
        });
        router.push('/');
      } else {
        toast({
          title: "Ошибка",
          description: "Неверный email или пароль",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Произошла ошибка при входе",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold gradient-text mb-2">Вход в аккаунт</h1>
        <p className="text-gray-600">
          Введите свои данные для входа в систему
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <img src="/figma-assets/icon-email.svg" alt="Email" className="w-5 h-5 opacity-50" />
              </div>
              <Input
                id="email"
                type="email"
                placeholder="example@mail.com"
                className="pl-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="password">Пароль</Label>
              <Link href="#" className="text-sm text-[#3D6FD1] hover:underline">
                Забыли пароль?
              </Link>
            </div>
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <img src="/figma-assets/icon-lock.svg" alt="Password" className="w-5 h-5 opacity-50" />
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="pl-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember"
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(checked as boolean)}
              disabled={isLoading}
            />
            <label
              htmlFor="remember"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Запомнить меня
            </label>
          </div>
        </div>

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Вход..." : "Войти"}
        </Button>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Нет аккаунта?{" "}
            <Link href="/register" className="text-[#3D6FD1] hover:underline">
              Зарегистрироваться
            </Link>
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-[#E6E6E6] px-2 text-gray-500">Или войти через</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" type="button" disabled={isLoading} className="flex items-center justify-center gap-2">
            <img src="/figma-assets/google-icon.svg" alt="Google" className="w-5 h-5" />
            Google
          </Button>
          <Button variant="outline" type="button" disabled={isLoading} className="flex items-center justify-center gap-2">
            <img src="/figma-assets/facebook-icon.svg" alt="Facebook" className="w-5 h-5" />
            Facebook
          </Button>
        </div>
      </form>
    </div>
  );
}
