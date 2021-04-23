import { GET_MEMBERS_REQUESTED, SEARCH_REQUESTED, SORT_REQUESTED } from "../../actions/TablePage";
import getMembers from "./getMembersSaga";
import {all, takeLatest} from 'redux-saga/effects'
import sortSaga from "./sortSaga";
import searchSaga from "./searchSaga";

function* rootSaga() {
    yield all([
        takeLatest(GET_MEMBERS_REQUESTED, getMembers),
        takeLatest(SORT_REQUESTED, sortSaga),
        takeLatest(SEARCH_REQUESTED, searchSaga)
    ])
}

export default rootSaga