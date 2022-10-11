import * as React from 'react';

import { mainmenulinks, topmenulinks } from '@/data/headerLinksData';

import Button from '@/components/buttons/Button';
import UnstyledLink from '@/components/links/UnstyledLink';
import TopBar from '@/components/sections/TopBar';

import ArrowIcon from '~/svg/ArrowIcon.svg';
import HamburgerIcon from '~/svg/HamburgerIcon.svg';
import Logo from '~/svg/Logo.svg';
import SearchIcon from '~/svg/SearchIcon.svg';

export default function HeaderSection() {
  return (
    <>
      {' '}
      <TopBar />
      <header className='bg-header-background pt-6 pb-10 md:pt-20 md:pb-24 for-mobile:px-[1.125rem]'>
        {/* top menu */}
        <div className='top-menu-wrapper layout flex items-center justify-between rounded-3xl bg-light py-4 px-[1.125rem] for-mobile:m-0 for-mobile:w-full for-mobile:px-2 for-mobile:py-3'>
          <div className='logo flex items-center pl-2'>
            <a href='https://itaycode.com' target='_blank' rel='noreferrer'>
              <Logo width='103' height='32' />
            </a>
          </div>
          <div className='flex items-center'>
            <nav className='top-menu hidden lg:block'>
              <ul className='menu-style'>
                {topmenulinks.map(({ href, label }) => (
                  <li key={`${href}${label}`}>
                    <UnstyledLink
                      className='flex items-center gap-1 hover:text-primary-500'
                      href={href}
                    >
                      {label}
                      {label == 'Resources' || label == 'Company' ? (
                        <ArrowIcon width='10' height='7' />
                      ) : (
                        ''
                      )}
                    </UnstyledLink>
                  </li>
                ))}
              </ul>
            </nav>
            <Button className='ml-7 min-h-[3rem] for-mobile:hidden'>
              Sign up for free
            </Button>
          </div>
          <button className='menu md:hidden' title='Open Site Menu'>
            <HamburgerIcon width='24px' height='24px' />
          </button>
        </div>

        {/* bottom menu */}
        <div className='main-menu-wrapper layout flex w-full flex-col justify-between md:mt-4 md:px-4 md:pt-20 lg:flex-row xl:px-0 for-mobile:mx-0 for-mobile:items-center for-mobile:pt-10'>
          <div className='logo'>
            <h1 className='text-xxl font-semibold md:mb-8 xl:mb-0 for-mobile:mb-9 for-mobile:text-[2.5rem]'>
              Blog
            </h1>
          </div>
          <div className='mainmenu flex flex-wrap items-center rounded-2xl bg-light py-[0.6rem] pr-3'>
            <nav className='flex items-center px-2'>
              <ul className='menu-style flex-wrap gap-0'>
                {mainmenulinks.map(({ href, label }) => (
                  <li
                    key={`${href}${label}`}
                    className={`mx-1 rounded-lg p-2 leading-[1.15] hover:bg-primary-100 ${
                      label == 'All'
                        ? 'rounded-lg bg-light-purple p-2 text-primary-500 hover:bg-light'
                        : ''
                    }`}
                  >
                    <UnstyledLink
                      href={href}
                      className='flex items-center gap-1'
                    >
                      {label}
                    </UnstyledLink>
                  </li>
                ))}
                <li>
                  <div className='flex items-center'>
                    <div className='relative my-auto flex items-center rounded-md shadow-sm'>
                      <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4'>
                        <SearchIcon width='24' height='24' />
                      </div>
                      <input
                        width={192}
                        height={48}
                        type='text'
                        name='price'
                        id='price'
                        className='block w-full rounded-md border-2 border-gray-300 border-transparent pl-7 pr-12 placeholder:text-dark placeholder:opacity-[0.6] hover:border-2 hover:border-primary-500    focus:border-indigo-500 focus:ring-indigo-500'
                        style={{
                          backgroundColor: 'hsla(33,27%,92%,.4)',
                          borderRadius: '0.75rem',
                          height: '3rem',
                          width: '11.875rem',
                          textIndent: '1.4375rem',
                        }}
                        placeholder='Search'
                      />
                      <div className='absolute inset-y-0 right-0 flex items-center'>
                        <kbd
                          className='k1a5kt68 mr-2 font-primary'
                          style={{
                            backgroundColor: '#f0ebe5',
                            borderRadius: '0.4rem',
                            color: '#aeadab',
                            fontSize: '0.75rem',
                            padding: '0.25rem 0.4375rem',
                            fontWeight: 500,
                            lineHeight: 1,
                          }}
                        >
                          ⌘K
                        </kbd>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
