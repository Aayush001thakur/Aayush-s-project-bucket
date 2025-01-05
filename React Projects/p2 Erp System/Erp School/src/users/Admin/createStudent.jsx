import SearchForm from "../../searchBar";
import Nav from "./NavBar";
import { useState } from "react";
export default function CreateStudents(){
    const [formData, setFormData] = useState({
        name: '',
        class:'',
        roll: '',
        username: '',
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page refresh
        console.log('Form submitted:', formData);
        // Add your form submission logic here
      };

      // Dialog Box
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);
    return (
        <>
        <div className=" flex flex-row  m-2 bg-gray-500 w-full border rounded-lg border-gray-400 ">
                <h1 className="font-bold m-3 h-24 text-3xl w-full text-white shadow-red-800   rounded-md">Manage Students</h1>
                <button
                onClick={openDialog}
                className= " bg-zinc-900 m-2  h-full w-36 px-1 border-2 align-baseline  text-white rounded-md">+ Create New 
                </button>
                {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-2 rounded shadow-lg max-w-md w-72">
              <h2 className="text-xl font-bold mb-4">Create Employee</h2>
              <div className="flex flex-row  justify-between gap-20 border bg-gray-700 rounded-lg w-px h-10 mb-5">
                <div className="flex flex-row justify-between">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                    />
                  </svg>  
                  <p>Import Data</p>
                </div>
                <div className="flex flex-row">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                    />
                  </svg>
                  <p>Export Template</p>
                </div>
              </div>
              <div className="mt-4 flex   justify-between">
                <button
                  className="px-1 mx-5 py-1 bg-green-500 text-white rounded hover:bg-green-700"
                >
                  Save
                </button>
                <button
                  onClick={closeDialog}
                  className="px-1 py-1 bg-red-500 text-white rounded hover:bg-red-700"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
                </div>
                <div className="flex flex-col mt-4 justify-center items-center  rounded-sm  border-gray-300 w-full h-fit p-1 ">
                <form action="">
                <div className=" flex flex-row bg-gray-500 rounded-md mb-6  p-3 justify-between  border-2 ">
                    
                <div className=" space-x-4 mx-2">
                    <label className="font-semibold  text-black text-xl">Session : </label>
                    {/* <input type="text" className=" bolder-1 border-gray-500 rounded-md" />     */}
                    <select name="" id="" className=" bolder-1 text-black font-bold px-6 border-gray-500 rounded-md">
                      <option value="" >2020-21</option>
                      <option value="selected">2021-22</option>
                      <option value="">2022-23</option>
                    </select>
                    </div>
                    <div className=" space-x-2">
                    <label className="font-semibold  text-black text-xl">Class: </label>
                    <input type="text" className=" text-center bolder-1 border-gray-500 rounded-md" />    
                    </div>
                    <div className="space-x-2">
                    <label className="font-semibold  text-black text-xl">Section : </label>
                    <input type="text" className=" bolder-1 border-gray-500 rounded-md" />    
                    </div>
                    <div>
                    <button className="border m-5 bg-black mt-1 w-28 p-1 text-white rounded-md  font-bold">Get Data</button>
                    </div>
                    </div>
                </form>
 <div className="w-full   ">
  <table className="table-auto  border-collapse border rounded-lg  w-full bg-white">
    <thead className="bg-gray-200">
      <tr>
        <th className="border border-gray-300 px-4 py-2">Name</th>
        <th className="border border-gray-300 px-4 py-2">Roll No</th>
        <th className="border border-gray-300 px-4 py-2">Reg No</th>
        <th className="border border-gray-300 px-4 py-2">Father Name</th>
        <th className="border border-gray-300 px-4 py-2">Mother Name</th>
        <th className="border border-gray-300 px-4 py-2">Action</th>
      </tr>
      
    </thead>
    <tbody>
      <tr className="hover:bg-gray-100">
        <td className="border border-gray-300 px-4 py-2">John Doe</td>
        <td className="border border-gray-300 px-4 py-2">1</td>
        <td className="border border-gray-300 px-4 py-2">
          <span className=" py-1 px-2 rounded-full text-xs">R2210112</span>
        </td>
        <td className="border border-gray-300 px-6 py-2">
        Mr Sharma</td>
        <td className="border border-gray-300 px-4 py-2"> Mrs Sharma</td>
        <td className="border border-gray-300 px-4 py-2 text-green-500">
         <button>View Details</button> 
          </td>
      </tr>
    </tbody>
  </table>
</div>
            </div>
        </>
    )
}

