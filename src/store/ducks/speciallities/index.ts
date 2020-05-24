import { slice } from 'lodash';
import { Speciality } from '../../../api';

export const NAMESPACE = 'SPECIALITIES';
// Actions
export const LOAD_START = `college/SPECIALITIES/LOAD_START`;
export const LOAD_SUCCESS = `college/SPECIALITIES/LOAD_SUCCESS`;
export const LOAD_ERROR = `college/SPECIALITIES/LOAD_ERROR`;

const INITIAL_STATE = {
  list: [],
  top: [],
  loading: false,
  error: null,
};

type StartAction = {
  type: 'college/SPECIALITIES/LOAD_START';
};

type SuccessAction = {
  type: 'college/SPECIALITIES/LOAD_SUCCESS';
  payload: { list: Speciality[] };
};

type ErrorAction = {
  type: 'college/SPECIALITIES/LOAD_ERROR';
  payload: { error: Error };
};

type Action = SuccessAction | ErrorAction | StartAction;

interface State {
  list: Speciality[];
  top: Speciality[];
  loading: boolean;
  error: Error | null;
}
interface RootState {
  SPECIALITIES: State;
}
// Reducer
const reducer: (state: State, action: Action) => State = (state: State = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    // do reducer stuff
    case LOAD_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        list: action.payload.list,
        top: slice(action.payload.list, 0, 2),
      };
    case LOAD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

// Action Creators
export const loadSpecialitiesStart = (): StartAction => {
  return { type: LOAD_START };
};
export const loadSpecialitiesSuccess = (list: Speciality[]): SuccessAction => {
  return { type: LOAD_SUCCESS, payload: { list } };
};
export const loadSpecialitiesError = (error: Error): ErrorAction => {
  return { type: LOAD_ERROR, payload: { error } };
};
// Selectors

export const specialitiesSelector = (state: RootState): Speciality[] => state[NAMESPACE].list;
export const topSpecialitiesSelector = (state: RootState): Speciality[] => state[NAMESPACE].top;

export default reducer;
