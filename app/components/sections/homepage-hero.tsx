import { Button, ButtonHighlight } from '../button';
import { Hero, HeroSubtitle, HeroTitle } from '../hero';
import { HeroImage } from '../heroImage';
import { ChevronRight } from '../icons/chevronRight';

export const HomePageHero = () => {
  return (
    <Hero>
      <Button
        className='translate-y-[-1rem] animate-fade-in opacity-0'
        href='/'
        variant='secondary'
        size='small'
      >
        Introducing Linear Insights
        <ButtonHighlight className='-mr-2 ml-2'>→</ButtonHighlight>
      </Button>
      <div className='px-6 md:px-8'>
        <HeroTitle className='translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]'>
          Linear is a better way <br className='hidden md:block' /> to build
          products
        </HeroTitle>
        <HeroSubtitle className='translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]'>
          Meet the new standard for modern software development.{' '}
          <br className='hidden md:block' />
          Streamline issues, sprints, and product roadmaps.
        </HeroSubtitle>
      </div>
      <Button
        href='/'
        variant='primary'
        size='large'
        className='translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]'
      >
        Get Started <ChevronRight className='ml-2' />
      </Button>
      <HeroImage />
    </Hero>
  );
};
