import * as React from 'react';

import Button from '@/components/buttons/Button';
import UnstyledLink from '@/components/links/UnstyledLink';

import HamburgerIcon from '~/svg/HamburgerIcon.svg';
import Logo from '~/svg/Logo.svg';
import SearchIcon from '~/svg/SearchIcon.svg';

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
    <header className='bg-header-background py-20'>
      {/* top menu */}
      <div className='top-menu-wrapper layout flex items-center justify-between rounded-3xl bg-white py-4 px-6'>
        <div className='logo flex items-center'>
          <a href='https://itaycode.com' target='_blank' rel='noreferrer'>
            <Logo width='103' height='32' />
          </a>
        </div>
        <div className='flex items-center'>
          <nav className='top-menu for-mobile:hidden'>
            <ul className='flex items-center justify-between space-x-4 text-lm'>
              {topmenulinks.map(({ href, label }) => (
                <li key={`${href}${label}`}>
                  <UnstyledLink href={href} className='hover:text-gray-600'>
                    {label}
                  </UnstyledLink>
                </li>
              ))}
            </ul>
          </nav>
          <Button className='ml-4'>Sign up for free</Button>
        </div>
        <button className='menu md:hidden' title='Open Site Menu'>
          <HamburgerIcon />
        </button>
      </div>

      {/* bottom menu */}
      <div className='main-menu-wrapper layout mt-2 flex items-center justify-between pt-20'>
        <div className='logo'>
          <h1 className='mt-4'>Blog</h1>
        </div>
        <div className='mainmenu flex items-center rounded-2xl bg-white px-3 for-mobile:hidden'>
          <nav className='flex items-center py-6 px-3'>
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
          <div className='flex items-center'>
            <div className='relative my-auto flex items-center rounded-md shadow-sm'>
              <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                <SearchIcon />
              </div>
              <input
                type='text'
                name='price'
                id='price'
                className='block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500'
                placeholder='0.00'
              />
              <div className='absolute inset-y-0 right-0 flex items-center'>
                <kbd className='k1a5kt68'>⌘K</kbd>
              </div>
            </div>
          </div>
        </div>
        <button className='menu md:hidden' title='Open Site Menu'>
          <HamburgerIcon />
        </button>
      </div>
    </header>
  );
}
