import React, { Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios";
import { Button } from 'primereact/button';


class Sign extends Component {
constructor(){
    super()
    this.state = {
        fullName:'',
        username:'',
        email:'',
        password:''
    }
    this.changeFullName = this.changeFullName.bind(this) 
    this.changeUsername = this.changeUsername.bind(this) 
    this.changeEmail= this.changeEmail.bind(this) 
    this.changePassword = this.changePassword.bind(this)  
    this.onSubmit = this.onSubmit.bind(this)
}
changeFullName(event){
    this.setState({
        fullName:event.target.value
    })
}

changeUsername(event){
    this.setState({
        username:event.target.value
    })
}

changeEmail(event){
    this.setState({
        email:event.target.value
    })
}

changePassword(event){
    this.setState({
        password:event.target.value
    })
}

onSubmit(event){
    event.preventDefault()

    const registered = {
        fullName: this.state.fullName,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
    }

    axios.post('http://localhost:4000/app/signup', registered)
    .then(response => console.log(response.data))

    window.location = '/'
} 

    render() {
        return (
            <div>
                <br/><br/>
                <h1 className="Sign" > -SIGN IN- </h1> 
                
                <br/><br/>
                <div className='container'>
                    <div className='form-div'>
                        <form onSubmit={this.onSubmit}>
                            <input type = 'text'
                            placeholder='Full Name'
                            onChange={this.changeFullName}
                            value={this.state.fullName}
                            className='form-control form-group'/>
                            <br/>
                            <input type='text'
                            placeholder='Username'
                            onChange={this.changeUsername}
                            value={this.state.username}
                            className='form-control form-group'/>
                            <br/>
                            <input type='text'
                            placeholder='Email'
                            onChange={this.changeEmail}
                            value={this.state.email}
                            className='form-control form-group'/>
                            <br/>
                            <input type='password'
                            placeholder='Password'
                            onChange={this.changePassword}
                            value={this.state.password}
                            className='form-control form-group'/>
                            <br/>
                            
                           
                            <Button label="Submit" className="p-button-secondary" icon="pi pi-check" iconPos="right" />
                            <hr/>
                            <br/>
                            <br/>  
                            

                        </form>
                    </div>

                </div>

            </div>
        );
    }
}

export default Sign;