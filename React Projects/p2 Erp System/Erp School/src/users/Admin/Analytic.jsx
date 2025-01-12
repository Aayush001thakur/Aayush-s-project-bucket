import { useState } from "react";
import axios from "axios";

export default function AnalticCards() {
  const [classdataLen, setclassDataLen] = useState(0); // State to store the data length
  const [employeedataLen, setemployeeDataLen] = useState(0);
  const [studentdataLen, setstudentDataLen] = useState(0);
  const getclassdata = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/class/getClass"
      );
      const fetchedDataLen = response.data.data.length;
      setclassDataLen(fetchedDataLen); // Update the state with the data length
    } catch (error) {
      console.log("Failed to fetch data", error);
    }
  };
  const getemployeedata = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/employee/employees"
      );
      const fetchStudent = response.data.data.length;
      setemployeeDataLen(fetchStudent); // Update the state with the data length
    } catch (error) {
      console.log("Failed to fetch data", error);
    }
  };

const getStudentData =  async() =>{
  try {
    const response = await axios.get('http://localhost:4000/api/v1/student/students');
    const fetchstudentDataLen = response.data.data.length;
    console.log(response.data.data.length);
    setstudentDataLen(fetchstudentDataLen);
  } catch (error) {
    
  }
}


  return (
    <>
      <div className="flex flex-row border-2 gap-5 rounded-lg border-gray-800 bg-gray-300 w-fit p-5 justify-stretch  items-center">
        <div className="flex flex-col  border-2 p-2 bg-stone-700 border-gray-900">
          <button onClick={getclassdata}>
            <h1 className="font-bold text-5xl text-white  rounded-full">
              {classdataLen}{" "}
            </h1>
          </button>
          <span className="text-white font-bold text-5xl">Classes</span>
        </div>
        <div className="flex flex-col  border-2 p-2 bg-stone-700 border-gray-900">
          <button onClick={getemployeedata}>
            <h1 className="font-bold text-5xl text-white  rounded-full">
              {employeedataLen}{" "}
            </h1>
          </button>
          <span className="text-white font-bold text-5xl">Employee</span>
        </div>
        <div className="flex flex-col  border-2 p-2 bg-stone-700 border-gray-900">
          <button onClick={getStudentData}>
            <h1 className="font-bold text-5xl text-white  rounded-full">
              {studentdataLen}{" "}
            </h1>
          </button>
          <span className="text-white font-bold text-5xl">Student</span>
        </div>
      </div>
    </>
  );
}
