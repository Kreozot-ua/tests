import React, { FC, useCallback, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import { ElevatorCabin } from '~components/core';
import { buildingElevatorSelector } from '~store/selectors/buildingsSelectors';
import { registerElevatorNewPosition, registerElevatorArrival } from '~store/actions/buildingsActions';

import { useStyles } from './ElevatorStyles';
import { useAppDispatch } from '~store/hooks';

export interface IElevator {
  buildingId: number,
  elevatorNumber: number,
  totalFloors: number,
  onElevatorChangeFloor: (id: number, floor: number, arrival: boolean) => void
}

export const Elevator: FC<IElevator> = ({ buildingId, elevatorNumber, totalFloors }) => {
  const { classes } = useStyles({ elevatorNumber, totalFloors });
  const loopId = useRef<ReturnType<typeof setTimeout> | null>(null);
  const elevator = useSelector(buildingElevatorSelector(buildingId, elevatorNumber));
  const dispatch = useAppDispatch();

  const checkCurrentElevatorTasks = useCallback(() => {
    if (elevator.destinations.length !== 0) {
      const isDirectionUp = elevator.currentFloor < elevator.destinations[0];
      const newFloor = isDirectionUp ? elevator.currentFloor + 1 : elevator.currentFloor - 1;
      if (Math.abs(elevator.currentFloor - elevator.destinations[0]) !== 0) {
        dispatch(registerElevatorNewPosition({
          buildingId,
          elevatorNumber,
          currentFloor: newFloor
        }));
      } else {
        dispatch(registerElevatorArrival({
          buildingId,
          elevatorNumber,
          floor: newFloor
        }));
      }
    }
  }, [elevator, buildingId, dispatch, elevatorNumber]);

  const elevatorListeningLoop = useCallback(() => {
    loopId.current = setTimeout(() => {
      checkCurrentElevatorTasks();
      elevatorListeningLoop();
    }, 300)
  }, [checkCurrentElevatorTasks]);

  useEffect(() => {
    elevatorListeningLoop();

    return () => {
      loopId.current && clearTimeout(loopId.current);
    }
  }, [elevatorListeningLoop]);

  return (
    <div className={classes.root}>
      <div className={classes.shaft}/>
      <ElevatorCabin elevatorNumber={elevatorNumber} currentFloor={elevator.currentFloor} />
    </div>
  );
};
