import React from "react";
import {Link} from 'react-router-dom';



class ListStaff extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]
        };
    }

    fetchData(){
        fetch('http://127.0.0.1:8000/api/staff-register/')
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                data:data
            });
        });
    }

    componentDidMount(){
        this.fetchData();
    }

    render(){
        const staffData = this.state.data;
        const rows = staffData.map((staff)=>
            <tr key={staff.id}>
                <td>{staff.first_name}</td>
                <td>{staff.last_name}</td>
                <td>{staff.username}</td> 
                <td>{staff.email}</td>
                <td>
                    <Link to={'update/'+staff.id} className="btn btn-info mr-2">Update</Link>
                    <button onClick={()=>this.deleteData(staff.id)} className="btn btn-danger" >Delete</button>
                </td>
            </tr>
        );

        return(
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }

}

export default ListStaff;