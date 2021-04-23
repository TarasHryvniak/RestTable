import style from "./TablePage.module.css"

const TableElement = (props) =>{
    return(
            <tr className={style.table_element}>
                <td className={style.table_parts}>{props.place}</td>
                <td className={style.table_parts}>{props.name}</td>
                <td className={style.table_parts}>{props.accuracy}</td>
                <td className={style.table_parts}>{props.fireRate}</td>
            </tr>
    )
}

export default TableElement