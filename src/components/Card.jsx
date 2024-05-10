import React from "react";

const card = () => {
  return (
    <>
      <div className="w-60 border-[1px]   min-h-80 bg-[#f4f4f4] rounded-md p-2">
        <div className="overflow-hidden">
          <img
            className="w-full h-64 rounded-md object-cover"
            src="https://images.samsung.com/is/image/samsung/p6pim/id/2202/gallery/id-galaxy-s22-ultra-s908-sm-s908ezkgxid-thumb-530762800"
            alt=""
          />
        </div>
        <div className=" tracking-tighter mt-2 ">
          <h1 className="w-fit mx-auto mb-3 text-lg  font-medium">Galaxy S24 Ultra</h1>
          <h1 className=" w-fit mx-auto ">From ₹4848.61/mo for 24</h1>
          <h1 className=" w-fit mx-auto ">mos at 15% Interest or </h1>
          <h1 className=" w-fit mx-auto ">₹ 99999.00</h1>
          <h1 className="w-fit mx-auto  text-blue-600 text-sm font-semibold">save ₹3000.00</h1>
          <button className="px-10 rounded-[2.5vh] py-[.7vh] mx-auto mt-4 mb-2 block text-white bg-black">
            Buy now
          </button>
        </div>
      </div>
    </>
  );
};

export default card;

// #f4f4f4
