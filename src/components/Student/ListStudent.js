import React from "react";
import {Link} from 'react-router-dom';



class ListStudent extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]
        };
    }

    fetchData(){
        fetch('http://127.0.0.1:8000/api/student-register/')
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
        const studentData = this.state.data;
        const rows = studentData.map((student)=>
            <tr key={student.id}>
                <td>{student.first_name}</td>
                <td>{student.last_name}</td>
                <td>{student.username}</td> 
                <td>{student.email}</td>
                <td>
                    <Link to={'update/'+student.id} className="btn btn-info mr-2">Update</Link>
                    <button onClick={()=>this.deleteData(student.id)} className="btn btn-danger" >Delete</button>
                </td>
            </tr>
        );

        return(
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }

}

export default ListStudent;