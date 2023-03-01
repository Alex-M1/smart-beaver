import React from 'react';
import { Locales, locales } from '@/constants/locales';
import QuoteWoodSpeciesItems from './QuoteWoodSpeciesItems';
import { StQuoteWoodSpecies } from './styled';
import { recomendedForPainted, woodSpecies } from './utils';

interface Props {
  title: Locales;
}

const QuoteWoodSpecies: React.FC<Props> = ({ title }) => (
  <StQuoteWoodSpecies>
    <p className="bold small-text quote-species__title">{locales[title]}</p>
    <p className="bold small-text">{locales.quote_wood_species_note}</p>
    <div className="quote-species__items">
      {woodSpecies.map((item) => <QuoteWoodSpeciesItems key={item} itemKey={item} />)}
    </div>
    <p className="bold small-text quote-species__title">{locales.quote_wood_species_recommended}</p>
    <div className="quote-species__items">
      {recomendedForPainted.map((item) => <QuoteWoodSpeciesItems key={item} itemKey={item} />)}
    </div>
    <p className="bold small-text quote-species__title">{locales.quote_wood_species_painted_option}</p>
    <div className="quote-species__items">
      <QuoteWoodSpeciesItems itemKey="wood_species_poplar" isPoplar />
    </div>
    <p className="bold small-text quote-species__title">{locales.quote_wood_species_painted_option}</p>
    <div className="quote-species__items">
      <QuoteWoodSpeciesItems itemKey="wood_species_mdf" />
    </div>
  </StQuoteWoodSpecies>
);

export default QuoteWoodSpecies;
