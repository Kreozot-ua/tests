import { generateId } from '~utils/index';

import { buildingsSlice, initialBuildingValue, initialBuildingsReducerValue, BuildingsStateType } from './buildingsSlice'
import { addBuilding } from '../actions/buildingsActions';

test('should return the initial state', () => {
  expect(buildingsSlice.reducer(undefined, { type: undefined })).toEqual(initialBuildingsReducerValue);
});

test('should handle a building being added to an empty list', () => {
  const previousState: BuildingsStateType = {};
  const buildingId = generateId();

  expect(buildingsSlice.reducer(previousState, addBuilding({ buildingId }))).toEqual({
    [buildingId]: initialBuildingValue
  });
});

test('should handle a building being added to an existing list', () => {
  const previousState: BuildingsStateType = initialBuildingsReducerValue;
  const buildingId = generateId();

  expect(buildingsSlice.reducer(previousState, addBuilding({ buildingId }))).toEqual({
    ...initialBuildingsReducerValue,
    [buildingId]: initialBuildingValue
  });
});
