import React, { useEffect, useState } from "react";
import { IoIosRemoveCircle } from "react-icons/io";
import { useSelector } from "react-redux";
import { api } from "./config/axios.config";

const Cart = () => {
  const userId = useSelector((state) => state.userId);
  const [cartData, setCartData] = useState([]);
  const id = useSelector((state) => state.userId);

  const getCart = async () => {
    try {
      const response = await api.post("/getCart", { id });
      if (response.status === 200) {
        setCartData(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeProduct = async (val) => {
    console.log("function running");
    const productId = val._id;
    console.log(productId);
    console.log(userId);

    console.log("run");
    const response = await api.post("/removeFromCart", { productId, userId });
    getCart();
    console.log("run");
    if (response.status == 200) {
      console.log("product remove successfully from the cart");
      getCart(); 
    } else {
      console.log("something went wrong");
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#ecebeb] p-8">
      <div className="max-w-7xl mx-auto flex gap-7">
        <div className="cart h-auto w-full lg:w-2/3 rounded-2xl p-5 bg-white">
          <div className="border-b-[1px] border-zinc-300 pb-3 mb-4">
            <h1 className="text-xl font-medium">Cart</h1>
          </div>
          {cartData? (
            cartData.map((val, index) => (
              <div
                key={index}
                className="product rounded-2xl flex bg-zinc-300 hover:shadow-md transition-all mb-4 p-1"
              >
                <div className="image-wrapper w-[6rem] rounded-2xl h-[6rem] mr-[0.65rem] overflow-hidden">
                  <img
                    className="object-cover w-full h-full"
                    src={val.image}
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="details flex flex-col justify-between flex-1">
                  <div className="info">
                    <h2 className="product-title text-xl font-medium">
                      {val.name}
                    </h2>
                    <p className="text-sm text-gray-500">{val.category}</p>
                    <div className="flex items-center mt-2">
                      <span className="text-sm mr-2">Color:</span>
                      <span className="text-sm font-medium">Black</span>
                    </div>
                  </div>
                  <div className="actions flex items-center justify-between mt-auto">
                    <div className="quantity-wrapper flex items-center">
                      {/* <button aria-label="Decrease Quantity" className="quantity-button focus:outline-none rounded-md border border-gray-300 hover:bg-gray-200 p-0.5" role="button">
                        <IoIosRemoveCircle />
                      </button> */}
                      {/* <input aria-label="Quantity" type="number" min="1" defaultValue="1" className="quantity-input w-8 text-center border border-gray-300 rounded-md px-2 py-1 focus:outline-none" /> */}
                      {/* <button aria-label="Increase Quantity" className="quantity-button focus:outline-none rounded-md border border-gray-300 hover:bg-gray-200 p-0.5" role="button">
                        <IoIosRemoveCircle />
                      </button> */}
                    </div>
                    <span className="price text-red-600 font-medium ml-4">
                      {val.price}
                    </span>
                  </div>
                  <div className="actions flex items-center justify-between mt-2">
                    <button
                      className="order-button focus:outline-none rounded-md border border-gray-300 bg-green-500 text-white hover:bg-green-600 p-1"
                      role="button"
                    >
                      Order Now
                    </button>
                    <button
                      onClick={() => removeProduct(val)}
                      aria-label="Remove"
                      className="remove-button focus:outline-none rounded-md border border-gray-300 hover:bg-gray-200 p-1 ml-2"
                      role="button"
                    >
                      <IoIosRemoveCircle />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </div>

        <div className="Delivery w-full lg:w-1/3 rounded-2xl bg-white p-5">
          <h1 className="text-[#b0b0b0] mb-2">Delivery</h1>
          <div className="flex justify-between w-full bg-[#eeecec] px-2 rounded-md py-2 mb-4">
            <h1 className="px-2 py-1 rounded-md bg-white tracking-tighter text-sm">
              Free
            </h1>
            <h1 className="m-auto text-[#898787]">Express:$4.99</h1>
          </div>
          <div className="w-full h-auto bg-white mt-4 border-t-[1px] border-b-[1px] border-zinc-300 py-4">
            <div className="flex">
              <input
                type="text"
                className="px-2 py-1 border-2 rounded-s-lg w-48"
                placeholder="Promocode"
              />
              <button className="px-2 py-1 border-2 border-l-0 rounded-r-lg">
                Apply
              </button>
            </div>
          </div>
          <div className="mt-3 mb-3 border-b-[1px] border-zinc-300 pb-3">
            <div className="flex justify-between">
              <h1 className="text-sm text-[#898787]">Discount</h1>
              <h1 className="text-sm text-[#898787]">$0.00</h1>
            </div>
            <div className="flex justify-between">
              <h1 className="text-sm text-[#898787]">Discount</h1>
              <h1 className="text-sm text-[#898787]">$0.00</h1>
            </div>
            <div className="flex justify-between">
              <h1 className="text-sm text-[#898787]">Discount</h1>
              <h1 className="text-sm text-[#898787]">$0.00</h1>
            </div>
          </div>
          <div className="flex justify-between">
            <h1>Total</h1>
            <h1>$42.97</h1>
          </div>
          <button className="w-full py-2 bg-zinc-600 rounded-md mb-2 mt-4 text-white hover:bg-orange-600 hover:text-black transition-all">
            Proceed to checkout
          </button>
          <button className="w-full py-2 bg-white rounded-md text-black border-2 hover:bg-cyan-600 hover:text-white">
            Continue shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

// <div className=" products rounded-2xl flex bg-zinc-300 ">
//               <div className="w-[5rem] rounded-2xl h-[5.7rem] mr-[0.65rem] overflow-hidden">
//                 <img
//                   className="w-full h-full object-cover"
//                   src="https://5.imimg.com/data5/NO/LX/SA/SELLER-21936794/men-plain-t-shirt-500x500.jpg"
//                   alt=""
//                 />
//               </div>
//               <div>
//                 <h1>Relaxed Fit T-shirt</h1>
//                 <h1 className="text-sm text-zinc-600">12 avilable</h1>
//                 <div className="flex  mt-4 gap-2">
//                   <h1>color: Black</h1>
//                   <h1>quantity</h1>
//                 </div>
//               </div>
//               <div className="mx-auto flex flex-col justify-between ml-16">
//                 <h1 className="mx-auto">$12.99</h1>
//                 <button className="text-2xl mx-auto mb-1  text-red-600 rounded-md font-light hover:bg-white hover:text-red-800 transition-all">
//                   <IoIosRemoveCircle />
//                 </button>
//               </div>
//             </div>
