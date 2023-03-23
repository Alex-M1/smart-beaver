import { locales } from '@/constants/locales';
import React from 'react';
import EdgeProfilesItem from './EdgeProfilesItem';
import { StEdgeProfiles } from './styled';

const EdgeProfiles: React.FC = () => (
  <StEdgeProfiles>
    <p className="edge-profiles__title">{locales.edge_profiles}</p>
    <div>
      <p className="edge-profiles__item-title">{locales.inner_edge_profile_title}</p>
      <EdgeProfilesItem quantity={4} name="inner_edge" />
    </div>
    <div>
      <p className="edge-profiles__item-title">{locales.raised_panel_profile_title}</p>
      <EdgeProfilesItem quantity={4} name="raised_panel" />
    </div>
    <div>
      <p className="edge-profiles__item-title">{locales.outer_edge_profile_title}</p>
      <EdgeProfilesItem quantity={4} name="outer_edge" />
    </div>
  </StEdgeProfiles>
);

export default EdgeProfiles;
