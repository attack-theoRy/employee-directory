import React from "react";

function EmployeeRow(props) {

    return(
        <tr>
            <td>
            <img src={props.picture.thumbnail}  className="profilePic"></img>
            </td>
            <td>{props.name.first + "  " + props.name.last}</td>
            <td>{props.email}</td>
            <td>{props.registered.age}</td>
            <td>{props.location.state}</td>
            <td>{props.phone}</td>
        </tr>
    )
}

export default EmployeeRow;