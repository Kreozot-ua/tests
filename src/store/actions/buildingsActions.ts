import { buildingsSlice } from '~store/reducers/buildingsSlice';

export const {
  addBuilding,
  removeBuilding,
  setBuildingParams,
  callElevator,
  registerElevatorArrival,
  registerElevatorNewPosition,
} = buildingsSlice.actions;
