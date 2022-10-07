import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

import CodepenIcon from '~/svg/CodepenIcon.svg';
import LinkedinIcon from '~/svg/LinkedinIcon.svg';
import TwitterIcon from '~/svg/TwitterIcon.svg';

const links = [
  { href: '/', label: 'Route 1' },
  { href: '/', label: 'Route 2' },
];

export default function Footer() {
  return (
    <footer className='p-10 pt-0'>
      <div className='rounded-3xl bg-footer-background p-20 text-lm text-light'>
        <section className='layout flex justify-between sm:flex-col md:flex-row'>
          <UnstyledLink
            href='/'
            className='font-bold hover:text-gray-600 md:basis-3/12'
          >
            Home
          </UnstyledLink>
          <div className='flex justify-between md:basis-9/12'>
            <div className='flex flex-col'>
              <h3 className='mb-6 text-lm'>fdsfd</h3>
              <nav>
                <ul className='flex flex-col items-center justify-between space-y-4'>
                  {links.map(({ href, label }) => (
                    <li key={`${href}${label}`}>
                      <UnstyledLink href={href} className='hover:text-gray-600'>
                        {label}
                      </UnstyledLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className='flex flex-col'>
              <h3 className='mb-6 text-lm'>fdsfd</h3>
              <nav>
                <ul className='flex flex-col items-center justify-between space-y-4'>
                  {links.map(({ href, label }) => (
                    <li key={`${href}${label}`}>
                      <UnstyledLink href={href} className='hover:text-gray-600'>
                        {label}
                      </UnstyledLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className='flex flex-col'>
              <h3 className='mb-6 text-lm'>fdsfd</h3>
              <nav>
                <ul className='flex flex-col items-center justify-between space-y-4'>
                  {links.map(({ href, label }) => (
                    <li key={`${href}${label}`}>
                      <UnstyledLink href={href} className='hover:text-gray-600'>
                        {label}
                      </UnstyledLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className='flex flex-col'>
              <h3 className='mb-6 text-lm'>fdsfd</h3>
              <nav>
                <ul className='flex flex-col items-center justify-between space-y-4'>
                  {links.map(({ href, label }) => (
                    <li key={`${href}${label}`}>
                      <UnstyledLink href={href} className='hover:text-gray-600'>
                        {label}
                      </UnstyledLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </section>
        <section className='layout mt-12 flex justify-between border-t border-light py-12 sm:flex-col md:flex-row'>
          <p>© Tines | RSS: Blog • Product updates • Story library</p>
          <div className='flex gap-4'>
            <TwitterIcon />
            <CodepenIcon />
            <LinkedinIcon />
          </div>
        </section>
      </div>
    </footer>
  );
}
