import React from 'react';
import Button from '@/components/common/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { colors } from '@/constants/colors';
import { Locales, locales } from '@/constants/locales';
import { Urls, urls } from '@/constants/urls';
import { capitalizeWords } from '@/helpers/ui';
import { RotateArrow, StLink } from './styled';

const NavigationButton: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(evt.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const links: Urls[] = ['kitchen_cabinets', 'specialty_islands', 'bathroom_vanities', 'cabinet_doors', 'cabinet_finishing', 'wood_species', 'polities_and_terms'];
  return (
    <>
      <Button onClick={handleClick} variant="text">
        {locales.products}
        <RotateArrow open={open}>&#10095;</RotateArrow>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        PaperProps={{
          sx: {
            backgroundColor: colors.brownPrimary,
            color: colors.white,
          },
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {links.map((link) => (
          <MenuItem key={link} onClick={handleClose}>
            <StLink href={urls[link]}>
              <span>• </span>
              {capitalizeWords(locales[link as Locales])}
            </StLink>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default NavigationButton;
