import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { PiArrowArcLeftThin } from "react-icons/pi";

const PlanCard = ({ title, subtitle, channels, price, img, offer }) => {
    return (
<div className="w-full max-w-md bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white rounded-2xl overflow-hidden shadow-lg mx-auto sm:mx-2 relative ">
{title && (
        <div className="relative text-lg text-white mt-2 mb-1 flex justify-center font-bold items-center pl-4 pr-10">
        <span className="text-center text-sm sm:text-base md:text-lg truncate max-w-[calc(100%-2rem)] py-2 ">{title}</span>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex-shrink-0">
        <PiArrowArcLeftThin />
        </div>
    </div>
)}

  
        {/* Image */}
        <div className="relative ">
          <img src={img} alt={title} className="h-48 sm:h-48 md:h-56 object-cover w-full max-[600px]:h-36" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
        </div>
  
        {/* Card Content */}
        <div className="bg-gradient-to-t from-blue-900/50 to-transparent p-3 sm:p-4 flex flex-col gap-1">
        {/* heading section  */}
         <div>
          <h3 className="text-lg sm:text-xl flex flex-row justify-start font-bold">TV Shows, News & more ...</h3>
          <p className="text-md font-bold sm:text-md text-white flex flex-row justify-start">{channels}</p>
          </div>

          {/* more info button  */}
        <div className="flex justify-start mt-3 sm:mt-4">
        <button className="text-white py-1 px-[3px] md:px-2 lg:px-[3px] border border-transparent shadow-xl rounded-lg text-sm cursor-pointer hover:text-blue-200 transition-colors w-auto flex flex-row items-center gap-1">
        <IoIosInformationCircleOutline className="h-5 w-5 text-white" />
        <span>more info</span>
    </button>
    </div>

  
          {/* Price Section */}
          <div className="flex flex-row items-center justify-between mt-2 text-white">
          <div className="text-[11px] sm:text-[12px] text-gray-300 p-1 flex-1">
          <p className="hidden min-[376px]:block min-[768px]:hidden min-[1024px]:block max-[415px]:text-[10px] max-[415px]:text-wrap">
         Prices for 12 months. Starter calculated on 18-month contract.
        </p>
        <p className="text-[10px] sm:text-[11px] underline text-gray-300 mt-1 cursor-pointer hover:text-gray-200 transition-colors">
            T&Cs apply
        </p>
</div>
            <div className="flex flex-col items-end p-1 flex-shrink-0">
              <div className="flex items-end gap-1 px-2">
                <span className="text-3xl sm:text-[40px] font-bold">${price}</span>
                <span className="text-sm mb-1">/month</span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-3 flex flex-col gap-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full text-sm font-semibold transition-colors w-full">
              Select
            </button>
            <button className="border border-white/80 text-white py-[10px] px-4 rounded-full text-sm font-semibold bg-white/5 hover:bg-white/10 transition-colors w-full">
              What's included
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default PlanCard;
