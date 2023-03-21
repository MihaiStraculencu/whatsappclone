import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function Search() {
  return (
    <div>
      <div className="flex w-full outline-none justify-center items-center bg-slate-600 p-1 text-lg">
        <AiOutlineSearch size={30} />
        <input
          type="text"
          placeholder="Search contact"
          className="w-full outline-none bg-slate-600 p-2 text-lg"
        />
      </div>
    </div>
  );
}
