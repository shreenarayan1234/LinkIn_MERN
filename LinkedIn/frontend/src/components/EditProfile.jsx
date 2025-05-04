import React, { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { userDataContext } from "../../context/UserContext";
import dp from "../assets/dp.webp";
import { FaPlus } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa";

const EditProfile = () => {
  let { edit, setEdit, userData, setUserData } = useContext(userDataContext);
  return (
    <div className="w-full min-h-[100vh] fixed top-0 z-[100] flex item-center justify-center">
      <div className="w-full h-full  bg-black opacity-[0.5] absolute"></div>
      <div className="w-[90%] max-w-[500px] h-[600px] bg-white relative z-[200] shadow-lg rounded-lg p-[10px]">
        <div
          className="absolute top-[20px] right-[20px] cursor-pointer"
          onClick={() => setEdit(false)}
        >
          <RxCross2 className="w-[25px] h-[25px] text-gray-800 font-bold" />
        </div>
        <div className="w-full h-[150px] rounded-lg mt-[40px] bg-gray-500 overflow-hidden">
          <img src="" alt="" className="w-full" />
          <FaCamera className='right-[37px] top-[70px] absolute w-[25px] h-[25px] text-gray-800'/>
        </div>
        <div className="w-[80px] h-[80px] rounded-full overflow-hidden item-center justify-center absolute top-[150px] left-[50px] cursor-pointer">
          <img src={dp} alt="" className="h-full" />
        </div>
        <div className="w-[20px] h-[20px] bg-[#279baf] absolute top-[190px] left-[120px] flex items-center justify-center rounded-full cursor-pointer">
          <FaPlus className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
