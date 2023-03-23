import { IconNames } from '@/components/common/Icon/types';
import { locales } from '@/constants/locales';
import { DrawerFronts } from '@/state/types';

export type DrawerFrontStyle = {
  txt: string;
  img: IconNames;
  name: DrawerFronts;
}

export const drawerFrontStyles: DrawerFrontStyle[] = [
  { txt: locales.df_flat_panel, img: 'drawer_fronts_flat_panel', name: 'df_flat_panel' },
  { txt: locales.df_raised_panel, img: 'drawer_fronts_raised_panel', name: 'df_raised_panel' },
  { txt: locales.df_shaker, img: 'drawer_fronts_shaker', name: 'df_shaker' },
  { txt: locales.df_slab_profile_edge, img: 'drawer_fronts_slab_profile', name: 'df_slab_profile_edge' },
];
