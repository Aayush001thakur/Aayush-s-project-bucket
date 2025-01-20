import { data } from "autoprefixer";
import AnalticCards from "./Analytic";
import Nav from "./NavBar";
import { PiStudent } from "react-icons/pi";
import { FaBook, FaChalkboardTeacher } from "react-icons/fa";
import { HiOutlineTrophy } from "react-icons/hi2";
import BarChart from "./components/graphs/BarChart";
import DoughnutChart from "./components/graphs/PieChart";

export default function Dash() {


  return (
    <>
      <div className="flex flex-col w-full">
        <AnalticCards />
        <div className="flex m-2 flex-row">
          <div className="grid mt-2 text-white items-center cursor-pointer justify-center align-bottom gap-2 h-80 w-1/2 grid-cols-2">
            <div className=" flex flex-row border  space-x-1 bg-gradient-to-r from-[#a3a3a3] to-bg-[#000000] items-center justify-center   h-full   rounded-lg">
              <span className="font-bold text-2xl text-white h-14 w-5">
                <FaBook />
              </span>
              <span className="font-bold text-2xl text-white  ">Courses</span>
              <span className="font-serif text-base  text-green-200 ">
                {" "}
                (200 +)
              </span>
            </div>
            <div className="  flex flex-row border   space-x-1 bg-gradient-to-r from-[#a3a3a3] to-bg-[#000000] items-center justify-center   h-full   rounded-lg">
              <span className="font-bold text-2xl text-white h-14 w-5">
                <PiStudent />
              </span>
              <span className="font-bold text-2xl text-white  ">Students</span>
              <span className="font-serif text-base  text-green-200 ">
                {" "}
                (1k +)
              </span>
            </div>
            <div className="  flex flex-row border  space-x-1 bg-gradient-to-r from-[#a3a3a3] to-bg-[#000000] items-center justify-center   h-full   rounded-lg">
              <span className="font-bold text-2xl text-white h-14 w-5">
                <FaChalkboardTeacher />
              </span>
              <span className="font-bold text-2xl text-white  ">Teachers</span>
              <span className="font-serif text-base  text-green-200 ">
                {" "}
                (50 +)
              </span>
            </div>
            <div className="  flex flex-row border space-x-1 bg-gradient-to-r from-[#a3a3a3] to-bg-[#000000] items-center justify-center   h-full   rounded-lg">
              <span className="font-bold text-2xl text-white h-14 w-5">
                <HiOutlineTrophy />
              </span>
              <span className="font-bold text-2xl text-white  ">
                Testimonials
              </span>
              <span className="font-serif text-base  text-green-200">
                {" "}
                (3k +)
              </span>
            </div>
          </div>
          <div className="bg-gray-200 border  h-80 m-1 rounded-lg w-1/2">
            <BarChart />
          </div>
        </div>
        <div className="flex flex-row justify-between h-80 p-2 rounded-md">
          <div className="flex flex-col w-full bg-gray-900 p-2 rounded-lg">
            <span className="font-bold text-white text-2xl py-1">
              Absent Student Report
            </span>
            <table className="border-collapse p-2 items-center bg-gradient-to-r from-[#7899b0] to-bg-[#00d4ff] text-white  w-full h-fit  rounded-lg ">
              <thead className=" rounded-lg">
                <tr className="border-b">
                  <th className=" py-2">Name</th>
                  <th className=" py-2">Class</th>
                  <th className=" py-2">Section</th>
                  <th className=" py-2">Reason</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 items-center">Alice</td>
                  <td className="py-2">12</td>
                  <td className="py-2">A</td>
                  <td className="py-2">Fever</td>
                </tr>
                <tr>
                  <td className="py-2">Bob</td>
                  <td className="py-2">11</td>
                  <td className="py-2">D</td>
                  <td className="py-2">Injury</td>
                </tr>
                <tr>
                  <td className="py-2">Bob</td>
                  <td className="py-2">11</td>
                  <td className="py-2">D</td>
                  <td className="py-2">Injury</td>
                </tr>
                <tr>
                  <td className="py-2">Bob</td>
                  <td className="py-2">11</td>
                  <td className="py-2">D</td>
                  <td className="py-2">Injury</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="border items-center bg-gradient-to-r from-[#454545] to-bg-[#17d6de] text-white border-black  ml-1 w-1/3 rounded-md">
            <div className="flex flex-col p-10">
              <span className="font-bold text-xl text-left ">Attendance Analytics</span>
              <span className=" m-3">
                <DoughnutChart />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
