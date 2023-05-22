'use client';

import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';

export const HeroImage = () => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });
  console.log(inView);

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
        <img
          src='/image/hero.webp'
          alt='Hero Image'
          className={classNames(
            'relative z-10 rounded-lg transition-opacity delay-[680ms] duration-[400ms]',
            inView ? 'opacity-100' : 'opacity-0'
          )}
        />
      </div>
    </div>
  );
};
