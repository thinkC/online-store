import React, { Component } from 'react'

export default class Register extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    handleChange = (e) => {
        console.log('Handle Chage')
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('handle submit')
    }
    render() {

        return (
            <div className="container">
                <h4 className="text-center mt-5">Register</h4>
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <label htmlFor="lastName" >First Name</label>
                        <input type="text" className="form-control" id="firstName" onChange={this.handleChange} value={this.state.firstName} />

                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName" >Last Name</label>
                        <input type="text" className="form-control" id="lastName" onChange={this.handleChange} value={this.state.lastName} />

                    </div>
                    <div className="form-group">
                        <label htmlFor="username" >Email</label>
                        <input type="email" className="form-control" id="email" onChange={this.handleChange} value={this.state.email} />

                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" onChange={this.handleChange} value={this.state.password} />

                    </div>

                    <div className="form-group center">
                        <button type="submit" className="btn btn-primary">
                            Register
                    </button>

                    </div>

                </form>
            </div>
        )
    }
}

