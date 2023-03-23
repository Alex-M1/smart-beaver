import { colors } from '@/constants/colors';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    warning: {
      main: colors.warning,
      contrastText: colors.white,
    },
    primary: {
      main: colors.brownPrimary,
      contrastText: colors.white,
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});
