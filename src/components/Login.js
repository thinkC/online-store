// import React, { Component } from 'react'

// export default class Login extends Component {
//     state = {
//         email: '',
//         password: ''
//     }

//     handleChange = (e) => {
//         this.setState({
//             [e.target.id]: e.target.value,

//         })
//     }

//     handleSubmit = (e) => {
//         e.preventDefault()
//         //console.log(this.state);
//         this.props.signIn(this.state)
//     }
//     render() {
//         return (
//             <div className="container">
//                 <h4 className="text-center mt-5">Login</h4>
//                 <form onSubmit={this.handleSubmit} >
//                     <div className="form-group">
//                         <label htmlFor="username" >Email</label>
//                         <input type="email" className="form-control" id="email" onChange={this.handleChange} value={this.state.email} />

//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="password">Password</label>
//                         <input type="password" className="form-control" id="password" onChange={this.handleChange} value={this.state.password} />

//                     </div>

//                     <div className="form-group center">
//                         <button type="submit" className="btn btn-primary">
//                             Submit
//                 </button>

//                     </div>

//                 </form>
//             </div>
//         )
//     }
// }


import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.auth.login}>Log In</button>
            </div>
        )
    }
}

