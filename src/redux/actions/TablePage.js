export const SORT_REQUESTED = 'SORT_REQUESTED'
export const SORT_SUCCESSED = 'SORT_SUCCESSED'
export const GET_MEMBERS_REQUESTED = 'GET_MEMBERS_REQUESTED'
export const SEARCH_REQUESTED = 'SEARCH_REQUESTED'
export const SEARCH_SUCCESSED = 'SEARCH_SUCCESSED'


export const sortAC = (sortBy, members, reverse) =>{
    return {type: SORT_REQUESTED, sortBy, members, reverse}
}

export const getMembersAC = () =>{
    return {type: GET_MEMBERS_REQUESTED}
}

export const searchFieldChangeAC = (text) =>{
    return {type: SEARCH_REQUESTED, text}
}