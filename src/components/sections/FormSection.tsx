import React from 'react';

import FormWidget from '@/components/widgets/FormWidget';

import FormImg from '~/svg/FormImg.svg';

export default function FormSection() {
  return (
    <section className='form-wrapper'>
      <div className='layout flex items-center justify-center rounded-3xl bg-purple p-16 shadow'>
        <div className='flex basis-2/3 flex-col'>
          <h2 className='text-[2.625rem] font-bold leading-[1.1] text-light'>
            World class ideas
            <br></br>
            <em className='font-secondary font-normal not-italic'>
              right in your inbox
            </em>
          </h2>
          <FormWidget />
        </div>
        <div className='flex basis-1/3 flex-col items-end'>
          <FormImg width='173' height='167' />
        </div>
      </div>
    </section>
  );
}
