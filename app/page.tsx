import classNames from 'classnames';
import { Button } from './components/button';
import { Clients } from './components/clients';
import { Container } from './components/container';
import { Hero, HeroSubtitle, HeroTitle } from './components/hero';
import { HeroImage } from './components/heroImage';
import { ChevronRight } from './components/icons/chevronRight';
import { Stars } from './components/icons/stars';

export default function Home() {
  return (
    <>
      <Container>
        <Hero>
          <Button
            className='translate-y-[-1rem] animate-fade-in opacity-0'
            href='/'
            variant='secondary'
            size='small'
          >
            Introducing Linear Insights
            <span className='-mr-2 ml-2 flex items-center justify-between rounded-full bg-white-a05 px-2'>
              →
            </span>
          </Button>
          <div className='px-6 md:px-8'>
            <HeroTitle className='translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]'>
              Linear is a better way <br className='hidden md:block' /> to build
              products
            </HeroTitle>
            <HeroSubtitle className='translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]'>
              Meet the new standard for modern software development.{' '}
              <br className='hidden md:block' />
              Streamline issues, sprints, and product roadmaps.
            </HeroSubtitle>
          </div>
          <Button
            href='/'
            variant='primary'
            size='large'
            className='translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]'
          >
            Get Started <ChevronRight className='ml-2' />
          </Button>
          <HeroImage />
        </Hero>
      </Container>

      <Container className='mt-[12.8rem] text-center md:mt-[25.6rem]'>
        <Clients />
      </Container>
      <div
        className={classNames(
          'sunrise-mask bg-sunrise-background relative mx-auto my-[-12.8rem] h-[60rem] overflow-hidden',
          '[--color:#7877C6] before:absolute before:inset-0 before:h-full before:w-full before:bg-sunrise-gradient before:opacity-40',
          'after:absolute after:-left-1/2 after:top-1/2 after:aspect-1/0.7 after:w-[200%] after:rounded-[50%] after:border-t after:border-[#7876c566] after:bg-background'
        )}
      >
        <Stars />
      </div>
    </>
  );
}
