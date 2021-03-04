import React from "react";

function employeeRow(props) {

    return(
        <tr>
            <td>
                <img src={props.picture.thumbnail}  className="employeeImg"></img>
            </td>
            <td>{props.name.first}</td>
            <td>{props.email}</td>
        </tr>
    )
}

export default employeeRow;