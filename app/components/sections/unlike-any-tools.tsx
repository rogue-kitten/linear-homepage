import classNames from 'classnames';
import { KeyBoard } from '../illustrations/keyboard';
import { Thunder } from '../illustrations/thunder';
import { UspSubTitle, UspTitle, UspWrapper } from '../usp-wrapper';

export const UnlikeAnyTool = () => {
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
        <UspWrapper className='col-span-2'>
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
