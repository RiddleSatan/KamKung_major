import React from "react";
import { NavLink,useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Login = () => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const navigate=useNavigate()

async function handleSubmit(e){
	e.preventDefault()
    try {
		const response= await axios.post(`http://localhost:3000/login`,{email,password})
		console.log(response.data.id)
		if(response.data.id){
			navigate('/',{state:{userId:response.data.id}})
			
		}
	} catch (error) {
		console.log(error)
		throw error
	}
}

return (
<div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
	<div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
		<h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">Welcome Back!</h1>
		<form onSubmit={(e)=>handleSubmit(e)}>
			<div className="mb-4">
				<label for="email"  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
				<input type="email" value={email} id="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" onChange={(e)=>setEmail(e.target.value)} required/>
			</div>
			<div className="mb-4">
				<label for="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
				<input type="password" id="password" value={password} className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password"     onChange={(e)=>setPassword(e.target.value)} required/>
				<NavLink
					className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Forgot
					Password?</NavLink>
			</div>
			<div className="flex items-center justify-between mb-4">
				<div className="flex items-center">
					<input type="checkbox" id="remember"  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none" />
					<label for="remember" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">Remember me</label>
				</div>
				
			</div>
			<button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2  transition-all focus:ring-blue-500"  >Login</button>
      <button type="submit" className="w-full mt-3 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500 transition-all">Create Account</button>
		</form>
	</div>
</div>
  );
};

export default Login;
