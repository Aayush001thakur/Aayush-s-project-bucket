import { Button } from "@headlessui/react";
import Banner from "./Banner";
import { HomeIcon, UserIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function LoginPage() {
  const [rollNumber, setRollNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const LoginUser = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    try {
      const response = await axios.post('http://localhost:4000/api/v1/user/login', {
        rollNumber,
        password,
      });
    
      if (response.status == 200) {
        setSuccessMessage('Login successful!');
        
        setError('');
        console.log('Redirecting to /student/dash');
        navigate('/student/dash');
      } else {
        setError(response.data.message || 'Login failed!');
      }
    } catch (err) {
      console.error('Error:', err.response || err);
      setError(err.response?.data?.message || err.message || 'Something went wrong');
    }
    
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-blue-300">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Vedatron"
            src="https://www.vedatron.com/assets/logo3-D2uk1xQ3.svg"
            className="mx-auto h-24 w-auto"
          />
          <h2 className="mt-5 text-center text-2xl/9 font-bold tracking-tight text-gray-800">
            Student Login
          </h2>
        </div>
        <div className="flex flex-row justify-center mt-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
            />
          </svg>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={LoginUser} method="POST" className="space-y-6">
            {/* Roll Number */}
            <div>
              <label htmlFor="rollNumber" className="block text-sm/6 font-medium text-gray-900">
                Roll Number
              </label>
              <div className="mt-2">
                <input
                  id="rollNumber"
                  name="rollNumber"
                  type="text"
                  value={rollNumber}
                  onChange={(e) => setRollNumber(e.target.value)}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password} // Ensure the value is controlled
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            {/* Error and Success Messages */}
            {error && <p className="text-red-500 text-center">{error}</p>}
            {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?{" "}
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Select Role
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
