export interface Document {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
  updatedAt: Date;
}

export interface DocumentFormData {
  title: string;
  description: string;
  type: string;
  attachments?: File[];
}
