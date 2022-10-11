//#Blog section  //*===========  ===========
import React from 'react';

import jsonPostData from '@/data/postData.json';

import { BlogPost } from '@/components/widgets/BlogPost';

export default function BlogSection() {
  return (
    <section className=''>
      {/* top menu */}
      <div className='main-menu layout flex flex-col items-center justify-between py-24'>
        <ul className='grid gap-6 gap-x-6 sm:grid-cols-2 md:grid-cols-3 xl:gap-y-24'>
          {
            //latestPostsData or jsonPostData both will work
            jsonPostData.map(({ href, postTitle, postSubtitle, imgSrc }) => (
              <li key={`${href}${postTitle}`} className='flex w-full flex-grow'>
                <BlogPost
                  href={href}
                  postTitle={postTitle}
                  postSubtitle={postSubtitle}
                  imgSrc={imgSrc}
                />
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  );
}

//#endregion  //*========  ===========
