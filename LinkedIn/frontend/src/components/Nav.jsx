import React, { useState } from 'react';
import logo2 from '../assets/logo2.png';
import dp from '../assets/dp.webp';
import { IoSearch } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";

const Nav = () => {
    let [activeSearch, setActiveSearch] = useState(false);
  return (
    <div className='w-full h-[80px] bg-white fixed top-0 shadow-lg flex  justify-between md:justify-around items-center px-[10px]'>
    <div className='flex items-center justify-center gap-[10px]'>    
    <div onClick={()=>setActiveSearch(false)}> 
        <img src={logo2} alt="" className='w-[50px]'/>
    </div>

    {!activeSearch &&   <div><IoSearch className='w-[23px] h-[23px] text-gray-600 lg:hidden' onClick={()=>setActiveSearch(true)}/></div>}

    <form className={`w-[190px] lg:w-[350px] h-[40px] bg-[#f0efe7] lg:flex items-center gap-[10px] px-[10px] py-[5px]  rounded-medium ${!activeSearch?"hidden":"flex"}`}>
        <div>
            <IoSearch className='w-[23px] h-[23px] text-gray-600'/>
        </div>
        <input type="text" className='w-[80%] h-full bg-transparent outline-none border-0' placeholder='search user....' />
    </form>
    </div>

    <div className='flex items-center justify-center gap-[20px]'>
        <div className='lg:flex flex-col items-center justify-center text-gray-600 hidden'>
            <IoHome className='w-[23px] h-[23px] text-gray-600'/>
            <div>Home</div>
        </div>
        <div className='md:flex flex-col items-center justify-center text-gray-600 hidden'>
            <FaUserGroup className='w-[23px] h-[23px] text-gray-600'/>
            <div>My Network</div>
        </div>
        <div className='flex flex-col items-center justify-center text-gray-600'>
            <IoNotifications className='w-[23px] h-[23px] text-gray-600'/>
            <div className='hidden md:block'>Notification</div>
        </div>
        <div className='w-[50px] h-[50px] rounded-full overflow-hidden'> 
            <img src={dp} alt="" className='w-full h-full' />
        </div>
    </div>
    </div>
  )
}

export default Nav