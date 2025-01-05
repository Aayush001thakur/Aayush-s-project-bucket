import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
export default function Class() {
  const [formData, setFormData] = useState({
    name: "",
    section: "",
    classTeacher: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/class/getClass"
      );
      setClasses(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Failed to fetch employees", error);
    }
  };

  const handleSuccess = () => {
    Swal.fire("Success!", "Your Action has been completed", "success");
  };

  // Dialog Box
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/class/createClass/",
        formData
      );
      console.log(response.data);
      console.log("Class created successfully");
      setFormData({ name: "", section: "", classTeacher: "" });
      handleSuccess();
    } catch (error) {
      console.error("Can't process request", error);
    }
  };

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <>
      <div className="flex flex-col m-2">
        {/* Header Section */}
        <div className="flex flex-row m-2 bg-gray-500 w-full border rounded-lg border-gray-400">
          <h1 className="font-bold m-3 h-24 text-3xl w-full text-white shadow-red-800 rounded-md">
            Manage Classes
          </h1>
          <button
            onClick={openDialog}
            className="bg-zinc-900 m-2 h-full w-36 px-1 border-2 align-baseline text-white rounded-md"
          >
            + Create New
          </button>

          {/* Dialog Box */}
          {isOpen && (
            <div className="fixed inset-0 flex items-center justify-center border-2 border-slate-400 bg-black bg-opacity-50 z-50">
              <div className="p-2 rounded shadow-lg bg-zinc-800 max-w-md w-72">
                <h2 className="text-xl font-bold mb-4 text-white">
                  Create Class
                </h2>
                <div className="flex flex-col px-5 border-2 text-center border-gray-500 bg-zinc-600 rounded-lg w-full h-full">
                  <form>
                    <div className="flex flex-col justify-between w-fit p-5">
                      <label
                        htmlFor="name"
                        className="border-gray-700 font-bold text-xl"
                      >
                        Class
                      </label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        type="text"
                        className="border-2 border-zinc-700 rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col justify-between w-fit p-5">
                      <label
                        htmlFor="section"
                        className="border-gray-700 font-bold text-xl"
                      >
                        Section
                      </label>
                      <input
                        name="section"
                        value={formData.section}
                        onChange={handleInputChange}
                        type="text"
                        className="border-2 border-zinc-700 rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col justify-between w-fit p-5">
                      <label
                        htmlFor="classTeacher"
                        className="border-gray-700 font-bold text-xl"
                      >
                        Class Teacher
                      </label>
                      <input
                        name="classTeacher"
                        value={formData.classTeacher}
                        onChange={handleInputChange}
                        type="text"
                        className="border-2 border-zinc-700 rounded-lg"
                      />
                    </div>
                  </form>
                </div>
                <div className="flex flex-row justify-between">
                  <button
                    onClick={handleSubmit}
                    className="m-3 border-green-800 bg-green-500 text-white font-bold text-lg rounded-md px-2"
                  >
                    Save
                  </button>
                  <button
                    onClick={closeDialog}
                    className="m-3 border-red-800 bg-red-500 text-white font-bold text-lg rounded-md px-2"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Filter Form */}
        <div className="mt-5">
          <form>
            <div className="flex flex-row bg-gray-500 rounded-md mb-6 p-3 justify-between border-2">
              <div>
                <label
                  htmlFor="filter-class"
                  className="font-semibold text-black text-xl"
                >
                  Class:
                </label>
                <input
                  type="text"
                  name="filter-class"
                  className="border-gray-500 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="filter-teacher"
                  className="font-semibold text-black text-xl"
                >
                  Class Teacher:
                </label>
                <input
                  type="text"
                  name="filter-teacher"
                  className="border-gray-500 rounded-md"
                />
              </div>
              <div className="space-x-2">
                <label
                  htmlFor="filter-section"
                  className="font-semibold text-black text-xl"
                >
                  Section:
                </label>
                <input
                  type="text"
                  name="filter-section"
                  className="text-center border-gray-500 rounded-md"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="border bg-black m-2 w-28 p-1 text-white rounded-md font-bold"
                >
                  Get Details
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Table Section */}
        <div className="w-full">
          <table className="table-auto border-collapse border rounded-lg w-full bg-white">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 px-4 py-2">S.no</th>
                <th className="border border-gray-300 px-4 py-2">Class </th>
                <th className="border border-gray-300 px-4 py-2">Section</th>
                <th className="border border-gray-300 px-4 py-2">
                  Class Teacher
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Student Count
                </th>
              </tr>
            </thead>
            <tbody>
              {classes.map((classItem , index) => (
                <tr key={classItem.id}>
                  <td className="border border-gray-300 px-4 py-2">
                    {
                      index + 1
                    }
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {classItem.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {classItem.section}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {classItem.classTeacher}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {classItem.classTeacher}
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
