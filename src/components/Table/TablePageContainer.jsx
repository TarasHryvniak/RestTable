import { connect } from "react-redux"
import { getMembersAC, searchFieldChangeAC, sortAC } from "../../redux/actions/TablePage"
import TablePage from "./TablePage"

const mapStateToProps = (state) =>{
    return {
        members: state.members,
        searchFieldText: state.searchFieldText
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        getMembers:() => {
            dispatch(getMembersAC())
        },
        sort:(sortBy, members, reverse) => {
            dispatch(sortAC(sortBy, members, reverse))
        },
        changeSearchText:(text) =>{
            dispatch(searchFieldChangeAC(text))
        }
    }
}

const TablePageContainer = connect(mapStateToProps, mapDispatchToProps)(TablePage)

export default TablePageContainer