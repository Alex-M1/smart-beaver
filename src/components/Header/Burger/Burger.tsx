import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import { useRouter } from 'next/router';
import { colors } from '@/constants/colors';
import Icon from '@/components/common/Icon';
import { locales } from '@/constants/locales';
import { urls, Urls } from '@/constants/urls';

type MenuItemType = ['products', 'about_us', 'faq', 'contact']

const Burger: React.FC = () => {
  const [state, setState] = React.useState(false);
  const { push } = useRouter();

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

  const handleClick = (url: Urls) => () => {
    push(urls[url]);
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
            <ListItemButton sx={{ color: 'white' }} key={itemName} onClick={handleClick(itemName)}>
              {locales[itemName]}
            </ListItemButton>
          ))}
        </Box>
      </Drawer>
    </div>
  );
};

export default Burger;
