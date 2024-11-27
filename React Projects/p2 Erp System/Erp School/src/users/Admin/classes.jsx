import { useState } from "react";
import Nav from "./NavBar";
import SearchForm from "../../searchBar";

export default function Class() {
  const [inputValue, setInputValue] = useState(""); // State for input value
  const [classList, setClassList] = useState([]); // State for list of classes

  // Handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handle button click
  const handleButtonClick = () => {
    if (inputValue.trim() !== "") {
      // Check if input is not empty
      setClassList([...classList, inputValue]); // Add input value to the list
      setInputValue(""); // Clear input after adding to list
    }
  };

  return (
    <>
      <div>
        <Nav />
      </div>
      
      <div className="bg-gray-200 p-5">
        <SearchForm />
        <h1 className="font-extrabold ml-2 mt- bg-slate-200 text-3xl font-serif p-2 items-center">
          Manage Your All Classes Here!
        </h1>
        <input
          placeholder="  Enter Class Name"
          value={inputValue} // Bind input value to state
          onChange={handleInputChange}
          className="border border-blue-950 ml-2 rounded-full items-center"
        />
        <button
          onClick={handleButtonClick}
          className="bg-gray-800 rounded-md border border-black text-center text-white mt-5 p-1 ml-5"
        >
          Create Class
        </button>
      </div>
      <div className="mt-5">
        <ul>
          {classList.map((classItem, index) => (
            <li
              key={index}
              className="ml-2 mb-1 bg-gray-700 text-white p-2 rounded-lg flex flex-row mr-20"
            >
              {classItem}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 ml-10 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
