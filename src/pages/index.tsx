//#Homepage  //*===========  ===========
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import BlogSection from '@/components/sections/BlogSection';
import { FormSection } from '@/components/sections/FormSection';
import HeroSection from '@/components/sections/HeroSection';
import LatestPosts from '@/components/sections/LatestPosts';
import Seo from '@/components/Seo';

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

//#end-homepage //*========  ===========
