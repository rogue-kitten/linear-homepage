import classNames from 'classnames';
import { Stars } from './illustrations/stars';

export const StarComponent = ({ reverse = false }: { reverse?: boolean }) => {
  return (
    <div
      className={classNames(
        'sunrise-mask bg-sunrise-background pointer-events-none relative z-[-2] mx-auto  h-[60rem] overflow-hidden',
        reverse ? 'my-[-22rem] rotate-180 md:mt-[-30rem]' : 'my-[-12.8rem]',
        '[--color:#4e5cda] before:absolute before:inset-0 before:h-full before:w-full before:bg-sunrise-gradient before:opacity-40',
        'after:absolute after:-left-1/2 after:top-1/2 after:aspect-1/0.7 after:w-[200%] after:rounded-[50%] after:border-t after:border-[#7876c566] after:bg-background'
      )}
    >
      <Stars />
    </div>
  );
};
