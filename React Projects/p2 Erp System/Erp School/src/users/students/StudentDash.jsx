import Sidebar from "./Nav2";

export default function StudentDash() {
  return(
    <>
    <div className="flex flex-row bg-gray-500">
    <Sidebar/>
    <div className="flex-1 p-5 overflow-hidden">
                <h1 className="text-4xl text-white font-serif font-semibold">Dashboard Content</h1>
                <p className="mt-4 p-3 font-bold text-white text-3xl">This is where your dashboard content will go.</p>
            </div>
    </div>
    
    </>
  )
}