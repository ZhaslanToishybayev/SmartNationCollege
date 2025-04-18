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
import { isValidEmail, isValidPassword } from '@/utils/validation';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Валидация
    if (!name || !email || !password || !confirmPassword) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все поля",
        variant: "destructive",
      });
      return;
    }

    if (!isValidEmail(email)) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, введите корректный email",
        variant: "destructive",
      });
      return;
    }

    if (!isValidPassword(password)) {
      toast({
        title: "Ошибка",
        description: "Пароль должен содержать минимум 8 символов, включая заглавную букву, строчную букву и цифру",
        variant: "destructive",
      });
      return;
    }

    if (password !== confirmPassword) {
      toast({
        title: "Ошибка",
        description: "Пароли не совпадают",
        variant: "destructive",
      });
      return;
    }

    if (!agreeTerms) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, примите условия использования",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsLoading(true);
      const success = await register(name, email, password);

      if (success) {
        toast({
          title: "Успешно",
          description: "Вы успешно зарегистрировались",
        });
        router.push('/');
      } else {
        toast({
          title: "Ошибка",
          description: "Не удалось зарегистрироваться. Возможно, такой email уже используется",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Произошла ошибка при регистрации",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold gradient-text mb-2">Регистрация</h1>
        <p className="text-gray-600">
          Создайте аккаунт для доступа к услугам
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Полное имя</Label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <img src="/figma-assets/icon-user.svg" alt="User" className="w-5 h-5 opacity-50" />
              </div>
              <Input
                id="name"
                type="text"
                placeholder="Иван Иванов"
                className="pl-10"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isLoading}
              />
            </div>
          </div>

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
            <Label htmlFor="password">Пароль</Label>
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
            <p className="text-xs text-gray-500">
              Минимум 8 символов, включая заглавную букву, строчную букву и цифру
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Подтвердите пароль</Label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <img src="/figma-assets/icon-lock.svg" alt="Confirm Password" className="w-5 h-5 opacity-50" />
              </div>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                className="pl-10"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={agreeTerms}
              onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
              disabled={isLoading}
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Я согласен с{" "}
              <Link href="#" className="text-[#3D6FD1] hover:underline">
                Условиями использования
              </Link>{" "}
              и{" "}
              <Link href="#" className="text-[#3D6FD1] hover:underline">
                Политикой конфиденциальности
              </Link>
            </label>
          </div>
        </div>

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Регистрация..." : "Зарегистрироваться"}
        </Button>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Уже есть аккаунт?{" "}
            <Link href="/login" className="text-[#3D6FD1] hover:underline">
              Войти
            </Link>
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-[#E6E6E6] px-2 text-gray-500">Или зарегистрироваться через</span>
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
