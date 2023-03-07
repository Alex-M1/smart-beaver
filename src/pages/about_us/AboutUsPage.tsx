import AboutUs from '@/components/AboutUs';
import AppHead from '@/components/common/AppHead';
import React from 'react';

const AboutUsPage: React.FC = () => (
  <>
    <AppHead title="about_us" desription="about_us_p1" />
    <AboutUs />
  </>
);

export default AboutUsPage;
