import { put, takeLatest, call } from 'redux-saga/effects';
import { loadSpecialitiesSuccess, loadSpecialitiesError, LOAD_START } from '..';

import { getSpecialities } from '../../../../services/specialists';

function* getSpecialitiesStartAsync(): any {
  try {
    const specialities = yield call(getSpecialities);
    yield put(loadSpecialitiesSuccess(specialities));
  } catch (e) {
    yield put(loadSpecialitiesError(e));
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function* watchLoadSpecialitiesStart() {
  yield takeLatest(LOAD_START, getSpecialitiesStartAsync);
}
