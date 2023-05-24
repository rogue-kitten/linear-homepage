import { HeroSubtitle } from '../hero';
import { AlanLogo } from '../logos/alan';
import { ArcLogo } from '../logos/arc';
import { CashAppLogo } from '../logos/cashApp';
import { DescriptLogo } from '../logos/descript';
import { LoomLogo } from '../logos/loom';
import { MercuryLogo } from '../logos/mercury';
import { OpenSeaLogo } from '../logos/openSea';
import { PitchLogo } from '../logos/pitch';
import { RampLogo } from '../logos/ramp';
import { RaycastLogo } from '../logos/raycast';
import { RetoolLogo } from '../logos/retool';
import { VercelLogo } from '../logos/vercel';

export const Clients = () => {
  return (
    <>
      <HeroSubtitle className='mb-12'>
        Powering the world’s best product teams.{' '}
        <br className='hidden sm:block' />
        <span className='text-white'>
          From next-gen startups to established enterprises.
        </span>
      </HeroSubtitle>
      <div className='grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-6 [&_svg]:mx-auto [&_svg]:max-w-[16rem]'>
        <RampLogo />
        <LoomLogo className='hidden md:block' />
        <VercelLogo />
        <DescriptLogo className='hidden md:block' />
        <CashAppLogo />
        <RaycastLogo />
        <MercuryLogo />
        <RetoolLogo />
        <AlanLogo className='hidden md:block' />
        <ArcLogo className='hidden md:block' />
        <OpenSeaLogo className='hidden md:block' />
        <PitchLogo className='hidden md:block' />
      </div>
    </>
  );
};
