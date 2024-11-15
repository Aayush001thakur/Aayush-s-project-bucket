import React, { useState } from "react";
import Nav from "./NavBar";
import Banner from "../../pages/Banner";

function NoticeSection() {
  const [notices, setNotices] = useState([
    
  ]);

  const [BannerText, SetBannerText] = useState("");

const HandleBannerText = (e) =>{
  SetBannerText(e.target.value);
  console.log(SetBannerText);
}


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
    <Nav />
    <Banner />
    <div className="p-10 pb-32  bg-gray-500 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Admin Notices</h2>
      <div className="space-y-4">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className={`p-4 rounded-lg flex justify-between items-center ${
              notice.read ? "bg-blue-200" : "bg-red-100"
            }`}
          >
            <span className={notice.read ? "line-through" : ""}>{notice.text}</span>
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

      <div className="mt-4">
        <input
          type="text"
          value={newNotice}
          onChange={(e) => setNewNotice(e.target.value)}
          placeholder="Enter new notice"
          className="w-full p-2 border rounded focus:outline-none"
        />
        <button
          onClick={addNotice}
          className="mt-2 w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Notice
        </button>
      </div>
    </div>
    </>
  );
}

export default NoticeSection;
