import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { AiOutlineUserAdd } from "react-icons/ai";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

export default function Register() {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    console.log(email);

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="flex h-full justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center backdrop-blur-sm drop-shadow-lg h-[600px] w-[500px] space-y-10"
      >
        <div className="flex flex-col space-y-5">
          <input
            type="text"
            placeholder="name"
            className="w-[350px] h-[50px] justify-center items-center bg-black bg-opacity-40 backdrop-blur-sm drop-shadow-lg rounded-xl text-white text-lg pl-4 outline-none"
          />
          <input
            placeholder="email"
            type="email"
            className="w-[350px] h-[50px] justify-center items-center bg-black bg-opacity-40 backdrop-blur-sm drop-shadow-lg rounded-xl text-white text-lg pl-4 outline-none"
          />
          <input
            placeholder="password"
            type="password"
            className="w-[350px] h-[50px] justify-center items-center bg-black bg-opacity-40 backdrop-blur-sm drop-shadow-lg rounded-xl text-white text-lg pl-4 outline-none"
          />
          <div className="flex justify-center text-white">
            <input
              accept="image/*"
              type="file"
              className="bg-black bg-opacity-40 backdrop-blur-sm drop-shadow-lg rounded-xl"
            />
          </div>
        </div>
        {err && (
          <span className="text-white text-xl font-semibold">
            Something went rong
          </span>
        )}
        <div className="flex justify-center text-gray-200 font-thin text-xl space-x-10 w-[300px] h-[50px]">
          <button
            className="flex items-center px-4 y-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md"
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
