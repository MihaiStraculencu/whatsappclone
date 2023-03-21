import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
      <div className="">
        <BrowserRouter>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Login />} />
            <Route path="/user" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
