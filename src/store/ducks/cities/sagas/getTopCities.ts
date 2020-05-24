import { put, takeLatest, call } from 'redux-saga/effects';
import { loadTopCitiesSuccess, loadTopCitiesError, LOAD_TOP_START } from '..';

import { getTopCities } from '../../../../services/top-cities';

function* getTopCitiesStartAsync(): any {
  try {
    const topCities = yield call(getTopCities);
    yield put(loadTopCitiesSuccess(topCities));
  } catch (e) {
    yield put(loadTopCitiesError(e));
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function* watchTopCitiesStart() {
  yield takeLatest(LOAD_TOP_START, getTopCitiesStartAsync);
}
