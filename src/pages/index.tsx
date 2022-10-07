import * as React from 'react';

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

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Home' />
      <TopBar />
      <HeaderSection />
      <main>
        <HeroSection />
        <LatestPosts />
        <FormSection />
        <BlogSection />
      </main>
      <Footer />
    </Layout>
  );
}
