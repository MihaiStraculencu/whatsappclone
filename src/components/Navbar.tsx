import React from "react";
import { useNavigate } from "react-router-dom";
import { BiUser } from "react-icons/bi";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="h-[50px] w-[300px] flex justify-between p-2 items-center bg-slate-700">
      <div className="flex items-center space-x-1">
        <BiUser size={20} />
        <span className="text-xl ">Mihai</span>
      </div>
      <button
        onClick={() => navigate("/")}
        className="p-1 w-[80px] bg-gray-800 rounded-lg hover:bg-slate-600"
      >
        Log out
      </button>
    </div>
  );
}
