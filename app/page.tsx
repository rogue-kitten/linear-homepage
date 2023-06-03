import { Container } from './components/container';
import { Clients } from './components/sections/clients';
import { DownloadApp } from './components/sections/download';
import { HomePageHero } from './components/sections/homepage-hero';
import { IssueTracking } from './components/sections/issue-tracking';
import { MomentumCycles } from './components/sections/momentum-cycles';
import { Roadmaps } from './components/sections/roadmaps';
import { UnlikeAnyTool } from './components/sections/unlike-any-tools';
import { Workflows } from './components/sections/workflows';
import { StarComponent } from './components/stars';

export default function Home() {
  return (
    <>
      <Container>
        <HomePageHero />
      </Container>

      <Container className='mt-[12.8rem] text-center md:mt-[25.6rem]'>
        <Clients />
      </Container>
      <StarComponent />
      <UnlikeAnyTool />
      <IssueTracking />
      <MomentumCycles />
      <Roadmaps />
      <Workflows />
      <StarComponent reverse={true} />
      <Container>
        <DownloadApp />
      </Container>
    </>
  );
}
