'use client';
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function Signup() {
 const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      await axios.post("http://localhost:5000/api/users/signup", formData);
      console.log("User created successfully");
      toast.success("Signup successful! Please login");
    } catch (error) {
      console.error(error);
      toast.error("Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
    router.push("/login");
  };

  useEffect(() => {
    setButtonDisabled(
      !(
        formData.email &&
        formData.username &&
        formData.password &&
        formData.confirmPassword &&
        formData.gender
      )
    );
  }, [ formData ]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-500 to-pink-400">
      <div className="bg-white text-black p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-semibold mb-4">
          Hello New User? {loading ? "Creating User" : "Signup here"}
        </h1>
        <form onSubmit={ handleSignup }>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              name="email"
              value={ formData.email }
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block font-medium mb-1">
              Username
            </label>
            <input
              name="username"
              value={formData.username}
              type="text"
              placeholder="Username"
              className="w-full p-2 border rounded"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium mb-1">
              Password
            </label>
            <input
              name="password"
              value={formData.password}
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block font-medium mb-1"
            >
              Confirm Password
            </label>
            <input
              name="confirmPassword"
              value={formData.confirmPassword}
              type="password"
              placeholder="Confirm Password"
              className="w-full p-2 border rounded"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="block font-medium mb-1">
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button
            type="submit"
            disabled={buttonDisabled}
            className={`w-full p-2 rounded ${
              buttonDisabled
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
          >
            {buttonDisabled ? "Fill in details" : "Signup"}
          </button>
          <Link href={'/login'}>Already user? Login Page</Link>
        </form>
      </div>
    </div>
  );
}
