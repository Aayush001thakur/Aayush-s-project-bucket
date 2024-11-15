import SearchForm from "../../searchBar";
import Nav from "./NavBar";
import { useState } from "react";
export default function CreateStudents(){
    const [formData, setFormData] = useState({
        name: '',
        roll: '',
        password: '',
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
        className=" flex items-center">
      <div className="flex flex-col border-2 border-black  bg-blue-200  h-full items-center m-10 w-52 rounded-lg px-4" >
        <h1
        className="font-bold  text-lg  font-serif rounded-sm"
        >Add New Student </h1>
        <br />
        <label className="font-extrabold">Name:</label>
        <input 
        className="border-2 border-gray-600 rounded-md px-2"
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
        className="border-2 border-gray-600 rounded-md px-2"
          type="number"
          name="rollno"
          placeholder="Roll Number"
          required
        />
        <label
        className="mt-3 pt-2 font-serif font-extrabold"
        >Class:</label>
        <input
        className="border-2 border-gray-600 rounded-md px-2"
          type=""
          name="rollno"
          placeholder="10th"
          required
        />
        <label
        className="mt-3 pt-2 font-serif font-extrabold"
        >Password:</label>
        <input
        className="border-2 border-gray-600 rounded-md px-2"
          type="password"
          name="pass"
          placeholder="Password"
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
        <div className="relative overflow-x-auto mt-0">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
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
              Aayush Kumar
            </th>
            <td className="px-6 py-4"> 12th Class</td>
            <td className="px-6 py-4">27</td>
            <td className="px-6 py-4">Aayush@2501</td>
            <button><td className="px-6 py-4 text-blue-300">Edit</td></button>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Manish
            </th>
            <td className="px-6 py-4">11th Class</td>
            <td className="px-6 py-4">28</td>
            <td className="px-6 py-4">Manish@123</td>
            <button><td className="px-6 py-4 text-blue-300">Edit</td></button>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Akshay Kumar
            </th>
            <td className="px-6 py-4">10th Class</td>
            <td className="px-6 py-4">29</td>
            <td className="px-6 py-4">Akshay@123</td>
            <button><td className="px-6 py-4 text-blue-300">Edit</td></button>
          </tr>
        </tbody>
      </table>
    </div>
        </>
    )
}

