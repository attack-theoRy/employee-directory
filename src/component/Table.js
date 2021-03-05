import React from "react";
import EmployeeRow from "./EmployeeRow'"

function Table(props)  {

    const sortTable = (event) => {
      //  console.log(props.employees)

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
                <th scope="col"></th>
                    <th scope="col" onClick={sortTable} >Name</th>
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