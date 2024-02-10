import React from 'react'

const ListEmployeeeComponent = () => {

    const dummyData = [
        {
            "id" : 1,
            "firstName" : "Tarun", 
            "lastName" : "Kumar",
            "email" : "tarun@gmail.com"
        },
        {
            "id" : 2,
            "firstName" : "Mandeep", 
            "lastName" : "Kumar",
            "email" : "mandeep@gmail.com"
        },
        {
            "id" : 3,
            "firstName" : "Anuj", 
            "lastName" : "Kumar", 
            "email" : "anuj@gmail.com"
         }
    ]

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
                    dummyData.map(employee => 
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