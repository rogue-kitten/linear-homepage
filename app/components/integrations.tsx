'use client';
import classNames from 'classnames';
import { CSSProperties } from 'react';
import { useInView } from 'react-intersection-observer';
import { IconWrapper } from './icon-wrapper';
import {
  FigmaIcon,
  FrontIcon,
  GitlabIcone,
  IntercomIcon,
  PlusIcon,
} from './icons/features/integrations';
import { ZendeskIcon } from './icons/features/integrations/zendesk';
import { GithubIcon } from './icons/github';

export const Integrations = () => {
  const { ref, inView } = useInView({ threshold: 1 });
  const ripples = [
    {
      opacity: 0.3,
      delay: '0ms',
      size: '210px',
    },
    {
      opacity: 0.2,
      delay: '400ms',
      size: '280px',
    },
    {
      opacity: 0.15,
      delay: '800ms',
      size: '360px',
    },
  ];
  return (
    <div ref={ref} className='relative flex items-center justify-center gap-4'>
      <IconWrapper stagger={2} inView={inView} size='40px' icon={FigmaIcon} />
      <IconWrapper stagger={1} inView={inView} size='56px' icon={GitlabIcone} />
      <IconWrapper inView={inView} size='72px' icon={ZendeskIcon} />
      <div
        className={classNames(
          'relative z-[2] flex h-[14.8rem] w-[14.8rem] shrink-0 items-center justify-center overflow-hidden rounded-full',
          'before:integrations-mask before:absolute before:inset-0 before:rounded-[inherit] before:bg-integrations before:p-[1px]',
          'after:absolute after:inset-0 after:bg-integrations2'
        )}
      >
        <PlusIcon />
      </div>
      <IconWrapper
        reverse={true}
        inView={inView}
        size='72px'
        icon={FrontIcon}
      />
      <IconWrapper
        reverse={true}
        stagger={1}
        inView={inView}
        size='56px'
        icon={GithubIcon}
      />
      <IconWrapper
        stagger={2}
        reverse={true}
        inView={inView}
        size='40px'
        icon={IntercomIcon}
      />
      <div className='absolute left-1/2 top-1/2 z-0 h-[24.2rem] w-[24.2rem] shrink-0 -translate-x-1/2 -translate-y-1/2 overflow-visible'>
        {ripples.map(({ opacity, delay, size }) => (
          <div
            key={opacity}
            style={
              {
                '--opacity': opacity,
                '--delay': delay,
                '--size': size,
              } as CSSProperties
            }
            className={classNames(
              'absolute left-1/2 top-1/2 h-[var(--size)] w-[var(--size)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ac8eff] bg-ripple-gradient opacity-0',
              inView && 'animate-ripple'
            )}
          />
        ))}
      </div>
    </div>
  );
};
