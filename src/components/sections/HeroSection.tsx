import React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

export default function HeroSection() {
  return (
    <section className=''>
      {/* top menu */}
      <div className='main-menu layout align-center flex justify-between py-32'>
        <div className='logo'>Itays</div>
        <nav className='menu for-mobile:hidden'>
          <ul className='flex'>
            <li>
              <UnstyledLink href='/about'>About</UnstyledLink>
            </li>
            <li>
              <UnstyledLink href='/contact'>Contact</UnstyledLink>
            </li>
            <li>
              <UnstyledLink href='/about'>About</UnstyledLink>
            </li>
            <li>
              <UnstyledLink href='/contact'>Contact</UnstyledLink>
            </li>
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
    </section>
  );
}
