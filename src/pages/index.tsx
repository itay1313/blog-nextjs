import clsx from 'clsx';
import * as React from 'react';

import Button from '@/components/buttons/Button';
import Footer from '@/components/layout/Footer';
import Layout from '@/components/layout/Layout';
import BlogSection from '@/components/sections/BlogSection';
import FormSection from '@/components/sections/FormSection';
import HeaderSection from '@/components/sections/HeaderSection';
import HeroSection from '@/components/sections/HeroSection';
import LatestPosts from '@/components/sections/LatestPosts';
import TopBar from '@/components/sections/TopBar';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  const [mode, setMode] = React.useState<'dark' | 'light'>('light');
  function toggleMode() {
    return mode === 'dark' ? setMode('light') : setMode('dark');
  }
  return (
    <Layout>
      <div className={clsx(mode === 'dark' && 'dark bg-light text-dark')}>
        <Seo templateTitle='Home' />
        <TopBar />
        <HeaderSection />
        <main className='bg-light'>
          <HeroSection />
          <LatestPosts />
          <FormSection />
          <BlogSection />
        </main>
        <Footer />
        <Button
          className='fixed bottom-10 right-10'
          onClick={toggleMode}
          variant={mode === 'dark' ? 'light' : 'dark'}
        >
          Set to {mode === 'dark' ? 'light' : 'dark'}
        </Button>
      </div>
    </Layout>
  );
}
