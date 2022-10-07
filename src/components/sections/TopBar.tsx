import React, { useState } from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';

import CloseIcon from '~/svg/CloseIcon.svg';

export default function TopBar() {
  const [show, setShow] = useState(true);
  return (
    <section className='alert-bar sticky top-0 z-50 bg-top-bar text-light'>
      {show && (
        <div className='relative flex flex-wrap items-center justify-center space-x-5 py-4 text-sm'>
          <p>Blog: Extending our Series B - Itay raises additional $55m</p>
          <UnderlineLink href='/contact'>Read blog</UnderlineLink>
          <div>
            <CloseIcon
              className='absolute right-0 top-2/4 mr-4 -translate-y-2/4 cursor-pointer'
              onClick={() => setShow((prev) => !prev)}
            />
          </div>
        </div>
      )}
    </section>
  );
}
