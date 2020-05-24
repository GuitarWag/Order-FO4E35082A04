import { City } from '../../../api';

export const NAMESPACE = 'CITIES';
// Actions
export const LOAD_TOP_START = `college/CITIES/LOAD_TOP_START`;
export const LOAD_TOP_SUCCESS = `college/CITIES/LOAD_TOP_SUCCESS`;
export const LOAD_TOP_ERROR = `college/CITIES/LOAD_TOP_ERROR`;

const INITIAL_STATE = {
  list: [],
  top: [],
  loading: false,
  error: null,
};

type StartAction = {
  type: 'college/CITIES/LOAD_TOP_START';
};

type SuccessAction = {
  type: 'college/CITIES/LOAD_TOP_SUCCESS';
  payload: { top: City[] };
};

type ErrorAction = {
  type: 'college/CITIES/LOAD_TOP_ERROR';
  payload: { error: Error };
};

type Action = SuccessAction | ErrorAction | StartAction;

interface State {
  list: City[];
  top: City[];
  loading: boolean;
  error: Error | null;
}
interface RootState {
  CITIES: State;
}
// Reducer
const reducer: (state: State, action: Action) => State = (state: State = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case LOAD_TOP_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_TOP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        top: action.payload.top,
      };
    case LOAD_TOP_ERROR:
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
export const loadTopCitiesStart = (): StartAction => {
  return { type: LOAD_TOP_START };
};
export const loadTopCitiesSuccess = (top: City[]): SuccessAction => {
  return { type: LOAD_TOP_SUCCESS, payload: { top } };
};
export const loadTopCitiesError = (error: Error): ErrorAction => {
  return { type: LOAD_TOP_ERROR, payload: { error } };
};
// Selectors

export const citiesSelector = (state: RootState): City[] => state[NAMESPACE].list;
export const topTopCitiesSelector = (state: RootState): City[] => state[NAMESPACE].top;

export default reducer;
