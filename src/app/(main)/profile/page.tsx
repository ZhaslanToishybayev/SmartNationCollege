"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/store/context/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Если пользователь не авторизован, перенаправляем на страницу входа
  React.useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  const handleSaveProfile = async () => {
    try {
      setIsLoading(true);

      // Здесь будет логика сохранения профиля

      toast({
        title: "Успешно",
        description: "Профиль успешно обновлен",
      });

      setIsEditing(false);
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось обновить профиль",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Левая колонка - информация о пользователе */}
        <div className="w-full md:w-1/3">
          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={user.avatar || ''} alt={user.name} />
                  <AvatarFallback className="text-2xl bg-[#3D6FD1] text-white">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
              </div>
              <CardTitle>{user.name}</CardTitle>
              <CardDescription>{user.email}</CardDescription>
              <Badge className="mt-2" variant={user.role === 'student' ? 'default' : 'outline'}>
                {user.role === 'student' ? 'Студент' : user.role === 'admin' ? 'Администратор' : 'Сотрудник'}
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">ID пользователя</h3>
                  <p className="text-sm">{user.id}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Статус</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <p className="text-sm">Активный</p>
                  </div>
                </div>
                <Separator />
                <div className="pt-2">
                  <Button variant="outline" className="w-full" onClick={handleLogout}>
                    Выйти из аккаунта
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Правая колонка - вкладки */}
        <div className="w-full md:w-2/3">
          <Tabs defaultValue="profile">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="profile">Профиль</TabsTrigger>
              <TabsTrigger value="documents">Документы</TabsTrigger>
              <TabsTrigger value="settings">Настройки</TabsTrigger>
            </TabsList>

            {/* Вкладка профиля */}
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Информация профиля</CardTitle>
                  <CardDescription>
                    Здесь вы можете просмотреть и изменить информацию вашего профиля
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Полное имя</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={!isEditing || isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={!isEditing || isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      disabled={!isEditing || isLoading}
                      placeholder="+7 (XXX) XXX-XX-XX"
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  {isEditing ? (
                    <>
                      <Button variant="outline" onClick={() => setIsEditing(false)} disabled={isLoading}>
                        Отмена
                      </Button>
                      <Button onClick={handleSaveProfile} disabled={isLoading}>
                        {isLoading ? "Сохранение..." : "Сохранить изменения"}
                      </Button>
                    </>
                  ) : (
                    <Button onClick={() => setIsEditing(true)}>
                      Редактировать профиль
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Вкладка документов */}
            <TabsContent value="documents">
              <Card>
                <CardHeader>
                  <CardTitle>Мои документы</CardTitle>
                  <CardDescription>
                    Здесь отображаются все ваши документы и их статусы
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { id: '1', title: 'Заявление на академический отпуск', date: '12.04.2024', status: 'pending' },
                      { id: '2', title: 'Справка о обучении', date: '10.04.2024', status: 'approved' },
                      { id: '3', title: 'Заявление на восстановление', date: '05.04.2024', status: 'rejected' },
                    ].map((doc) => (
                      <div key={doc.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-medium">{doc.title}</h3>
                          <p className="text-sm text-gray-500">Дата: {doc.date}</p>
                        </div>
                        <Badge
                          variant={
                            doc.status === 'approved'
                              ? 'default'
                              : doc.status === 'rejected'
                              ? 'destructive'
                              : 'outline'
                          }
                        >
                          {doc.status === 'approved'
                            ? 'Одобрено'
                            : doc.status === 'rejected'
                            ? 'Отклонено'
                            : 'На рассмотрении'}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" onClick={() => router.push('/documents')}>
                    Все документы
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Вкладка настроек */}
            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Настройки</CardTitle>
                  <CardDescription>
                    Управляйте настройками вашего аккаунта
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Уведомления по email</h3>
                      <p className="text-sm text-gray-500">Получать уведомления о статусе документов</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Двухфакторная аутентификация</h3>
                      <p className="text-sm text-gray-500">Повысьте безопасность вашего аккаунта</p>
                    </div>
                    <Switch />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Темная тема</h3>
                      <p className="text-sm text-gray-500">Переключить на темную тему</p>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full text-red-500 hover:text-red-700 hover:bg-red-50">
                    Удалить аккаунт
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
