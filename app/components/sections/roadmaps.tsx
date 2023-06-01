import { Features } from '../features';
import {
  DocumentIcon,
  InsightIcon,
  MultiTeamIcon,
  NotificationIcon,
  RoadMapIcon,
  TimelineIcon,
} from '../icons/features/roadmap';

export const Roadmaps = () => {
  return (
    <div>
      <Features color='0,225,244' secondaryColor='31,49,64'>
        <Features.Main
          text='Plan visually, collaborate in cross-team projects, and make better decisions with progress insights and project updates.'
          title={
            <>
              Set direction <br /> with Roadmaps
            </>
          }
          image='/image/roadmap.webp'
          imageSize='large'
          maxWidth='60rem'
        />
        <Features.Grid
          features={[
            {
              icon: MultiTeamIcon,
              title: 'Multi team projects.',
              text: 'Collaborate across teams and departments.',
            },
            {
              icon: DocumentIcon,
              title: 'Project Documents.',
              text: 'Write project briefs and specs right in linear.',
            },
            {
              icon: RoadMapIcon,
              title: 'Custom Roadmaps.',
              text: 'Organize projects across multiple roadmaps.',
            },
            {
              icon: TimelineIcon,
              title: 'Timeline View.',
              text: 'Visulise the product journey ahead.',
            },
            {
              icon: InsightIcon,
              title: 'Project Insights.',
              text: 'Trake scope, velocity, and progress over time.',
            },
            {
              icon: NotificationIcon,
              title: 'Personal Notifications.',
              text: 'Stay in loop on project activity and updates.',
            },
          ]}
        />
        <Features.Card
          features={[
            {
              title: 'Project Updates',
              text: 'Keep everyone up-to-date on the health and progress of projects.',
              image: '/image/card-updates.webp',
              imageClass: 'md:top-[40%] top-[50%] left-[7%] max-w-[100%]',
            },
            {
              title: 'Focus on the big picture',
              text: 'Explore every company project in one view to easily identify what needs attention.',
              image: '/image/card-roadmaps.webp',
              imageClass: 'md:top-[40%] top-[50%] left-[2%] max-w-[100%]',
            },
          ]}
        />
      </Features>
    </div>
  );
};
