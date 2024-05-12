import React from "react";

const SignUp = () => {
  return (
    <div className="w-full h-screen pl-5 flex my-4">
      <div className="left w-[35vw] min-h-[30vh]  flex flex-col items-center justify-between py-14">
      <h1 className="font-medium tracking-tighter text-2xl">Sing Up</h1>
      <h1 className="font-medium  text-lg">SignUp with email to become a member</h1>
      <div className="h-auto w-fit">
        <form  action="/signup" method="post">
          <label htmlFor="">Email:</label>
          <input className="block px-10 items-center rounded-lg py-2  mb-4 outline-none border-b-[1px] border-black" type="email" name="email" placeholder="Enter your Email" />
          <label htmlFor="">Password:</label>
          <input className="block px-10 items-center rounded-lg py-2  mb-4 outline-none border-b-[1px] border-black"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <label htmlFor="">Fullname:</label>
          <input className="block px-10 items-center rounded-lg py-2  mb-4 outline-none border-b-[1px] border-black" type="text" name="fullname" placeholder="Enter your full Name" />
          <label htmlFor="">Username:</label>
          <input  className="block px-10 items-center rounded-lg py-2  mb-4 outline-none border-b-[1px] border-black"type="text" name="username" placeholder="Enter username" />
          {/* <input type="file" name="profilepic" /> */}
          <div className="flex flex-col justify-between items-center">
          <button className="block w-[18vw] py-[0.35rem]  tracking-tighter rounded-3xl text-white bg-black" type="submit">Sign-Up</button>
                           <h1 className="my-1 tracking-tighter">OR</h1>
          <button className="block w-[18vw] py-[0.35rem] tracking-tighter  rounded-3xl text-white bg-[#2187fd] " type="submit">Log-in</button>
          </div>
        </form>
      </div>
      </div>
      <div className="right w-fit h-auto overflow-hidden flex items-center justify-center "> 
      <img className="w-[60vw]  object-cover rounded-md" src="https://cdn.wallpapersafari.com/59/52/FsLec6.jpg" alt="" /></div>
    </div>
  );
};

export default SignUp;