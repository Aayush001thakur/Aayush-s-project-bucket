import { useState } from "react";
import axios from "axios";
import { ImStatsDots } from "react-icons/im";
import { GiReceiveMoney } from "react-icons/gi";
import { LuBell } from "react-icons/lu";
import { FiMessageSquare } from "react-icons/fi";
import { GiNightSky } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { MdSecurityUpdateGood, MdOutlineForwardToInbox } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

export default function AnalticCards() {
  const [openUser, setOpenUser] = useState(false);
  const [dayTheme, setDayTheme] = useState(false)
  return (
    <>
      <div className="flex flex-col w-full ">
        <div className="w-full flex   cursor-pointer  justify-between  h-12 mb-2 rounded-lg">
          <div className="flex items-center w-1/2 gap-2">
            <span className="text-2xl text-white px-1">
              <ImStatsDots />
            </span>
            <span className="font-bold text-2xl text-white px-2">
              DashBoard
            </span>
          </div>
          <div className="flex space-x-5    rounded-lg items-center">
            <span 
            onClick={()=>dayTheme()}
            className="font-bold bg-gray-700 p-1 rounded-lg text-white">
              <GiNightSky size={25} />
            </span>
            <span className="font-bold bg-gray-700 p-1 rounded-lg text-white">
              {" "}
              <FiMessageSquare size={25} />
            </span>
            <span className="font-bold bg-gray-700 p-1 rounded-lg text-white">
              <LuBell size={30} />
            </span>
            <span className="font-bold bg-gray-700 p-1 rounded-lg text-white">
              <IoSettingsOutline size={30} />
            </span>
            <div className="flex felx-row   focus:ring-2 items-center space-x-1   p-1  rounded-lg">
              <img
                onMouseOver={() => setOpenUser((prev) => !prev)}
                src="https://media.istockphoto.com/id/1501770003/photo/happy-handsome-young-indian-man-head-shot-front-portrait.webp?b=1&s=612x612&w=0&k=20&c=4LashS-6Mi9Ok4igqloBcoQO6HnxU7nECV0IZirO-0A="
                alt="user"
                className="border border-[#A098AE] rounded-full w-10 h-10"
              />

              {openUser && (
                <div className="absolute  px-2 right-9 top-16  bg-white  font-semibold text-white border-2 flex flex-col py-1 rounded-br-lg z-10 shadow-lg">
                  <div className="flex flex-row  px-1 rounded-sm hover:bg-zinc-500  text-white">
                    <span className="text-black items-center justify-center mt-3">
                      <FaRegUser size={15} />
                    </span>{" "}
                    <span className="px-4 space-x-2 py-2 cursor-pointer hover:text-white text-gray-400 font-bold rounded-sm">
                      {" "}
                      Profile
                    </span>
                  </div>
                  <div className="flex flex-row  px-1  rounded-sm hover:bg-zinc-500 text-white">
                    <span className="text-black items-center justify-center mt-3">
                      <MdSecurityUpdateGood size={15} />
                    </span>{" "}
                    <span className="px-4 space-x-2 py-2 cursor-pointer hover:text-white text-gray-400 font-bold rounded-sm">
                      {" "}
                      Updates
                    </span>
                  </div>
                  <div className="flex flex-row  px-1 rounded-sm hover:bg-zinc-500 text-white">
                    <span className="text-black items-center justify-center mt-3">
                      <MdOutlineForwardToInbox size={15} />
                    </span>{" "}
                    <span className="px-4 space-x-2 py-2 cursor-pointer hover:text-white text-gray-400 font-bold rounded-sm">
                      {" "}
                      Message
                    </span>
                  </div>
                  <div className="flex flex-row  px-1 rounded-sm hover:text-white hover:bg-zinc-500 text-white">
                    <span className="text-black items-center justify-center mt-3">
                      <FaRegUser size={15} />
                    </span>{" "}
                    <span className="px-4 space-x-2 py-2 hover:text-white cursor-pointer text-gray-400 font-bold rounded-sm">
                      {" "}
                      Setting
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-row p-2 w-full items-center justify-between bg-white  rounded-md ">
          <div className="">
            <button className="border rounded-full p-3 bg-blue-900 h-12 w-12">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  fill="#ffffff"
                  d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7l131.7 0c0 0 0 0 .1 0l5.5 0 112 0 5.5 0c0 0 0 0 .1 0l131.7 0c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2L224 304l-19.7 0c-12.4 0-20.1 13.6-13.7 24.2z"
                />
              </svg>
            </button>
            <h1 className="font-bold text-gray-400 ">Student</h1>
          </div>
          <div className="">
            <button className="border rounded-full bg-orange-600 h-12 w-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="p-3"
              >
                <path d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7l131.7 0c0 0 0 0 .1 0l5.5 0 112 0 5.5 0c0 0 0 0 .1 0l131.7 0c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2L224 304l-19.7 0c-12.4 0-20.1 13.6-13.7 24.2z" />
              </svg>
              <h1 className="font-bold text-gray-400">Teacher</h1>
            </button>
          </div>
          <div className="">
            <button className="border rounded-full p-3 bg-yellow-400 h-12 w-12">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  fill="#fdfdfc"
                  d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z"
                />
              </svg>
            </button>
            <h1 className="font-bold text-gray-400">Events</h1>
          </div>
          <div className="">
            <button className="border rounded-full p-3 bg-blue-900 h-12 w-12">
              <GiReceiveMoney fill="white" />
            </button>
            <h1 className="font-bold text-gray-400">Revenue</h1>
          </div>
        </div>
      </div>
    </>
  );
}
