import style from "./TablePage.module.scss"

const TableElement = (props) =>{
    return(
            <tr className={style.table_element}>
                <td className={style.table_field}>{props.place}</td>
                <td className={style.table_field}>{props.name}</td>
                <td className={style.table_field}>{props.accuracy}</td>
                <td className={style.table_field}>{props.fireRate}</td>
            </tr>
    )
}

export default TableElement