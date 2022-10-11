//#form section  //*===========  ===========
import React from 'react';

import FormWidget from '@/components/widgets/FormWidget';

import FormImg from '~/svg/FormImg.svg';

export function FormSection() {
  return (
    <section className='form-wrapper'>
      <div className='layout flex items-center justify-center rounded-3xl bg-purple p-16 shadow for-mobile:flex-col-reverse for-mobile:p-7 for-mobile:pb-2'>
        <div className='flex basis-2/3 flex-col'>
          <h2 className='text-[2.625rem] font-bold leading-[1.1] text-light for-mobile:mt-6 for-mobile:text-center for-mobile:text-[1.875rem]'>
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

//#form section  //*========  ===========
