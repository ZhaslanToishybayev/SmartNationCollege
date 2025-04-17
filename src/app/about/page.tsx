"use client";

import Image from 'next/image';
import './about.css';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#E6E6E6] font-sans relative">
      {/* Background Elements */}
      <div className="absolute w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-[#3D6FD1] blur-[400px] opacity-50 -top-[400px] -left-[400px] animate-pulse"></div>
        <div className="absolute w-[800px] h-[800px] rounded-full bg-[#294A8B] blur-[400px] opacity-50 top-[200px] -right-[400px] animate-pulse"></div>
        <div className="absolute w-[800px] h-[800px] rounded-full bg-[#3D6FD1] blur-[400px] opacity-50 bottom-[0px] left-[30%] animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full bg-[#3D6FD1] blur-[200px] opacity-30 top-[600px] right-[10%] animate-pulse"></div>
        <div className="absolute w-[300px] h-[300px] rounded-full bg-[#294A8B] blur-[150px] opacity-30 top-[1200px] left-[5%] animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#3D6FD1] blur-[250px] opacity-20 top-[1800px] right-[15%] animate-pulse"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 w-full bg-[#E6E6E6] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)]">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="font-arial text-[16.24px] font-normal leading-[1.21em] text-center">
            <span className="block">SmartNation</span>
            <span className="block">COLLEGE</span>
          </div>
          <nav className="hidden items-center justify-center gap-8 md:flex">
            <a href="/about" className="font-arial text-[16px] font-normal leading-[4em] hover:text-[#3D6FD1] transition-colors">О нас</a>
            <a href="#" className="font-arial text-[16px] font-normal leading-[4em] hover:text-[#3D6FD1] transition-colors">Контакты</a>
            <a href="#" className="font-arial text-[16px] font-normal leading-[4em] hover:text-[#3D6FD1] transition-colors">Инструкция</a>
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-1 font-arial text-[16px] font-normal leading-[4em] md:flex">
              ru ^
            </div>
            <div className="font-arial text-[16px] font-normal leading-[4em]">
              <a href="#" className="hover:text-[#3D6FD1] transition-colors">Войти</a> / <a href="#" className="hover:text-[#3D6FD1] transition-colors"> Регистрация</a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
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
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 timeline-section">
          <div className="mx-auto max-w-7xl">
            {/* Timeline Connector Lines */}
            <div className="timeline-connector">
              {/* Line connecting 2020 to 2021 */}
              <div style={{position: 'absolute', top: '200px', left: '0', width: '100%', height: '400px'}}>
                <svg width="100%" height="100%" viewBox="0 0 1952 1411" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.35419 205.789C1420.06 716.043 629.667 -484.556 512.609 247.81C371.329 1131.72 1659.18 738.056 1948.32 1409.39" stroke="rgba(0, 0, 0, 0.3)" strokeWidth="4" fill="none" />
                </svg>
              </div>

              {/* Line connecting 2021 to 2022 */}
              <div style={{position: 'absolute', top: '450px', left: '0', width: '100%', height: '400px'}}>
                <svg width="100%" height="100%" viewBox="0 0 2166 1294" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2164.39 60.3191C1969.34 -25.3714 1518.41 -77.3192 1275.14 400.414C971.059 997.58 -126.246 974.573 16.7933 544.454C159.833 114.334 741.904 144.395 884.035 465.432C1027.07 788.522 1067.09 1205.64 726.991 1289.66" stroke="rgba(0, 0, 0, 0.3)" strokeWidth="4" fill="none" />
                </svg>
              </div>

              {/* Line connecting 2022 to 2023 */}
              <div style={{position: 'absolute', top: '800px', left: '0', width: '100%', height: '400px'}}>
                <svg width="100%" height="100%" viewBox="0 0 2178 1560" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.27641 140.054C306.286 37.3846 963.106 -106.353 1150.31 140.054C1384.32 448.064 902.304 1002.08 1567.32 902.078C2099.34 822.075 2356.35 1379.09 2028.34 1556.1" stroke="rgba(0, 0, 0, 0.3)" strokeWidth="4" fill="none" />
                </svg>
              </div>

              {/* Line connecting 2023 to 2024 */}
              <div style={{position: 'absolute', top: '1100px', left: '0', width: '100%', height: '400px'}}>
                <svg width="100%" height="100%" viewBox="0 0 2205 1310" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2203.51 298.771C1885.78 171.412 1171.51 -6.88932 856.247 298.771C462.169 680.846 104.099 705.851 25.0834 472.805C-53.9321 239.759 107.775 132.636 203.118 63.729C304.138 -9.28062 957.021 -122.881 931.262 472.805C915.259 842.882 100.099 643.838 187.116 1308.97" stroke="rgba(0, 0, 0, 0.3)" strokeWidth="4" fill="none" />
                </svg>
              </div>
            </div>

            {/* 2020 */}
            <div className="timeline-year">
              <div className="timeline-year-heading">
                <h3>2020</h3>
              </div>
              <div className="timeline-content-left">
                <p className="font-arial text-[30px] font-normal leading-[1.15em]">
                  Сайт был создан в 2020 году как внутренняя инициатива для оптимизации документооборота в одном из колледжей. Изначально проект задумывался как простая система подачи заявлений в электронном виде, позволяющая студентам экономить время и избегать очередей. Однако с годами он превратился в полноценную платформу автоматизации всех ключевых процессов, связанных с образовательной документацией.
                </p>
              </div>
            </div>

            {/* 2021 */}
            <div className="timeline-year">
              <div className="timeline-year-heading">
                <h3>2021</h3>
              </div>
              <div className="timeline-content-right">
                <p className="font-arial text-[30px] font-normal leading-[1.15em]">
                  В 2021 году система получила поддержку API и базу данных, что позволило синхронизировать данные с внутренними учетными системами колледжа и расширить функционал. Тогда же была реализована первая версия электронного личного кабинета студента.
                </p>
              </div>
            </div>

            {/* 2022 */}
            <div className="timeline-year">
              <div className="timeline-year-heading">
                <h3>2022</h3>
              </div>
              <div className="timeline-content-left">
                <p className="font-arial text-[30px] font-normal leading-[1.15em]">
                  2022 год стал поворотным моментом — была добавлена поддержка цифровых подписей, интеграция с eGov.kz и внедрены модули для преподавателей и администрации. Платформа стала использоваться для подачи заявлений на академический отпуск, восстановление, заселение в общежитие и многое другое. Всё — без необходимости идти в канцелярию.
                </p>
              </div>
            </div>

            {/* 2023 */}
            <div className="timeline-year">
              <div className="timeline-year-heading">
                <h3>2023</h3>
              </div>
              <div className="timeline-content-right">
                <p className="font-arial text-[30px] font-normal leading-[1.15em]">
                  В 2023 году мы добавили искусственный интеллект в сайт. Алгоритмы могут заранее предупредить о возможных рисках академической неуспеваемости, помочь администрации быстрее принимать решения, а преподавателям — вовремя отреагировать на снижение активности в группе.
                </p>
              </div>
            </div>

            {/* 2024 */}
            <div className="timeline-year">
              <div className="timeline-year-heading">
                <h3>2024</h3>
              </div>
              <div className="timeline-content-right">
                <p className="font-arial text-[30px] font-normal leading-[1.15em]">
                  В 2024 году, наш сайт — это интеллектуальная цифровая экосистема, объединяющая студентов, преподавателей и сотрудников колледжа. Мы продолжаем развиваться, добавляя всё новые функции: от цифрового портфолио и аналитических отчётов до онлайн-библиотек и мессенджеров для внутренних коммуникаций. Наша цель — создать максимально удобную, быструю и прозрачную систему документооборота, где все процессы происходят в несколько кликов, а бумажная рутина остаётся в прошлом.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-[#E6E6E6] text-black px-4 sm:px-6 lg:px-8 relative shadow-[4px_0px_12px_0px_rgba(0,0,0,0.25)]">
        <div className="mx-auto max-w-7xl">
          {/* Newsletter Subscription */}
          <div className="mb-16">
            <h2 className="font-arial text-[35px] font-normal leading-[1.15em] mb-8">Подпишитесь на нашу рассылку, чтобы быть в курсе наших новостей!</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <Image
                    src="/figma-assets/user-solid.svg"
                    alt="User Icon"
                    width={20}
                    height={20}
                  />
                </div>
                <input
                  type="email"
                  placeholder="Введите свою почту"
                  className="w-full px-12 py-3 border border-[rgba(0,0,0,0.3)] rounded-[100px] focus:outline-none focus:ring-2 focus:ring-[#3D6FD1] focus:border-transparent font-inter text-[20px] leading-[1.21em] text-[rgba(0,0,0,0.3)]"
                />
              </div>
              <button className="bg-[#3D6FD1] text-white px-8 py-3 rounded-[100px] hover:bg-[#294A8B] transition-colors font-inter text-[20px] leading-[1.21em]">
                Подписаться
              </button>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full h-[1px] bg-[rgba(0,0,0,0.3)] mb-12"></div>

          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            {/* Left Info */}
            <div className="md:col-span-3">
              <div className="font-arial text-[16.24px] font-normal leading-[1.21em] text-center mb-4">
                <span className="block">SmartNation</span>
                <span className="block">COLLEGE</span>
              </div>
              <p className="font-arial text-[20px] font-normal leading-[1.15em] text-black mb-6">
                мы растем ваших гениальных детей для нашего будущего
              </p>
            </div>

            {/* Right Info */}
            <div className="md:col-span-9">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Platform */}
                <div>
                  <h3 className="font-arial text-[18px] font-normal leading-[1.15em] mb-4">Platform</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="font-arial text-[20px] font-normal leading-[1.15em] hover:text-[#3D6FD1] transition-colors">Plans & Pricing</a></li>
                    <li><a href="#" className="font-arial text-[20px] font-normal leading-[1.15em] hover:text-[#3D6FD1] transition-colors">Personal AI Manager</a></li>
                    <li><a href="#" className="font-arial text-[20px] font-normal leading-[1.15em] hover:text-[#3D6FD1] transition-colors">AI Business Writer</a></li>
                  </ul>
                </div>

                {/* Company */}
                <div>
                  <h3 className="font-arial text-[18px] font-normal leading-[1.15em] mb-4">Company</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="font-arial text-[20px] font-normal leading-[1.15em] hover:text-[#3D6FD1] transition-colors">Blog</a></li>
                    <li><a href="#" className="font-arial text-[20px] font-normal leading-[1.15em] hover:text-[#3D6FD1] transition-colors">Careers</a></li>
                    <li><a href="#" className="font-arial text-[20px] font-normal leading-[1.15em] hover:text-[#3D6FD1] transition-colors">News</a></li>
                  </ul>
                </div>

                {/* Resources */}
                <div>
                  <h3 className="font-arial text-[18px] font-normal leading-[1.15em] mb-4">Recources</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="font-arial text-[20px] font-normal leading-[1.15em] hover:text-[#3D6FD1] transition-colors">Documentation</a></li>
                    <li><a href="#" className="font-arial text-[20px] font-normal leading-[1.15em] hover:text-[#3D6FD1] transition-colors">Papers</a></li>
                    <li><a href="#" className="font-arial text-[20px] font-normal leading-[1.15em] hover:text-[#3D6FD1] transition-colors">Press Conderences</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full h-[1px] bg-[rgba(0,0,0,0.3)] mb-8"></div>

          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-arial text-[20px] font-normal leading-[1.15em] mb-4 md:mb-0">&copy; 2025 College - SmartNation</p>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="font-arial text-[20px] font-normal leading-[1.15em] hover:text-[#3D6FD1] transition-colors">Cookies</a>
              <a href="#" className="font-arial text-[20px] font-normal leading-[1.15em] hover:text-[#3D6FD1] transition-colors">Privacy Police</a>
              <a href="#" className="font-arial text-[20px] font-normal leading-[1.15em] hover:text-[#3D6FD1] transition-colors">Tearms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
