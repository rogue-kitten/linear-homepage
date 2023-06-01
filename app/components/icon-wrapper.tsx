import classNames from 'classnames';
import { CSSProperties } from 'react';

export const IconWrapper = ({
  size,
  icon: Icon,
  inView,
  stagger = 0,
  reverse = false,
}: {
  size: string;
  icon: React.FC;
  inView: boolean;
  stagger?: number;
  reverse?: boolean;
}) => {
  return (
    <div
      style={
        {
          '--size': size,
          '--stagger': stagger,
          '--position': reverse ? '-10px' : '10px',
        } as CSSProperties
      }
      className={classNames(
        'icon-wrapper z-[1] flex h-[var(--size)] w-[var(--size)] shrink-0 items-center justify-center rounded-[50%] bg-no-repeat transition-[opacity,transform] delay-[calc(400ms+(var(--stagger)*150ms))] duration-500 ease-in-out',
        '[&_svg]:h-[calc(var(--size)/2)] [&_svg]:w-[calc(var(--size)/2)] [&_svg]:fill-white',
        inView
          ? 'translate-x-0 opacity-100'
          : 'translate-x-[var(--position)] opacity-0'
      )}
    >
      <Icon />
    </div>
  );
};
