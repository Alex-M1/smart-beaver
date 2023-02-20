import { Locales, locales } from '@/constants/locales';

export const quotes = [
  { title: locales.kitchen_cabinets },
  { title: locales.bathroom_vanities },
  { title: locales.cabinet_door },
  { title: locales.drawer_fronts },
  { title: locales.drawer_boxes },
  { title: locales.pull_out_shelves },
];

export const policiesItems: Array<{ textKey: Locales, titleKey: Locales }> = [
  { titleKey: 'payment_options', textKey: 'payment_options_text' },
  { titleKey: 'lead_times', textKey: 'lead_times_text' },
  { titleKey: 'changes_and_additions', textKey: 'changes_and_additions_text' },
  { titleKey: 'delivery_and_pickup', textKey: 'delivery_and_pickup_text' },
  { titleKey: 'return_policy', textKey: 'return_policy_text' },
];
