interface HeroProps {
  children: React.ReactNode;
}

interface HeroElementProps {
  children: React.ReactNode;
}

export const HeroTitle = ({ children }: HeroElementProps) => {
  return (
    <h1 className='text-gradient my-6 text-6xl md:text-8xl'>{children}</h1>
  );
};

export const HeroSubtitle = ({ children }: HeroElementProps) => {
  return (
    <p className='mb-12 text-lg text-primary-text md:text-xl'>{children}</p>
  );
};

export const Hero = ({ children }: HeroProps) => {
  return <div className='mt-16 text-center'>{children}</div>;
};
