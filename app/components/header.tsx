'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from './button';
import { Container } from './container';
import { Hamburger } from './icons/hamburger';
import { Logo } from './icons/logo';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='fixed top-0 left-0 w-full border-b border-white-a08 backdrop-blur-[12px]'>
      <Container className='flex h-[var(--navigation-height)] '>
        <Link className='flex items-center text-md' href='/'>
          <Logo className='w-[1.8rem] h-[1.8rem] mr-4' /> Linear
        </Link>

        <div
          className={classNames(
            'transition-[visibility] md:visible',
            isOpen ? 'visible ' : 'invisible delay-500'
          )}
        >
          <nav
            className={classNames(
              'h-[calc(100vh_-_var(--navigation-height))] transition-opacity duration-500 fixed top-[var(--navigation-height)] left-0 w-full bg-background overflow-auto md:block md:relative md:top-0 md:h-auto md:w-auto md:bg-transparent md:opacity-100 ',
              isOpen ? 'opacity-100' : 'opacity-0'
            )}
          >
            <ul
              className={classNames(
                'flex flex-col md:flex-row md:items-center h-full [&_li]:ml-8 [&_li]:border-b [&_li]:border-grey-dark md:[&_li]:border-none',
                '[&_a]:text-md [&_a:hover]:text-grey [&_a]:transition-[color, transform] md:[&_a]:translate-y-0 [&_a]:flex [&_a]:duration-200 [&_a]:items-center [&_a]:translate-y-8 [&_a]:h-[var(--navigation-height)] [&_a]:w-full md:[&_a]:text-sm',
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

        <div className='ml-auto h-full flex items-center'>
          <Link href='#' className='text-sm mr-6'>
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
