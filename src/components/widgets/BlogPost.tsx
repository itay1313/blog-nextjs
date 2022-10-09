import React from 'react';

import NextImage from '@/components/NextImage';

type BlogPostProps = {
  isLoading?: boolean;
  isDarkBg?: boolean;
  href?: string;
  postTitle?: string;
  postSubtitle?: string;
  imgSrc?: string | undefined;
} & React.ComponentPropsWithRef<'div'>;

// blog post component
export const BlogPost = (props: BlogPostProps) => {
  return (
    <a href={props.href} className='hover:text-primary-500'>
      <NextImage
        useSkeleton
        className='w-full rounded-xl md:w-full'
        src={props?.imgSrc ?? '/images/heroimg.png'}
        width='744'
        height='390'
        alt='Icon'
      />
      <h3 className='post-title'>{props.postTitle}</h3>
      <p> {props.postSubtitle}</p>
    </a>
  );
};
