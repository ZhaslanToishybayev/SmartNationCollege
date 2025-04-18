"use client";

import React, { useEffect, useRef } from 'react';

interface TimelineItem {
  year: string;
  content: string;
  position: 'left' | 'right';
}

interface TimelineSectionProps {
  items: TimelineItem[];
}

export function TimelineSection({ items }: TimelineSectionProps) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    const timelineElements = document.querySelectorAll('.timeline-year');
    timelineElements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const paths = [
    "M50,0 C150,0 150,100 250,100",
    "M250,0 C150,0 150,100 50,100",
    "M50,0 C200,0 100,100 250,100",
    "M250,0 C150,0 150,100 50,100"
  ];

  return (
    <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 timeline-section">
      <div className="mx-auto max-w-7xl">
        <div className="timeline-connector">
          {items.map((_, index) => {
            if (index < items.length - 1) {
              return (
                <div
                  key={index}
                  className="timeline-curve"
                  style={{
                    position: 'absolute',
                    top: `${200 + index * 300}px`,
                    left: '0',
                    width: '100%',
                    height: '300px',
                  }}
                >
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 300 100"
                    preserveAspectRatio="none"
                    className="timeline-path"
                  >
                    <path
                      d={paths[index]}
                      stroke="rgba(61, 111, 209, 0.3)"
                      strokeWidth="4"
                      fill="none"
                      className="path-animation"
                      strokeDasharray="1000"
                      strokeDashoffset="1000"
                      style={{
                        animation: `drawPath 2s ease-out ${index * 0.5}s forwards`
                      }}
                    />
                  </svg>
                </div>
              );
            }
            return null;
          })}
        </div>

        {items.map((item, index) => (
          <div
            key={item.year}
            className={`timeline-year ${index % 2 === 0 ? 'from-left' : 'from-right'}`}
            style={{
              '--delay': `${index * 0.3}s`,
              marginBottom: index < items.length - 1 ? '300px' : '0'
            } as React.CSSProperties}
          >
            <div className="timeline-year-heading">
              <h3>{item.year}</h3>
            </div>
            <div className={`timeline-content-${item.position} glass-card`}>
              <p className="font-arial text-[30px] font-normal leading-[1.15em]">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}