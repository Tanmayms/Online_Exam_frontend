import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

const UpdateStaff = () => {
    const [fullname,setFullname]=useState("");
    const [email,setEmail]=useState("");
    const [contact,setContact]=useState("");
    const [address,setAddress]=useState("");
    let {id}=useParams();

    const navigate = useNavigate();

    //___________________________________________________________________________
    let handleSubmit=()=>{

        axios({
            method:"put",
            url:'http://127.0.0.1:8000/api/staff-update/'+id,
            data:{
                fullname,
                email,
                contact,
                address
            }
        }).then((res)=>{
             console.log(res.data);
             navigate("/")
        }).catch((error)=>{
            console.log(error);
        })
    }
    //___________________________________________________________________________
    let fetchdata=()=>{
        axios({
            method:"get",
            url:'http://127.0.0.1:8000/api/staff-update/'+id,
        }).then((res)=>{
             setFullname(res.data.fullname)
             setEmail(res.data.email)
             setContact(res.data.contact)
             setAddress(res.data.address)
        }).catch((error)=>{
            console.log(error);
        })
    }
    useEffect(()=>{
      fetchdata();
    },[])
  return (
    <table className="table table-bordered">
    <tbody>
        <tr>
            <th>Full Name</th>
            <td>
                <input  name="fullname" value={fullname} onChange={(e)=>setFullname(e.target.value)} type="text" className="form-control" />
            </td>
        </tr>
        <tr>
            <th>Email</th>
            <td>
                <input value={email} name="email" onChange={(e)=>setEmail(e.target.value)} type="text" className="form-control" />
            </td>
        </tr>
        <tr>
            <th>Contact</th>
            <td>
                <input value={contact} name="contact" onChange={(e)=>setContact(e.target.value)} type="text" className="form-control" />
            </td>
        </tr>
        <tr>
            <th>Address</th>
            <td>
                <input value={address} name="address" onChange={(e)=>setAddress(e.target.value)} type="text" className="form-control" />
            </td>
        </tr>
        <tr>
            <td colSpan="2">
                <input type="submit" onClick={handleSubmit} className="btn btn-dark" />
            </td>
        </tr>
    </tbody>
</table>
  )
}

export default UpdateStaff