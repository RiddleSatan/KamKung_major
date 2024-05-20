import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card.jsx";
import useFetchData from "./Hooks/useFetchData.js";

const HandlingData = () => {
    
  const { data, loading, error } = useFetchData(
    `https://fakestoreapi.com/products`
  );
  // console.log(data)
  //   useEffect(() => {
  //     shopData();
  //   }, []);

  return (
    <>
      {loading ? (
        <h1>Loading.......</h1>
      ) : error ? (
        <h1>Error.......</h1>
      ) : (
        <div className="w-full min-h-screen p-10 bg-slate-600 flex flex-wrap gap-6">
          {data.map((val) => (
            <div key={val.id}>
              <Card val={val} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default HandlingData;
