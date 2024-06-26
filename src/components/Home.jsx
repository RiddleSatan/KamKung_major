import React from "react";
import { NavLink } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



const Home = () => {
  return (
    <div className="w-full min-h-screen  px-2">
      <div className="w-[95%] h-[98vh] px-4 flex items-center ">
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
      <div className="  rounded-2xl h-[99vh]overflow-hidden flex">
        <div className="overflow-hidden     rounded-xl  ml-20 w-50% ">
          <img
            className="hover:scale-110 transition-all"
            src="https://images.samsung.com/is/image/samsung/assets/in/home/0426/home_page_bigtile-sqaure_pc.jpg?$684_684_JPG$"
            alt=""
          />
          <div className="hover:scale-110 transition-all bg-[url('https://images.samsung.com/is/image/samsung/assets/in/home/0426/home_page_bigtile-sqaure_pc.jpg?$684_684_JPG$')]"  ></div>
          {/* <div className="w-full h-full hover:scale-110 transition-all object-center   bg-[url('https://images.samsung.com/is/image/samsung/assets/in/home/0426/home_page_bigtile-sqaure_pc.jpg?$684_684_JPG$')]"></div> */}
        </div>
        <div className="w-[48%]  flex flex-wrap justify-evenly   overflow-hidden mx-auto">
          <div className="w-[42%] rounded-xl h-[48%]  bg-cyan-400 mb-5 overflow-hidden ">
            {/* <img
              className="object-cover hover:scale-110 transition-all   w-full h-full"
              src="https://images.samsung.com/is/image/samsung/assets/in/home/F55_330X330.jpg?$330_330_JPG$"
              alt=""
            /> */}
            <div className="w-full h-full hover:scale-110 transition-all object-center overflow-hidden  bg-[url('https://images.samsung.com/is/image/samsung/assets/in/home/F55_330X330.jpg?$330_330_JPG$')]"></div>
          </div>
          <div className="w-[42%] rounded-xl h-[48%] bg-cyan-400  overflow-hidden">
            {/* <img
              className="object-cover hover:scale-110 transition-all   w-full h-full"
              src="https://images.samsung.com/is/image/samsung/assets/in/home/Small-Tile_330x330-NP750XGJ-KG1IN.jpg?$330_330_JPG$"
              alt=""
            /> */}
            <div className="w-full h-full hover:scale-110 transition-all object-center overflow-hidden  bg-[url('https://images.samsung.com/is/image/samsung/assets/in/home/Small-Tile_330x330-NP750XGJ-KG1IN.jpg?$330_330_JPG$')]">
              
            </div>
          </div>

          <div className="w-[42%] rounded-xl h-[48%] bg-cyan-400 overflow-hidden">
            {/* <img className="object-cover hover:scale-110 transition-all   w-full h-full" src="https://images.samsung.com/is/image/samsung/assets/in/home/RF65DB90BD12TL_Small_Tile_330x330.jpg?$330_330_JPG$" alt="" /> */}
            <div className="w-full h-full hover:scale-110 transition-all object-center overflow-hidden  bg-[url('https://images.samsung.com/is/image/samsung/assets/in/home/RF65DB90BD12TL_Small_Tile_330x330.jpg?$330_330_JPG$')]"></div>
          </div>

          <div className="w-[42%] rounded-xl h-[48%] overflow-hidden ">
            {/* <img className="object-cover hover:scale-110 transition-all   w-full h-full" src="" alt="" /> */}
            <div className="w-full h-full hover:scale-110 transition-all object-center overflow-hidden  bg-[url('https://images.samsung.com/is/image/samsung/assets/in/home/Small-Tile_330x330_music_frame.jpg?$330_330_JPG$')]"></div>
          </div>
        </div>
      </div>
      {/* --------------------MobileSection ----------------------------*/}
      <h1 className="text-4xl font-medium w-fit mx-auto tracking-tighter mt-8 mb-2">
        Mobile
      </h1>
      <div className=" flex justify-center">
        <NavLink
          className="px-6 py-[0.60rem] rounded-[20px]   inline-block  text-lg font-medium  transition-all hover:text-gray-700 active:underline "
          to=""
        >
          New In
        </NavLink>
        <NavLink
          className="px-6 py-[0.60rem] rounded-[20px]   inline-block  text-lg font-medium  transition-all hover:text-gray-700 active:underline "
          to=""
        >
          Mobile
        </NavLink>
        <NavLink
          className="px-6 py-[0.60rem] rounded-[20px]   inline-block  text-lg font-medium  transition-all hover:text-gray-700 active:underline "
          to=""
        >
          TV
        </NavLink>
        <NavLink
          className="px-6 py-[0.60rem] rounded-[20px]   inline-block  text-lg font-medium  transition-all hover:text-gray-700 active:underline "
          to=""
        >
          Appliances
        </NavLink>
        <NavLink
          className="px-6 py-[0.60rem] rounded-[20px]   inline-block  text-lg font-medium  transition-all hover:text-gray-700 active:underline "
          to=""
        >
          Galaxy Ecosystem
        </NavLink>
        <NavLink
          className="px-6 py-[0.60rem] rounded-[20px]   inline-block  text-lg font-medium  transition-all hover:text-gray-700 active:underline "
          to=""
        >
          Buy now
        </NavLink>
      </div>
      <div className="w-[95vw]  mx-auto bg-[#f4f4f4] overflow-hidden">
           <img className="w-full h-full object-cover" src="" alt="" />
      </div>
      
      <Accordion  type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>

<div className="bg-zinc-600">
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>

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
