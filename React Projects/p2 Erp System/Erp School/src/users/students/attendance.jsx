import AnalticCards from "../Admin/Analytic";
import Sidebar from "./Nav2";

export default function StudentAttendance() {
    return(
        <>
        <div className="flex flex-row bg-gray-500">
            <Sidebar />
        <div className="flex-1">
        <div className="flex flex-row gap-13 items-center space-x-20">
            <div className="flex flex-col mt-4 gap-3 h-10 p-4 w-1/4">
              <img
                className="w-52 h-48  rounded-md  object-cover"
                src="https://cdn-icons-png.flaticon.com/512/6104/6104564.png"
                alt="Attendance"
              />  
              <button className="border rounded-md bg-gray-400 border-black p-1 flex items-center font-extrabold justify-center">Overall Attendance</button>
            </div>
            <div className="flex flex-col mt-4 gap-3 h-10 p-4 w-1/4">
              <img
                className="w-52 h-48  rounded-md  object-cover"
                src="https://images.all-free-download.com/images/graphiclarge/payment_design_elements_dollar_key_3d_sketch_6922240.jpg"
                alt="Fee"
              />
              <button className="border rounded-md border-black bg-gray-400 p-1 flex items-center font-extrabold justify-center"> Overall Fee Deposited</button>
            </div>
            <div className="flex flex-col mt-4 gap-3 h-10 p-4 w-1/4">
              <img
                className="w-52 h-48 rounded-md  object-cover"
                src="https://cdn1.iconfinder.com/data/icons/e-commerce-531/64/Pending_payment-512.png"
                alt="Exam"
              />
              <button className="border rounded-md border-black bg-gray-400 p-1 flex items-center font-extrabold justify-center">Pending Dues</button>
            </div>
          </div>
            </div>
    </div>
        </>
    )
}