'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from './button';
import { Container } from './container';
import { Hamburger } from './icons/hamburger';
import { Logo } from './icons/logo';

const navLinks = [
  { title: 'Features', href: '/' },
  { title: 'Methods', href: '/' },
  { title: 'Customers', href: '/', hidden: true },
  { title: 'ChangeLog', href: '/', hidden: true },
  { title: 'Intergations', href: '/', hidden: true },
  { title: 'Pricing', href: '/' },
  { title: 'Company', href: '/' },
] as const;

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.querySelector('html')?.classList.toggle('overflow-hidden', isOpen);
  }, [isOpen]);

  // edge case when the menu is open and then the user re-sizes the screen, it would lock the scroll
  useEffect(() => {
    const closeHamburgerMenu = () => setIsOpen(false);

    window.addEventListener('orientationchange', closeHamburgerMenu);
    window.addEventListener('resize', closeHamburgerMenu);

    return () => {
      window.removeEventListener('orientationchange', closeHamburgerMenu);
      window.removeEventListener('resize', closeHamburgerMenu);
    };
  }, [setIsOpen]);
  return (
    <header className='fixed left-0 top-0 z-10 w-full border-b border-white-a08 backdrop-blur-[12px]'>
      <Container className='flex h-[var(--navigation-height)] items-center'>
        <Link className='flex items-center text-md font-medium' href='/'>
          <Logo className='mr-4 h-[1.8rem] w-[1.8rem]' /> Linear
        </Link>

        <div
          className={classNames(
            'transition-[visibility] md:visible',
            isOpen ? 'visible ' : 'invisible delay-500'
          )}
        >
          <nav
            className={classNames(
              'fixed left-0 top-[var(--navigation-height)] h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto bg-background transition-opacity duration-300 ease-out md:relative md:top-0 md:block md:h-full md:w-auto md:overflow-hidden md:bg-transparent md:font-medium md:opacity-100 ',
              isOpen ? 'opacity-100' : 'opacity-0'
            )}
          >
            <ul className='flex h-full w-full flex-col md:w-auto md:flex-row'>
              {navLinks.map(({ href, title, ...props }, idx) => (
                <li
                  key={idx}
                  className={classNames(
                    'border-b border-grey-dark px-6 text-md font-medium md:ml-6 md:border-none md:px-0 md:text-sm',
                    'hidden' in props && 'md:hidden lg:block'
                  )}
                >
                  <Link
                    href={href}
                    className={classNames(
                      'inline-flex h-[var(--navigation-height)] w-full items-center transition-[color,transform] duration-200 hover:text-grey md:translate-y-0',
                      isOpen ? 'translate-y-0' : 'translate-y-[1rem]'
                    )}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className='ml-auto flex h-full items-center'>
          <Link href='#' className='mr-6 text-sm'>
            Log in
          </Link>
          <Button href='#'>Sign Up</Button>
        </div>

        <button
          className='ml-6 md:hidden'
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className='sr-only'>Toggle Menu</span>
          <Hamburger />
        </button>
      </Container>
    </header>
  );
};
