'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from './button';
import { Container } from './container';
import { Hamburger } from './icons/hamburger';
import { Logo } from './icons/logo';

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
      <Container className='flex h-[var(--navigation-height)] '>
        <Link className='flex items-center text-md' href='/'>
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
              'fixed left-0 top-[var(--navigation-height)] h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto bg-background transition-opacity duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:bg-transparent md:opacity-100 ',
              isOpen ? 'opacity-100' : 'opacity-0'
            )}
          >
            <ul
              className={classNames(
                'flex h-full flex-col md:flex-row md:items-center [&_li]:ml-8 [&_li]:border-b [&_li]:border-grey-dark md:[&_li]:border-none',
                '[&_a]:transition-[color, transform] [&_a:hover]:text-grey [&_a]:flex [&_a]:h-[var(--navigation-height)] [&_a]:w-full [&_a]:translate-y-8 [&_a]:items-center [&_a]:text-md [&_a]:duration-200 md:[&_a]:translate-y-0 md:[&_a]:text-sm',
                isOpen && '[&_a]:translate-y-0'
              )}
            >
              <li>
                <Link href='#'>Features</Link>
              </li>
              <li>
                <Link href='#'>Methods</Link>
              </li>
              <li className='md:hidden lg:block'>
                <Link href='#'>Customers</Link>
              </li>
              <li className='md:hidden lg:block'>
                <Link href='#'>Changelog</Link>
              </li>
              <li className='md:hidden lg:block'>
                <Link href='#'>Intergations</Link>
              </li>
              <li>
                <Link href='#'>Pricing</Link>
              </li>
              <li>
                <Link href='#'>Company</Link>
              </li>
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
