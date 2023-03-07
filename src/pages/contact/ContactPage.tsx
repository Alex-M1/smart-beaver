import AppHead from '@/components/common/AppHead';
import Contact from '@/components/Contact';
import React from 'react';

const ContactPage: React.FC = () => (
  <>
    <AppHead title="contact" desription="contact_schedule_work_hours" />
    <Contact />
  </>
);

export default ContactPage;
