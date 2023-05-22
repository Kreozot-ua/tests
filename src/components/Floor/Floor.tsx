import React, { FC, memo } from 'react';
import { Card, IconButton, Typography } from '@mui/material';
import { RadioButtonChecked } from '@mui/icons-material';

import { useStyles } from './FloorStyles';

export interface IFloor {
  floorNumber: number,
  isCalled: boolean,
  onElevatorCall: (floor: number) => void
}

export const Floor: FC<IFloor> = memo(({ floorNumber, isCalled, onElevatorCall }) => {
  const { classes, cx } = useStyles();
  const floorName: string = floorNumber === 0 ? 'G' : `${floorNumber + 1}F`

  return (
    <div className={classes.root}>
      <div className={classes.floor} style={{ zIndex: (floorNumber + 1) * 20 }}>
        <Typography variant="h2">{floorName}</Typography>
      </div>
      <Card
        elevation={6}
        className={classes.floorControls}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <IconButton
          size="small"
          className={cx({ [classes.buttonActive]: isCalled })}
          disabled={isCalled}
          onClick={() => onElevatorCall(floorNumber)}
        >
          <RadioButtonChecked/>
        </IconButton>
        <Typography variant="h5">{floorName}</Typography>
      </Card>
    </div>
  );
});
