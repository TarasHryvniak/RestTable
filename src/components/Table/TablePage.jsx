import { useEffect } from "react"
import TableElement from "./TableElement"
import style from "./TablePage.module.css"


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
                    <p>Search</p>
                    <textarea placeholder='insert name for search'
                    onChange={onSearchFieldChange} 
                    value={props.searchFieldText}></textarea>
                </div>
                <div className={style.head_elements}>
                    <p>Sort</p>
                    <select onChange={onSortFieldChange}>
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
            <div className={style.table_header}>
                <h4>Place</h4>
                <h4>Name</h4>
                <h4>Accuracy</h4>
                <h4>Fire rate</h4>
            </div>
            <table className={style.table}>
                <tbody>
                    {table}
                </tbody>
            </table>
        </div>
    )
}

export default TablePage