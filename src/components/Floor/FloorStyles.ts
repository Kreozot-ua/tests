import { makeStyles } from 'tss-react/mui';
import { CONTROL_PANEL_WIDTH } from '~constants/index';

export const useStyles = makeStyles()(() => ({
  root: {
    position: 'relative',
  },

  floor: {
    width: 300,
    height: 90,
    transform: 'skew(-60deg)',
    transformOrigin: '0 100px',
    transition: 'background-color .3s ease',
    backgroundColor: 'rgba(0, 228, 255, 0.5)',
    border: '3px solid rgba(0, 228, 255)',
    marginBottom: -30,
    marginRight: 180,
    position: 'relative',
    textAlign: 'center',

    '& > h2': {
      lineHeight: '90px',
    },

    '&:hover': {
      backgroundColor: 'rgba(0, 228, 255, 0.75)',
    }
  },

  floorControls: {
    position: 'absolute',
    width: CONTROL_PANEL_WIDTH,
    padding: 6,
    top: -55,
    right: -110
  },

  buttonActive: {
    backgroundColor: 'rgba(0, 223, 255, 0.3)',

    '& > svg': {
      fill: '#00dfff'
    }
  }
}));
