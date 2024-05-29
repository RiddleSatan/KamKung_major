import React, { useEffect, useState } from "react";
import { api } from "./config/axios.config";
import { FaCartPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addInfo } from "../features/slice";

const card = ({ val }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });
  const id = useSelector((state) => state.userId);
  const handlecart = (val) => {
    setData((prevState) => ({
      ...prevState,
      name: val.title,
      description: val.description,
      price: val.price,
      category: val.category,
      image: val.image,
    }));
  };

  useEffect(() => {
    if (data.name) {
      sendToCart();
    }
  });

  const sendToCart = async () => {
    const response = await api.post("/addToCart", { data, id }); 
    if (response.status == 200) {
      // dispatch(addInfo({ cartId: response.data }));
      console.log("added to cart");
    } else {
      console.error("Something went very wrong :/");
    }
  };

  return (
    <>
      <div className="w-60 border-[1px]   min-h-[32rem] max-h-[32rem] bg-[#f4f4f4] rounded-md p-2 flex flex-col justify-between">
        <div className="overflow-hidden">
          <img
            className="w-full h-64 rounded-md object-cover"
            src={val.image}
            alt=""
          />
        </div>
        <div className=" tracking-tighter mt-2  ">
          <h1 className="w-fit mx-auto mb-3 text-lg  font-medium">
            {val.title}
          </h1>
          <h1 className=" w-fit mx-auto ">From {val.price - 200} for 24</h1>
          <h1 className=" w-fit mx-auto ">mo at 15% Interest or </h1>
          <h1 className=" w-fit mx-auto ">₹ {val.price}</h1>
          <h1 className="w-fit mx-auto  text-blue-600 text-sm font-semibold">
            save 200
          </h1>
          <div className="flex justify-between items-center">
            <button className="px-10 rounded-[2.5vh] py-[.7vh] mx-auto mt-4 mb-2 block text-white bg-black">
              Buy now
            </button>
            <button
              onClick={(e) => handlecart(val)}
              className="px-5 text-2xl rounded-[2.5vh] py-[.7vh] mx-auto mt-4 mb-2 block text-white bg-black  hover:bg-zinc-600"
            >
              <FaCartPlus />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default card;

// src="https://images.samsung.com/is/image/samsung/p6pim/id/2202/gallery/id-galaxy-s22-ultra-s908-sm-s908ezkgxid-thumb-530762800"
