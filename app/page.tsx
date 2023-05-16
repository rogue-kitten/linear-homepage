import { Container } from './components/container';
import { Hero, HeroSubtitle, HeroTitle } from './components/hero';

export default function Home() {
  return (
    <Container>
      <Hero>
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
        <img src='/image/hero.webp' alt='Hero Image' />
      </Hero>
    </Container>
  );
}
