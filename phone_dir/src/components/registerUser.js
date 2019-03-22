import React, { Component } from 'react';
import '../css/registerUser.css';

class RegisterUser extends Component {
    state={
        username:'',
        phone:''
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
        this.props.addNewUser(this.state);
    }

    render() {
        return (
            <div className="registerUser">
            <form onSubmit={this.handleSubmit}>
                <input type="text" id="username" placeholder="Name" onChange={this.handleChange} />
                <input type="text" id="phone" placeholder="Contact" onChange={this.handleChange} />
                <input type="submit" id="add" value='Add' />
            </form>
            <div className="output">
                <div>
                    <span className="uh">The details to be added are :</span>                
                </div>
                <br />
                <div>
                    <span className="uh">Username: &nbsp;</span>                
                    <span className="ue">{this.state.username}</span>
                </div>
                <div>
                    <span className="uh">Contact: &nbsp;</span>                
                    <span className="ue">{this.state.phone}</span>
                </div>
            </div>
            </div>
        )
    }
}

export default RegisterUser;
