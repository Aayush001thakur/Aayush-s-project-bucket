// Sidebar.js
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <div
                className={`${
                    isOpen ? "w-64" : "w-20"
                } bg-gray-800 h-screen p-5 pt-8 relative duration-300`}
            >
                <button
                    onClick={toggleSidebar}
                    className="bg-gray-800 border text-white p-2 rounded-md absolute -right-3 top-9 transform rotate-90"
                >
                    {isOpen ? "Close" : "Open"}
                </button>
                <h1
                    className={`text-white origin-left font-extrabold text-2xl duration-200 ${
                        !isOpen && "scale-0"
                    }`}
                >
                    Welcome Student
                </h1>
                <ul className="pt-6">
                    <li>
                        <Link
                            to="/student/dash"
                            className="flex items-center gap-x-4 p-2 text-gray-300 hover:bg-gray-700 rounded-md"
                        >
                            <span>🏠</span>
                            <span className={`${!isOpen && "hidden"} origin-left duration-200`}>
                                Home
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/student/attendance"
                            className="flex items-center gap-x-4 p-2 text-gray-300 hover:bg-gray-700 rounded-md"
                        >
                            <span>📊</span>
                            <span className={`${!isOpen && "hidden"} origin-left duration-200`}>
                                Attendance
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/student/notice"
                            className="flex items-center gap-x-4 p-2 text-gray-300 hover:bg-gray-700 rounded-md"
                        >
                            <span>🔔</span>
                            <span className={`${!isOpen && "hidden"} origin-left duration-200`}>
                                Notice
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/student/complain"
                            className="flex items-center gap-x-4 p-2 text-gray-300 hover:bg-gray-700 rounded-md"
                        >
                            <span>⚠️</span>
                            <span className={`${!isOpen && "hidden"} origin-left duration-200`}>
                                Complains
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/student/result"
                            className="flex items-center gap-x-4 p-2 text-gray-300 hover:bg-gray-700 rounded-md"
                        >
                            <span>📝</span>
                            <span className={`${!isOpen && "hidden"} origin-left duration-200`}>
                                Result
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/student/profile"
                            className="flex items-center gap-x-4 p-2 text-gray-300 hover:bg-gray-700 rounded-md"
                        >
                            <span>👤</span>
                            <span className={`${!isOpen && "hidden"} origin-left duration-200`}>
                                Profile
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/student/profile"
                            className="flex items-center gap-x-4 p-2 text-gray-300 hover:bg-gray-700 rounded-md"
                        >
                            <span><img src="/https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg" /></span>
                            <span className={`${!isOpen && "hidden"} origin-left duration-200`}>
                                Sing out
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Content Area */}
            
        </div>
    );
}
