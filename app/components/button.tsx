import { cva, VariantProps } from 'class-variance-authority';
import classNames from 'classnames';
import Link from 'next/link';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type ButtonBaseProps = VariantProps<typeof buttonClass> & {
  children: React.ReactNode;
};

interface ButtonAsAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

interface ButtonAsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
}

type ButtonProps = ButtonBaseProps &
  (ButtonAsAnchorProps | ButtonAsButtonProps);

const buttonClass = cva(
  'rounded-full inline-flex justify-between items-center',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-gradient hover:text-shadow hover:shadow-primary transition-[shadow, text-shadow] ease-in',
        secondary:
          'text-white bg-white-a10 border border-white-a05 hover:bg-white-a20 backdrop-filter-[12px] transition-all ease-in',
      },
      size: {
        small: 'text-xs px-3 h-7',
        medium: 'text-sm px-4 h-8',
        large: 'text-md px-6 h-12',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

export const Button = ({
  children,
  variant,
  size,
  className,
  ...props
}: ButtonProps) => {
  const classes = buttonClass({ variant, size, className: className });

  if ('href' in props && props.href !== undefined) {
    return (
      <Link {...props} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};

export const ButtonHighlight = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={classNames(
        'flex h-5 items-center justify-between rounded-full bg-white-a05 px-2',
        className
      )}
    >
      {children}
    </span>
  );
};
