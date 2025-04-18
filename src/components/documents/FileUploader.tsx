"use client";

import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { X, Upload, File, Paperclip } from 'lucide-react';

interface FileUploaderProps {
  onFilesSelected: (files: File[]) => void;
  maxFiles?: number;
  maxSizeMB?: number;
  acceptedFileTypes?: string;
}

export const FileUploader: React.FC<FileUploaderProps> = ({
  onFilesSelected,
  maxFiles = 5,
  maxSizeMB = 10,
  acceptedFileTypes = ".pdf,.doc,.docx,.jpg,.jpeg,.png"
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const maxSizeBytes = maxSizeMB * 1024 * 1024;
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      addFiles(Array.from(e.target.files));
    }
  };
  
  const addFiles = (newFiles: File[]) => {
    // Проверка на максимальное количество файлов
    if (files.length + newFiles.length > maxFiles) {
      alert(`Вы можете загрузить максимум ${maxFiles} файлов`);
      return;
    }
    
    // Проверка размера файлов
    const oversizedFiles = newFiles.filter(file => file.size > maxSizeBytes);
    if (oversizedFiles.length > 0) {
      alert(`Следующие файлы превышают максимальный размер ${maxSizeMB}MB: ${oversizedFiles.map(f => f.name).join(', ')}`);
      return;
    }
    
    const updatedFiles = [...files, ...newFiles];
    setFiles(updatedFiles);
    onFilesSelected(updatedFiles);
  };
  
  const removeFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    onFilesSelected(updatedFiles);
  };
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files) {
      addFiles(Array.from(e.dataTransfer.files));
    }
  };
  
  const getFileIcon = (fileName: string) => {
    const extension = fileName.split('.').pop()?.toLowerCase();
    
    switch (extension) {
      case 'pdf':
        return <File className="text-red-500" />;
      case 'doc':
      case 'docx':
        return <File className="text-blue-500" />;
      case 'jpg':
      case 'jpeg':
      case 'png':
        return <File className="text-green-500" />;
      default:
        return <Paperclip />;
    }
  };
  
  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' bytes';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    else return (bytes / 1048576).toFixed(1) + ' MB';
  };
  
  return (
    <div className="space-y-4">
      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
          isDragging ? 'border-[#3D6FD1] bg-blue-50' : 'border-gray-300 hover:border-[#3D6FD1]'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          multiple
          accept={acceptedFileTypes}
          className="hidden"
        />
        <div className="flex flex-col items-center justify-center gap-2">
          <Upload className="w-10 h-10 text-gray-400" />
          <p className="text-sm font-medium">
            Перетащите файлы сюда или <span className="text-[#3D6FD1]">нажмите для выбора</span>
          </p>
          <p className="text-xs text-gray-500">
            Поддерживаемые форматы: PDF, DOC, DOCX, JPG, PNG
          </p>
          <p className="text-xs text-gray-500">
            Максимальный размер файла: {maxSizeMB}MB (до {maxFiles} файлов)
          </p>
        </div>
      </div>
      
      {files.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-medium">Загруженные файлы:</p>
          <div className="space-y-2">
            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border"
              >
                <div className="flex items-center gap-2">
                  {getFileIcon(file.name)}
                  <div>
                    <p className="text-sm font-medium truncate max-w-[200px]">{file.name}</p>
                    <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(index);
                  }}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
