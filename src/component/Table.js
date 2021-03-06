import React from "react";
import EmployeeRow from "./EmployeeRow'"

function Table(props)  {

    const sortTable = (event) => {


        var employeeSorted = props.employees.sort((a, b) => {
            let fa = a.name.first.toLowerCase(),
                fb = b.name.first.toLowerCase();
        
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });

        props.sortFunc(employeeSorted)

    }

    return (
        <table className="table table-dark">
            <thead>
                <tr>
                <th category="col"></th>
                    <th category="col" onClick={sortTable} >Name</th>
                    <th category="col" >Email</th>
                    <th category="col" >Age</th>
                    <th category="col" >State</th>
                    <th category="col" >Phone</th>
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