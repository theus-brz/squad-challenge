import { all } from 'redux-saga/effects';

import teams from './teams/sagas';

export default function* rootSaga() {
  return yield all([teams]);
}
