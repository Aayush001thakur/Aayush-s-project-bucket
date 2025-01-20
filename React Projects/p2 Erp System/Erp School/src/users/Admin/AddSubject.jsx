import { useState } from "react";
import Nav from "./NavBar";

export default function AddSubject() {
    const [formData, setFormData] = useState({
        subjectName: '',
        class: '',
        subjectCode: '',
        subjectType: ''
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
        setFormData({ subjectName: '', class: '', subjectCode: '' ,subjectType: ''});
        // Here, you can perform any actions you need with the formData
    };

    return (
        <>
           <div className="flex flex-col w-full ">
            <div className="m-3 font-bold text-white h-24  text-3xl p-4 rounded-lg shadow-md shadow-white  bg-gray-500 "> Manage Subjects</div>
            <div className="mt-4 w-full" >
            <table className="table-auto border-collapse   w-full text-white bg-black">
            <thead className="bg-gradient-to-r from-[#7899b0] to-bg-[#00d4ff] ">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Code</th>  
                <th className="border border-gray-300 px-4 py-2">type</th>
                <th className="border border-gray-300 px-4 py-2">Class</th>
                <th className="border border-gray-300 px-4 py-2">Type</th>
              </tr>
            </thead>
            <tbody>
              
                <tr className="">
                  <td className="border border-gray-300 px-4 py-2"> English</td>
                  <td className="border border-gray-300 px-4 py-2">001</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <span className="py-1 px-2 rounded-full text-xs">Theory</span>
                  </td>
                  <td className="border border-gray-300 px-4 py-2"> 12th</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-500">
                    <button>View Details</button>
                  </td>
                </tr>
              
            </tbody>
            </table>

            </div>
           </div>
        </>
    );
}
