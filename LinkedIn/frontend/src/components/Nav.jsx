import React, { useState } from 'react';
import logo2 from '../assets/logo2.png';
import dp from '../assets/dp.webp';
import { IoSearch } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { useContext } from 'react';
import UserContext, { userDataContext } from '../../context/UserContext.jsx';
import { authDataContext } from '../../context/AuthContext.jsx';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Nav = () => {
    let [activeSearch, setActiveSearch] = useState(false);
    let {userData, setUserData} = useContext(userDataContext);
    let navigate = useNavigate();
    let [showPopup, setShowPopup] = useState(false);
    // console.log(userData);
    let {serverUrl} = UserContext(authDataContext);
    const handleSignOut = async () => {
        try {
            let result = await axios.get(serverUrl+"api/auth/logout", {withCredentials:true});
            navigate("/login");
            setUserData(null);
            console.log(result); 
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className='w-full h-[80px] bg-white fixed top-0 shadow-lg flex  justify-between md:justify-around items-center px-[10px] left-0 z-[100]'>
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
    {/* Profile  */}
    <div className='flex items-center justify-center gap-[20px] relative'>
        
        {showPopup && <div className="w-[300px] min-h-[300px] bg-white shadow-lg top-[70px] rounded-lg flex flex-col items-center absolute p-[20px] gap-[20px]">
        <div className='w-[70px] h-[70px] rounded-full overflow-hidden'> 
            <img src={dp} alt="" className='w-full h-full' />
        </div>
        <div className='text-[18px] font-semibold text-gray-700'>{`${userData.firstName} ${userData.lastName}`}</div>
        <button className="w-[100%] h-[40px] rounded-full border-2 border-[#2dc0ff] text-[#2dc0ff]">View Profile</button>
        <div className="w-full h-[1px] bg-gray-600"></div>
        <div className='w-full flex items-center justify-start text-gray-600 gap-[10px]'>
            <FaUserGroup className='w-[23px] h-[23px] text-gray-600'/>
            <div>My Network</div>
        </div>
        <button className="w-[100%] h-[40px] rounded-full border-2 border-[#ff492d] text-[#ff492d] cursor-pointer" onClick={handleSignOut}>Sign Out</button>
        </div>}
    


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
        <div className='w-[50px] h-[50px] rounded-full overflow-hidden cursor-pointer' onClick={()=>setShowPopup(prev=> !prev)}> 
            <img src={dp} alt="" className='w-full h-full' />
        </div>
    </div>
    </div>
  )
}

export default Nav