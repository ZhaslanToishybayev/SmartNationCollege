import React from 'react';

export const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: '/figma-assets/icon-location.svg',
      title: 'Адрес',
      content: 'Мангилик Ел проспект, 55/11, Астана, Казахстан'
    },
    {
      icon: '/figma-assets/icon-phone.svg',
      title: 'Телефон',
      content: '+7 (707) 380-40-75\n+7 (747) 163-07-07'
    },
    {
      icon: '/figma-assets/icon-email.svg',
      title: 'Почта',
      content: 'znurlanuly293@gmail.com\nahmedermek07@gmail.com'
    },
    {
      icon: '/figma-assets/icon-clock.svg',
      title: 'Часы работы',
      content: 'По будням: 12:00 - 22:00\nПо выходным: отдых'
    }
  ];

  return (
    <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="glass-card p-8">
            <div className="grid grid-cols-1 gap-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="hover-lift p-4 rounded-[8px] bg-white/50">
                  <div className="flex items-start">
                    <img src={item.icon} alt={item.title} className="w-6 h-6 mt-1 mr-3" />
                    <div>
                      <h3 className="font-arial text-[24px] md:text-[30px] font-normal leading-[1.15em] text-black mb-2">
                        {item.title}
                      </h3>
                      <p className="font-arial text-[16px] md:text-[20px] font-normal leading-[1.15em] text-black whitespace-pre-line">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-8">
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
  );
};

export default Contact;
