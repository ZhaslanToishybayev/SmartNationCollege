import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const Hero: React.FC = () => {
  return (
    <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 mt-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <h1 className="gradient-text font-arial text-[40px] md:text-[64px] font-normal mb-6 leading-[1.15em] animate-float">
              Единый портал государственных услуг
            </h1>
            <p className="font-arial text-[20px] md:text-[30px] mb-8 leading-[1.15em] text-justify">
              College SmartNation - единый портал для получения государственных услуг в сфере технического и профессионального образования.
            </p>
            <Button size="lg" className="hover-lift w-full md:w-auto">
              Создать Документ
            </Button>
          </div>
          <div className="relative">
            <div className="glass-card rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <Image
                src="/figma-assets/main-image.png"
                alt="College SmartNation"
                width={600}
                height={400}
                className="object-cover w-full h-full transition-all duration-700 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 z-20">
                <span className="glass-effect px-4 py-2 rounded-full text-white text-sm">
                  SmartNation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
