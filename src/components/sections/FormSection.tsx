import React from 'react';

import FormImg from '~/svg/FormImg.svg';

export default function FormSection() {
  return (
    <section className='form-wrapper'>
      <div className='layout flex items-center justify-center rounded-3xl bg-purple p-16 shadow'>
        <div className='flex basis-2/3 flex-col'>
          <h2 className='text-5xl font-bold text-light'>
            World class ideas
            <br></br>
            <em>right in your inbox</em>
          </h2>
          <form action='#' method='POST'>
            <div>
              <div className='px-4 py-5 sm:p-6'>
                <div className='grid grid-cols-6 gap-6'>
                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='email-address'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Email address
                    </label>
                    <input
                      type='text'
                      name='email-address'
                      id='email-address'
                      className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      required
                    />
                  </div>

                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='street-address'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Street address
                    </label>
                    <input
                      type='text'
                      name='street-address'
                      id='street-address'
                      className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='first-name'
                      className='block text-sm font-medium text-gray-700'
                    >
                      First name
                    </label>
                    <input
                      type='text'
                      name='first-name'
                      id='first-name'
                      className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                    />
                  </div>

                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='last-name'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Last name
                    </label>
                    <input
                      type='text'
                      name='last-name'
                      id='last-name'
                      className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                    />
                  </div>
                </div>
                <div className='pt-4'>
                  <button
                    type='submit'
                    className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className='flex basis-1/3 flex-col'>
          <FormImg />
        </div>
      </div>
    </section>
  );
}
