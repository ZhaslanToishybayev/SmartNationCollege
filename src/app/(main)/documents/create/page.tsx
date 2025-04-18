"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/store/context/AuthContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DocumentFormData } from '@/data/models/document';
import { services } from '@/data/constants/services';
import { FileUploader } from '@/components/documents/FileUploader';

export default function CreateDocumentPage() {
  const { user } = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<DocumentFormData>({
    title: '',
    description: '',
    type: '',
    attachments: [],
  });

  // Если пользователь не авторизован, перенаправляем на страницу входа
  React.useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  const handleChange = (field: keyof DocumentFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (files: File[]) => {
    setFormData(prev => ({ ...prev, attachments: files }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.type) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все обязательные поля",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsLoading(true);

      // Здесь будет логика создания документа

      toast({
        title: "Успешно",
        description: "Документ успешно создан",
      });

      // Перенаправляем на страницу документов
      router.push('/documents');
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось создать документ",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold gradient-text mb-8">Создание документа</h1>

        <Tabs defaultValue="template">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="template">По шаблону</TabsTrigger>
            <TabsTrigger value="custom">Произвольный документ</TabsTrigger>
          </TabsList>

          {/* Вкладка создания документа по шаблону */}
          <TabsContent value="template">
            <Card>
              <CardHeader>
                <CardTitle>Выберите тип документа</CardTitle>
                <CardDescription>
                  Выберите один из доступных шаблонов документов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-all hover:border-[#3D6FD1] hover:shadow-md ${
                        formData.type === service.id ? 'border-[#3D6FD1] bg-blue-50' : ''
                      }`}
                      onClick={() => handleChange('type', service.id)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg">
                          <img src={service.icon} alt={service.title} className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-medium">{service.title}</h3>
                          <p className="text-sm text-gray-500">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {formData.type && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Название документа</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => handleChange('title', e.target.value)}
                        disabled={isLoading}
                        placeholder="Введите название документа"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Описание (необязательно)</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleChange('description', e.target.value)}
                        disabled={isLoading}
                        placeholder="Введите дополнительную информацию"
                        rows={4}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Прикрепить файлы (необязательно)</Label>
                      <FileUploader onFilesSelected={handleFileChange} />
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => router.back()} disabled={isLoading}>
                  Отмена
                </Button>
                <Button onClick={handleSubmit} disabled={isLoading || !formData.type || !formData.title}>
                  {isLoading ? "Создание..." : "Создать документ"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Вкладка создания произвольного документа */}
          <TabsContent value="custom">
            <Card>
              <CardHeader>
                <CardTitle>Создание произвольного документа</CardTitle>
                <CardDescription>
                  Заполните форму для создания произвольного документа
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="custom-title">Название документа</Label>
                    <Input
                      id="custom-title"
                      value={formData.title}
                      onChange={(e) => handleChange('title', e.target.value)}
                      disabled={isLoading}
                      placeholder="Введите название документа"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="custom-type">Тип документа</Label>
                    <Select
                      value={formData.type}
                      onValueChange={(value) => handleChange('type', value)}
                      disabled={isLoading}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тип документа" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="application">Заявление</SelectItem>
                        <SelectItem value="certificate">Справка</SelectItem>
                        <SelectItem value="request">Запрос</SelectItem>
                        <SelectItem value="other">Другое</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="custom-description">Содержание документа</Label>
                    <Textarea
                      id="custom-description"
                      value={formData.description}
                      onChange={(e) => handleChange('description', e.target.value)}
                      disabled={isLoading}
                      placeholder="Введите содержание документа"
                      rows={8}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Прикрепить файлы (необязательно)</Label>
                    <FileUploader onFilesSelected={handleFileChange} />
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => router.back()} disabled={isLoading}>
                  Отмена
                </Button>
                <Button onClick={handleSubmit} disabled={isLoading || !formData.type || !formData.title}>
                  {isLoading ? "Создание..." : "Создать документ"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
