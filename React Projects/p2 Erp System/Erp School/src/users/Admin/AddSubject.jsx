import { useState } from "react";
import Nav from "./NavBar";

export default function AddSubject() {
    const [formData, setFormData] = useState({
        subjectName: '',
        class: '',
        subjectCode: ''
    });

    const [isMousedOver , SetMousedOver] = useState(false);

    function handleMouseOver() {
        SetMousedOver(true);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    function handleMouseOut () {
            SetMousedOver(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setFormData({ subjectName: '', class: '', subjectCode: '' });
        // Here, you can perform any actions you need with the formData
    };

    return (
        <>
            <Nav />
            <div className="bg-gray-500 w-full h-full p-10 flex flex-col items-center">
                <label className="font-serif font-extrabold text-3xl text-white">
                    Create Your Subject Here !!
                </label>
                <div>
                    <form
                        onSubmit={handleSubmit}
                        className="mt-3 flex flex-col bg-blue-200 gap-3 border-4 border-black rounded-md p-5"
                    >
                        <label className="font-serif text-3xl font-extrabold">Subject Name</label>
                        <input
                            className="bg-black text-white border rounded-md items-center"
                            name="subjectName"
                            placeholder="Maths"
                            value={formData.subjectName}
                            onChange={handleChange}
                        />
                        
                        <label className="font-serif text-2xl mt-2">Class</label>
                        <select
                            className="bg-black text-white border rounded-md items-center"
                            name="class"
                            value={formData.class}
                            onChange={handleChange}
                        >
                            <option value="">Select Class</option>
                            {Array.from({ length: 12 }, (_, i) => (
                                <option key={i + 1} value={i + 1}>
                                    Class {i + 1}
                                </option>
                            ))}
                        </select>

                        <label className="font-serif text-2xl">Subject Code</label>
                        <input
                            className="bg-black text-gray-100 border rounded-md items-center"
                            name="subjectCode"
                            placeholder="001"
                            type="number"
                            value={formData.subjectCode}
                            onChange={handleChange}
                        />
                        <button
                            type="submit"
                            style={{backgroundColor: isMousedOver ?"black": "white" , color :isMousedOver ?"white": "black"}}
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                            onClick={handleSubmit}
                            className="border border-solid bg-black text-white rounded-md m-5 px-7 font-serif"
                        >
                            Add Subject
                        </button>
                    </form>
                   

                </div>
            </div>
            <div className="relative overflow-x-auto mt-0">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Subject Name
            </th>
            <th scope="col" className="px-6 py-3">
              Class
            </th>
            <th scope="col" className="px-6 py-3">
              Code
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Mathematics
            </th>
            <td className="px-6 py-4"> 12th Class</td>
            <td className="px-6 py-4">27</td>
            <td className="px-6 py-4">Theory</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              English
            </th>
            <td className="px-6 py-4">11th Class</td>
            <td className="px-6 py-4">28</td>
            <td className="px-6 py-4">Theory</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Physics
            </th>
            <td className="px-6 py-4">10th Class</td>
            <td className="px-6 py-4">29</td>
            <td className="px-6 py-4">Theory</td>
          </tr>
        </tbody>
      </table>
    </div>
        </>
    );
}
