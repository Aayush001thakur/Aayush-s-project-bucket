import { useState } from "react";
import axios from "axios";

export default function CreateStudents() {
  const [formData, setFormData] = useState({
    name: "",
    class: "",
    roll: "",
    username: "",
  });

  const [studentData, setStudentData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/student/students");
      const fetchData = response.data.data;
      console.log(fetchData);
      setStudentData(fetchData);
    } catch (error) {
      console.log("Error fetching student data:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <>
      <div className="flex flex-row m-2 bg-gray-500 w-full border rounded-lg border-gray-400">
        <h1 className="font-bold m-3 h-20 text-3xl w-full text-white rounded-md">Manage Students</h1>
        <button
          onClick={openDialog}
          className="bg-zinc-900 m-2 h-full w-36 px-1 border-2 align-baseline text-white rounded-md"
        >
          + Create New
        </button>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-2 rounded shadow-lg max-w-md w-72">
              <h2 className="text-xl font-bold mb-4">Create Student</h2>
              <div className="mt-4 flex justify-between">
                <button className="px-1 mx-5 py-1 bg-green-500 text-white rounded hover:bg-green-700">Save</button>
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
      <div className="flex flex-col mt-4 justify-center items-center rounded-sm border-gray-300 w-full h-fit p-1">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row bg-gray-500 rounded-md mb-6 w-full p-3 justify-between border-2">
            <div className="space-x-4 mx-2">
              <label className="font-semibold text-black text-xl">Session:</label>
              <select className="text-black font-bold px-6 border-gray-500 rounded-md">
                <option value="">2020-21</option>
                <option value="">2021-22</option>
                <option value="">2022-23</option>
              </select>
            </div>
            <div className="space-x-2">
              <label className="font-semibold text-black text-xl">Class:</label>
              <input type="text" className="text-center border-gray-500 rounded-md" />
            </div>
            <div className="space-x-2">
              <label className="font-semibold text-black text-xl">Section:</label>
              <input type="text" className="border-gray-500 rounded-md" />
            </div>
            <div>
              <button
                onClick={getData}
                className="border m-5 bg-black mt-1 w-28 p-1 text-white rounded-md font-bold"
              >
                Get Data
              </button>
            </div>
          </div>
        </form>
        <div className="w-full">
          <table className="table-auto border-collapse border rounded-lg w-full bg-white">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Roll No</th>
                <th className="border border-gray-300 px-4 py-2">Reg No</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {studentData.map((student, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{student.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{student.rollNumber}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <span className="py-1 px-2 rounded-full text-xs">{student._id}</span>
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-green-500">
                    <button>View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
