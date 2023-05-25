import classNames from 'classnames';
import { Container } from './components/container';
import { Stars } from './components/illustrations/stars';
import { Clients } from './components/sections/clients';
import { HomePageHero } from './components/sections/homepage-hero';
import { UnlikeAnyTool } from './components/sections/unlike-any-tools';

export default function Home() {
  return (
    <>
      <Container>
        <HomePageHero />
      </Container>

      <Container className='mt-[12.8rem] text-center md:mt-[25.6rem]'>
        <Clients />
      </Container>
      <div
        className={classNames(
          'sunrise-mask bg-sunrise-background pointer-events-none relative z-[-1] mx-auto my-[-12.8rem] h-[60rem] overflow-hidden',
          '[--color:#7877C6] before:absolute before:inset-0 before:h-full before:w-full before:bg-sunrise-gradient before:opacity-40',
          'after:absolute after:-left-1/2 after:top-1/2 after:aspect-1/0.7 after:w-[200%] after:rounded-[50%] after:border-t after:border-[#7876c566] after:bg-background'
        )}
      >
        <Stars />
      </div>
      <Container>
        <UnlikeAnyTool />
      </Container>
    </>
  );
}
