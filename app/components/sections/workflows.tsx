import { Button, ButtonHighlight } from '../button';
import { Features } from '../features';
import { ChevronRight } from '../icons/chevronRight';
import {
  DiscordIcon,
  FigmaIcon,
  FrontIcon,
  GitlabIcone,
  IntercomIcon,
} from '../icons/features/integrations';
import { AirbyteIcon } from '../icons/features/integrations/airbyte';
import { SentryIcon } from '../icons/features/integrations/sentry';
import { ZendeskIcon } from '../icons/features/integrations/zendesk';
import { GithubIcon } from '../icons/github';
import { SlackIcon } from '../icons/slack';

export const Workflows = () => {
  return (
    <div>
      <Features color='' secondaryColor='62,36,118'>
        <Features.Main
          title={
            <>
              Linear workflows <br />
              Exponential Results.
            </>
          }
          text='From customer support integrations to powerful Git automations, Linear streamlines the entire product development process.'
          maxWidth='65rem'
          buttonChildren={
            <>
              Discover Integrations
              <ButtonHighlight className='-mr-2 ml-2'>
                <ChevronRight className='fill-white' />
              </ButtonHighlight>
            </>
          }
        />
        <Features.Grid
          features={[
            {
              title: 'Github and Gitlab',
              text: 'Sync PRs with issues that close automatically',
              icon: [GithubIcon, GitlabIcone],
            },
            {
              title: 'Slack and Discord',
              text: 'Create Issues and set up alerts',
              icon: [SlackIcon, DiscordIcon],
            },
            {
              title: 'Sentry',
              text: 'Automatically create issues for code exception',
              icon: SentryIcon,
            },
            {
              title: 'Airbyte',
              text: 'Sync workplace data to external warehouses and databases',
              icon: AirbyteIcon,
            },
            {
              title: 'Front. Itercom and Zendesk',
              text: 'Keep a tight loop with your users',
              icon: [FrontIcon, IntercomIcon, ZendeskIcon],
            },
            {
              title: 'Figma',
              text: 'Embed design files in issues and documents',
              icon: FigmaIcon,
            },
          ]}
        />
      </Features>
    </div>
  );
};
