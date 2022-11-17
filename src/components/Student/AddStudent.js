import React from "react";
import { render } from "react-dom";

class AddStudent extends React.Component{
    constructor(){
        super();
        this.state={
            first_name:'',
            last_name:'',
            username:'',
            email:'',
            password:''
        };
        
        this.changeHandler=this.changeHandler.bind(this);
        this.submitForm=this.submitForm.bind(this);
    }


    changeHandler(event){
        this.setState({
            [event.target.name]:event.target.value       
        })
        console.log(this.state)
    }

    submitForm(){
        fetch('http://127.0.0.1:8000/employees/',{
            method:'POST',
            body:JSON.stringify(this.state),
            headers:{
                'Content-type':'application/json; charset=UTF-8',
            },
        })
        .then(response=>response.json())
        .then((data)=>console.log(data));

        this.setState({
            first_name:'',
            last_name:'',
            username:'',
            email:'',
            password:''
        });
    }

    render(){
        return(
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <th>First Name</th>
                        <td>
                            < input value={this.state.first_name} name="first_name" onChange={this.changeHandler} type="text" className="form-control"/>
                        </td>
                    </tr>
                    <tr>
                        <th>Last Name</th>
                        <td>
                            < input value={this.state.last_name} name="last_name" onChange={this.changeHandler} type="text" className="form-control"/>
                        </td>
                    </tr>
                    <tr>
                        <th>Username</th>
                        <td>
                            < input value={this.state.username} name="username" onChange={this.changeHandler} type="text" className="form-control"/>
                        </td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>
                            < input value={this.state.email} name="email" onChange={this.changeHandler} type="text" className="form-control"/>
                        </td>
                    </tr>
                    <tr>
                        <th>Password</th>
                        <td>
                            < input value={this.state.password} name="password" onChange={this.changeHandler} type="password" className="form-control"/>
                        </td>
                    </tr>
                    <tr>
                        <th>Confirm Password</th>
                        <td>
                            < input value={this.state.password} name="password" onChange={this.changeHandler} type="password" className="form-control"/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            < input name="" type="Submit" onClick={this.submitForm} className="btn btn-dark"/>
                        </td>
                    </tr>
                </tbody>
            </table>    
            )
    }

}

export default AddStudent;