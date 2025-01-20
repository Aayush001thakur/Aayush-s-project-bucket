import { Switch } from "@headlessui/react";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const navigation = [
  { name: "Dashboard", href: "/admin/dash", current: false, subItems: [] },
  ,
  {
    name: "Management",
    href: "/admin/teacher",
    current: false,
    subItems: [
      { name: "Employee", href: "/admin/teacher" },
      { name: "Student", href: "/admin/student" },
      { name: "Subjects", href: "/admin/subject" },
      {
        name: "Classes",
        href: "/admin/class",
      },
    ],
  },
  ,
  { name: "Grevience", href: "/admin/complain", current: false, subItems: [] },
  { name: "Notice", href: "/admin/notice", current: false, subItems: [] },
];

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState(navigation[0].href);
  const [isOpen, setIsOpen] = useState(false);
  const [openSections, setOpenSections] = useState([]);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleTabClick = (href) => {
    setActiveTab(href);
    navigate(href);
  };

  const handleAccordionToggle = (name, e) => {
    e.stopPropagation(); // Prevent event propagation to avoid navigation
    setOpenSections((prev) =>
      prev.includes(name)
        ? prev.filter((section) => section !== name)
        : [...prev, name]
    );
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-[#4D44B5] text-white transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-60`}
      >
        <div className="flex flex-col items-center pt-6">
          <img
            className="h-24 w-24"
            src="https://www.vedatron.com/assets/VEDATRON-u-urxK_x.svg"
            alt="VedaTron Logo"
          />
          <ul className="mt-6 w-full px-4">
            {navigation.map((item, index) => (
              <div key={index}>
                {/* Main Item */}
                <li
                  onClick={() => handleTabClick(item.href)} // Navigate on main item click
                  className={`py-3 px-4 rounded-t-md text-[#fff] font-bold text-center cursor-pointer ${
                    activeTab === item.href
                      ? "bg-[#ffffff26]"
                      : "hover:bg-[#ffffff26]"
                  }`}
                >
                  {item.name}
                  {item.subItems.length > 0 && (
                    <button
                      onClick={(e) => handleAccordionToggle(item.name, e)} // Toggle accordion on button click
                      className={`h-4 w-4 transition-transform duration-300 transform ml-2 ${
                        openSections.includes(item.name)
                          ? "rotate-180"
                          : "rotate-0"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v4.59L7.3 9.24a.75.75 0 0 0-1.1 1.02l3.25 3.5a.75.75 0 0 0 1.1 0l3.25-3.5a.75.75 0 1 0-1.1-1.02l-1.95 2.1V6.75Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  )}
                </li>

                {/* Accordion Sub-items */}
                {item.subItems.length > 0 && (
                  <div
                    className={` transition-all duration-500 ease-out overflow-hidden`}
                    style={{
                      maxHeight: openSections.includes(item.name)
                        ? "300px"
                        : "0",
                      opacity: openSections.includes(item.name) ? "1" : "0",
                      backgroundColor: openSections.includes(item.name)
                        ? "#2d3748"
                        : "transparent", // Dark gray for contrast
                      border: openSections.includes(item.name)
                        ? "1px solid rgba(255, 255, 255, 0.2)"
                        : "none",
                      borderBottomLeftRadius: "8px", // Round bottom-left corner
                      borderBottomRightRadius: "8px", // Round bottom-right corner
                    }}
                  >
                    {item.subItems.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        onClick={() => handleTabClick(subItem.href)}
                        className="py-2 m-1 text-center text-white cursor-pointer hover:bg-[#ffffff26]"
                      >
                        {subItem.name}
                      </li>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </ul>
        </div>

        {/* Toggle Switch */}
        <div className="absolute top-1/2 right-[-20px] transform -translate-y-1/2 flex items-center">
          <button
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
            className="flex items-center justify-center h-10 w-10 bg-white rounded-full shadow-md transition-transform duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`w-6 h-6 text-gray-800 transform transition-transform duration-300 ${
                isOpen ? "rotate- [-90]" : "rotate-90"
              }`}
            >
              <path
                fillRule="evenodd"
                d="M12 3a1 1 0 0 1 .71.29l8 8a1 1 0 0 1-1.42 1.42L12 5.42l-7.29 7.29a1 1 0 1 1-1.42-1.42l8-8A1 1 0 0 1 12 3z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 ml-0 transition-all duration-300 ${
          isOpen ? "ml-60" : "ml-0"
        }`}
      >
        <div className="p-4  flex-row min-h-screen bg-black">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
