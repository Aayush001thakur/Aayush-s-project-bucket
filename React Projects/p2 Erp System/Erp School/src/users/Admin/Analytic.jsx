 export default function AnalticCards(){
 
    return (
        <>
          <div className="flex flex-row gap-13 items-center space-x-20">
            <div className="flex flex-col mt-4 gap-3 h-10 p-4 w-1/4">
              <img
                className="w-59 h-50 border rounded-md border-cyan-600 object-cover"
                src="https://img.freepik.com/premium-vector/student-graduation-school-set-elements-design_24877-44158.jpg"
                alt="Student"
              />  
              <button className="border rounded-md bg-gray-400 border-black p-1 flex items-center font-extrabold justify-center"> Total Students</button>
            </div>
            <div className="flex flex-col mt-4 gap-3 h-10 p-4 w-1/4">
              <img
                className="w-59 h-50 border rounded-md border-cyan-600 object-cover"
                src="https://i.pinimg.com/736x/11/f9/b5/11f9b55a05f2820b6359fbe9b638b081.jpg"
                alt="Teacher"
              />
              <button className="border rounded-md border-black bg-gray-400 p-1 flex items-center font-extrabold justify-center"> Total Teachers</button>
            </div>
            <div className="flex flex-col mt-4 gap-3 h-10 p-4 w-1/4">
              <img
                className="w-59 h-50 border rounded-md border-cyan-600 object-cover"
                src="https://images.all-free-download.com/images/graphiclarge/payment_design_elements_dollar_key_3d_sketch_6922240.jpg"
                alt="Fee"
              />
              <button className="border rounded-md border-black bg-gray-400 p-1 flex items-center font-extrabold justify-center"> Overall Fee Collected</button>
            </div>
            <div className="flex flex-col mt-4 gap-3 h-10 p-4 w-1/4">
              <img
                className="w-59 h-50 border rounded-md border-cyan-600 object-cover"
                src="https://c8.alamy.com/comp/2E2MA22/exam-outline-vector-icon-thin-line-black-exam-icon-flat-vector-simple-element-illustration-from-editable-education-concept-isolated-on-white-backgro-2E2MA22.jpg"
                alt="Exam"
              />
              <button className="border rounded-md border-black bg-gray-400 p-1 flex items-center font-extrabold justify-center">Total Classes</button>
            </div>
          </div>
        </>
      );
      

}