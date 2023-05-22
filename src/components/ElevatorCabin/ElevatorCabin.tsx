import React, { FC, memo } from 'react';

import { FLOOR_HEIGHT } from '~constants/index';

import { useStyles } from './ElevatorCabinStyles';

export interface IElevatorCabin {
  elevatorNumber: number,
  currentFloor: number
}

export const ElevatorCabin: FC<IElevatorCabin> = memo(({ elevatorNumber, currentFloor }) => {
  const { classes, cx } = useStyles({ elevatorNumber });

  return (
    <div
      className={classes.body}
      style={{
        zIndex: 20 + (currentFloor + 1) * 20 - 1 - elevatorNumber,
        bottom: FLOOR_HEIGHT * currentFloor,
      }}
    >
      <div className={classes.roof} />
      <div className={classes.door} />
      <div className={cx(classes.door, classes['door--second'])} />
      <div className={classes.wall} />
    </div>
  );
});
