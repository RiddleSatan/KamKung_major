import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "./config/axios.config";
import { useDispatch } from "react-redux";
import { removeInfo } from "../features/slice";

const Profile = () => {
  const [data, setData] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();

  const fetchdata = async () => {
    try {
    await  api.get(`/profile/${id}`)
        .then((res) => setData(res.data));
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
    const res =  await api.post("/logout");
    if (res) {
      dispatch(removeInfo())
    }
   } catch (error) {
    
   }
  };

  return (
    <>
      {data ? (
        <div>
          {" "}
          <h1>hello {data.fullname} </h1>
          <h1>hello {data.email} </h1>
          <h1>hello {data.username} </h1>
          <h1>hello {data._id} </h1>
          <button
            className="px-5 py-2 bg-black text-white my-2 ml-2 rounded-xl"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <h1>Loading.....</h1>
      )}
    </>
  );
};

export default Profile;
