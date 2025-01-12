import React from "react";

function ComplaintSection() {
  // Sample data for complaints
  const complaints = [
    {
      id: 1,
      category: "Student",
      description: "Student A is bullying Student B.",
      status: "Pending",
    },
    {
      id: 2,
      category: "Teacher",
      description: "Teacher X is frequently absent from classes.",
      status: "In Progress",
    },
    {
      id: 3,
      category: "Infrastructure",
      description: "AC in Room 205 is not working.",
      status: "Resolved",
    },
  ];

  return (
    <>
      {/* Header Section */}
      <div className="bg-slate-700 w-full border rounded-lg h-24 flex items-center text-white font-serif text-3xl font-extrabold">
        <h1 className="flex items-center justify-center p-5">
          Admin Complaint Management
        </h1>
      </div>

      {/* Complaint Form */}
      <form className="w-full mt-10">
        <div className="border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          {/* Form Header */}
          <div className="px-4 py-3 bg-gray-200 rounded-t-lg dark:bg-gray-800">
            <h2 className="text-lg font-bold text-gray-700 dark:text-gray-200">
              Register Complaint
            </h2>
          </div>

          {/* Complaint Details */}
          <div className="px-4 py-4 bg-white dark:bg-gray-800">
            <label
              htmlFor="category"
              className="block text-xl font-bold text-gray-700 dark:text-gray-400"
            >
              Complaint Category
            </label>
            <select
              id="category"
              className="block w-full mt-1 rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              required
            >
              <option value="">Select a category</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="infrastructure">Infrastructure</option>
              <option value="other">Other</option>
            </select>

            <label
              htmlFor="description"
              className="block mt-4 text-xl font-bold text-white dark:text-gray-400"
            >
              Complaint Description
            </label>
            <textarea
              id="description"
              rows="4"
              className="block w-full mt-1 rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Describe the complaint..."
              required
            ></textarea>
          </div>

          {/* Status and Submit */}
          <div className="flex items-center justify-between px-4 py-3 border rounded-lg bg-gray-100 border-t dark:bg-gray-800 dark:border-gray-600">
            <div className="flex items-center">
              <label
                htmlFor="status"
                className="text-sm font-bold text-gray-700 dark:text-gray-400"
              >
                Status:
              </label>
              <select
                id="status"
                className="ml-2 block w-32 rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              >
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="resolved">Resolved</option>
              </select>
            </div>

            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              Submit Complaint
            </button>
          </div>
        </div>
      </form>

      {/* Complaints Table */}
      <div className="max-w-6xl mx-auto mt-10">
        <h2 className="text-xl font-bold text-gray-700 dark:text-gray-200 mb-4">
          Complaints List
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="bg-gray-200 text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-4 py-3">
                  ID
                </th>
                <th scope="col" className="px-4 py-3">
                  Category
                </th>
                <th scope="col" className="px-4 py-3">
                  Description
                </th>
                <th scope="col" className="px-4 py-3">
                  Status
                </th>
                <th scope="col" className="px-4 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((complaint) => (
                <tr
                  key={complaint.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-4 py-2">{complaint.id}</td>
                  <td className="px-4 py-2">{complaint.category}</td>
                  <td className="px-4 py-2">{complaint.description}</td>
                  <td className="px-4 py-2">{complaint.status}</td>
                  <td className="px-4 py-2">
                    <button className="text-blue-600 hover:underline dark:text-blue-400">
                      Edit
                    </button>{" "}
                    |{" "}
                    <button className="text-red-600 hover:underline dark:text-red-400">
                      Delete
                    </button>
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

export default ComplaintSection;
