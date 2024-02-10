import React, { useEffect } from 'react'
import { useState} from 'react'
import listEmployees from '../services/EmployeeService'

const ListEmployeeeComponent = () => {

    const [employees, setEmployees] = useState([])

    useEffect(()=>{
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, [])

  return (
    <div className='container'> {/*puts the data in a container*/}
        <h2 className='text-center'>List Of Employees</h2>
        <table className='table table-striped table-boardered'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email</th>
                </tr>
            </thead>
            <tbody>
                 {
                    employees.map(employee => 
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                        </tr>)
                 }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeeComponent