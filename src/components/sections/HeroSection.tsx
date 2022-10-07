import React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';

export default function HeroSection() {
  return (
    <section className='hero py-24'>
      <div className='layout flex items-center justify-center'>
        <div className='flex basis-1/3 flex-col items-start'>
          <strong className='tag mb-2 flex rounded-xl bg-light-purple py-1 px-3 text-purple'>
            FEATURED
          </strong>
          <h2 className='text-5xl font-bold'>Introducing Change Control</h2>
          <p className=''>
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
