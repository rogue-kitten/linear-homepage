import { Features } from '../features';
import {
  AutomationTrackingIcon,
  ConfigureIcon,
  DelayIcon,
  PrepareIcon,
  ScheduleIcon,
  ScopeIcon,
} from '../icons/features/momentum';

export const MomentumCycles = () => {
  return (
    <Features color='40,87,255' secondaryColor='48,58,117'>
      <Features.Main
        title={
          <>
            Build Momentum
            <br />
            With Cycles
          </>
        }
        text='Cycles focus your team on what work should happen next. A healthy routine to maintain velocity and make meaningful progress.'
        maxWidth='70rem'
        image='/image/cycles.webp'
        imageSize='large'
      />
      <Features.Grid
        features={[
          {
            icon: AutomationTrackingIcon,
            title: 'Automation Tracking.',
            text: 'Any started issues are added to the current cycle.',
          },
          {
            icon: ScheduleIcon,
            title: 'Scheduled.',
            text: 'Unfinished work rolls over to the next cycle automatically.',
          },
          {
            icon: ConfigureIcon,
            title: 'Fully Configurable.',
            text: 'Define start date, end date, duration and more.',
          },
          {
            icon: DelayIcon,
            title: 'Predict Delays.',
            text: 'Get warnings for at risk cycles.',
          },
          {
            icon: ScopeIcon,
            title: 'Scope Creep.',
            text: 'Understand which issues are added mid cycle.',
          },
          {
            icon: PrepareIcon,
            title: 'Be Prepared.',
            text: 'Schedule work in advance with upcoming cycles.',
          },
        ]}
      />
    </Features>
  );
};
