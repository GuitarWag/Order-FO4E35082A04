import { all } from 'redux-saga/effects';
import appIntegrationSagas from './ducks/app-integration/sagas';
import specialitiesSagas from './ducks/speciallities/sagas';
import citiesSagas from './ducks/cities/sagas';

// !!!!!!!!!! ADD SAGA HERE TO WORK !!!!!!!!!!!!!!!!
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function* rootSaga() {
  yield all([...specialitiesSagas, ...appIntegrationSagas, ...citiesSagas]);
}
