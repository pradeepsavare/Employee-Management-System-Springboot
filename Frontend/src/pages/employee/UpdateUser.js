

import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getEmployee, updateEmployee } from '../dashboard/data';

function UpdateUser() {
    
const navigate = useNavigate();
    const {id} = useParams();
     const [formData, setFormData] = useState({
            name: "",
            email: "",
            phone: "",
            department: ""
        });
    
        const handleInputChange = (event) =>{
            
            setFormData({
                ...formData,
                [event.target.name]:event.target.value
            })
        };

        useEffect(() =>{

            if(id){
                getEmployee(id).then((response) => {
                    setFormData(response.data);
                }).catch(error => console.log(error))
            }

        },[id]);

         const handleSubmit =  (e) =>{
                e.preventDefault();
                console.log(formData);
               if(id){
                updateEmployee(id,formData).then((response) =>{
                    setFormData(response.data);
                    navigate("/");
                }).catch(error => console.log(error))
               }
                              
            }

  return (
   <>
   
   <div className="container mt-3">
        <h1 className='text-center'>Update Employee</h1>
    <form onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputtext" class="form-label">Employee Name</label>
    <input type="text" name='name' placeholder='Enter Name' value={formData.name} onChange={handleInputChange} class="form-control" id="exampleInputtext" />
  </div>
  <div class="mb-3">
  <label for="exampleInputtext" class="form-label">Employee Email</label>
  <input type="email" name='email' placeholder='Enter Email' value={formData.email} onChange={handleInputChange} class="form-control" id="exampleInputtext" />
  </div>
  <div class="mb-3">
  <label for="exampleInputtext" class="form-label">Employee Phone</label>
  <input type="text" name='phone' placeholder='Enter Phone' value={formData.phone} onChange={handleInputChange} class="form-control" id="exampleInputtext" />
  </div>
  <div class="mb-3">
  <label for="exampleInputtext" class="form-label">Employee Department</label>
  <input type="text" name='department' placeholder='Enter Department' value={formData.department} onChange={handleInputChange} class="form-control" id="exampleInputtext" />
  </div>
  <button type="submit" class="btn btn-primary ">Edit Employee</button>
</form>
</div>
   </>
  )
}

export default UpdateUser;