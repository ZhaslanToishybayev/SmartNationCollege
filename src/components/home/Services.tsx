import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export const Services: React.FC = () => {
  const services = [
    {
      icon: '/figma-assets/document_icon.svg',
      title: 'Заявление на академический отпуск'
    },
    {
      icon: '/figma-assets/icon-illness.svg',
      title: 'Выдача справки о заболевании'
    },
    {
      icon: '/figma-assets/icon-documents.svg',
      title: 'Подача документов в приемную комиссию'
    },
    {
      icon: '/figma-assets/icon-family.svg',
      title: 'Выдача справки по семейным обстоятельствам'
    }
  ];

  return (
    <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 mt-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="gradient-text font-arial text-[36px] md:text-[48px] font-normal mb-4">Наши услуги</h2>
          <p className="font-arial text-[18px] md:text-[24px] text-gray-700">Выберите необходимую услугу из списка доступных</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="mb-4 w-16 h-16 mx-auto">
                  <img src={service.icon} alt={service.title} className="w-full h-full" />
                </div>
                <h3 className="font-inter text-[18px] md:text-[20px] font-normal leading-[1.21em]">
                  {service.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
