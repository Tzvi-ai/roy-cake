import React from 'react'
const TableRow = (props) => {

    // const [count, setCount] = React.useState(props.count)

    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.price}</td>
            <td><input onChange={(e)=>{props.addOne(props.id, e.target.value)}} type="number" min="1" className="count-input" value={props.count}/></td>
            <td><button onClick={props.onDelete} className="del-btn">Delete</button></td>
        </tr>
    )
}

export default TableRow
