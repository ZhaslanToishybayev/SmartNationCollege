"use client";

import React from 'react';
import Image from 'next/image';
import { TimelineSection } from '@/components/timeline-section';

export default function AboutPage() {
  const timelineItems = [
    {
      year: '2020',
      content: 'Сайт был создан в 2020 году как внутренняя инициатива для оптимизации документооборота в одном из колледжей. Изначально проект задумывался как простая система подачи заявлений в электронном виде, позволяющая студентам экономить время и избегать очередей. Однако с годами он превратился в полноценную платформу автоматизации всех ключевых процессов, связанных с образовательной документацией.',
      position: 'left' as const,
    },
    {
      year: '2021',
      content: 'В 2021 году система получила поддержку API и базу данных, что позволило синхронизировать данные с внутренними учетными системами колледжа и расширить функционал. Тогда же была реализована первая версия электронного личного кабинета студента.',
      position: 'right' as const,
    },
    {
      year: '2022',
      content: '2022 год стал поворотным моментом — была добавлена поддержка цифровых подписей, интеграция с eGov.kz и внедрены модули для преподавателей и администрации. Платформа стала использоваться для подачи заявлений на академический отпуск, восстановление, заселение в общежитие и многое другое. Всё — без необходимости идти в канцелярию.',
      position: 'left' as const,
    },
    {
      year: '2023',
      content: 'В 2023 году мы добавили искусственный интеллект в сайт. Алгоритмы могут заранее предупредить о возможных рисках академической неуспеваемости, помочь администрации быстрее принимать решения, а преподавателям — вовремя отреагировать на снижение активности в группе.',
      position: 'right' as const,
    },
    {
      year: '2024',
      content: 'В 2024 году, наш сайт — это интеллектуальная цифровая экосистема, объединяющая студентов, преподавателей и сотрудников колледжа. Мы продолжаем развиваться, добавляя всё новые функции: от цифрового портфолио и аналитических отчётов до онлайн-библиотек и мессенджеров для внутренних коммуникаций.',
      position: 'right' as const,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 mt-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-arial text-[64px] font-normal mb-6 text-[#294A8B] leading-[1.15em]">
                О нашем колледже SmartNation
              </h1>
              <p className="font-arial text-[30px] mb-6 leading-[1.15em] text-justify">
                SmartNation College — это современная цифровая платформа, созданная для автоматизации и цифровизации процессов в системе технического и профессионального образования (ТиПО) в Республике Казахстан. Платформа представляет собой единое окно доступа к образовательным, административным и информационным услугам для студентов, преподавателей и администрации колледжей.
              </p>
            </div>
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl h-[500px] z-10 transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-30 z-10"></div>
                <div className="absolute top-0 right-0 w-full h-full bg-[#294A8B] rounded-bl-[1000px] opacity-30"></div>
                <div className="absolute top-0 right-0 w-full h-full bg-[#3D6FD1] rounded-bl-[1000px] opacity-50"></div>

                {/* Dot Pattern */}
                <div className="absolute inset-0 z-5 dot-pattern p-4">
                  {Array(30).fill(0).map((_, i) => (
                    <div key={i} className="dot"></div>
                  ))}
                </div>

                <Image
                  src="/figma-assets/woman-image.png"
                  alt="Woman with laptop"
                  width={600}
                  height={500}
                  className="object-cover w-full h-full relative z-0"
                />
                <div className="absolute bottom-4 right-4 z-20 bg-[#3D6FD1] p-4 rounded-lg shadow-[0px_0px_20px_0px_rgba(61,111,209,1)]">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/figma-assets/home-icon.svg"
                      alt="Home Icon"
                      width={24}
                      height={24}
                    />
                    <span className="text-[#294A8B] font-arial text-[28px] font-normal">Более 125 предприятий</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos Section */}
      <section className="relative z-10 py-8 px-4 sm:px-6 lg:px-8 border-y border-[rgba(0,0,0,0.3)]">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
            <Image
              src="/figma-assets/cisco-logo.png"
              alt="Cisco"
              width={200}
              height={100}
              className="object-contain h-16"
            />
            <Image
              src="/figma-assets/samsung-logo.png"
              alt="Samsung"
              width={200}
              height={100}
              className="object-contain h-16"
            />
            <Image
              src="/figma-assets/kaspersky-logo.png"
              alt="Kaspersky"
              width={200}
              height={100}
              className="object-contain h-16"
            />
          </div>
        </div>
      </section>

      {/* Platform Capabilities Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-arial text-[64px] font-normal text-[#294A8B] text-center mb-12">Основные возможности платформы</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="border border-[rgba(0,0,0,0.3)] rounded-2xl p-8">
              <div className="flex justify-center mb-4">
                <Image
                  src="/figma-assets/info-icon.svg"
                  alt="Information Icon"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="font-arial text-[46px] font-normal text-[#294A8B] text-center mb-4">Поддержка от колледжа</h3>
              <p className="font-arial text-[30px] font-normal text-center">
                SmartNation College предоставляет доступ к важным образовательным и административным сервисам
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-[rgba(0,0,0,0.3)] rounded-2xl p-8">
              <div className="flex justify-center mb-4">
                <Image
                  src="/figma-assets/user-icon.svg"
                  alt="User Icon"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="font-arial text-[46px] font-normal text-[#294A8B] text-center mb-4">Инструменты для кураторов</h3>
              <p className="font-arial text-[30px] font-normal text-center">
                Преподаватели могут отслеживать успеваемость и посещаемость студентов а также может написать студенту на ватсап
              </p>
            </div>

            {/* Card 3 */}
            <div className="border border-[rgba(0,0,0,0.3)] rounded-2xl p-8">
              <div className="flex justify-center mb-4">
                <Image
                  src="/figma-assets/admin-icon.svg"
                  alt="Admin Icon"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="font-arial text-[46px] font-normal text-[#294A8B] text-center mb-4">Поддержка администрации</h3>
              <p className="font-arial text-[30px] font-normal text-center">
                Административные сотрудники используют SmartNation College для управления расписанием и нагрузкой преподавателей
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <TimelineSection items={timelineItems} />
    </>
  );
}
