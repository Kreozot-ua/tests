import type { RootState } from '../store'

export const buildingsSelector = (state: RootState) => state.buildings;
export const buildingSelector = (id: number) => (state: RootState) => state.buildings[id];
export const buildingElevatorsSelector = (id: number) => (state: RootState) => state.buildings[id].elevators;
export const buildingElevatorSelector = (buildingId: number, elevatorNumber: number) => (state: RootState) =>
  state.buildings[buildingId].elevators[elevatorNumber];
export const buildingElevatorDestinationsSelector = (buildingId: number, elevatorNumber: number) => (state: RootState) =>
  state.buildings[buildingId].elevators[elevatorNumber].destinations;
export const buildingElevatorCurrentFloorSelector = (buildingId: number, elevatorNumber: number) => (state: RootState) =>
  state.buildings[buildingId].elevators[elevatorNumber].currentFloor;
