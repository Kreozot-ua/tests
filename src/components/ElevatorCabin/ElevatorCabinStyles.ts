import { makeStyles } from 'tss-react/mui';
import { ELEVATOR_STOP_DURATION, FLOOR_HEIGHT } from '~constants/index';
import { IElevator } from '~components/Elevator';

export const useStyles = makeStyles<Pick<IElevator, 'elevatorNumber'>>()((_, { elevatorNumber }) => ({
  body: {
    width: 46,
    height: FLOOR_HEIGHT,
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 100 - elevatorNumber,
    transitionProperty: 'bottom',
    transitionTimingFunction: 'linear',
    transitionDuration: '1s',
    transitionDelay: `.${ELEVATOR_STOP_DURATION}s`
  },
  roof: {
    width: 44,
    height: 15,
    transform: 'skew(-60deg)',
    transformOrigin: '0 0',
    backgroundColor: 'rgb(255,0,0)',
    border: '1px solid rgb(100,0,0)',
    position: 'absolute',
    top: 0,
    right: 0
  },
  door: {
    width: 23,
    height: FLOOR_HEIGHT,
    boxSizing: 'border-box',
    backgroundColor: 'rgb(255,0,0)',
    border: '1px solid rgb(100,0,0)',
    position: 'absolute',
    top: 17,
    right: 52,
  },
  'door--second': {
    right: 52 - 23,
  },
  wall: {
    width: FLOOR_HEIGHT,
    height: 29,
    transform: 'rotate(90deg) skew(30deg)',
    transformOrigin: '0 0',
    backgroundColor: 'rgb(255,0,0)',
    border: '1px solid rgb(100,0,0)',
    position: 'absolute',
    boxSizing: 'border-box',
    top: 0,
    right: -FLOOR_HEIGHT
  }
}));
