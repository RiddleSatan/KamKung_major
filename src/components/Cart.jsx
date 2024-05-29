  import React, { useEffect, useState } from "react";
  import { IoIosRemoveCircle } from "react-icons/io";
  import { useSelector } from "react-redux";
  import { api } from "./config/axios.config";


  const Cart = () => {
    const [cartData, setcartData] = useState('')
  const id=useSelector(state=>state.userId)
  console.log(id)
  const getCart=async ()=>{
    try {
      const response=await api.post('/getCart',{id})
      if(response.status==200){
        setcartData(response.data)
      }
    } catch (error) {
      throw error
    }
  }



  useEffect(()=>{
    getCart()
  })

    return (
      <>
        <div className="w-full min-h-screen bg-[#ecebeb] p-8  ">
          <div className="w-fit h-full flex mx-auto gap-7 ">
            <div className="cart h-[80vh] w-[60vh] rounded-2xl p-5 bg-white ">
              <div className="border-b-[1px] border-zinc-300 pb-3 mb-4 ">
                <h1 className="text-xl font-medium ">Cart</h1>
              </div>
              {
                cartData?cartData.map((val)=>(
                  <div class="product rounded-2xl flex bg-white hover:shadow-md transition-all">
                  <div class="image-wrapper w-[6rem] rounded-2xl h-[6rem] mr-[0.65rem] overflow-hidden">
                      <img class="object-cover w-full h-full" src={val.image} alt="" loading="lazy" />
                  </div>
                  <div class="details flex flex-col justify-between">
                      <div class="info">
                          <h2 class="product-title text-xl font-medium">{val.name}</h2>
                          <p class="text-sm text-gray-500">{val.category}</p>
                          <div class="flex items-center mt-2">
                              <span class="text-sm mr-2">Color:</span>
                              <span class="text-sm font-medium">Black</span>
                          </div>
                      </div>
                      <div class="actions flex items-center mt-auto">
                          <div class="quantity-wrapper flex items-center">
                              <button aria-label="Decrease Quantity" class="quantity-button focus:outline-none rounded-md border border-gray-300 hover:bg-gray-200 p-0.5" role="button">
                                  <IoIosRemoveCircle />
                              </button>
                              <input aria-label="Quantity" type="number" min="1" value="1" class="quantity-input w-8 text-center border border-gray-300 rounded-md px-2 py-1 focus:outline-none" />
                              <button aria-label="Increase Quantity" class="quantity-button focus:outline-none rounded-md border border-gray-300 hover:bg-gray-200 p-0.5" role="button">
                                  <IoIosRemoveCircle />
                              </button>
                          </div>
                          <span class="price text-red-600 font-medium ml-4">{val.price}</span>
                      </div>
                  </div>
              </div>
              
                

                )):<h1>No Product added yet</h1>
              }
            </div>

            <div className="Delivery w-[40vh] h-[59vh] rounded-2xl bg-white p-3  ">
              <h1 className="text-[#b0b0b0] mb-2 ">Delivery</h1>
              <div className="flex justify-between w-[26vh]  bg-[#eeecec] px-1 rounded-md py-1 ">
                <h1 className="px-2 py-1 rounded-md bg-white tracking-tighter text-sm ">
                  Free
                </h1>
                <h1 className="m-auto text-[#898787]">Express:$4.99</h1>
              </div>
              <div className="w-full h-auto  bg-white mt-4 border-t-[1px] border-b-[1px] border-zinc-300 py-4">
                <div className="flex">
                  <input
                    type="text"
                    className="px-2 py-1  border-2 rounded-s-lg w-48"
                    placeholder="Promocode"
                  />
                  <button className="px-2 py-1 border-2 border-l-0 rounded-r-lg ">
                    Apply
                  </button>
                </div>
              </div>
              <div className="mt-3 mb-3 border-b-[1px] border-zinc-300 pb-3 ">
                <div className="flex justify-between">
                  <h1 className="text-sm text-[#898787]">Discount </h1>
                  <h1 className="text-sm text-[#898787]">$0.00</h1>
                </div>
                <div className="flex justify-between">
                  <h1 className="text-sm text-[#898787]">Discount </h1>
                  <h1 className="text-sm text-[#898787]">$0.00</h1>
                </div>
                <div className="flex justify-between">
                  <h1 className="text-sm text-[#898787]">Discount </h1>
                  <h1 className="text-sm text-[#898787]">$0.00</h1>
                </div>
              </div>
              <div className="flex justify-between ">
                <h1>Total</h1>
                <h1>$42.97</h1>
              </div >
              <button className="w-full py-[5px] bg-zinc-600 rounded-md mb-2 mt-4 text-white hover:bg-orange-600 hover:text-black transition-all">Proceed to checkout</button>
              <button className="w-full py-[5px] bg-white rounded-md text-black border-2 hover:bg-cyan-600 hover:text-white">coutinue shopping</button>
            </div>
          </div>
        </div>
      </>
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