import { put } from "@redux-saga/core/effects";
import sorter from "../../../utils/sorter";
import { SORT_SUCCESSED } from "../../actions/TablePage";


function* sortSaga(action){
    try{
        let members = yield sorter(action.members, action.sortBy)
        if(action.reverse){ members.reverse() }
        yield put({type: SORT_SUCCESSED, result:members})
    }catch(e){
        console.log(e)
    }
}

export default sortSaga