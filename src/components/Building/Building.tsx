import React, { FC, useRef } from 'react';
import { minBy } from 'lodash';
import { Box, Button, Card, IconButton, TextField, Tooltip } from '@mui/material';
import { Delete } from '@mui/icons-material';

import { Elevator, Floor } from '~components/core';
import { useAppDispatch, useAppSelector } from '~store/hooks';
import { callElevator, setBuildingParams } from '~store/actions/buildingsActions';
import { buildingSelector, buildingElevatorsSelector } from '~store/selectors/buildingsSelectors';

import { useStyles } from './BuildingStyles';

export interface IBuilding {
  buildingId: number,
  buildingsQuantity: number,
  onRemove: (id: number) => void
}

export const Building: FC<IBuilding> = ({ buildingId, onRemove, buildingsQuantity }) => {
  const { classes } = useStyles();
  const floorsRef = useRef<HTMLInputElement | null>(null);
  const elevatorsRef = useRef<HTMLInputElement | null>(null);
  const building = useAppSelector(buildingSelector(buildingId));
  const elevators = useAppSelector(buildingElevatorsSelector(buildingId));
  const dispatch = useAppDispatch();

  const handleNewParamsApply = () => {
    dispatch(setBuildingParams({
      buildingId,
      floors: Number(floorsRef.current?.value),
      elevatorsQuantity: Number(elevatorsRef.current?.value)
    }));
  }

  const mapElevatorsByDistance = (floor: number) => {
    type AccType = { id: number, distance: number }[];
    const defaultAcc: AccType = [];

    return Object.entries(elevators).reduce((acc, [id, { currentFloor, occupied, destinations = [] }]) => {
      let distance = Math.abs(floor - currentFloor);
      let furtherDistances: number = 0;

      if (occupied) {
        furtherDistances = destinations.reduce(
          (acc, destination, i, arr) => {
            if (!arr[i - 1]) { // means first destination in que
              return acc + Math.abs(destination - currentFloor);
            } else {
              return acc + Math.abs(destination - arr[i - 1]);
            }
          }, furtherDistances,
        )
      }

      return [
        ...acc,
        { id: Number(id), distance: distance + furtherDistances },
      ]
    }, defaultAcc);
  }

  const handleElevatorCall = (floor: number) => {
    const mappedDistanceToDestination = mapElevatorsByDistance(floor);
    const closestElevator = minBy(mappedDistanceToDestination, 'distance');
    dispatch(callElevator({ buildingId, floor, elevatorId: closestElevator?.id }));
  }

  return (
    <Card elevation={5} className={classes.root}>
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'center', mb: 10 }}>
        <TextField
          label="Floors"
          defaultValue={5}
          type="number"
          size="small"
          InputProps={{ inputProps: { min: 3, max: 16 } }}
          inputRef={floorsRef}
        />
        <TextField
          label="Elevators"
          defaultValue={2}
          type="number"
          size="small"
          InputProps={{ inputProps: { min: 1, max: 3 } }}
          inputRef={elevatorsRef}
        />
        <Tooltip title="Note: current elevator(s) position & tasks will be reset">
          <Button variant="outlined" onClick={handleNewParamsApply}>Apply</Button>
        </Tooltip>
      </Box>
      <IconButton className={classes.removeButton} disabled={buildingsQuantity === 1} onClick={() => onRemove(buildingId)}>
        <Delete/>
      </IconButton>
      <Box>
        {Object.entries(elevators).map(([id, ]) => (
          <Elevator
            key={id}
            buildingId={buildingId}
            elevatorNumber={Number(id)}
            totalFloors={building.floors}
            onElevatorChangeFloor={() => null}
          />
        ))}
        {Array(building.floors).fill(null).map((_, idx) => idx).reverse().map((i) => (
          <Floor
            key={i}
            floorNumber={i}
            isCalled={building.floorsCalled.includes(i)}
            onElevatorCall={handleElevatorCall}
          />
        ))}
      </Box>
    </Card>
  )
}
