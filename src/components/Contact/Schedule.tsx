import { locales } from '@/constants/locales';
import React from 'react';

const Schedule: React.FC = () => (
  <div className="contact__schedule">
    <p className="contact__schedule-title">{locales.contact_schedule_title}</p>
    <p className="contact__schedule-hours">{locales.contact_schedule_work_hours}</p>
    <p className="contact__schedule-day-off">{locales.contact_schedule_day_off}</p>
    <p className="contact__schedule-questions">{locales.contact_schedule_questions}</p>
  </div>
);

export default Schedule;
