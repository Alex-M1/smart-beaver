import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Link from '@/components/common/Link';
import { locales } from '@/constants/locales';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import { colors } from '@/constants/colors';
import Icon from '@/components/common/Icon';

type MenuItemType = ['products', 'about_us', 'faq', 'contact']

const Burger: React.FC = () => {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown'
      && ((event as React.KeyboardEvent).key === 'Tab'
        || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState(open);
  };
  const menuItem: MenuItemType = ['products', 'about_us', 'faq', 'contact'];

  return (
    <div className="burger-menu">
      <IconButton onClick={toggleDrawer(true)}>
        <Icon alt="burger-menu" name="burger" ext="png" />
      </IconButton>
      <Drawer
        anchor="top"
        open={state}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{
            width: 'auto',
            background: colors.brownLight,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '15px 0',
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Icon margin="12px 0" name="white_logo" alt="logo" ext="png" />
          {menuItem.map((itemName) => (
            <ListItemButton key={itemName}>
              <Link key={itemName} href={itemName}>{locales[itemName]}</Link>
            </ListItemButton>
          ))}
        </Box>
      </Drawer>
    </div>
  );
};

export default Burger;
