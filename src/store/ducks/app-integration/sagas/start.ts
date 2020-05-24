import { put, takeLatest } from 'redux-saga/effects';
import { APP_START, appSuccess } from '..';

import { loadSpecialitiesStart } from '../../speciallities';
import { loadTopCitiesStart } from '../../cities';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* appStartAsync() {
  yield put(loadSpecialitiesStart());
  yield put(loadTopCitiesStart());
  yield put(appSuccess());
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function* watchAppStart() {
  yield takeLatest(APP_START, appStartAsync);
}
