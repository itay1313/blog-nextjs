import React from 'react';

import latestPostsData from '@/data/latestPosts.json';

import NextImage from '@/components/NextImage';

export default function LatestPosts() {
  return (
    <section className=''>
      {/* top menu */}
      <div className='main-menu layout flex flex-col justify-between gap-10 pb-24'>
        <h3>Latest Posts</h3>
        <ul className='grid gap-6 sm:grid-cols-2 md:grid-cols-3'>
          {latestPostsData.map(({ href, postTitle, postSubtitle, imgSrc }) => (
            <li key={`${href}${postTitle}`} className='w-full flex-grow'>
              <a href={href} className='hover:text-primary-500'>
                <NextImage
                  useSkeleton
                  className='w-full rounded-xl md:w-full'
                  src={imgSrc}
                  width='744'
                  height='390'
                  alt='Icon'
                />
                <h3 className='post-title'>{postTitle}</h3>
                <p> {postSubtitle}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
