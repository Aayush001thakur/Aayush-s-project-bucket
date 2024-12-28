import { useState } from "react";
import Nav from "./NavBar";
import SearchForm from "../../searchBar";

export default function Class() {
  const [inputValue, setInputValue] = useState(""); // State for input value  // Handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
// Dialog Box
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);
  // set form data

  // set table data
  return (
    <>
     <div className="flex flex-col m-2">
      <div className=" flex flex-row  m-2 bg-gray-500 w-full border rounded-lg border-gray-400 ">
                <h1 className="font-bold m-3 h-24 text-3xl w-full text-white shadow-red-800   rounded-md">Manage Classes</h1>
                <button
                onClick={openDialog}
                className= " bg-zinc-900 m-2  h-full w-36 px-1 border-2 align-baseline  text-white rounded-md">+ Create New 
                </button>
                {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center border-2 border-slate-400 bg-black bg-opacity-50">
            <div className=" p-2 rounded shadow-lg bg-zinc-800 max-w-md w-72">
              <h2 className="text-xl font-bold mb-4 text-white">Create Employee</h2>
              <div className=" flex felx-col px-5  border-2 text-center  border-gray-500 bg-zinc-600 rounded-lg w-full h-full ">
                  <form action="">
                    <div className="flex flex-col  justify-between w-fit  p-5">
                    <label htmlFor="" className="border-gray-700 font-bold text-xl ">
                      Class
                    </label>
                    <input type="text" className="border-2 border-zinc-700  rounded-lg" />
                    </div>
                    <div className="flex flex-col justify-between w-fit p-5">
                    <label htmlFor="" className="border-gray-700 font-bold text-xl ">
                      Section
                    </label>
                    <input type="text" className="border-2 border-zinc-700  rounded-lg" />
                    </div>
                    <div className="flex flex-col justify-between w-fit p-5">
                    <label htmlFor="" className="border-gray-700 font-bold text-xl ">
                      Class Teacher
                    </label>
                    <input type="text" className="border-2 border-zinc-700  rounded-lg" />
                    </div>
                  </form>
              </div>
              <div className="flex flex-row justify-between">
              <button 
              className="m-3 border-green-800 bg-green-500 text-white font-bold text-lg rounded-md px-2">Save</button>
              <button 
              onClick={closeDialog}
              className="m-3 border-red-800 bg-red-500 text-white font-bold text-lg rounded-md px-2">close</button>
              </div>
            </div>
          </div>
        )}
                </div>
      <div className="mt-5">
      <form action="">
                <div className=" flex flex-row bg-gray-500 rounded-md mb-6  p-3 justify-between  border-2 ">
                    
                    <div className=" ">
                    <label htmlFor="" className=" font-semibold  text-black text-xl">Class: </label>
                    <input type="number" className=" bolder-1 border-gray-500 rounded-md" />
                    </div>
                    <div className=" ">
                    <label htmlFor="" className=" font-semibold  text-black text-xl">Class Teacher: </label>
                    <input type="number" className=" bolder-1 border-gray-500 rounded-md" />
                    </div>
                    <div className=" space-x-2">
                    <label className="font-semibold  text-black text-xl">Section: </label>
                    <input type="text" className=" text-center bolder-1 border-gray-500 rounded-md" />    
                    </div>
                    <div>
                    <button className="border  bg-black m-2 w-28 p-1 text-white rounded-md  font-bold">Get Details</button>
                    </div>
                    </div>
                </form>

      </div>
      <div className="w-full   ">
  <table className="table-auto  border-collapse border rounded-lg  w-full bg-white">
    <thead className="bg-gray-200">
      <tr>
        <th className="border border-gray-300 px-4 py-2">Class Teacher</th>
        <th className="border border-gray-300 px-4 py-2">Section</th>
        <th className="border border-gray-300 px-4 py-2">Class Code</th>
        <th className="border border-gray-300 px-4 py-2">Fee</th>
        <th className="border border-gray-300 px-4 py-2">Actions</th>
        <th className="border border-gray-300 px-4 py-2">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr className="hover:bg-gray-100 text-bold ">
        <td className="border border-gray-300 px-4 py-2">John Doe</td>
        <td className="border border-gray-300 px-4 py-2">A</td>
        <td className="border border-gray-300 px-4 py-2">
          <span className=" py-1 px-2 rounded-full text-xs">12</span>
        </td>
        
        <td className="border border-gray-300 px-4 py-2"> 1200</td>
        <td className="border border-gray-300 px-6 py-2">
          <button className="text-blue-500 hover:underline">Edit</button>
          <button className="text-red-500 hover:underline ml-4">Delete</button>
        </td>
        <td className="border border-gray-300 px-4 py-2">
          <span className="bg-green-200 text-green-600 py-1 px-2 rounded-full text-xs">Active</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
      </div>
     
    </>
  );
}
