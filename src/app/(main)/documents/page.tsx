"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Filter, ArrowUpDown, Plus, FileText, Clock, Star, MoreHorizontal, Download } from 'lucide-react';
import { useAuth } from '@/store/context/AuthContext';
import { useToast } from '@/hooks/use-toast';

// Types for documents
interface Document {
  id: string;
  title: string;
  type: string;
  date: string;
  status: 'pending' | 'approved' | 'rejected';
  starred: boolean;
}

// Mock data for documents
const mockDocuments: Document[] = [
  { id: '1', title: 'Заявление на академический отпуск', type: 'Заявление', date: '12.04.2024', status: 'pending', starred: false },
  { id: '2', title: 'Справка о обучении', type: 'Справка', date: '10.04.2024', status: 'approved', starred: true },
  { id: '3', title: 'Заявление на восстановление', type: 'Заявление', date: '05.04.2024', status: 'rejected', starred: false },
  { id: '4', title: 'Заявление на общежитие', type: 'Заявление', date: '01.04.2024', status: 'approved', starred: true },
  { id: '5', title: 'Справка для военкомата', type: 'Справка', date: '28.03.2024', status: 'pending', starred: false },
  { id: '6', title: 'Заявление на перевод', type: 'Заявление', date: '25.03.2024', status: 'approved', starred: false },
];

export default function DocumentsPage() {
  const [documents, setDocuments] = useState<Document[]>(mockDocuments);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<string | null>(null);
  const { user } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  // Function for searching documents
  const filteredDocuments = documents.filter(doc =>
    doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function for sorting documents
  const sortedDocuments = [...filteredDocuments].sort((a, b) => {
    if (!sortBy) return 0;

    switch(sortBy) {
      case 'date':
        return new Date(b.date.split('.').reverse().join('-')).getTime() -
               new Date(a.date.split('.').reverse().join('-')).getTime();
      case 'title':
        return a.title.localeCompare(b.title);
      case 'type':
        return a.type.localeCompare(b.type);
      case 'status':
        return a.status.localeCompare(b.status);
      default:
        return 0;
    }
  });

  // Function for starring a document
  const toggleStar = (id: string) => {
    setDocuments(docs =>
      docs.map(doc =>
        doc.id === id ? { ...doc, starred: !doc.starred } : doc
      )
    );
  };

  // Get status badge for display
  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'pending':
        return <Badge className="status-badge status-badge-pending">На рассмотрении</Badge>;
      case 'approved':
        return <Badge className="status-badge status-badge-approved">Одобрено</Badge>;
      case 'rejected':
        return <Badge className="status-badge status-badge-rejected">Отклонено</Badge>;
      default:
        return null;
    }
  };

  return (
    <>
      <main className="flex-grow relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="font-arial text-[64px] font-normal text-[#294A8B] mb-8 animate-title">Документы</h1>

          <div className="w-full h-px bg-[rgba(0,0,0,0.3)] mb-8"></div>

          {/* Document Navigation and Controls */}
          <div className="document-controls flex flex-col md:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="relative flex-grow">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Search size={20} />
              </div>
              <Input
                type="text"
                placeholder="Поиск Документов"
                className="pl-10 border border-[rgba(0,0,0,0.3)] rounded-lg h-12 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Filter */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Filter size={20} />
              </div>
              <select
                className="pl-10 border border-[rgba(0,0,0,0.3)] rounded-lg h-12 bg-white pr-8 appearance-none cursor-pointer"
              >
                <option value="">Фильтрация</option>
                <option value="pending">На рассмотрении</option>
                <option value="approved">Одобрено</option>
                <option value="rejected">Отклонено</option>
              </select>
            </div>

            {/* Sort */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <ArrowUpDown size={20} />
              </div>
              <select
                className="pl-10 border border-[rgba(0,0,0,0.3)] rounded-lg h-12 bg-white pr-8 appearance-none cursor-pointer"
                value={sortBy || ''}
                onChange={(e) => setSortBy(e.target.value || null)}
              >
                <option value="">Сортировать По: Ничего</option>
                <option value="date">По дате</option>
                <option value="title">По названию</option>
                <option value="type">По типу</option>
                <option value="status">По статусу</option>
              </select>
            </div>

            {/* Create Document Button */}
            <Button
              className="bg-[#3D6FD1] hover:bg-[#294A8B] text-white h-12 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
              onClick={() => {
                if (user) {
                  router.push('/documents/create');
                } else {
                  toast({
                    title: "Требуется авторизация",
                    description: "Для создания документа необходимо войти в систему",
                    variant: "destructive",
                  });
                  router.push('/login');
                }
              }}
            >
              <Plus size={20} />
              <span>Создать Документ</span>
            </Button>
          </div>

          {/* Recent Documents Section */}
          <div className="mb-12">
            <h2 className="font-arial text-[30px] font-normal mb-6">Недавние документы</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedDocuments.slice(0, 6).map((doc) => (
                <Card key={doc.id} className="document-card overflow-hidden border border-[rgba(0,0,0,0.1)] rounded-lg shadow-sm animate-fade-in" style={{animationDelay: `${parseInt(doc.id) * 0.1}s`}}>
                  <CardContent className="p-0">
                    <div className="p-4 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center">
                          <div className="document-icon-container bg-[#E0E7FF] p-2 rounded-lg mr-3">
                            <FileText className="text-[#3D6FD1]" size={24} />
                          </div>
                          <div>
                            <h3 className="font-arial text-lg font-medium">{doc.title}</h3>
                            <p className="text-sm text-gray-500">{doc.type}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => toggleStar(doc.id)}
                          className="text-gray-400 hover:text-yellow-400 transition-transform hover:scale-125"
                        >
                          <Star className={doc.starred ? "fill-yellow-400 text-yellow-400" : ""} size={20} />
                        </button>
                      </div>

                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <Clock size={16} className="mr-1" />
                        <span>{doc.date}</span>
                      </div>

                      <div className="flex justify-between items-center mt-auto">
                        {getStatusBadge(doc.status)}

                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" className="text-gray-500 hover:text-[#3D6FD1] hover:bg-blue-50 transition-all">
                            <Download size={18} />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-gray-500 hover:text-[#3D6FD1] hover:bg-blue-50 transition-all">
                            <MoreHorizontal size={18} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* All Documents Section */}
          <div>
            <h2 className="font-arial text-[30px] font-normal mb-6">Все документы</h2>

            <div className="bg-white rounded-lg shadow overflow-hidden documents-table">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Название
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Тип
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Дата
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Статус
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Действия
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sortedDocuments.map((doc, index) => (
                    <tr key={doc.id} className="hover:bg-gray-50 animate-fade-in-row" style={{animationDelay: `${index * 0.05}s`}}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <button
                            onClick={() => toggleStar(doc.id)}
                            className="mr-2 text-gray-400 hover:text-yellow-400 transition-transform hover:scale-125"
                          >
                            <Star className={doc.starred ? "fill-yellow-400 text-yellow-400" : ""} size={16} />
                          </button>
                          <div className="ml-2">
                            <div className="text-sm font-medium text-gray-900">{doc.title}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{doc.type}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{doc.date}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(doc.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="sm" className="text-gray-500 hover:text-[#3D6FD1] hover:bg-blue-50 transition-all">
                            <Download size={18} />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-gray-500 hover:text-[#3D6FD1] hover:bg-blue-50 transition-all">
                            <MoreHorizontal size={18} />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
