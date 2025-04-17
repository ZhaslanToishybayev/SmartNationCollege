"use client";

import Image from 'next/image';

export default function Home() {
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

      {/* Main Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 mt-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-[200px] h-[200px] rounded-full bg-[#294A8B] blur-[100px] opacity-30 z-0 animate-pulse"></div>
                <div className="absolute -bottom-10 -right-10 w-[200px] h-[200px] rounded-full bg-[#3D6FD1] blur-[100px] opacity-30 z-0 animate-pulse"></div>
                <div className="relative z-10">
                  <h1 className="font-arial text-[64px] font-normal mb-6 text-[#294A8B] leading-[1.15em] relative">
                    <span className="relative inline-block">
                      <span className="absolute -top-4 -left-4 w-8 h-8 bg-[#3D6FD1] opacity-20 rounded-full animate-ping"></span>
                      Единый портал государственных услуг
                    </span>
                  </h1>
                  <p className="font-arial text-[30px] mb-8 leading-[1.15em] text-justify">
                    College SmartNation - единый портал для получения государственных услуг в сфере технического и профессионального образования, общедоступный реестр колледжей и система управления колледжем.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-[#3D6FD1] text-white px-8 py-4 rounded-[8px] hover:shadow-lg transition-all duration-300 font-inter text-[20px] leading-[1.21em] relative overflow-hidden group">
                      <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                      <span className="relative z-10 flex items-center justify-center">
                        Создать Документ
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-[150px] h-[150px] bg-[#294A8B] shadow-[-10px_-10px_35px_0px_rgba(0,0,0,0.25)] z-0 transform rotate-12 animate-pulse"></div>
              <div className="relative rounded-lg overflow-hidden shadow-xl h-80 md:h-[400px] z-10 transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-30 z-10"></div>
                <Image
                  src="/figma-assets/main-image.png"
                  alt="College SmartNation"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 z-20 text-white">
                  <div className="text-sm font-medium bg-[#3D6FD1] px-3 py-1 rounded-full inline-block mb-2">SmartNation</div>
                </div>
              </div>
              <div className="absolute -bottom-10 -left-10 w-[150px] h-[150px] bg-[#3D6FD1] shadow-[-10px_-10px_35px_0px_rgba(0,0,0,0.25)] z-0 transform -rotate-12 animate-pulse"></div>
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] rounded-full bg-[#3D6FD1] blur-[50px] opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Government Services Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="mx-auto max-w-7xl">
          <div className="relative mb-12 text-center">
            <div className="absolute w-[300px] h-[300px] rounded-full bg-[#3D6FD1] blur-[150px] opacity-20 top-[-50px] left-[20%] z-0"></div>
            <h2 className="font-arial text-[48px] font-normal text-[#294A8B] relative z-10 mb-4">Наши услуги</h2>
            <p className="font-arial text-[24px] text-gray-700 max-w-3xl mx-auto relative z-10">Выберите необходимую услугу из списка доступных</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Card 1 */}
            <div className="p-6 rounded-[8px] bg-[#F1F1F1] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)] hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="mb-4 w-16 h-16 mx-auto">
                <img src="/figma-assets/document_icon.svg" alt="Academic Leave" className="w-full h-full" />
              </div>
              <h3 className="font-inter text-[20px] font-normal leading-[1.21em] mb-2 text-center">Заявление на академический отпуск</h3>
            </div>

            {/* Service Card 2 */}
            <div className="p-6 rounded-[8px] bg-[#F1F1F1] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)] hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="mb-4 w-16 h-16 mx-auto">
                <img src="/figma-assets/icon-illness.svg" alt="Medical Certificate" className="w-full h-full" />
              </div>
              <h3 className="font-inter text-[20px] font-normal leading-[1.21em] mb-2 text-center">Выдача справки о заболевании</h3>
            </div>

            {/* Service Card 3 */}
            <div className="p-6 rounded-[8px] bg-[#F1F1F1] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)] hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="mb-4 w-16 h-16 mx-auto">
                <img src="/figma-assets/icon-documents.svg" alt="Admission Documents" className="w-full h-full" />
              </div>
              <h3 className="font-inter text-[20px] font-normal leading-[1.21em] mb-2 text-center">Подача документов в приемную комиссию</h3>
            </div>

            {/* Service Card 4 */}
            <div className="p-6 rounded-[8px] bg-[#F1F1F1] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)] hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="mb-4 w-16 h-16 mx-auto">
                <img src="/figma-assets/icon-family.svg" alt="Family Circumstances" className="w-full h-full" />
              </div>
              <h3 className="font-inter text-[20px] font-normal leading-[1.21em] mb-2 text-center">Выдача справки по семейным обстоятельствам</h3>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
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
              <h2 className="font-arial text-[64px] font-normal mb-6 text-[#294A8B] leading-[1.15em]">О наших услугах</h2>
              <p className="font-arial text-[30px] mb-6 leading-[1.15em] text-justify">
                Мы — команда разработчиков, создавшая инновационную платформу, предназначенную для автоматизации документооборота в образовательных учреждениях, в частности — колледжах. Наша цель — упростить управление документацией, сделать процесс более быстрым, точным и удобным как для сотрудников, так и для студентов.
              </p>

              <div className="bg-[#F1F1F1] p-8 rounded-[13.6px] mt-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
                  <div className="text-center">
                    <div className="font-arial text-[30.57px] font-normal text-[#294A8B] mb-2 text-justify">1 492</div>
                    <div className="font-arial text-[16.98px] font-normal text-center">Количество персонала</div>
                  </div>
                  <div className="text-center relative">
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[1px] h-[80%] bg-[rgba(0,0,0,0.3)]"></div>
                    <div className="font-arial text-[30.57px] font-normal text-[#294A8B] mb-2 text-justify">14</div>
                    <div className="font-arial text-[16.98px] font-normal text-center">Количество колледжей</div>
                  </div>
                  <div className="text-center relative">
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[1px] h-[80%] bg-[rgba(0,0,0,0.3)]"></div>
                    <div className="font-arial text-[30.57px] font-normal text-[#294A8B] mb-2 text-justify">18 385</div>
                    <div className="font-arial text-[16.98px] font-normal text-center">Количество контингента</div>
                  </div>
                  <div className="text-center relative">
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[1px] h-[80%] bg-[rgba(0,0,0,0.3)]"></div>
                    <div className="font-arial text-[30.57px] font-normal text-[#294A8B] mb-2 text-justify">159</div>
                    <div className="font-arial text-[16.98px] font-normal text-center">Количество госуслуг</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-[#F1F1F1] p-8 rounded-[16px] shadow-lg">
              <div className="grid grid-cols-1 gap-8">
                <div className="bg-[#F1F1F1] p-4 rounded-[8px]">
                  <div className="flex items-start">
                    <img src="/figma-assets/icon-location.svg" alt="Location" className="w-6 h-6 mt-1 mr-3" />
                    <div>
                      <h3 className="font-arial text-[30px] font-normal leading-[1.15em] text-black mb-2">Адрес</h3>
                      <p className="font-arial text-[20px] font-normal leading-[1.15em] text-black">Мангилик Ел проспект, 55/11, Астана, Казахстан</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F1F1F1] p-4 rounded-[8px]">
                  <div className="flex items-start">
                    <img src="/figma-assets/icon-phone.svg" alt="Phone" className="w-6 h-6 mt-1 mr-3" />
                    <div>
                      <h3 className="font-arial text-[30px] font-normal leading-[1.15em] text-black mb-2">Телефон</h3>
                      <p className="font-arial text-[20px] font-normal leading-[1.15em] text-black">+7 (707) 380-40-75<br />+7 (747) 163-07-07</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F1F1F1] p-4 rounded-[8px]">
                  <div className="flex items-start">
                    <img src="/figma-assets/icon-email.svg" alt="Email" className="w-6 h-6 mt-1 mr-3" />
                    <div>
                      <h3 className="font-arial text-[30px] font-normal leading-[1.15em] text-black mb-2">Почта</h3>
                      <p className="font-arial text-[20px] font-normal leading-[1.15em] text-black">znurlanuly293@gmail.com<br />ahmedermek07@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F1F1F1] p-4 rounded-[8px]">
                  <div className="flex items-start">
                    <img src="/figma-assets/icon-clock.svg" alt="Clock" className="w-6 h-6 mt-1 mr-3" />
                    <div>
                      <h3 className="font-arial text-[30px] font-normal leading-[1.15em] text-black mb-2">Часы работы</h3>
                      <p className="font-arial text-[20px] font-normal leading-[1.15em] text-black">По будням: 12:00 - 22:00<br />По выходным: отдых</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F1F1F1] p-8 rounded-[16px] shadow-lg">
              <div className="rounded-lg overflow-hidden h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1533.73762844527!2d71.41917670557284!3d51.09005890001062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424585a605525605%3A0x4dff4a1973f7567e!2sAstana%20IT%20University!5e0!3m2!1sru!2skz!4v1744650589399!5m2!1sru!2skz"
                  width="100%"
                  height="100%"
                  style={{border:0, minHeight: '400px'}}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#E6E6E6] text-black px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-7xl">
          {/* Newsletter Subscription */}
          <div className="mb-16">
            <h2 className="font-arial text-[35px] font-normal leading-[1.15em] mb-8">Подпишитесь на нашу рассылку, чтобы быть в курсе наших новостей!</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <img src="/figma-assets/icon-user.svg" alt="User" className="w-5 h-5 opacity-30" />
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
