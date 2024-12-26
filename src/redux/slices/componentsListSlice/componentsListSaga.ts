import { call, put, takeLatest } from "redux-saga/effects";
import {
    fetchComponentsListFailure,
    fetchComponentsListRequest,
    fetchComponentsListSuccess,
    IComponent,
} from "./componentsListSlice";

async function fetchComponentsList() {
    const response = await fetch("./componentsList.json");
    if (!response.ok) {
        throw new Error("Failed to fetch components list");
    }
    return response.json();
}

function* fetchComponentsListSaga() {
    try {
        const componentsList: IComponent[] = yield call(fetchComponentsList);
        yield put(fetchComponentsListSuccess(componentsList));
    } catch (error) {
        if (error instanceof Error) {
            yield put(fetchComponentsListFailure(error.message));
        }
        yield put(fetchComponentsListFailure("Unknown error"));
    }
}

export function* watchFetchComponentsList() {
    yield takeLatest(fetchComponentsListRequest.type, fetchComponentsListSaga);
}
