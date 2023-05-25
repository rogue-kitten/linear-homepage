'use client';
import classNames from 'classnames';
import { useState } from 'react';
import { Button } from '../button';
import { ChevronRight } from '../icons/chevronRight';
import { KeyBoard } from '../illustrations/keyboard';
import { ModernTeams } from '../illustrations/modern';
import { Thunder } from '../illustrations/thunder';
import { UspSubTitle, UspTitle, UspWrapper } from '../usp-wrapper';

export const UnlikeAnyTool = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h2 className='mb-5 text-center text-[3.6rem] leading-none text-white md:mb-7 md:text-8xl'>
        Unlike any tool
        <br />
        you’ve used before
      </h2>
      <p className='mx-auto mb-12 w-full max-w-[68rem] text-center text-lg text-primary-text md:text-xl'>
        Designed to the last pixel and engineered with unforgiving precision,
        Linear combines UI elegance with world-class performance.
      </p>
      <div className='grid grid-cols-6 gap-6'>
        <UspWrapper className='col-span-4'>
          <KeyBoard />
          <UspTitle>Built for your keyboard</UspTitle>
          <UspSubTitle>
            Fly through your tasks with rapid-fire keyboard shortcuts for
            everything. Literally everything.
          </UspSubTitle>
        </UspWrapper>
        <UspWrapper className='col-span-2'>
          <div className={classNames('thunder-mask absolute mt-[-9.2rem]')}>
            <Thunder />
          </div>
          <UspTitle>Breathtakingly fast</UspTitle>
          <UspSubTitle>
            Built for speed with 50ms interactions and real-time sync.
          </UspSubTitle>
        </UspWrapper>
        <UspWrapper
          className='col-span-2'
          OnMouseEnter={() => setShow(true)}
          OnMouseLeave={() => setShow(false)}
        >
          <ModernTeams />
          <Button
            href='/'
            size='small'
            variant='secondary'
            className={classNames(
              'absolute bottom-[20rem] transition-[opacity,transform] duration-200 ease-in-out',
              show ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            )}
          >
            <span className='-ml-2 mr-2 flex h-5 items-center rounded-full bg-white-a05 px-2'>
              Linear Method
            </span>
            Product Principles <ChevronRight className='ml-2' />
          </Button>
          <UspTitle>Designed for modern software teams</UspTitle>
          <UspSubTitle>
            Comes with built-in workflows that create focus and routine.
          </UspSubTitle>
        </UspWrapper>
        <UspWrapper className='col-span-4'>
          <UspTitle>Meet your command line</UspTitle>
          <UspSubTitle>
            Complete any action in seconds with the global command menu.
          </UspSubTitle>
        </UspWrapper>
      </div>
    </div>
  );
};
