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
        <Nav />
        <div className="bg-gray-500  w-full h-full p-10 flex flex-col items-center">
            <h1
            className="text-white font-extrabold font-serif text-5xl"
            >Welcome To Student Section</h1>
        <form onSubmit={handleSubmit}
        className=" flex items-center p-2">
      <div className="flex flex-col border-2 border-black  bg-blue-200  h-full items-center m-10 w-52 rounded-lg" >
        <h1
        className="font-bold  text-lg  font-serif rounded-sm"
        >Add New Student </h1>
        <br />
        <label className="font-extrabold">Name:</label>
        <input 
        className="border-2 border-gray-600 rounded-md"
          type="text"
          name="name"
          placeholder="Enter name"
          onChange={handleChange}
          required
        />
        <label
        className="mt-3 pt-2 font-serif font-extrabold"
        >Roll Number:</label>
        <input
        className="border-2 border-gray-600 rounded-md"
          type="text"
          name="rollno"
          placeholder="1"
          required
        />
        <label
        className="mt-3 pt-2  font-serif font-extrabold"
        >Class:</label>
       <input
        className="border-2 border-gray-600 rounded-md"
          type="text"
          name="class"
          placeholder="10th"
          required
        />
        <label
        className="mt-3 pt-2 font-serif font-extrabold"
        >Username:</label>
        <input
        className="border-2 border-gray-600 rounded-md"
          type="text"
          name="Username"
          placeholder="Aayush@123"
          required
        />
        <button
        className="border border-solid bg-black text-white rounded-md m-5 px-7 font-serif"
        >Add</button>
        </div>
        </form>
        <div 
            className="mt-2 w-full"
            >
            <SearchForm />
            </div>
        </div>
        {/* TABLE START */}
        <div className="relative overflow-x-auto pb-4 bg-gray-500 px-7 ">
      <table className="w-full text-sm text-left rtl:text-right border rounded- text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 ">
              Student Name <button className=""> 🔽 </button>
            </th>
            <th scope="col" className="px-6 py-3">
              Class  <button> 🔽 </button>
            </th>
            <th scope="col" className="px-6 py-3">
              Roll No  <button> 🔽 </button>
            </th>
            <th scope="col" className="px-6 py-3">
              username  <button> 🔽 </button>
            </th>
            <th scope="col" className="px-6 py-3">
              Edit Details <button className="w-5 h-5"> 📝 </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {formData.name}
            </th>
            <td className="px-6 py-4">{formData.class}</td>
            <td className="px-6 py-4">{formData.roll}</td>
            <td className="px-6 py-4">{formData.username}</td>
            <button><td className="px-6 py-4 text-blue-300">Edit</td></button>
          </tr>
        </tbody>
      </table>
    </div>
        </>
    )
}

