import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

import CodepenIcon from '~/svg/CodepenIcon.svg';
import LinkedinIcon from '~/svg/LinkedinIcon.svg';
import Logow from '~/svg/Logow.svg';
import TwitterIcon from '~/svg/TwitterIcon.svg';

const productLinks = [
  { href: '/', label: 'How it works' },
  { href: '/', label: 'Use cases' },
  { href: '/', label: 'For MSSPs' },
  { href: '/', label: 'Pricing' },
];

const casesLinks = [
  { href: '/', label: 'Threat intelligence enrichment' },
  { href: '/', label: 'Phishing attack response' },
  { href: '/', label: 'Suspicious login alerts' },
  { href: '/', label: 'Vulnerability management' },
  { href: '/', label: 'Endpoint detection and response' },
  { href: '/', label: 'Abuse response' },
  { href: '/', label: 'Fraud analysis and response' },
  { href: '/', label: 'Slack bots' },
  { href: '/', label: 'Employee onboarding' },
];

const resourcesLinks = [
  { href: '/', label: 'Webinars' },
  { href: '/', label: 'Blog' },
  { href: '/', label: 'Podcast' },
  { href: '/', label: 'Customer stories' },
  { href: '/', label: 'Tines Hub' },
  { href: '/', label: 'Story library' },
  { href: '/', label: 'Docs' },
  { href: '/', label: 'API' },
  { href: '/', label: 'Lessons' },
  { href: '/', label: "What's new" },
];

const companyLinks = [
  { href: '/', label: 'About' },
  { href: '/', label: 'Upcoming events' },
  { href: '/', label: 'Careers' },
  { href: '/', label: 'Customer love' },
  { href: '/', label: 'Partnerships' },
  { href: '/', label: 'Newsroom' },
  { href: '/', label: 'Contact' },
  { href: '/', label: 'Terms' },
  { href: '/', label: 'Privacy notice' },
  { href: '/', label: 'Sub-processors' },
  { href: '/', label: 'Security' },
  { href: '/', label: 'Data processing' },
  { href: '/', label: 'GDPR request' },
];

export default function Footer() {
  return (
    <footer className='p-10 pt-0'>
      <div className='rounded-3xl bg-footer-background p-20 text-lm text-light'>
        <section className='layout flex justify-between sm:flex-col md:flex-row'>
          <Logow width='122.3125' height='38' />
          <div className='flex justify-between md:basis-9/12'>
            <div className='flex flex-col'>
              <h3 className='footer-menu-title'>PRODUCT</h3>
              <nav>
                <ul className='flex flex-col items-center justify-between space-y-4'>
                  {productLinks.map(({ href, label }) => (
                    <li key={`${href}${label}`}>
                      <UnstyledLink
                        href={href}
                        className='hover:text-primary-500'
                      >
                        {label}
                      </UnstyledLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className='flex flex-col'>
              <h3 className='footer-menu-title'>USE CASES</h3>
              <nav>
                <ul className='flex flex-col items-center justify-between space-y-4'>
                  {casesLinks.map(({ href, label }) => (
                    <li key={`${href}${label}`}>
                      <UnstyledLink
                        href={href}
                        className='hover:text-primary-500'
                      >
                        {label}
                      </UnstyledLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className='flex flex-col'>
              <h3 className='footer-menu-title'>RESOURCES</h3>
              <nav>
                <ul className='flex flex-col items-center justify-between space-y-4'>
                  {resourcesLinks.map(({ href, label }) => (
                    <li key={`${href}${label}`}>
                      <UnstyledLink
                        href={href}
                        className='hover:text-primary-500'
                      >
                        {label}
                      </UnstyledLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className='flex flex-col'>
              <h3 className='footer-menu-title'>COMPANY</h3>
              <nav>
                <ul className='flex flex-col items-center justify-between space-y-4'>
                  {companyLinks.map(({ href, label }) => (
                    <li key={`${href}${label}`}>
                      <UnstyledLink
                        href={href}
                        className='hover:text-primary-500'
                      >
                        {label}
                      </UnstyledLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </section>
        <section className='layout mt-12 flex justify-between border-t border-light py-12 sm:flex-col md:flex-row'>
          <p>© Tines | RSS: Blog • Product updates • Story library</p>
          <div className='flex gap-4'>
            <TwitterIcon />
            <CodepenIcon />
            <LinkedinIcon />
          </div>
        </section>
      </div>
    </footer>
  );
}
