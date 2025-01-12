import React, { useState } from "react";
import Nav from "./NavBar";
import Banner from "../../pages/Banner";

function NoticeSection() {
  const [notices, setNotices] = useState([]);
  const [newNotice, setNewNotice] = useState("");

  // Handle marking a notice as read
  const markAsRead = (id) => {
    setNotices(
      notices.map((notice) =>
        notice.id === id ? { ...notice, read: !notice.read } : notice
      )
    );
  };

  // Handle deleting a notice
  const deleteNotice = (id) => {
    setNotices(notices.filter((notice) => notice.id !== id));
  };

  // Handle adding a new notice
  const addNotice = () => {
    if (newNotice.trim()) {
      setNotices([
        ...notices,
        { id: Date.now(), text: newNotice, read: false },
      ]);
      setNewNotice("");
    }
  };

  return (
    <>
      {/* Banner */}
      <Banner
        name="Monday Holiday"
        value={notices.length > 0 ? notices[0].text : "No notices yet"}
      />

      {/* Notice Section */}
      <div className="p-10 mt-5 pb-32 bg-gray-500 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-white mb-4">Admin Notices</h2>

        {/* Notices List */}
        <div className="space-y-4">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className={`p-4 rounded-lg flex justify-between items-center ${
                notice.read ? "bg-blue-200" : "bg-red-100"
              }`}
            >
              <span className={notice.read ? "line-through" : ""}>
                {notice.text}
              </span>
              <div className="space-x-2">
                <button
                  onClick={() => markAsRead(notice.id)}
                  className="px-2 py-1 text-xs text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                  {notice.read ? "Unread" : "Read"}
                </button>
                <button
                  onClick={() => deleteNotice(notice.id)}
                  className="px-2 py-1 text-xs text-white bg-red-500 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add Notice */}
        <div className="mt-4">
          <input
            type="text"
            value={newNotice}
            onChange={(e) => setNewNotice(e.target.value)}
            placeholder="Enter new notice"
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button
            onClick={addNotice}
            className="mt-2 w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Notice
          </button>
        </div>
      </div>

      {/* Notices Table */}
      <div className="p-10 mt-10 bg-white rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Published Notices</h2>
        {notices.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-600">
              <thead className="bg-gray-100 text-gray-800 uppercase text-xs">
                <tr>
                  <th className="px-4 py-3">ID</th>
                  <th className="px-4 py-3">Notice</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {notices.map((notice) => (
                  <tr
                    key={notice.id}
                    className="border-b bg-gray-50 hover:bg-gray-100"
                  >
                    <td className="px-4 py-3">{notice.id}</td>
                    <td className="px-4 py-3">{notice.text}</td>
                    <td className="px-4 py-3">
                      {notice.read ? "Read" : "Unread"}
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => markAsRead(notice.id)}
                        className="px-2 py-1 text-xs text-white bg-blue-500 rounded hover:bg-blue-600 mr-2"
                      >
                        {notice.read ? "Unread" : "Read"}
                      </button>
                      <button
                        onClick={() => deleteNotice(notice.id)}
                        className="px-2 py-1 text-xs text-white bg-red-500 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-600">No notices published yet.</p>
        )}
      </div>
    </>
  );
}

export default NoticeSection;
