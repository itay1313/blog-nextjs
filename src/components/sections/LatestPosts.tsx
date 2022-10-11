//#Latest post section  //*===========  ===========
import React from 'react';

import latestPostsData from '@/data/latestPosts.json';

import { BlogPost } from '@/components/widgets/BlogPost';

export default function LatestPosts() {
  return (
    <section className=''>
      {/* top menu */}
      <div className='main-menu layout flex flex-col justify-between gap-10 pb-24'>
        <h3 className='for-mobile:hidden'>Latest Posts</h3>
        <ul className='grid gap-6 sm:grid-cols-2 md:grid-cols-3'>
          {latestPostsData.map(({ href, postTitle, postSubtitle, imgSrc }) => (
            <li key={`${href}${postTitle}`} className='flex w-full flex-grow'>
              <BlogPost
                href={href}
                postTitle={postTitle}
                postSubtitle={postSubtitle}
                imgSrc={imgSrc}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

//#endregion  //*========  ===========
