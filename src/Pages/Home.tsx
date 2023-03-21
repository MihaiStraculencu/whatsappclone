import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-gray-600/40 w-[850px] h-[600px] rounded-xl backdrop-blur-sm text-white flex border-2 border-gray-600 overflow-hidden">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}
