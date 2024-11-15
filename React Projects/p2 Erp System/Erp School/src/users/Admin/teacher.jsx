import SearchForm from "../../searchBar";
import Nav from "./NavBar";
import { useState } from "react";
import Swal from 'sweetalert2';

export default function CreateTeacher() {
    const [formData, setFormData] = useState({
        name: '',
        roll: '',
        password: '',
        subject: '',
        class: '',
        email: ''
    });

    const [teachers, setTeachers] = useState([]); // State to store teacher entries

    const handleSuccess = () => {
        Swal.fire('Success!', 'Your Action has been completed', 'success');
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

        // Add the current formData to the teachers array
        setTeachers([...teachers, formData]);
        handleSuccess(); // Show success popup

        // Reset the formData to clear the form inputs
        setFormData({
            name: '',
            id: '',
            password: '',
            subject: '',
            class: '',
            email: ''
        });
    };

    return (
        <>
            <Nav />
            <div className="bg-gray-500 w-full h-full p-10 flex flex-col items-center">
                <h1 className="text-white font-extrabold font-serif text-5xl">
                Welcome To Teacher Section
                </h1>
                <form onSubmit={handleSubmit} className="flex items-center m-10">
                    <div className="flex flex-col border-2 border-black  bg-blue-200 h-full items-center m-10 w-52 rounded-lg px-1">
                        <h1 className="font-bold text-lg font-serif rounded-sm">
                            Add New Teacher
                        </h1>
                        <br />
                        <label className="font-extrabold">Name:</label>
                        <input
                            className="border-2 border-gray-600 rounded-md px-1"
                            type="text"
                            name="name"
                            value={formData.name}
                            placeholder="Enter name"
                            onChange={handleChange}
                            required
                        />
                        <label className="mt-3 pt-2 font-serif font-extrabold">Subject:</label>
                        <input
                            className="border-2 border-gray-600 rounded-md px-1"
                            type="text"
                            name="subject"
                            value={formData.subject}
                            placeholder="Enter subject"
                            onChange={handleChange}
                            required
                        />
                        <label className="mt-3 pt-2 font-serif font-extrabold">Class:</label>
                        <input
                            className="border-2 border-gray-600 rounded-md px-1"
                            type="text"
                            name="class"
                            value={formData.class}
                            placeholder="Enter class"
                            onChange={handleChange}
                            required
                        />
                        <label className="mt-3 pt-2 font-serif font-extrabold">Teacher ID:</label>
                        <input
                            className="border-2 border-gray-600 rounded-md px-1"
                            type="text"
                            name="roll"
                            value={formData.id}
                            placeholder="Roll Number"
                            onChange={handleChange}
                            required
                        />
                        <label className="mt-3 pt-2 font-serif font-extrabold">Email:</label>
                        <input
                            className="border-2 border-gray-600 rounded-md px-1"
                            type="email"
                            name="email"
                            value={formData.email}
                            placeholder="example.com"
                            onChange={handleChange}
                            required
                        />
                        <label className="mt-3 pt-2 font-serif font-extrabold">Password:</label>
                        <input
                            className="border-2 border-gray-600 rounded-md px-1"
                            type="password"
                            name="password"
                            value={formData.password}
                            placeholder="Password"
                            onChange={handleChange}
                            required
                        />
                        <button
                            type="submit"
                            className="border border-solid bg-black text-white rounded-md m-5 px-7 font-serif"
                        >
                            Register
                        </button>
                    </div>
                </form>
                <div className="mt-2 w-full">
                    <SearchForm />
                </div>
            </div>
            {/* TABLE START */}
            <div className="relative overflow-x-auto mt-0">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Name</th>
                            <th scope="col" className="px-6 py-3">Class</th>
                            <th scope="col" className="px-6 py-3">Teacher Id</th>
                            <th scope="col" className="px-6 py-3">Email</th>
                            <th scope="col" className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teachers.map((teacher, index) => (
                            <tr
                                key={index}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                            >
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {teacher.name}
                                </td>
                                <td className="px-6 py-4">{teacher.class}</td>
                                <td className="px-6 py-4">{teacher.id}</td>
                                <td className="px-6 py-4">{teacher.email}</td>
                                <td className="px-6 py-4 text-blue-300 cursor-pointer">
                                    Edit
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
