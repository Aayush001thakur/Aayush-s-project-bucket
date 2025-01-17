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
        className={`fixed top-0 left-0 h-full bg-zinc-600 text-white transition-transform duration-300 ${
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
              <div key={index}>
                {/* Main Item */}
                <li
                  onClick={() => handleTabClick(item.href)} // Navigate on main item click
                  className={`py-3 px-4 rounded-md text-black font-bold text-center cursor-pointer ${
                    activeTab === item.href
                      ? "bg-[#1096e3]"
                      : "hover:bg-[#1096e3]"
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
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v4.59L7.3 9.24a.75.75 0 0 0-1.1 1.02l3.25 3.5a.75.75 0 0 0 1.1 0l3.25-3.5a.75.75 0 1 0-1.1-1.02l-1.95 2.1V6.75Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  )}
                </li>

                {/* Accordion Sub-items */}
                {item.subItems.length > 0 &&
                  openSections.includes(item.name) && (
                    <div
                      className="pl-4 transition-all duration-300 overflow-hidden"
                      style={{
                        maxHeight: openSections.includes(item.name)
                          ? "1000px"
                          : "0",
                      }}
                    >
                      {item.subItems.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          onClick={() => handleTabClick(subItem.href)} // Navigate on sub-item click
                          className={`py-2 px-4 rounded-md text-center text-black cursor-pointer hover:bg-zinc-700`}
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
      </div>

      {/* Toggle Switch */}
      <div className="fixed flex flex-col gap-10 justify-evenly top-4 left-4 z-50">
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
        <div className="p-4 flex-row min-h-screen bg-zinc-900">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
