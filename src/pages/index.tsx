import * as React from 'react';

import Layout from '@/components/layout/Layout';
import BlogSection from '@/components/sections/BlogSection';
import FormSection from '@/components/sections/FormSection';
import HeroSection from '@/components/sections/HeroSection';
import LatestPosts from '@/components/sections/LatestPosts';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  return (
    <Layout>
      <div>
        <Seo templateTitle='Home' />
        <main>
          <HeroSection />
          <LatestPosts />
          <FormSection />
          <BlogSection />
        </main>
      </div>
    </Layout>
  );
}
