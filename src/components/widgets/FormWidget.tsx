import React from 'react';

// type BlogPostProps = {
//   isLoading?: boolean;
//   isDarkBg?: boolean;
//   href?: string;
//   postTitle?: string;
//   postSubtitle?: string;
//   imgSrc?: string | undefined;
// } & React.ComponentPropsWithRef<'div'>;

// FormWidget component
export const FormWidget = () => {
  return (
    <form action='#' method='POST'>
      <div>
        <div className='py-5'>
          <div className='grid grid-cols-6'>
            <div className='col-span-6 sm:col-span-3'>
              <input
                type='text'
                name='email-address'
                id='email-address'
                className='input-style rounded-tl-2xl border-b-0'
                required
                placeholder='Your email *'
              />
            </div>

            <div className='col-span-6 sm:col-span-3'>
              <input
                type='text'
                name='company'
                id='company'
                className='input-style rounded-tr-2xl border-l-0 border-b-0'
                placeholder='Your company name'
              />
            </div>
            <div className='col-span-6 sm:col-span-3'>
              <input
                type='text'
                name='first-name'
                id='first-name'
                className='input-style rounded-bl-2xl'
                placeholder='First name'
              />
            </div>

            <div className='col-span-6 sm:col-span-3'>
              <input
                type='text'
                name='last-name'
                id='last-name'
                className='input-style rounded-br-2xl border-l-0'
                placeholder='Last name'
              />
            </div>
          </div>
          <div className='pt-4'>
            <button
              type='submit'
              className='inline-flex min-h-[3.375rem] items-center border border-transparent bg-white py-2 px-4 text-base font-semibold text-dark-purple hover:opacity-[0.9] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
