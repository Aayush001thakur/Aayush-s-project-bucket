import Sidebar from "./Nav2";

export default function StudentNotice() {
    return(
        <>
        <div className="flex flex-row bg-gray-500">
        <Sidebar />
        <div className="flex-1 p-5">
        <table className="w-full  border rounded-xl text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Subject Name
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Date Posted
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Mathematics
            </th>
            <td className="px-6 py-4">Diwali Holiday</td>
            <td className="px-6 py-4">10/11/2024</td>
            <td className="px-6 py-4">Holiday</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              English
            </th>
            <td className="px-6 py-4">Children Day Celebration</td>
            <td className="px-6 py-4">14/11/2024</td>
            <td className="px-6 py-4">Event</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Physics
            </th>
            <td className="px-6 py-4">New Year Party</td>
            <td className="px-6 py-4">31/dec/2024</td>
            <td className="px-6 py-4">Event</td>
          </tr>
        </tbody>
      </table>
            </div>
        </div>
        </>
    )
}