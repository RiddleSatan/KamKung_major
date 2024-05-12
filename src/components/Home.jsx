import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full min-h-screen  px-2">
      <div className="w-[95%] h-[98vh] px-4 flex items-center">
        <div className="title w-[40vw]    ml-12">
          <h1 className="text-6xl font-medium tracking-tighter">
            Experience a New Era of Samsung AI TV
          </h1>
          <h1 className="font-light mt-5">Neo QLED | Neo QLED 8K | OLED</h1>
          <NavLink
            className="px-6 py-[0.60rem] rounded-[20px] bg-black text-white mt-8 inline-block tracking-tighter text-sm font-medium hover:bg-slate-800 transition-all"
            to=""
          >
            Buy now
          </NavLink>
        </div>
        <div className="image">
          {" "}
          <img
            src="https://images.samsung.com/is/image/samsung/p6pim/in/qa65qn85caklxl/gallery/in-qled-qn85c-qa65qn85caklxl-535909596?$720_576_PNG$"
            alt=""
          />
        </div>
      </div>
      <h1 className="text-4xl font-medium w-fit mx-auto tracking-tighter mt-8">
        This Week's Highlights
      </h1>
      <div className=" flex justify-center">
        <NavLink
          className="px-6 py-[0.60rem] rounded-[20px]  mt-8 inline-block  text-lg font-medium  transition-all hover:text-gray-700 active:underline "
          to=""
        >
          New In
        </NavLink>
        <NavLink
          className="px-6 py-[0.60rem] rounded-[20px]  mt-8 inline-block  text-lg font-medium  transition-all hover:text-gray-700 active:underline "
          to=""
        >
          Mobile
        </NavLink>
        <NavLink
          className="px-6 py-[0.60rem] rounded-[20px]  mt-8 inline-block  text-lg font-medium  transition-all hover:text-gray-700 active:underline "
          to=""
        >
          TV
        </NavLink>
        <NavLink
          className="px-6 py-[0.60rem] rounded-[20px]  mt-8 inline-block  text-lg font-medium  transition-all hover:text-gray-700 active:underline "
          to=""
        >
          Appliances
        </NavLink>
        <NavLink
          className="px-6 py-[0.60rem] rounded-[20px]  mt-8 inline-block  text-lg font-medium  transition-all hover:text-gray-700 active:underline "
          to=""
        >
          Galaxy Ecosystem
        </NavLink>
        <NavLink
          className="px-6 py-[0.60rem] rounded-[20px]  mt-8 inline-block  text-lg font-medium  transition-all hover:text-gray-700 active:underline "
          to=""
        >
          Buy now
        </NavLink>
      </div>
      <div className="  rounded-2xl  bg-red-700 overflow-hidden flex">
        <div className="overflow-hidden  w-50% ">
          <img
            src="https://images.samsung.com/is/image/samsung/assets/in/home/0426/home_page_bigtile-sqaure_pc.jpg?$684_684_JPG$"
            alt=""
          />
        </div>
        <div className="w-[48%]  flex flex-wrap gap-2 items-center justify-center overflow-hidden mx-auto">
          <div className="w-[48%]  bg-cyan-400 overflow-hidden ">
            <img className="object-cover w-full h-full" src="https://images.samsung.com/is/image/samsung/assets/in/home/RF65DB90BD12TL_Small_Tile_330x330.jpg?$330_330_JPG$" alt="" />
          </div>
          <div className="w-[48%]  bg-cyan-400 overflow-hidden">
            <img className="object-cover w-full h-full" src="https://images.samsung.com/is/image/samsung/assets/in/home/RF65DB90BD12TL_Small_Tile_330x330.jpg?$330_330_JPG$" alt="" />
          </div>

          <div className="w-[48%]  bg-cyan-400 overflow-hidden">
            <img className="object-cover w-full h-full" src="https://images.samsung.com/is/image/samsung/assets/in/home/RF65DB90BD12TL_Small_Tile_330x330.jpg?$330_330_JPG$" alt="" />
          </div>

          <div className="w-[48%]  bg-cyan-400 overflow-hidden">
            <img className="object-cover w-full h-full" src="https://images.samsung.com/is/image/samsung/assets/in/home/RF65DB90BD12TL_Small_Tile_330x330.jpg?$330_330_JPG$" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

// Stop automatic slide show
// Offers get fab
// the more you grab
// Sale is live
//
// Buy now
// Galaxy S24 Ultra
// Starting ₹ 117999*
// Shop Galaxy Fit3 with S24 series
// and avail ₹ 6750* cart discount
//
// Buy now
// S Pen taps the display of Galaxy S24 Ultra, seen facing up. Stars animate on the screen. Another Galaxy S24 Ultra seen from the rear and S Pen emerge and hover above the first device. Galaxy AI is here.
// S Pen taps the display of Galaxy S24 Ultra, seen facing up. Stars animate on the screen. Another Galaxy S24 Ultra seen from the rear and S Pen emerge and hover above the first device. Galaxy AI is here.
// Experience a New Era of
// Samsung AI TV
// Neo QLED | Neo QLED 8K | OLED
//
//

// #f4f4f4
