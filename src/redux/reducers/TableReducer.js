import { 
    SEARCH_SUCCESSED,
    SORT_SUCCESSED } from "../actions/TablePage"

const initialState = {
    members:[
        {
            place: 0,
            name:'member_name',
            accuracy: 0,
            fireRate: 0
        }
    ],
    searchFieldText:''
}

let tableReducer = (state=initialState, action) =>{
    switch (action.type) {
        case SORT_SUCCESSED:
        {
           return{
               members: [...action.result]
           }
        }
        case SEARCH_SUCCESSED:
        {
            return{
                members: [...action.members],
                searchFieldText: action.text
            }
        }
        default:{
            return state
        }
    }
}

export default tableReducer