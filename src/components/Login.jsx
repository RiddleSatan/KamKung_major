import React from "react";
import { NavLink,useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "./config/axios.config";
import { useSelector,useDispatch } from "react-redux";
import { addInfo } from "../features/slice";
import { toast } from "react-toastify";

const Login = () => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const navigate=useNavigate()

const dispatch=useDispatch()
const id=useSelector(state=>state.userId)

const handleSubmit = async (e) => {
	e.preventDefault();
  
	try {
	  const response = await api.post('/login', { email, password });
  
	  console.log('this is running'); // This will always run
  
	  if (response.status === 200) {
		const userId = response.data.id;
		console.log('User ID:', userId);
		dispatch(addInfo({ userId, email }));
		navigate('/');
	  } 
	
	  }
	 catch (error) {
		toast.error(error.response.data.msg)
	  console.error('Error during login:', error.response.data.msg);
	  
	}
  };
  


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
      <NavLink to='/signup' type="submit" className="w-full mt-3 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500 transition-all">Create Account</NavLink>
		</form>
	</div>
</div>
  );
};

export default Login;
