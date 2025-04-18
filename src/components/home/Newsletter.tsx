import React from 'react';
import { Button } from '@/components/ui/button';

export const Newsletter: React.FC = () => {
  return (
    <div className="mb-16">
      <h2 className="gradient-text font-arial text-[28px] md:text-[35px] font-normal leading-[1.15em] mb-8">
        Подпишитесь на нашу рассылку, чтобы быть в курсе наших новостей!
      </h2>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <img src="/figma-assets/icon-user.svg" alt="User" className="w-5 h-5 opacity-30" />
          </div>
          <input
            type="email"
            placeholder="Введите свою почту"
            className="modern-input pl-12"
          />
        </div>
        <Button size="lg" className="w-full md:w-auto">
          Подписаться
        </Button>
      </div>
    </div>
  );
};

export default Newsletter;
