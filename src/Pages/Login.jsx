import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineUserAdd, AiOutlineLogin } from "react-icons/ai";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="flex h-full justify-center items-center">
      <form className="flex flex-col items-center justify-evenly  backdrop-blur-sm drop-shadow-lg h-[600px] w-[500px]">
        <div className="flex flex-col space-y-5">
          <input
            type="text"
            placeholder="email"
            className="w-[350px] h-[50px] justify-center items-center bg-black bg-opacity-40 backdrop-blur-sm drop-shadow-lg rounded-xl text-white text-lg pl-4 outline-none"
          />
          <input
            placeholder="password"
            type="password"
            className="w-[350px] h-[50px] justify-center items-center bg-black bg-opacity-40 backdrop-blur-sm drop-shadow-lg rounded-xl text-white text-lg pl-4 outline-none"
          />
        </div>
        <div className="flex justify-center text-gray-200 font-thin text-xl space-x-10 w-[300px] h-[50px]">
          <button
            className="flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md"
            onClick={() => navigate("/user")}
          >
            <AiOutlineLogin size={15} />
            Log in
          </button>

          <button
            className="flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md"
            onClick={() => navigate("/register")}
          >
            <AiOutlineUserAdd size={15} />
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}
