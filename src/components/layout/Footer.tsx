import * as React from 'react';

import {
  casesLinks,
  companyLinks,
  productLinks,
  resourcesLinks,
} from '@/data/footerLinksData';

import UnstyledLink from '@/components/links/UnstyledLink';

import BottomArrow from '~/svg/BottomArrow.svg';
import CodepenIcon from '~/svg/CodepenIcon.svg';
import LinkedinIcon from '~/svg/LinkedinIcon.svg';
import Logow from '~/svg/Logow.svg';
import TwitterIcon from '~/svg/TwitterIcon.svg';

export default function Footer() {
  return (
    <footer className='p-10 pt-0 for-mobile:mb-14 for-mobile:p-[1.125rem]'>
      <div className='rounded-3xl bg-footer-background px-20 pt-20 text-lm text-light for-mobile:px-4 for-mobile:py-10'>
        <section className='layout flex justify-between sm:flex-col md:flex-row for-mobile:flex-col for-mobile:gap-8'>
          <Logow width='122.3125' height='38' />
          <div className='flex justify-between md:basis-9/12 for-mobile:flex-col'>
            <div className='flex flex-col'>
              <div className='flex justify-between for-mobile:mb-6 for-mobile:items-center for-mobile:border-b-[1px] for-mobile:border-primary-900 for-mobile:pb-6'>
                <h3 className='footer-menu-title'>PRODUCT</h3>
                <BottomArrow
                  width='10'
                  height='7'
                  className='hidden for-mobile:block'
                />
              </div>
              <nav className='for-mobile:hidden'>
                <ul className='flex flex-col items-start justify-between gap-2'>
                  {productLinks.map(({ href, label }) => (
                    <li key={`${href}${label}`}>
                      <UnstyledLink
                        href={href}
                        className='hover:text-primary-500'
                      >
                        {label}
                      </UnstyledLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className='flex flex-col'>
              <div className='flex justify-between for-mobile:mb-6 for-mobile:items-center for-mobile:border-b-[1px] for-mobile:border-primary-900 for-mobile:pb-6'>
                <h3 className='footer-menu-title'>USE CASES</h3>
                <BottomArrow
                  width='10'
                  height='7'
                  className='hidden for-mobile:block'
                />
              </div>
              <nav className='for-mobile:hidden'>
                <ul className='flex flex-col items-start justify-between gap-2'>
                  {casesLinks.map(({ href, label }) => (
                    <li key={`${href}${label}`}>
                      <UnstyledLink
                        href={href}
                        className='hover:text-primary-500'
                      >
                        {label}
                      </UnstyledLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className='flex flex-col'>
              <div className='flex justify-between for-mobile:mb-6 for-mobile:items-center for-mobile:border-b-[1px] for-mobile:border-primary-900 for-mobile:pb-6'>
                <h3 className='footer-menu-title'>RESOURCES</h3>
                <BottomArrow
                  width='10'
                  height='7'
                  className='hidden for-mobile:block'
                />
              </div>
              <nav className='for-mobile:hidden'>
                <ul className='flex flex-col items-start justify-between gap-2'>
                  {resourcesLinks.map(({ href, label }) => (
                    <li key={`${href}${label}`}>
                      <UnstyledLink
                        href={href}
                        className='hover:text-primary-500'
                      >
                        {label}
                      </UnstyledLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className='flex flex-col'>
              <div className='flex justify-between for-mobile:mb-6 for-mobile:items-center for-mobile:border-b-[1px] for-mobile:border-primary-900 for-mobile:pb-6'>
                <h3 className='footer-menu-title'>COMPANY</h3>
                <BottomArrow
                  width='10'
                  height='7'
                  className='hidden for-mobile:block'
                />
              </div>
              <nav className='for-mobile:hidden'>
                <ul className='flex flex-col items-start justify-between gap-2'>
                  {companyLinks.map(({ href, label }) => (
                    <li key={`${href}${label}`}>
                      <UnstyledLink
                        href={href}
                        className='hover:text-primary-500'
                      >
                        {label}
                      </UnstyledLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </section>
        <section className='footer-copyrights layout flex justify-between border-light-gray text-lm font-medium sm:flex-col md:mt-12 md:flex-row md:border-t-2 md:py-12 for-mobile:flex-col'>
          <div className='flex items-center gap-3 for-mobile:flex-col'>
            <a
              className='text-lm font-medium'
              title='Tines Homepage'
              href='https://itaycode.com'
            >
              ©Itaycode
            </a>
            <small className='flex items-center gap-3 text-lm  for-mobile:text-xs'>
              <b className='font-normal for-mobile:hidden'> | </b>
              <span>RSS:</span>
              <a
                href='/rss/tines-blog.xml'
                title='Tines Blog RSS feed'
                target='_blank'
                rel='noreferrer noopener'
              >
                Blog
              </a>
              <span> • </span>
              <a
                href='/rss/tines-product-updates.xml'
                title='Tines product updates RSS feed'
                target='_blank'
                rel='noreferrer noopener'
              >
                Product updates
              </a>{' '}
              <span> • </span>
              <a
                href='/rss/tines-story-library.xml'
                title='Tines Story Library RSS feed'
                target='_blank'
                rel='noreferrer noopener'
              >
                Story library
              </a>
            </small>
          </div>
          <div className='flex gap-4 for-mobile:mt-6 for-mobile:justify-center'>
            <TwitterIcon width='32' height='32' />
            <CodepenIcon width='32' height='32' />
            <LinkedinIcon width='32' height='32' />
          </div>
        </section>
      </div>
    </footer>
  );
}
