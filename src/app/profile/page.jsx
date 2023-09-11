'use client';
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState('nothing')

  const logout = async () => {
    try{
      await axios.get('/api/users/logout');
      console.log('user logout successfully')
      toast.success('logout done');
    }catch(error){
      console.log(error.message);
      toast.error(error.message);
    }finally{
      router.push('/login');
    }
  };

  const getDetails = async () =>{
    try{
      await axios.get('/api/users/me');
      console.log(res.data);
      setData(res.data.data._id);
    }catch(error){
      console.log(error.message);
      toast.error(error.message);
    }
  }

  return (
    <div className="bg-gray-300 text-black min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold mb-4">Profile Page</h1>
            <div className="mb-4">
                {data === 'nothing' ? "Nothing" : <Link href={`/profile/${data}`}><a className="text-blue-500 hover:underline">{data}</a></Link>}
            </div>
            <div className="mb-4">
                <button className="px-4 py-2 bg-white shadow-lg hover:shadow-black text-black rounded-md hover:bg-black hover:text-white" type="button" onClick={getDetails}>Get User Details</button>
            </div>
            <button className="px-4 py-2 bg-red-500 shadow-lg hover:shadow-red-400 text-white rounded-md hover:bg-white hover:text-red-500" onClick={logout}>Logout</button>
    </div>
  )
}; 