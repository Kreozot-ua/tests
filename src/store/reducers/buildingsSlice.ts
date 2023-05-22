import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { generateId } from '~utils/index';

export type ElevatorType = {
  occupied: boolean,
  currentFloor: number,
  destinations: number[]
}

export type BuildingStateType = {
  floors: number,
  floorsCalled: number[],
  elevators: Record<number, ElevatorType>
}

export type BuildingsStateType = Record<number, BuildingStateType>

const DEFAULT_ELEVATORS_QUANTITY = 2;

export const initialElevatorProps: ElevatorType = {
  occupied: false,
  currentFloor: 0,
  destinations: [],
}

export const initialBuildingValue: BuildingStateType = {
  floors: 5,
  floorsCalled: [],
  elevators: Object.assign({}, Array(DEFAULT_ELEVATORS_QUANTITY).fill(initialElevatorProps)),
}

export const initialBuildingsReducerValue: BuildingsStateType = {
  [generateId()]: initialBuildingValue
}

export const buildingsSlice = createSlice({
  name: 'buildings',
  initialState: initialBuildingsReducerValue,
  reducers: {
    addBuilding: (state, { payload: { buildingId } }: PayloadAction<any>) => {
      state[buildingId] = initialBuildingValue;
    },
    removeBuilding: (state, { payload: { buildingId } }: PayloadAction<any>) => {
      delete state[buildingId];
    },
    setBuildingParams: (state, { payload: { buildingId, floors, elevatorsQuantity } }: PayloadAction<any>) => {
      state[buildingId].floors = floors;
      state[buildingId].elevators = Array(elevatorsQuantity).fill(initialElevatorProps);
    },
    callElevator: (state, { payload: { buildingId, elevatorId, floor } }: PayloadAction<any>) => {
      state[buildingId].floorsCalled.push(floor);
      state[buildingId].elevators[elevatorId].occupied = true;
      state[buildingId].elevators[elevatorId].destinations.push(floor);
    },
    registerElevatorNewPosition: (state, { payload: { buildingId, elevatorNumber, currentFloor } }: PayloadAction<any>) => {
      state[buildingId].elevators[elevatorNumber].currentFloor = currentFloor;
    },
    registerElevatorArrival: (state, { payload: { buildingId, elevatorNumber, floor } }: PayloadAction<any>) => {
      const floorsCalledIndex = state[buildingId].floorsCalled.findIndex((i) => i === floor);
      state[buildingId].floorsCalled.splice(floorsCalledIndex, 1);
      state[buildingId].elevators[elevatorNumber].occupied = false;
      state[buildingId].elevators[elevatorNumber].destinations.shift();
    },
  },
});

export default buildingsSlice.reducer;
