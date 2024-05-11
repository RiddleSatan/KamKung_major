import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <div className="w-fu">
        <h1>Login</h1>
        <h1>Login with email to become a member</h1>
        <div className="">
           <form action="/signup" method='post'>
            <input type="email" name="email"  placeholder='Enter your Email'/>
            <input type="password" name="email"  placeholder='Enter your password'/>
            <input type="text" name="email"  placeholder='Enter your full Name'/>
            <input type="text" name="email"  placeholder='Enter username'/>
            {/* <input type="file" name="profilepic" /> */}
            <button type='submit' >Sign Up</button>
            <button type='submit' >Login</button>
           </form>
        </div>
    </div>
  )
}

export default Login

// email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   username: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   productID: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'product',
//   }],
//   fullname: {
//     type: String,
//     required: true,
//   },
//   profilepic: {
//     type: String,
//     default: 'default.jpg',
//   },