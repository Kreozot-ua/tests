import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(({ spacing }) => ({
  root: {
    display: 'flex',
    gap: 1,
    padding: 1,
    justifyContent: 'center',
    alignItems: 'start',
    flexWrap: 'wrap',
    position: 'relative'
  },

  button: {
    position: 'fixed',
    top: 64 + parseInt(spacing(1)),
    right: spacing(2)
  }
}));
