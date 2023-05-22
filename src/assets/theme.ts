import { createTheme, responsiveFontSizes, PaletteMode } from '@mui/material';

export const theme = (mode: PaletteMode = 'dark') => responsiveFontSizes(createTheme({ palette: { mode } }))
