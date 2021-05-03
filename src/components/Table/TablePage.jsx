import { useEffect } from "react"
import TableElement from "./TableElement"
import style from "./TablePage.module.scss"


const TablePage = (props) =>{

    useEffect(() => {
        if(props.members.length !== 0 && props.members[0].place === 0){
            props.getMembers()
        }
    })

    let reverse = false
    
    const onReverseFieldChange = (e) =>{
        reverse = e.target.value
    }

    const onSortFieldChange = (e) =>{
        props.sort(e.target.value, props.members, reverse)
    }

    const onSearchFieldChange = (e) =>{
        props.changeSearchText(e.target.value)
    }


    let table 
    if(props.members.length === 0){
        table = 'Nothing was found'
    }
    else{
        table = props.members.map(m => < TableElement {...m}/>)
    }

    return(
        <div className={style.table_wrapper}>
            <div className={style.table_head}>
                <div className={style.head_elements}>
                    <input type="text" id="search" placeholder='insert name for search'
                    onChange={onSearchFieldChange} 
                    value={props.searchFieldText}></input>
                </div>
                <div className={style.head_elements}>
                        <label htmlFor="sortBy" >Sort</label>
                    <select id="sortBy" onChange={onSortFieldChange}>
                        <option value = 'name'>Name</option>
                        <option value = 'place'>Place</option>
                        <option value = 'accuracy'>Accuracy</option>
                        <option value = 'fireRate'>FireRate</option>
                    </select>
                    <select onChange = {onReverseFieldChange}>
                        <option value = {false}>from A to Z</option>
                        <option value = {true}>from Z to A</option>
                    </select>
                </div>
            </div>
            <table className={style.table}>
                <thead className={style.table_header}>
                    <tr>
                        <td><h4>Place</h4></td>
                        <td><h4>Name</h4></td>
                        <td><h4>Accuracy</h4></td>
                        <td><h4>Fire rate</h4></td>
                    </tr>
                </thead>
                <tbody>
                    {table}
                </tbody>
            </table>
        </div>
    )
}

export default TablePage