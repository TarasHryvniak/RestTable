import searcher from "../../../utils/searcher"
import { put } from "@redux-saga/core/effects";
import { SEARCH_SUCCESSED } from "../../actions/TablePage"
import { getMemberAPI } from "../../../api/member";

function* searchSaga(action){
    let members = yield(getMemberAPI())
    members = yield searcher(action.text, members.members)
    yield put({type: SEARCH_SUCCESSED, members, text: action.text})
}

export default searchSaga