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
    return (
        <>
        <div className=" flex flex-row  m-2 bg-gray-500 w-full border rounded-lg border-gray-400 ">
                <h1 className="font-bold m-3 h-24 text-3xl w-full text-white shadow-red-800   rounded-md">Manage Students</h1>
                <button className= " bg-zinc-900 m-2  h-full w-36 px-1 border-2 align-baseline  text-white rounded-md">+ Create New 
                </button>
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

