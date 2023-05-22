export type ElevatorType = {
  occupied: boolean,
  currentFloor: number,
  destinations: number[]
}

export type BuildingStateType = {
  floorsCalled: number[],
  elevators: Record<number, ElevatorType>
}

export type BuildingActionType = {
  type: BuildingActionTypes,
  payload?: any
}

export enum BuildingActionTypes {
  RESET,
  REGISTER_ELEVATOR,
  CALL_ELEVATOR,
  REGISTER_ELEVATOR_NEW_POSITION,
  REGISTER_ELEVATOR_ARRIVAL,
}

export const initialBuilderReducerValues: BuildingStateType = {
  floorsCalled: [],
  elevators: [],
}

export const initialElevatorProps: ElevatorType = {
  occupied: false,
  currentFloor: 0,
  destinations: []
}

export const buildingReducer = (state: BuildingStateType, { type, payload }: BuildingActionType) => {
  switch (type) {
    case BuildingActionTypes.REGISTER_ELEVATOR:
      return { ...state, elevators: { ...state.elevators, [payload]: initialElevatorProps } }
    case BuildingActionTypes.CALL_ELEVATOR:
      return {
        ...state,
        floorsCalled: [...state.floorsCalled, payload.floor],
        elevators: {
          ...state.elevators,
          [payload.id]: {
            ...state.elevators[payload.id],
            occupied: true,
            destinations: [...state.elevators[payload.id]?.destinations ?? [], payload.floor]
          }
        }
      }
    case BuildingActionTypes.REGISTER_ELEVATOR_NEW_POSITION:
      return {
        ...state,
        elevators: {
          ...state.elevators,
          [payload.id]: {
            ...state.elevators[payload.id],
            occupied: true,
            destinations: [...state.elevators[payload.id]?.destinations ?? [], payload.floor]
          }
        }
      }
    case BuildingActionTypes.REGISTER_ELEVATOR_ARRIVAL:
      return {
        ...state,
        floorsCalled: [...state.floorsCalled.filter(floor => floor !== payload.floor) ?? []],
        elevators: {
          ...state.elevators,
          [payload.id]: {
            ...state.elevators[payload.id],
            occupied: false,
            destinations: [...state.elevators[payload.id]?.destinations?.filter(floor => floor !== payload.floor) ?? []]
          }
        }
      }
    case BuildingActionTypes.RESET:
      return { ...initialBuilderReducerValues, elevators: payload }
    default:
      return state
  }
}
