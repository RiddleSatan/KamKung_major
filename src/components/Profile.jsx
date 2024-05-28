import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "./config/axios.config";
import { useDispatch } from "react-redux";
import { removeInfo } from "../features/slice";
import { MdEdit } from "react-icons/md";

const Profile = () => {
  const [data, setData] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();

  const fetchdata = async () => {
    try {
      await api.get(`/profile/${id}`).then((res) => setData(res.data));
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);

  const handleLogout = async () => {
    try {
      const res = await api.post("/logout");
      if (res) {
        dispatch(removeInfo());
      }
    } catch (error) {}
  };

  return (
    <>
    {
      data?(
<div className="h-[70vh] w-full">
        <div className="w-full h-[30vh] bg-[url('https://i.etsystatic.com/23313855/r/il/35e515/4126515671/il_570xN.4126515671_8o70.jpg')] flex justify-center relative items-end">
          <div className="rounded-[50%] w-[20vh] h-[20vh] absolute border-4 border-white overflow-hidden translate-y-[50%]">
            <img className="w-full h-full object-cover" src="https://i1.sndcdn.com/artworks-NlzGmmivqAl2XNJM-OQU0bw-t500x500.jpg" alt="" />
          </div>
        </div>
        <div className=" w-full bg-white  translate-y-[4.5rem] flex flex-col items-center justify-center ">
          <div className="flex flex-col justify-center  ">
            <h1 className="mx-auto mt-4 text-blue-500">@{data.username}</h1>
            <h1 className="text-2xl">{data.fullname}</h1>
            <h1>Gamer & Software Engineer</h1>
            <button className=" mt-2 w-fit mx-auto px-2 rounded-sm flex items-center gap-1 hover:text-blue-500">Edit Profile <MdEdit /></button>
          </div>
          <div className="flex mt-6 justify-between w-[85vw] h-12 rounded-sm border-[1px]  border-gray-400 text-gray-800 ">
            <div className="flex">
              <button className="px-5 py-2 border-r-[1px] border-gray-400 bg-zinc-100">About</button>
              <button className="px-5 py-2">Order History</button>
              <button className="px-5 py-2">Order Status</button>
              <button className="px-5 py-2">Cart</button>
            </div>
            <button onClick={handleLogout} className="px-5 py-2 border-l-[1px]  border-gray-400  bg-zinc-100">Logout</button>
          </div>
          <div className="w-[85vw]  mt-3 rounded-sm h-[20vh]  flex flex-col items-center border-[1px] border-gray-400">
            <h1>{data.email}</h1>
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
          </div>
        </div>
      </div>
      ):<h1>Loading...</h1>
      
    }
      
    </>
    // <>
    //   {data ? (
    //     <div>
    //       {" "}
    //       <h1>hello {data.fullname} </h1>
    //       <h1>hello {data.email} </h1>
    //       <h1>hello {data.username} </h1>
    //       <h1>hello {data._id} </h1>
    //       <button
    //         className="px-5 py-2 bg-black text-white my-2 ml-2 rounded-xl"
    //         onClick={handleLogout}
    //       >
    //         Logout
    //       </button>
    //     </div>
    //   ) : (
    //     <h1>Loading.....</h1>
    //   )}
    // </>
  );
};

export default Profile;
