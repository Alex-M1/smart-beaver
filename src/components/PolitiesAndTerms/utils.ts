import { Locales, locales } from '@/constants/locales';
import { urls } from '@/constants/urls';

export const quotes = [
  { title: locales.kitchen_cabinets, url: urls.kitchen_quote },
  { title: locales.bathroom_vanities, url: urls.bathroom_quote },
  { title: locales.cabinet_door, url: urls.doors_quote },
  { title: locales.drawer_fronts, url: urls.doors_quote },
  { title: locales.drawer_boxes, url: urls.boxes_quote },
  { title: locales.pull_out_shelves, url: urls.boxes_quote },
];

export const policiesItems: Array<{ textKey: Locales, titleKey: Locales }> = [
  { titleKey: 'payment_options', textKey: 'payment_options_text' },
  { titleKey: 'lead_times', textKey: 'lead_times_text' },
  { titleKey: 'changes_and_additions', textKey: 'changes_and_additions_text' },
  { titleKey: 'delivery_and_pickup', textKey: 'delivery_and_pickup_text' },
  { titleKey: 'return_policy', textKey: 'return_policy_text' },
];
