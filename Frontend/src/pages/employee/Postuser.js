import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Postuser() {
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

const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(formData);
        try{
            await axios.post("http://localhost:9090/api/employee",formData);
            console.log("employee added: ");
            navigate("/")
        }catch(error){
            console.log("Error creating employee: ",error.message);
        }
    }

  return (
    <>
    <div className="container mt-3">
        <h1 className='text-center'>Post New Employee</h1>
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
  <button type="submit" class="btn btn-primary ">Submit</button>
</form>
</div>
    </>
  )
}

export default Postuser