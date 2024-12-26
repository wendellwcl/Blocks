import { all } from "redux-saga/effects";
import { watchFetchComponentsList } from "./slices/componentsListSlice/componentsListSaga";

export default function* rootSaga() {
    yield all([watchFetchComponentsList()]);
}
