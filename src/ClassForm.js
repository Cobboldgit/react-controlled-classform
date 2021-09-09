import React, { Component } from 'react';
import './App.css'

class ClassForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: ""
        }
    }
    

    handleName(e) {
        this.setState({name: e.target.value})
    }

    handleEmail(e) {
        this.setState({email: e.target.value})
    }

     handlePassword(e) {
        this.setState({password: e.target.value})
    }

     handleSubmit(e) {
        e.preventDefault()
        console.log(this.state.name);
        console.log(this.state.email);
        console.log(this.state.password);
        
        this.setState({
            name: "",
            email: "",
            password: ""
        })
    }
    render() {
    return (
        <div>
            <div className="container">
                <form onSubmit={(e)=>this.handleSubmit(e)}>
                    <div className="user-details">
                        <div className="input-box">
                            <label className="details" htmlFor="name">Full Name</label>
                            <input id="name" type="text" name="name" value={this.state.name} placeholder="Enter Your Full Name" onChange={(e)=>this.handleName(e)} />
                        </div>
                        
                        <div className="input-box">
                            <label className="details" htmlFor="email">Email</label>
                            <input id="email" type="email" name="email" value={this.state.email} placeholder="Enter Your Email" onChange={(e)=>this.handleEmail(e)} />
                        </div>

                        <div className="input-box">
                            <label className="details" htmlFor="pswd">Password</label>
                            <input id="pswd" type="password" name="password" value={this.state.password} placeholder="Enter Your Password" onChange={(e)=>this.handlePassword(e)} />
                        </div>
                    </div>

                    <div className="button">
                        <input type="submit" />
                    </div>
                </form>
            </div>

        </div>
    )
}
}

export default ClassForm;