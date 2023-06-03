'use client';

import classNames from 'classnames';
import Image from 'next/image';
import { CSSProperties, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const generateRandomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

interface Lines {
  direction: 'to bottom' | 'to right';
  duration: number;
  size: number;
  id: string;
}

export const HeroImage = () => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });

  const [borderLines, setBorderLines] = useState<Lines[]>([]);

  const timeOutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const removeLines = (id: string) => {
    setBorderLines((prev) => prev.filter((line) => line.id !== id));
  };

  useEffect(() => {
    const renderLine = (timeout: number) => {
      timeOutRef.current = setTimeout(() => {
        setBorderLines((prev) => [
          ...prev,
          {
            id: Math.random().toString(36).substring(7),
            direction: Math.random() > 0.5 ? 'to bottom' : 'to right',
            duration: generateRandomNumber(1000, 3000),
            size: generateRandomNumber(10, 30),
          },
        ]);
        renderLine(generateRandomNumber(200, 2000));
      }, timeout);
    };

    renderLine(generateRandomNumber(200, 2000));

    return () => {
      if (timeOutRef.current) clearTimeout(timeOutRef.current);
    };
  }, [inView, setBorderLines]);

  return (
    <div ref={ref} className='mt-[12.8rem] [perspective:2000px]'>
      <div
        className={classNames(
          'rounded-lg border border-white-a05 bg-white bg-opacity-[0.01] bg-hero-gradient',
          inView ? 'animate-image-rotate' : '[transform:rotateX(25deg)]',
          'before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-hero-glow before:opacity-0 before:[filter:blur(120px)]',
          inView && 'before:animate-image-glow'
        )}
      >
        <div className='absolute left-0 top-0 z-20 h-full w-full overflow-hidden'>
          {borderLines.map((line) => (
            <span
              onAnimationEnd={() => removeLines(line.id)}
              key={line.id}
              style={
                {
                  '--direction': line.direction,
                  '--size': line.size,
                  '--duration': `${line.duration}ms`,
                } as CSSProperties
              }
              className={classNames(
                'absolute top-0 block bg-glow-lines',
                line.direction === 'to bottom'
                  ? 'right-0 h-[calc(var(--size)*1rem)] w-[1px] animate-glow-lines-vertical'
                  : 'left-0 h-[1px] w-[calc(var(--size)*1rem)] animate-glow-lines-horizontal'
              )}
            />
          ))}
        </div>
        <svg
          width='100%'
          viewBox='0 0 1499 778'
          fill='none'
          className={classNames(
            'absolute left-0 top-0 h-full w-full',
            '[&_path]:stroke-white [&_path]:[stroke-dasharray:1] [&_path]:[stroke-dashoffset:1] [&_path]:[stroke-opacity:0.2] ',
            inView && '[&_path]:animate-sketch-lines'
          )}
        >
          <path pathLength='1' d='M1500 72L220 72'></path>
          <path pathLength='1' d='M1500 128L220 128'></path>
          <path pathLength='1' d='M1500 189L220 189'></path>
          <path pathLength='1' d='M220 777L220 1'></path>
          <path pathLength='1' d='M538 777L538 128'></path>
        </svg>
        <div className='image-container'>
          <Image
            src='/image/hero.webp'
            alt='Hero Image'
            fill
            className={classNames(
              'image relative z-10 rounded-lg transition-opacity delay-[680ms] duration-[400ms]',
              inView ? 'opacity-100' : 'opacity-0'
            )}
          />
        </div>
      </div>
    </div>
  );
};
