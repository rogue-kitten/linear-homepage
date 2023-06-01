import classNames from 'classnames';
import { CSSProperties } from 'react';
import { Container } from './container';

interface FeatureProps {
  children: React.ReactNode;
  color: string;
  secondaryColor: string;
}

export const Features = ({ children, color, secondaryColor }: FeatureProps) => {
  return (
    <div
      style={
        {
          '--feature-color': color,
          '--secondary-color': secondaryColor,
        } as CSSProperties
      }
      className={classNames(
        'relative my-[25.2rem]',
        'after:absolute after:inset-0 after:bg-feature',
        'before:feature-mask before:absolute before:mb-[-40rem] before:h-[40rem] before:w-full before:translate-y-[-20rem] before:rotate-180 before:bg-[conic-gradient(from_90deg_at_80%_50%,#000212,rgb(var(--secondary-color))),conic-gradient(from_270deg_at_20%_50%,rgb(var(--secondary-color)),#000212)] before:bg-[50%_100%,50%_100%] before:bg-no-repeat before:[background-position:1%_0%,99%_0%]'
      )}
    >
      <Container className='flex flex-col items-center pt-15'>
        {children}
      </Container>
    </div>
  );
};

interface MainFeatureProps {
  image: string;
  text: string;
  title: React.ReactNode;
}

const MainFeature = ({ image, text, title }: MainFeatureProps) => {
  return (
    <>
      <div className='relative w-full after:absolute after:inset-0 after:bg-feature-image2'>
        <div className='mx-auto w-full text-center md:w-[78rem] md:max-w-[90%]'>
          <h2 className='text-gradient mb-11 pb-3 text-center text-7xl font-medium md:text-9xl'>
            {title}
          </h2>
          <div
            className={classNames(
              'relative w-full rounded-3xl',
              'before:feature-image-mask before:absolute before:inset-0 before:rounded-[inherit] before:bg-feature-image before:p-[1px]',
              'after:feature-image-mask2 after:absolute after:inset-0 after:rounded-[inherit] after:bg-white-a15'
            )}
          >
            <img src={image} className='h-auto w-full' />
          </div>
        </div>
      </div>
      <div className='w-full text-center md:w-[78rem] md:max-w-[90%]'>
        <p className='mx-auto mt-16 w-full max-w-[60rem] text-2xl leading-tight tracking-tight text-white md:my-16 md:text-4xl'>
          {text}
        </p>
        <hr className='mb-[7.2rem] h-[1px] border-none bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.1)_50%,transparent)]' />
      </div>
    </>
  );
};

interface FeaturesGridProps {
  features: {
    icon: React.FC;
    title: string;
    text: string;
  }[];
}

const FeatureGrid = ({ features }: FeaturesGridProps) => {
  return (
    <div className='mb-[14rem] grid w-full grid-cols-4 gap-x-6 gap-y-9  md:grid-cols-6'>
      {features.map(({ icon: Icon, text, title }, idx) => (
        <div
          key={idx}
          className='col-span-2 mx-auto max-w-none leading-relaxed md:max-w-[25.6rem] [&_svg]:mb-1 [&_svg]:mr-[0.6rem] [&_svg]:h-4 [&_svg]:w-4 [&_svg]:fill-white [&_svg]:md:inline'
        >
          <Icon />
          <h4 className='inline text-sm font-medium md:text-md'>
            <span>{title}</span> <br className='block md:hidden' />
            <span className='text-primary-text'>{text}</span>
          </h4>
        </div>
      ))}
    </div>
  );
};

interface FeatureCardProps {
  features: {
    image: string;
    title: string;
    text: string;
    imageClass: string;
  }[];
}

const FeatureCards = ({ features }: FeatureCardProps) => {
  return (
    <div
      className={classNames(
        'relative flex w-full flex-col justify-between gap-6 md:flex-row'
      )}
    >
      {features.map(({ image, title, text, imageClass }, idx) => (
        <div
          key={idx}
          className={classNames(
            'relative flex aspect-[1.1/1] flex-1 flex-col justify-start overflow-hidden rounded-[2.4rem] bg-feature-cards-mobile px-8 py-6 font-medium md:rounded-[4.8rem] md:bg-feature-cards md:p-14',
            'before:feature-image-mask before:absolute before:inset-0 before:rounded-[inherit] before:bg-feature-cards2 before:p-[1px]'
          )}
        >
          <h4 className='mb-1 text-2xl'>{title}</h4>
          <p className='max-w-[31rem] text-md text-primary-text'>{text}</p>
          <img
            src={image}
            className={classNames(
              'pointer-events-none absolute max-w-none select-none rounded-[1.2rem]',
              imageClass
            )}
          />
        </div>
      ))}
    </div>
  );
};

Features.Main = MainFeature;
Features.Grid = FeatureGrid;
Features.Card = FeatureCards;
