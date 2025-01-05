import { Switch, Transition } from "@headlessui/react";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const navigation = [
  { name: "Dashboard", href: "/admin/dash", current: false },
  { name: "Classes", href: "/admin/class", current: false },
  { name: "Employee", href: "/admin/teacher", current: false },
  { name: "Student", href: "/admin/student", current: false },
  { name: "Subjects", href: "/admin/subject", current: false },
  { name: "Complaints", href: "/admin/complain", current: false },
  { name: "Notice", href: "/admin/notice", current: false },
];

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState(navigation[0].href);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleTabClick = (href) => {
    setActiveTab(href);
    navigate(href);
  };

  const [open, setOpen] = useState(false);
  const ThemeSwitcher = () => {};

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-64`}
      >
        <div className="flex flex-col items-center pt-6">
          <img
            className="h-24 w-24"
            src="https://www.vedatron.com/assets/VEDATRON-u-urxK_x.svg"
            alt="VedaTron Logo"
          />
          <ul className="mt-6 w-full px-4">
            {navigation.map((item, index) => (
              <li
                key={index}
                onClick={() => handleTabClick(item.href)}
                className={`py-3 px-4 rounded-md text-center cursor-pointer ${
                  activeTab === item.href ? "bg-gray-700" : "hover:bg-gray-600"
                }`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Toggle Switch */}
      <div className="absolute flex flex-col gap-10 justify-evenly top-4 left-4 z-50">
        <div>
          <Switch
            checked={isOpen}
            onChange={toggleSidebar}
            aria-label="Toggle Sidebar"
            className={`flex items-center h-7 w-14 rounded-full transition duration-300 ${
              isOpen ? "bg-gray-700" : "bg-gray-300"
            }`}
          >
            <span
              aria-hidden="true"
              className={`h-5 w-5 rounded-full bg-white shadow transform transition ${
                isOpen ? "translate-x-7" : "translate-x-0"
              }`}
            />
          </Switch>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 ml-0 transition-all duration-300 ${
          isOpen ? "ml-64" : "ml-0"
        }`}
      >
        <div className="p-4 flex-row  bg-amber-200 min-h-screen">
          <div className="relative mx-10">
            <button
            onClick={setOpen}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="black"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.455 2.004a.75.75 0 0 1 .26.77 7 7 0 0 0 9.958 7.967.75.75 0 0 1 1.067.853A8.5 8.5 0 1 1 6.647 1.921a.75.75 0 0 1 .808.083Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
