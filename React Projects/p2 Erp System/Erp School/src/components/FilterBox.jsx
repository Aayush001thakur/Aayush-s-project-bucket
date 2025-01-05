import React from "react";

const SearchBar = ({ query, setQuery }) => {
  return (
    <div className="flex flex-col border-2 gap-2 font-bold border-gray-900 ">
      <form action="" className="flex flex-row gap-2  justify-between w-full border-2 ">
      <div className="border-2 m-2 bg-black p-2  border-gray-500 rounded-md">
       <label htmlFor="" className="bg-black text-white text-center">
                EmployeeId
       </label>
       <input type="text"  />
       </div>
       <div className="border-2 m-2 bg-black p-2  border-gray-500 rounded-md">
       <label htmlFor="" className="bg-black px-2 text-white text-center">
                EmployeeName
       </label>
       <input type="text" />
       </div>
       <div className="border-2 m-2 bg-black p-2  border-gray-500 rounded-md">
       <label htmlFor="" className="bg-black text-white text-center">
                EmployeeRole
       </label>
       <input type="text" />
       </div>
       <div>
        <button className="bg-gray-800 border-2  w-full m-4 rounded-lg text-white p-2 ">Get Data</button>
       </div>
      </form>
      
    </div>
  );
};

export default SearchBar;
