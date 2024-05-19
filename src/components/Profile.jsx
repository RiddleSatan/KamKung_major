import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const [data, setData] = useState("");
  const { id } = useParams();

  const fetchdata = async () => {
    try {
      axios
        .get(`http://localhost:3000/profile/${id}`)
        .then((res) => setData(res.data));
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <h1>hello {data.fullname} </h1>
      <h1>hello {data.email} </h1>
      <h1>hello {data.username} </h1>
      <h1>hello {data._id} </h1>
    </>
  );
};

export default Profile;
