import { cva, VariantProps } from 'class-variance-authority';
import Link from 'next/link';

interface ButtonProps extends VariantProps<typeof buttonClass> {
  children: React.ReactNode;
  href: string;
}

const buttonClass = cva(
  'rounded-full inline-flex justify-between items-center',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-gradient hover:text-shadow hover:shadow-primary transition-[shadow, text-shadow] ease-in',
        secondary:
          'text-white bg-white-a10 border border-white-a05 hover:bg-white-a20 backdrop-filter-[12px] transition-colors ease-in',
        tertiary: 'text-white bg-white-a05',
      },
      size: {
        tiny: 'text-xs px-2 h-5',
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

export const Button = ({ children, href, variant, size }: ButtonProps) => {
  return (
    <Link className={buttonClass({ variant, size })} href={href}>
      {children}
    </Link>
  );
};
