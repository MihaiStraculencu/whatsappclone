import React from "react";

export default function WriteMessage() {
  return (
    <div className="bg-white flex justify-between px-3 items-center">
      <textarea
        maxLength={250}
        type="text"
        placeholder="Write something here"
        className="text-black w-[400px] break-all resize-none scrollbar-hide outline-none"
      />
      <button className="inline-flex items-center px-4 py-1 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md">
        Send
      </button>
    </div>
  );
}
