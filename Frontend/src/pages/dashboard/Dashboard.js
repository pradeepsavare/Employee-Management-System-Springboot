
import React, { useEffect, useState } from 'react'
import { Row, Container,Col,Table } from 'react-bootstrap';
import { deleteEmpoyee, listEmployees } from './data';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [filteremployees, setFilterEmployees] = useState([]);
  const [search,setSearch] = useState("");



  const navigate = useNavigate();
  useEffect(() =>{
    getAllEmployees();
  },[]);

  function getAllEmployees(){
    listEmployees().then((response) => {
      setEmployees(response.data);
      setFilterEmployees(response.data);
    }).catch(error => {
    console.error(error);
    })
  }

  const handlesearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    if(value.trim() === ""){
      setFilterEmployees(employees);
    }else{
    const filterValue = employees.filter(emp => emp.name.toLowerCase().includes(value.toLowerCase()));
    setFilterEmployees(filterValue);
    }
  }

 const handleUpdate = (employeeId) =>{
navigate(`/employee/${employeeId}`);
 }

  function removeEmployee(id){
    console.log(id);
    deleteEmpoyee(id).then((response) =>{
      getAllEmployees();
    }).catch(error => console.error(error))
  }
  return (
   <>
   <Container className="mt-5">
    <Row>
      <Col>
      <h1 className='text-center'>Employees</h1>
      <input type="text"  placeholder='Search Employee by name...' value={search} onChange={handlesearch} class="form-control m-3 "  />
      <Table striped bondered hover responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Department</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
            filteremployees.map(emp => 
              <tr key={emp.id}>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.phone}</td>
                <td>{emp.department}</td>
                <td>
                  <button type="button" class="btn btn-outline-success mx-2" onClick={() => handleUpdate(emp.id)}>Update</button>
                  <button type="button" class='btn btn-outline-danger' onClick={() => removeEmployee(emp.id)} >Delete</button>
                </td>
              </tr>
            )
            }
          </tbody>
      </Table>
      </Col>
    </Row>
   </Container>
   </>
  )
}

export default Dashboard