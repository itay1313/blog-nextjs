import React from 'react';

import NextImage from '@/components/NextImage';

export default function BlogSection() {
  const latestPostsData = [
    // post 1
    {
      href: '/',
      postTitle:
        'TripActions Aaron Cooper: Why understanding broader company culture is critical to a security team’s success',
      imgSrc: '/images/heroimg.png',
      postSubtitle:
        'In this episode, Thomas and Aaron discuss why understanding company culture is critical to successful security teams, how he helps his team manage burnout, and more!',
    },
    // post 2
    {
      href: '/',
      postTitle: 'Doubling down on our mission: Extending our Series B',
      postSubtitle:
        'Tines has extended its Series B financing round with an additional close of $55 million (€55 million). We remain laser-focused on executing our mission. The need for no-code automation has never been greater!',
      imgSrc: '/images/heroimg.png',
    },
    // post 3
    {
      href: '/',
      postTitle: 'How to create a Tines Tunnel with an AWS EC2 instance',
      postSubtitle:
        'Create a Tines Tunnel so you can route traffic from Tines to a private API/network successfully.',
      imgSrc: '/images/heroimg.png',
    },
    {
      href: '/',
      postTitle:
        'TripActions Aaron Cooper: Why understanding broader company culture is critical to a security team’s success',
      imgSrc: '/images/heroimg.png',
      postSubtitle:
        'In this episode, Thomas and Aaron discuss why understanding company culture is critical to successful security teams, how he helps his team manage burnout, and more!',
    },
    // post 2
    {
      href: '/',
      postTitle: 'Doubling down on our mission: Extending our Series B',
      postSubtitle:
        'Tines has extended its Series B financing round with an additional close of $55 million (€55 million). We remain laser-focused on executing our mission. The need for no-code automation has never been greater!',
      imgSrc: '/images/heroimg.png',
    },
    // post 3
    {
      href: '/',
      postTitle: 'How to create a Tines Tunnel with an AWS EC2 instance',
      postSubtitle:
        'Create a Tines Tunnel so you can route traffic from Tines to a private API/network successfully.',
      imgSrc: '/images/heroimg.png',
    },
  ];

  return (
    <section className=''>
      {/* top menu */}
      <div className='main-menu layout flex flex-col items-center justify-between py-24'>
        <ul className='grid gap-6 sm:grid-cols-2  md:grid-cols-3'>
          {latestPostsData.map(({ href, postTitle, postSubtitle, imgSrc }) => (
            <li key={`${href}${postTitle}`} className='w-full flex-grow'>
              <a href={href} className='hover:text-gray-600'>
                <NextImage
                  useSkeleton
                  className='w-full rounded-xl md:w-full'
                  src={imgSrc}
                  width='744'
                  height='390'
                  alt='Icon'
                />
                <h4>{postTitle}</h4>
                <h5> {postSubtitle}</h5>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
