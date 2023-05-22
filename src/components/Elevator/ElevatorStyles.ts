import { makeStyles } from 'tss-react/mui';
import { IElevator } from '~components/Elevator/Elevator';

export const useStyles = makeStyles<Pick<IElevator, 'elevatorNumber' | 'totalFloors'>>()((_, { elevatorNumber, totalFloors }) => ({
  root: {
    position: 'absolute',
    width: 44,
    height: 66 * totalFloors,
    bottom: 166,
    right: 128 + (elevatorNumber * 60)
  },
  shaft: {
    width: '100%',
    height: '100%',
    backgroundColor: '#d3d3d3',
    border: '2px solid #626262',
    boxSizing: 'border-box',
    zIndex: 1
  },
}));
