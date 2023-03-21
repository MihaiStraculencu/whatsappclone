import React from "react";
import Messsages from "./Messages";
import WriteMessage from "./WriteMessage";

export default function Chat() {
  return (
    <div className="w-full">
      <div className="h-[50px] bg-blue-900 flex items-center px-5">
        <img className="w-12 h-12 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600" />
        Bogdan
      </div>
      <div className="h-[490px] bg-slate-900">
        <Messsages />
      </div>
      <WriteMessage />
    </div>
  );
}
