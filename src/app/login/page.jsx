'use client';
import { useEffect, useState } from "react";
import axios from "axios";
import {useRouter} from "next/navigation";
import { toast } from "react-hot-toast";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      await axios.post("http://localhost:5000/api/users/login", formData);
      console.log("Logged in successfully");
      toast.success("Logged in");
      router.push('/profile');
    } catch (error) {
      console.error(error);
      toast.error("Login failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setButtonDisabled(!(formData.username && formData.password));
  }, [formData.username, formData.password]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-500 to-pink-400">
      <div className="bg-white text-black p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4">Welcome back!</h1>
        <h2 className="mb-4">{loading ? "Processing" : "Login"}</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="font-medium mb-1">
              Username
            </label>
            <input 
              name="username"
              value={formData.username}
              type="text"
              placeholder="Username"
              className="w-full text-black p-2 border rounded"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className=" font-medium mb-1">
              Password
            </label>
            <input
              name="password"
              value={formData.password}
              type="password"
              placeholder="Password"
              className="w-full text-black p-2 border rounded"
              onChange={handleInputChange}
            />
          </div>
          <button
            type="button"
            onClick={handleLogin}
            disabled={buttonDisabled}
            className={`w-full p-2 rounded ${
              buttonDisabled ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
          >
            {buttonDisabled ? "Please fill in details" : "Login now!"}
          </button>
          <Link href={'/signup'} className="">New User? Signup</Link>
        </form>
      </div>
    </div>
  );
}
