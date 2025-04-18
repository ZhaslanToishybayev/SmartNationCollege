import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[#E6E6E6] text-black px-4 sm:px-6 lg:px-8 relative mt-16">
      <div className="mx-auto max-w-7xl">
        {/* Newsletter Subscription */}
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

        <div className="w-full h-[1px] bg-[rgba(0,0,0,0.3)] mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-3">
            <div className="gradient-text font-arial text-[16.24px] font-normal leading-[1.21em] text-center mb-4">
              <span className="block">SmartNation</span>
              <span className="block">COLLEGE</span>
            </div>
            <p className="font-arial text-[18px] md:text-[20px] font-normal leading-[1.15em] text-black mb-6 text-center md:text-left">
              мы растем ваших гениальных детей для нашего будущего
            </p>
          </div>

          <div className="md:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                {
                  title: 'Platform',
                  links: ['Plans & Pricing', 'Personal AI Manager', 'AI Business Writer']
                },
                {
                  title: 'Company',
                  links: ['Blog', 'Careers', 'News']
                },
                {
                  title: 'Resources',
                  links: ['Documentation', 'Papers', 'Press Conferences']
                }
              ].map((section, index) => (
                <div key={index}>
                  <h3 className="font-arial text-[18px] font-normal leading-[1.15em] mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link href="#" className="font-arial text-[16px] md:text-[20px] font-normal leading-[1.15em] hover:text-[#3D6FD1] transition-colors">
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-[rgba(0,0,0,0.3)] mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="font-arial text-[16px] md:text-[20px] font-normal leading-[1.15em] mb-4 md:mb-0">
            &copy; 2025 College - SmartNation
          </p>
          <div className="flex flex-wrap gap-6">
            {['Cookies', 'Privacy Policy', 'Terms of Service'].map((item) => (
              <Link
                key={item}
                href="#"
                className="font-arial text-[16px] md:text-[20px] font-normal leading-[1.15em] hover:text-[#3D6FD1] transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
