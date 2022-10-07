import React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

import Vercel from '~/svg/Vercel.svg';

const topmenulinks = [
  { href: '/', label: 'Product' },
  { href: '/', label: 'Use cases' },
  { href: '/', label: 'Resources' },
  { href: '/', label: 'Company' },
  { href: '/', label: 'Pricing' },
];

const mainmenulinks = [
  { href: '/', label: 'All' },
  { href: '/', label: 'News' },
  { href: '/', label: 'Product updates' },
  { href: '/', label: 'Tutorials' },
  { href: '/', label: 'Inside Tines' },
  { href: '/', label: 'Engineering' },
];

export default function HeaderSection() {
  return (
    <header className='bg-header-background py-32'>
      {/* top menu */}
      <div className='top-menu-wrapper layout align-center flex justify-between bg-white'>
        <div className='logo align-center flex'>
          <Vercel />
        </div>
        <nav className='top-menu for-mobile:hidden'>
          <ul className='flex items-center justify-between space-x-4'>
            {topmenulinks.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className='hover:text-gray-600'>
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
        <button className='menu md:hidden' title='Open Site Menu'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            stroke='currentColor'
            stroke-width='2'
          >
            <line x1='5' y1='6' x2='19' y2='6'></line>
            <line x1='5' y1='12' x2='19' y2='12'></line>
            <line x1='5' y1='18' x2='19' y2='18'></line>
          </svg>
        </button>
      </div>

      {/* bottom menu */}
      <div className='main-menu-wrapper layout align-center flex justify-between py-32'>
        <div className='logo'>
          <h1 className='mt-4'>Blog</h1>
        </div>
        <div className='mainmenu align-center flex rounded-2xl bg-white px-3 for-mobile:hidden'>
          <nav className='align-center flex py-6 px-3'>
            <ul className='flex items-center justify-between space-x-4'>
              {mainmenulinks.map(({ href, label }) => (
                <li key={`${href}${label}`}>
                  <UnstyledLink href={href} className='hover:text-gray-600'>
                    {label}
                  </UnstyledLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className='align-center flex'>
            <div className='align-center relative my-auto flex rounded-md shadow-sm'>
              <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                <svg
                  className='SearchIcon'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M19.2307 19.2307L15.4845 15.4845L19.2307 19.2307ZM4.74525 10.989C4.74525 7.53246 7.53246 4.74525 10.989 4.74525C14.4355 4.74525 17.2327 7.53246 17.2327 10.989C17.2327 14.4355 14.4355 17.2327 10.989 17.2327C7.53246 17.2327 4.74525 14.4355 4.74525 10.989Z'
                    stroke='currentColor'
                    stroke-width='1.4985'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  ></path>
                </svg>
              </div>
              <input
                type='text'
                name='price'
                id='price'
                className='block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                placeholder='0.00'
              />
              <div className='absolute inset-y-0 right-0 flex items-center'>
                <kbd className='k1a5kt68'>⌘K</kbd>
              </div>
            </div>
          </div>
        </div>
        <button className='menu md:hidden' title='Open Site Menu'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            stroke='currentColor'
            stroke-width='2'
          >
            <line x1='5' y1='6' x2='19' y2='6'></line>
            <line x1='5' y1='12' x2='19' y2='12'></line>
            <line x1='5' y1='18' x2='19' y2='18'></line>
          </svg>
        </button>
      </div>
    </header>
  );
}
