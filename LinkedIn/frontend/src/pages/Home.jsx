/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import dp from '../assets/dp.webp'
import Nav from '../components/Nav'
import { FaPlus } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa";
import { userDataContext } from '../../context/UserContext';
import { HiPencil } from "react-icons/hi";
import EditProfile from '../components/EditProfile';

const Home = () => {
  let {userData, setUserData,edit, setEdit} = useContext(userDataContext);
  return (
    <div className='w-full min-h-[100vh] bg-[#eceadf] pt-[100px] flex items-start justify-center gap-[20px] px-[20px] flex-col lg:flex-row'>
      {edit && <EditProfile/>}
        <Nav />
        {/* First Column */}
        <div className='w-full lg:w-[25%] min-h-[200px] bg-[white] shadow-lg rounded-lg p-[10px] relavite'>
            <div className="w-[100%] h-[100px] bg-gray-400 rounded overflow-hidden flex items-center justify-center relative cursor-pointer">
              <img src="" alt="" className='w-full' />
              <FaCamera className='right-[20px] top-[20px] absolute w-[25px] h-[25px] text-gray-800'/>
            </div>
            <div className='w-[70px] h-[70px] rounded-full overflow-hidden item-center justify-center absolute top-[165px] left-[60px] cursor-pointer'> 
              <img src={dp} alt="" className='h-full' />
            </div>
            <div className='w-[20px] h-[20px] bg-[#279baf] absolute top-[200px] left-[120px] flex items-center justify-center rounded-full cursor-pointer'>
                <FaPlus className='text-white'/>
              </div>
            <div className='text-[18px] font-semibold text-gray-700 mt-[25px] pl-[20px]'>  
            <div>{`${userData.firstName} ${userData.lastName}`}</div>
            <div className="text-[18px] font-semibold text-gray-700">{userData.headline || ""}</div>
            <div className='text-[16px] text-gray-500'>{userData.location}</div>
            </div>
            <button className="w-[100%] h-[40px] rounded-full border-2 border-[#2dc0ff] text-[#2dc0ff] my-[20px] flex item-center justify-center gap-[10px]" onClick={()=>setEdit(true)}>Edit Profile <HiPencil/></button>
        </div>

        {/* Second Column */}
        <div className='w-full lg:w-[50%] min-h-[200px] bg-[white] shadow-lg'>

        </div>

        {/* Third Column */}
        <div className="w-full lg:w-[25%] min-h-[200px] bg-[white] shadow-lg">

        </div>
    </div>
  )
}

export default Home