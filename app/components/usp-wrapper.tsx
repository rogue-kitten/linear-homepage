import classNames from 'classnames';

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const UspWrapper = ({ children, className }: WrapperProps) => {
  return (
    <div
      className={classNames(
        'relative order-[var(--order)] flex min-h-[48rem] min-w-full snap-center flex-col items-center justify-end rounded-[4.8rem] border border-white-a05 bg-usp-gradient p-8 text-center md:order-none md:min-w-0 md:p-12',
        className,
        'before:usp-mask before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-usp-gradient-2'
      )}
    >
      {children}
    </div>
  );
};

export const UspTitle = ({ children, className }: WrapperProps) => {
  return (
    <p className={classNames('text-3xl font-medium', className)}>{children}</p>
  );
};

export const UspSubTitle = ({ children, className }: WrapperProps) => {
  return (
    <p
      className={classNames(
        'mt-4 max-w-[42rem] text-md font-medium text-primary-text',
        className
      )}
    >
      {children}
    </p>
  );
};
