import { makeStyles } from 'tss-react/mui';
import { CONTROL_PANEL_WIDTH } from '~constants/index';

export const useStyles = makeStyles()((theme) => ({
  root: {
    margin: '10px auto',
    padding: `20px ${CONTROL_PANEL_WIDTH + parseInt(theme.spacing(4))}px 100px 12px`,
    position: 'relative',
    display: 'table',
    userSelect: 'none'
  },
  removeButton: {
    position: 'absolute',
    top: 10,
    right: 10
  }
}));
