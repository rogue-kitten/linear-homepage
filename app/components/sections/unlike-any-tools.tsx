import classNames from 'classnames';
import { Button, ButtonHighlight } from '../button';
import { CommandMenu } from '../command-menu';
import { Container } from '../container';
import { ChevronRight } from '../icons/chevronRight';
import { ModernTeams } from '../illustrations/modern';
import { Thunder } from '../illustrations/thunder';
import { KeyboardShortcuts } from '../keyboard-shortcuts';
import { UspSubTitle, UspTitle, UspWrapper } from '../usp-wrapper';

export const UnlikeAnyTool = () => {
  return (
    <div>
      <Container>
        <h2 className='mb-5 text-center text-[3.6rem] leading-none text-white md:mb-7 md:text-8xl'>
          Unlike any tool
          <br />
          you’ve used before
        </h2>
        <p className='mx-auto mb-12 w-full max-w-[68rem] text-center text-lg text-primary-text md:text-xl'>
          Designed to the last pixel and engineered with unforgiving precision,
          Linear combines UI elegance with world-class performance.
        </p>
      </Container>
      <div className='h-[48rem] overflow-y-hidden md:mx-auto md:h-auto md:max-w-[120rem] md:overflow-y-auto'>
        <div className='flex flex-shrink-0 snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-12 md:grid md:grid-cols-6 md:gap-6 md:overflow-x-hidden md:px-8'>
          <UspWrapper className='col-span-4 overflow-hidden [--order:3]'>
            <KeyboardShortcuts />
            <UspTitle>Built for your keyboard</UspTitle>
            <UspSubTitle>
              Fly through your tasks with rapid-fire keyboard shortcuts for
              everything. Literally everything.
            </UspSubTitle>
          </UspWrapper>
          <UspWrapper className='col-span-2 [--order:1]'>
            <div className={classNames('thunder-mask absolute top-[-9.2rem]')}>
              <Thunder />
            </div>
            <UspTitle>Breathtakingly fast</UspTitle>
            <UspSubTitle>
              Built for speed with 50ms interactions and real-time sync.
            </UspSubTitle>
          </UspWrapper>
          <UspWrapper className='group col-span-2 [--order:2]'>
            <ModernTeams />
            <Button
              href='/'
              size='small'
              variant='secondary'
              className={classNames(
                'absolute bottom-[20rem] md:translate-y-5 md:opacity-0 md:duration-200 md:group-hover:translate-y-0 md:group-hover:opacity-100'
              )}
            >
              <ButtonHighlight className='-ml-2 mr-2'>
                Linear Method
              </ButtonHighlight>
              Product Principles <ChevronRight className='ml-2' />
            </Button>
            <UspTitle>Designed for modern software teams</UspTitle>
            <UspSubTitle>
              Comes with built-in workflows that create focus and routine.
            </UspSubTitle>
          </UspWrapper>
          <UspWrapper className='col-span-4 [--order:4]' reverse={true}>
            <CommandMenu />
            <div className='transition-opacity duration-300 [.opened+&]:opacity-0'>
              <UspTitle>Meet your command line</UspTitle>
              <UspSubTitle>
                Complete any action in seconds with the global command menu.
              </UspSubTitle>
            </div>
          </UspWrapper>
        </div>
      </div>
    </div>
  );
};
