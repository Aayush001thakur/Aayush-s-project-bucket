import axios from "axios";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import SearchForm from "../../searchBar";
export default function CreateTeacher() {
  const [formData, setFormData] = useState({
    name: "",
    employeeId: "",
    employeeRole: ""
  });

  const [teachers, setTeachers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/employee/employees");
      setTeachers(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Failed to fetch employees", error);
    }
  };

const createEmployee =  async () =>{
  try {
      const newEmployee = await axios.post('http://localhost:4000/api/v1/employee/register/employee/' , formData);
      console.log(newEmployee.data);
      handleSuccess()
  } catch (error) {
    console.error("Failed to Create employee", error);
  }
}


  const handleSuccess = () => {
    Swal.fire("Success!", "Your Action has been completed", "success");
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete Entry!",
      text: "Do you want to delete this entry?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          
          await axios.delete(`http://localhost:4000/api/v1/employee/${(id)}`);
          // Ensure proper type matching for filtering
          setTeachers(teachers.filter((teacher) => teacher.employeeId !== (id)));
          
          Swal.fire("Deleted!", "The entry has been deleted.", "success");
        } catch (error) {
          console.error("Failed to delete employee", error);
          Swal.fire("Error!", "Failed to delete the entry. Please try again.", "error");
        }
      }
    });
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/v1/employee", formData);
      setTeachers([...teachers, response.data]);
      handleSuccess();
      setFormData({
        name: "",
        roll: "",
        password: "",
        subject: "",
        class: "",
        email: "",
        role: "",
      });
    } catch (error) {
      console.error("Failed to create employee", error);
    }
  };

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <>
      <div className="flex flex-row bg-gray-500 border mb-4 rounded-lg border-gray-400">
        <h1 className="font-bold m-2 h-24 text-3xl w-full text-white shadow-red-800 rounded-md">
          Manage Employee
        </h1>
        <button
          onClick={openDialog}
          className="bg-zinc-900 m-2 h-full w-36 px-1 border-2 align-baseline text-white rounded-md"
        >
          + Create New
        </button>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-gray-600 p-2 border border-white rounded shadow-lg max-w-md w-72">
              <h2 className="text-xl w-full p-1 font-bold mb-4">Create Employee</h2>
              <form onSubmit={handleSubmit}>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full mb-2 p-2 border rounded"
                />
                <input
                  name="employeeId"
                  value={formData.employeeId}
                  onChange={handleChange}
                  placeholder="Roll"
                  className="w-full mb-2 p-2 border rounded"
                />
                <select
                  name="employeeRole"
                  value={formData.employeeRole}
                  onChange={handleChange}
                  className="w-full mb-2 p-2 border rounded"
                >
                  <option value="">Select Role</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Admin">Admin</option>
                  <option value="Principal">Principal</option>
                </select>
                <div className="mt-4 flex justify-between">
                  <button 
                  onClick={createEmployee}
                  type="submit" className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-700">
                    Save
                  </button>
                  <button
                    onClick={closeDialog}
                    type="button"
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <SearchForm />
      <div className="flex flex-col mt-4 justify-center items-center rounded-sm border-gray-500 w-full h-fit p-1">
        <table className="table-auto border-collapse border rounded-lg w-full bg-black text-white">
          <thead className="bg-gradient-to-r from-[#7899b0] to-bg-[#00d4ff]">
            <tr>
              <th className="border border-gray-300 px-4 py-2">S.No</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Role</th>
              <th className="border border-gray-300 px-4 py-2">Employment Type</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher , index) => (
              <tr key={teacher.id} >
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{teacher.name}</td>
                <td className="border border-gray-300 px-4 py-2">{teacher.employeeId}</td>
                <td className="border border-gray-300 px-4 py-2">{teacher.employeeRole}</td>
                <td className="border border-gray-300 px-4 py-2">{teacher.employeeRole}</td>
                <td className="border border-gray-300 px-4 py-2 cursor-pointer text-green-500 rounded-full"> Active</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button className="text-blue-500 hover:underline">Edit</button>
                  <button
                    onClick={() => handleDelete(teacher.employeeId)}
                    className="text-red-500 hover:underline ml-4"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
