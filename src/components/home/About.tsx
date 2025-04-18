import React from 'react';
import Image from 'next/image';

export const About: React.FC = () => {
  const stats = [
    { number: '1 492', label: 'Количество персонала' },
    { number: '14', label: 'Количество колледжей' },
    { number: '18 385', label: 'Количество контингента' },
    { number: '159', label: 'Количество госуслуг' }
  ];

  return (
    <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-[150px_0px_150px_0px] overflow-hidden shadow-xl h-80 md:h-[500px]">
            <Image
              src="/figma-assets/about-image.png"
              alt="About College SmartNation"
              width={600}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h2 className="gradient-text font-arial text-[36px] md:text-[64px] font-normal mb-6 leading-[1.15em]">
              О наших услугах
            </h2>
            <p className="font-arial text-[20px] md:text-[30px] mb-6 leading-[1.15em] text-justify">
              Мы — команда разработчиков, создавшая инновационную платформу, предназначенную для автоматизации документооборота в образовательных учреждениях, в частности — колледжах. Наша цель — упростить управление документацией, сделать процесс более быстрым, точным и удобным как для сотрудников, так и для студентов.
            </p>

            <div className="glass-card p-8 mt-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center relative">
                    {index > 0 && (
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[1px] h-[80%] bg-[rgba(0,0,0,0.3)]"></div>
                    )}
                    <div className="font-arial text-[24px] md:text-[30.57px] font-normal text-[#294A8B] mb-2">
                      {stat.number}
                    </div>
                    <div className="font-arial text-[14px] md:text-[16.98px] font-normal text-center">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
