import { makeStyles } from 'tss-react/mui';
import { darken, alpha } from '@mui/material/styles';

export const useStyles = makeStyles()(({ palette }) => ({
  wrapper: {
    '*::-webkit-scrollbar': {
      width: 8,
      height: 8,
      backgroundColor: palette.primary.light,
      border: `1px solid ${alpha('#000', 0.12)}`,
    },
    '*::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 4px transparent',
    },
    '*::-webkit-scrollbar-thumb': {
      background: palette.primary.main,
      borderRadius: 4,
    },
    '*::-webkit-scrollbar-thumb:hover': {
      background: darken(palette.primary.main as string, 0.12),
    },
  },

  root: {
    height: '100vh',
    overflow: 'auto',
  },
}));
