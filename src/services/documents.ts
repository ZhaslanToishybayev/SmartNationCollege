import { apiClient } from './api/client';
import { endpoints } from './api/endpoints';
import { Document, DocumentFormData } from '@/data/models/document';

export const documentService = {
  async getDocuments(): Promise<Document[]> {
    return apiClient.get<Document[]>(endpoints.documents.list);
  },
  
  async getDocument(id: string): Promise<Document> {
    return apiClient.get<Document>(endpoints.documents.get(id));
  },
  
  async createDocument(data: DocumentFormData): Promise<Document> {
    return apiClient.post<Document>(endpoints.documents.create, data);
  },
  
  async updateDocument(id: string, data: Partial<DocumentFormData>): Promise<Document> {
    return apiClient.put<Document>(endpoints.documents.update(id), data);
  },
  
  async deleteDocument(id: string): Promise<void> {
    return apiClient.delete<void>(endpoints.documents.delete(id));
  },
};
