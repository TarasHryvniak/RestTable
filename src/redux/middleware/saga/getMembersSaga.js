import { getMemberAPI } from "../../../api/member"
import {call, put} from 'redux-saga/effects'
import {SORT_REQUESTED} from "../../actions/TablePage"

function* getMembers() {
    try{
        const data = yield call(getMemberAPI)
       yield put({type: SORT_REQUESTED, sortBy:'name', members:data.members })
    }catch(e){
        console.log(e)
    }
}

export default getMembers
