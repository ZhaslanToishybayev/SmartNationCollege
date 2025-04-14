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
      <header className="relative z-10 w-full bg-[#E6E6E6] shadow-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="font-sans text-lg font-semibold leading-tight">
            <span className="block text-xs font-medium">SmartNation</span>
            COLLEGE
          </div>
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#" className="text-sm font-medium hover:text-[#3D6FD1] transition-colors">О нас</a>
            <a href="#" className="text-sm font-medium hover:text-[#3D6FD1] transition-colors">Контакты</a>
            <a href="#" className="text-sm font-medium hover:text-[#3D6FD1] transition-colors">Инструкция</a>
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-1 text-sm font-medium md:flex">
              ru ^
            </div>
            <div className="text-sm font-medium">
              <a href="#" className="hover:text-[#3D6FD1] transition-colors">Войти</a> / <a href="#" className="hover:text-[#3D6FD1] transition-colors">Регистрация</a>
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
                  <h1 className="text-[64px] font-bold mb-6 text-[#294A8B] leading-tight relative">
                    <span className="relative inline-block">
                      <span className="absolute -top-4 -left-4 w-8 h-8 bg-[#3D6FD1] opacity-20 rounded-full animate-ping"></span>
                      Единый портал государственных услуг
                    </span>
                  </h1>
                  <p className="text-[30px] mb-8 leading-snug">
                    College SmartNation - единый портал для получения государственных услуг в сфере технического и профессионального образования, общедоступный реестр колледжей и система управления колледжем.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-gradient-to-r from-[#3D6FD1] to-[#294A8B] text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-medium text-[20px] relative overflow-hidden group">
                      <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                      <span className="relative z-10 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Создать Документ
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-[150px] h-[150px] bg-[#294A8B] rounded-lg shadow-xl z-0 transform rotate-12 animate-pulse"></div>
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
              <div className="absolute -bottom-10 -left-10 w-[150px] h-[150px] bg-[#3D6FD1] rounded-lg shadow-xl z-0 transform -rotate-12 animate-pulse"></div>
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] rounded-full bg-[#3D6FD1] blur-[50px] opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="mx-auto max-w-7xl">
          <div className="relative mb-12 text-center">
            <div className="absolute w-[300px] h-[300px] rounded-full bg-[#3D6FD1] blur-[150px] opacity-20 top-[-50px] left-[20%] z-0"></div>
            <h2 className="text-[48px] font-bold text-[#294A8B] relative z-10 mb-4">Наши услуги</h2>
            <p className="text-[24px] text-gray-700 max-w-3xl mx-auto relative z-10">Выберите необходимую услугу из списка доступных</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Card 1 */}
            <div className="p-6 rounded-lg bg-gradient-to-br from-[#F1F1F1] to-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group">
              <div className="absolute w-[100px] h-[100px] rounded-full bg-[#3D6FD1] blur-[50px] opacity-0 group-hover:opacity-10 -top-10 -right-10 transition-opacity duration-300"></div>
              <div className="mb-4 w-16 h-16 mx-auto bg-[#EBF1FF] p-3 rounded-lg transform transition-transform duration-300 group-hover:scale-110">
                <img src="/figma-assets/document_icon.svg" alt="Academic Leave" className="w-full h-full" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-center group-hover:text-[#3D6FD1] transition-colors duration-300">Заявление на академический отпуск</h3>
              <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-2 transition-all duration-300">
                <p className="text-sm text-gray-600 text-center">Оформление академического отпуска по уважительной причине</p>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="p-6 rounded-lg bg-gradient-to-br from-[#F1F1F1] to-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group">
              <div className="absolute w-[100px] h-[100px] rounded-full bg-[#3D6FD1] blur-[50px] opacity-0 group-hover:opacity-10 -top-10 -right-10 transition-opacity duration-300"></div>
              <div className="mb-4 w-16 h-16 mx-auto bg-[#EBF1FF] p-3 rounded-lg transform transition-transform duration-300 group-hover:scale-110">
                <img src="/figma-assets/medical_icon.svg" alt="Medical Certificate" className="w-full h-full" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-center group-hover:text-[#3D6FD1] transition-colors duration-300">Выдача справки о заболевании</h3>
              <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-2 transition-all duration-300">
                <p className="text-sm text-gray-600 text-center">Получение медицинской справки для учебного заведения</p>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="p-6 rounded-lg bg-gradient-to-br from-[#F1F1F1] to-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group">
              <div className="absolute w-[100px] h-[100px] rounded-full bg-[#3D6FD1] blur-[50px] opacity-0 group-hover:opacity-10 -top-10 -right-10 transition-opacity duration-300"></div>
              <div className="mb-4 w-16 h-16 mx-auto bg-[#EBF1FF] p-3 rounded-lg transform transition-transform duration-300 group-hover:scale-110">
                <img src="/figma-assets/school_icon.svg" alt="Admission Documents" className="w-full h-full" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-center group-hover:text-[#3D6FD1] transition-colors duration-300">Подача документов в приемную комиссию</h3>
              <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-2 transition-all duration-300">
                <p className="text-sm text-gray-600 text-center">Подача заявления и документов для поступления</p>
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="p-6 rounded-lg bg-gradient-to-br from-[#F1F1F1] to-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group">
              <div className="absolute w-[100px] h-[100px] rounded-full bg-[#3D6FD1] blur-[50px] opacity-0 group-hover:opacity-10 -top-10 -right-10 transition-opacity duration-300"></div>
              <div className="mb-4 w-16 h-16 mx-auto bg-[#EBF1FF] p-3 rounded-lg transform transition-transform duration-300 group-hover:scale-110">
                <img src="/figma-assets/family_icon.svg" alt="Family Circumstances" className="w-full h-full" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-center group-hover:text-[#3D6FD1] transition-colors duration-300">Выдача справки по семейным обстоятельствам</h3>
              <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-2 transition-all duration-300">
                <p className="text-sm text-gray-600 text-center">Получение справки для отсутствия по семейным причинам</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[64px] font-bold mb-6 text-[#294A8B]">О наших услугах</h2>
              <p className="text-[30px] mb-6 leading-snug">
                Мы — команда разработчиков, создавшая инновационную платформу, предназначенную для автоматизации документооборота в образовательных учреждениях, в частности — колледжах. Наша цель — упростить управление документацией, сделать процесс более быстрым, точным и удобным как для сотрудников, так и для студентов.
              </p>

              <div className="bg-[#F1F1F1] p-8 rounded-lg shadow-md mt-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
                  <div className="text-center border-r border-gray-300 pr-4">
                    <div className="text-[36px] font-bold text-[#3D6FD1] mb-2">1 492</div>
                    <div className="text-sm">Количество персонала</div>
                  </div>
                  <div className="text-center border-r border-gray-300 pr-4">
                    <div className="text-[36px] font-bold text-[#3D6FD1] mb-2">14</div>
                    <div className="text-sm">Количество колледжей</div>
                  </div>
                  <div className="text-center border-r border-gray-300 pr-4">
                    <div className="text-[33px] font-bold text-[#3D6FD1] mb-2">18 385</div>
                    <div className="text-sm">Количество контингента</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[36px] font-bold text-[#3D6FD1] mb-2">159</div>
                    <div className="text-sm">Количество госуслуг</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-[150px_0px_0px_0px] overflow-hidden shadow-xl h-80 md:h-[500px]">
              <Image
                src="/figma-assets/about-image.png"
                alt="About College SmartNation"
                width={600}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 mt-16 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-6 bg-white p-8 rounded-lg shadow-lg">
              <div className="space-y-8">
                <div>
                  <h3 className="text-[36px] font-bold mb-2 text-[#294A8B] flex items-center">
                    <span className="inline-block mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </span>
                    Адрес
                  </h3>
                  <p className="text-[20px] text-gray-700 ml-8">Магистраль Ев проспект 109/17,<br />Астана, Казахстан</p>
                </div>

                <div>
                  <h3 className="text-[36px] font-bold mb-2 text-[#294A8B] flex items-center">
                    <span className="inline-block mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </span>
                    Телефон
                  </h3>
                  <p className="text-[20px] text-gray-700 ml-8">+7 (727) 983-94-12<br />+7 (747) 983-94-12</p>
                </div>

                <div>
                  <h3 className="text-[36px] font-bold mb-2 text-[#294A8B] flex items-center">
                    <span className="inline-block mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </span>
                    Почта
                  </h3>
                  <p className="text-[20px] text-gray-700 ml-8">smartnation@gmail.com<br />smartnation@gmail.com</p>
                </div>

                <div>
                  <h3 className="text-[36px] font-bold mb-2 text-[#294A8B] flex items-center">
                    <span className="inline-block mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </span>
                    Часы работы
                  </h3>
                  <p className="text-[20px] text-gray-700 ml-8">Пн-Четверг: 10:00 - 20:00<br />Пт-Суббота: выходной</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-6 bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-8">
                <h2 className="text-[36px] font-bold mb-4 text-[#294A8B]">Подпишитесь на нашу рассылку,<br />чтобы быть в курсе наших новостей!</h2>
              </div>
              <form className="space-y-6">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Введите ваш email"
                    className="flex-grow px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#3D6FD1] focus:border-transparent"
                  />
                  <button className="bg-[#3D6FD1] text-white px-6 py-3 rounded-r-lg hover:bg-[#294A8B] transition-colors font-medium">
                    Подписаться
                  </button>
                </div>
              </form>

              <div className="mt-12">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-[24px] font-bold text-[#294A8B]">Социальные сети</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-[#294A8B] hover:text-[#3D6FD1] transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-[#294A8B] hover:text-[#3D6FD1] transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-[#294A8B] hover:text-[#3D6FD1] transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="bg-[#F1F1F1] p-4 rounded-lg">
                  <div className="rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1533.73762844527!2d71.41917670557284!3d51.09005890001062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424585a605525605%3A0x4dff4a1973f7567e!2sAstana%20IT%20University!5e0!3m2!1sru!2skz!4v1744650589399!5m2!1sru!2skz"
                      width="100%"
                      height="300"
                      style={{border:0}}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#294A8B] text-white px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <div className="flex items-center mb-6">
                <div className="font-sans text-lg font-semibold leading-tight text-white">
                  <span className="block text-xs font-medium text-gray-300">SmartNation</span>
                  COLLEGE
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Цифровые услуги для студентов колледжа
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="md:col-span-3">
              <h3 className="text-xl font-bold mb-6">Полезные ссылки</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Главная</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">О проекте</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Блог</a></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h3 className="text-xl font-bold mb-6">Документы</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Условия использования</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Права пользователей</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Правила пользования</a></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h3 className="text-xl font-bold mb-6">Контакты</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-5 h-5 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span>Магистраль Ев проспект 109/17, Астана</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span>+7 (727) 983-94-12</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span>smartnation@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#3D6FD1] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 mb-4 md:mb-0">&copy; {new Date().getFullYear()} SmartNation College. Все права защищены.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Условия использования</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
