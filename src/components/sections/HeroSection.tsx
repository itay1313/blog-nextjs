//#hero  //*===========  ===========
import React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';

export default function HeroSection() {
  return (
    <section className='hero py-24 for-mobile:py-10'>
      <div className='layout flex justify-between for-mobile:m-0 for-mobile:w-full for-mobile:flex-col-reverse for-mobile:gap-5 for-mobile:px-4'>
        <div className='flex basis-1/3 flex-col items-start md:pr-6'>
          <strong
            className='tag mb-2 flex rounded-xl bg-light-purple py-1 px-3 font-semibold text-dark-purple'
            style={{ fontSize: '15.3px' }}
          >
            FEATURED
          </strong>
          <h3 className='mb-[0.625rem] text-[2rem] font-semibold leading-[1.15] for-mobile:text-[1.375rem]'>
            Introducing Change Control
          </h3>
          <p className='for-mobile:text-lm'>
            <UnstyledLink href='/'>
              Today, we introduced Change Control. When enabled, it adds a test
              environment to your Story, allowing you to prototype and
              experiment with changes, before applying them to your Story.1
            </UnstyledLink>
          </p>
        </div>
        <div className='flex basis-2/3 flex-col'>
          <NextImage
            useSkeleton
            className='w-full rounded-xl md:w-full'
            src='/images/heroimg.png'
            width='744'
            height='390'
            alt='Icon'
          />
        </div>
      </div>
    </section>
  );
}

//#endregion  //*========  ===========
