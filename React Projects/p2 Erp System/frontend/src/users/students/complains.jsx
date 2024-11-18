import { useState } from "react";
import Sidebar from "./Nav2";

export default function StudentComplain() {
  // State to hold the textarea message
  const [message, setMessage] = useState("");

  // Function to update state on textarea input
  const handleTextareaChange = (e) => {
    setMessage(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    // console.log("Submitted message:", message);
    console.log(message);
    setMessage("");
  };

  return (
    <>
      <div className="flex flex-row bg-gray-800">
        <Sidebar />
        <div className="flex-1 p-7 bg-gray-700">
          <h1 className="font-extrabold font-serif text-white text-5xl">
            File A Complain
          </h1>
          <p className="font-semibold mt-5 font-serif text-gray-200 text-lg">
            Easily raise your concerns or share feedback through this section.
            Simply describe your issue, attach any relevant files, and submit
            your complaint for resolution. Our team ensures a quick and
            transparent process to address your concerns effectively.
          </p>
          <div className="flex flex-col container bg-gray-700 border rounded-lg text-white font-serif text-lg border-white p-5 mt-4">
            To:
            <input
              type="text"
              placeholder=" "
              className="text-white font-serif text-lg items-center justify-center border bg-gray-400 rounded-lg placeholder-white mb-2"
            />
            Against:
            <input
              type="text"
              placeholder=""
              className="text-white font-serif text-lg border bg-gray-400 rounded-lg m-0 placeholder-white"
            />
            <form onSubmit={handleSubmit}>
              <div className="m-2 w-full h-full mt-3 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                <div className="px-2 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                  <label className="sr-only">Your comment</label>
                  <textarea
                    id="comment"
                    rows="4"
                    value={message} // Controlled component
                    onChange={handleTextareaChange} // Update state on input
                    className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                    placeholder="Write a comment..."
                    required
                  ></textarea>
                </div>
                <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                  <button
                    type="submit"
                    className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                  >
                    Post complaint
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
