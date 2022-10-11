//#Layout with dark mode toggle  //*===========  ===========
import clsx from 'clsx';
import * as React from 'react';

import Button from '@/components/buttons/Button';
import Footer from '@/components/layout/Footer';
import HeaderSection from '@/components/sections/HeaderSection';
export default function Layout({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = React.useState<'dark' | 'light'>('light');
  function toggleMode() {
    return mode === 'dark' ? setMode('light') : setMode('dark');
  }
  return (
    <div className={clsx(mode === 'dark' && 'dark bg-light text-dark')}>
      <HeaderSection />
      {children}
      <Footer />{' '}
      <Button
        className='fixed bottom-10 right-10'
        onClick={toggleMode}
        variant={mode === 'dark' ? 'light' : 'dark'}
      >
        Set to {mode === 'dark' ? 'light' : 'dark'}
      </Button>
    </div>
  );
}

//#endregion  //*========  ===========
