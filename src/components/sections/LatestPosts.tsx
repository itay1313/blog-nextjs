import React from 'react';

export default function LatestPosts() {
  const topmenulinks = [
    { href: '/', label: 'Product' },
    { href: '/', label: 'Use cases' },
    { href: '/', label: 'Resources' },
  ];

  return (
    <section className=''>
      {/* top menu */}
      <div className='main-menu layout align-center flex flex-col justify-between py-32'>
        <h3>Latest Posts</h3>
        <ul className='flex items-center justify-between space-x-4'>
          {topmenulinks.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} className='hover:text-gray-600'>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
