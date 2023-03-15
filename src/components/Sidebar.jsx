import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";
import Messsages from "./Messages";

export default function Sidebar() {
  return (
    <div className="w-[300px] bg-gray-800 flex flex-col">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
}
