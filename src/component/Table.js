import React from "react";
import EmployeeRow from "./EmployeeRow'"

function Table(props)  {

    return (
        <table className="table table-dark">
            <thead>
                <tr>
                <th scope="col"></th>
                    <th scope="col" >Name</th>
                    <th scope="col" >Email</th>
                    <th scope="col" >Age</th>
                    <th scope="col" >State</th>
                    <th scope="col" >Phone</th>
                </tr>
            </thead>
            <tbody>
                {props.employees.map(((employee) => {
                    return <EmployeeRow key={employee.login.uuid} {...employee} />
                }))}
            </tbody>
        </table>
    )
}

export default Table