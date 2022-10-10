import { useRouter } from 'next/router';
import React from 'react';

import SuccessIcon from '~/svg/SuccessIcon.svg';

// FormWidget component

const FormWidget = () => {
  const router = useRouter();
  const confirmationScreenVisible =
    router.query?.success && router.query.success === 'true';
  const formVisible = !confirmationScreenVisible;

  const ConfirmationMessage = (
    <div
      className='flex gap-2'
      style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
    >
      <SuccessIcon />
      <p>You are all set! Thank you for subscribing to the Itays Newsletter.</p>
    </div>
  );

  // const ErrorMessage = (
  //   <div
  //     className='flex gap-2'
  //     style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
  //   >
  //     <SuccessIcon />
  //     <p>Please enter a valid email address.</p>
  //   </div>
  // );

  const ContactForm = (
    <form
      className='container'
      method='POST'
      name='contact-form'
      action='contact/?success=true'
      data-netlify='true'
      data-netlify-honeypot='bot-field'
    >
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
            <button type='submit' className='form-button'>
              Subscribe
            </button>
          </div>
          <div>
            <p className='mt-[1.125rem] text-sm text-light'>
              By filling out this form you agree to the terms and conditions in
              our{' '}
              <a
                href='/privacy'
                target='_blank'
                className='font-bold underline'
              >
                Privacy&nbsp;Notice
              </a>{' '}
              <sup>↗</sup>.
            </p>
          </div>
        </div>
      </div>
    </form>
  );

  return <>{formVisible ? ContactForm : ConfirmationMessage}</>;
};

export default FormWidget;
