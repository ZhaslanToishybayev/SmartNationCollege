"use client";

import { useState, useEffect, useCallback } from 'react';
import { Document, DocumentFormData } from '@/data/models/document';
import { documentService } from '@/services/documents';

interface UseDocumentsReturn {
  documents: Document[];
  isLoading: boolean;
  error: string | null;
  fetchDocuments: () => Promise<void>;
  getDocument: (id: string) => Promise<Document | null>;
  createDocument: (data: DocumentFormData) => Promise<Document | null>;
  updateDocument: (id: string, data: Partial<DocumentFormData>) => Promise<Document | null>;
  deleteDocument: (id: string) => Promise<boolean>;
}

export const useDocuments = (): UseDocumentsReturn => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchDocuments = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const data = await documentService.getDocuments();
      setDocuments(data);

      return data;
    } catch (err) {
      setError('Failed to fetch documents');
      return [];
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getDocument = useCallback(async (id: string): Promise<Document | null> => {
    try {
      setIsLoading(true);
      setError(null);

      const document = await documentService.getDocument(id);
      return document;
    } catch (err) {
      setError(`Failed to fetch document with ID: ${id}`);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const createDocument = useCallback(async (data: DocumentFormData): Promise<Document | null> => {
    try {
      setIsLoading(true);
      setError(null);

      const newDocument = await documentService.createDocument(data);
      setDocuments((prev) => [...prev, newDocument]);

      return newDocument;
    } catch (err) {
      setError('Failed to create document');
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateDocument = useCallback(async (id: string, data: Partial<DocumentFormData>): Promise<Document | null> => {
    try {
      setIsLoading(true);
      setError(null);

      const updatedDocument = await documentService.updateDocument(id, data);

      setDocuments((prev) =>
        prev.map((doc) => (doc.id === id ? updatedDocument : doc))
      );

      return updatedDocument;
    } catch (err) {
      setError(`Failed to update document with ID: ${id}`);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const deleteDocument = useCallback(async (id: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      setError(null);

      await documentService.deleteDocument(id);

      setDocuments((prev) => prev.filter((doc) => doc.id !== id));

      return true;
    } catch (err) {
      setError(`Failed to delete document with ID: ${id}`);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDocuments();
  }, [fetchDocuments]);

  return {
    documents,
    isLoading,
    error,
    fetchDocuments,
    getDocument,
    createDocument,
    updateDocument,
    deleteDocument,
  };
};
