
import { useEffect, useState } from "react";
import Sidebar from "./Nav2";

export default function Studentresult() {
  return (
    <>
      <div className="flex flex-row bg-gray-500">
        <Sidebar />
        <div className="flex flex-col w-full pb-9"> 
        <h1
        className="font-serif text-5xl font-extrabold text-white justify-center px-10 pb-3 mt-9"
        >Check your Results</h1>
        <p className="font-serif text-xl p-4 font-extrabold text-white justify-center">A centralized feature to display, manage, and analyze student results, ensuring easy access to performance data for students, teachers, and administrators.</p>
        <div className="flex-1 p-5 w-full  border rounded-lg bg-gray-800">
        <table className="w-full  border rounded-xl text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
            Title
            </th>
            <th scope="col" className="px-6 py-3">
            Subject Name
            </th>
            <th scope="col" className="px-6 py-3">
              Marks
            </th>
            <th scope="col" className="px-6 py-3">
              Appeared on
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
             Unit test 1
            </th>
            <td className="px-6 py-4">Mathematics</td>
            <td className="px-6 py-4">92.7/100</td>
            <td className="px-6 py-4">10/11/2024</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Unit test-2
            </th>
            <td className="px-6 py-4">English</td>
            <td className="px-6 py-4">99/100</td>
            <td className="px-6 py-4">11/11/2024</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Unit test-3
            </th>
            <td className="px-6 py-4">Science</td>
            <td className="px-6 py-4">90/100</td>
            <td className="px-6 py-4">12/11/2024</td>
          </tr>
        </tbody>
      </table>
        </div>
      </div>
      </div>
    </>
  );
}



     


