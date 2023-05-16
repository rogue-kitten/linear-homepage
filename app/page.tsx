import { Button } from './components/button';
import { Container } from './components/container';
import { Hero, HeroSubtitle, HeroTitle } from './components/hero';
import { ChevronRight } from './components/icons/chevronRight';

export default function Home() {
  return (
    <Container>
      <Hero>
        <Button href='/' variant='secondary' size='small'>
          Introducing Linear Insights
          <span className='-mr-2 ml-2'>
            <Button href='/' variant='tertiary' size='tiny'>
              →
            </Button>
          </span>
        </Button>
        <div className='px-8'>
          <HeroTitle>
            Linear is a better way <br className='hidden md:block' /> to build
            products
          </HeroTitle>
          <HeroSubtitle>
            Meet the new standard for modern software development.
            <br className='hidden md:block' />
            Streamline issues, sprints, and product roadmaps.
          </HeroSubtitle>
        </div>
        <Button href='/' variant='primary' size='large'>
          Get Started <ChevronRight className='ml-2' />
        </Button>
        <img src='/image/hero.webp' alt='Hero Image' className='mt-[12.8rem]' />
      </Hero>
    </Container>
  );
}
