import { combineReducers } from 'redux';
import specialitiesReducer, { NAMESPACE as SPECIALITIES_NAMESPACE } from './speciallities';
import appIntegrationReducer, { NAMESPACE as APP_INTEGRATION_NAMESPACE } from './app-integration';
import citiesReducer, { NAMESPACE as CITIES_NAMESPACE } from './cities';

export default combineReducers({
  [SPECIALITIES_NAMESPACE]: specialitiesReducer,
  [APP_INTEGRATION_NAMESPACE]: appIntegrationReducer,
  [CITIES_NAMESPACE]: citiesReducer,
});
