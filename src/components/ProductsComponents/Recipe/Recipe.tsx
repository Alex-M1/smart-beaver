import { locales } from '@/constants/locales';
import React from 'react';
import { StRecipe } from './styled';

const Recipe: React.FC = () => (
  <div>
    <p>{locales.kitchen_cabinet_recipe}</p>
    <StRecipe>
      <li>{locales.kitchen_cabinet_recipe_item_1}</li>
      <li>{locales.kitchen_cabinet_recipe_item_2}</li>
      <li>{locales.kitchen_cabinet_recipe_item_3}</li>
      <li>{locales.kitchen_cabinet_recipe_item_4}</li>
      <li>{locales.kitchen_cabinet_recipe_item_5}</li>
    </StRecipe>
  </div>
);

export default Recipe;
