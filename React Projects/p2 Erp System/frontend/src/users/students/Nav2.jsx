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
                <ul className="pt-9 gap-3">
                    <li>
                        <Link
                            to="/student/dash"
                            className="flex items-center gap-x-4 p-2 text-gray-300 hover:bg-gray-700 rounded-md"
                        >
                            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
  <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
</svg>

</span>
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
                            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 0 1 8.25-8.25.75.75 0 0 1 .75.75v6.75H18a.75.75 0 0 1 .75.75 8.25 8.25 0 0 1-16.5 0Z" clipRule="evenodd" />
  <path fillRule="evenodd" d="M12.75 3a.75.75 0 0 1 .75-.75 8.25 8.25 0 0 1 8.25 8.25.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V3Z" clipRule="evenodd" />
</svg>
</span>
                            <span className={`${!isOpen && "hidden"} origin-left duration-200`}>
                                Analytics
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/student/notice"
                            className="flex items-center gap-x-4 p-2 text-gray-300 hover:bg-gray-700 rounded-md"
                        >
                            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
</svg>
</span>
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
                            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
  <path fillRule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.163 3.75A.75.75 0 0 1 10 12h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
</svg>
</span>
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
                            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3 3 0 0 0 3 3h1.21l-1.172 3.513a.75.75 0 0 0 1.424.474l.329-.987h8.418l.33.987a.75.75 0 0 0 1.422-.474l-1.17-3.513H18a3 3 0 0 0 3-3V3.75h.75a.75.75 0 0 0 0-1.5H2.25Zm6.54 15h6.42l.5 1.5H8.29l.5-1.5Zm8.085-8.995a.75.75 0 1 0-.75-1.299 12.81 12.81 0 0 0-3.558 3.05L11.03 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 0 0 1.146-.102 11.312 11.312 0 0 1 3.612-3.321Z" clipRule="evenodd" />
</svg>
</span>
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
                            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
</svg>
</span>
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
                            <span><img
                            className="w-7 h-7 border rounded-full" src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg" /></span>
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
