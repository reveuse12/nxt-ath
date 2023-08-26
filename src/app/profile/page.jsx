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
    <>
    <h1>Profile Page</h1>
    <div>{ data === 'nothing' ? "Nothing" :<Link href={ `/profile/${ data }`}>{ data }</Link> }</div>
    <div><button type="button" onClick={ getDetails }>Get User Deatils</button></div>
    <button onClick={ logout }>Logout</button>
    </>
  )
} 