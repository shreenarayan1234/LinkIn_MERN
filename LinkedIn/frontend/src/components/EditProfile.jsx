import React, { useContext, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { userDataContext } from "../../context/UserContext";
import dp from "../assets/dp.webp";
import { FaPlus } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa";

const EditProfile = () => {
  let { edit, setEdit, userData, setUserData } = useContext(userDataContext);
    
    let [firstName, setFirstName] = useState(userData.firstName || "");
    let [lastName, setLastName] = useState(userData.lastName || "");
    let [userName, setUserName] = useState(userData.username || "");
    let [headline, setHeadline] = useState(userData.headline || "");
    let [location, setLocation] = useState(userData.location || "");
    let [gender, setGender] = useState(userData.gender || "");
    let [skills, setSkills] = useState(userData.skills || []);
    let [newSkills, setNewSkills] = useState("");
    let [education, setEducation] = useState(userData.education || []);
    let [newEducation, setNewEducation] = useState({
      college:"",
      degree:"",
      fieldOfStudy:""
    });
    let [experience, setExperience] = useState(userData.experience || []);
    let [newExperience, setNewExperience] = useState({
      title:"",
      company:"",
      description:""
    });

    function addSkills(e){
        e.preventDefault();
        if(newSkills && !skills.includes(newSkills)){
            setSkills([...skills, newSkills]);
        }
        setNewSkills("");
        // newSkills("");
    }
    function removeSkill(skill){
        setSkills(skills.filter((s)=>s!==skill));
    }

    function addEducation(e){
      e.preventDefault();
      if(newEducation.college && newEducation.degree && newEducation.fieldOfStudy){
        setEducation([...education, newEducation]);
      }
      setNewEducation(
        {
          college:"",
          degree:"",
          fieldOfStudy:""
        }
      );
      // newSkills("");
  }
  function removeEducation(edu){
    setEducation(education.filter((e)=>e!==edu));
  }

  function addExperience(e){
    e.preventDefault();
    if(newExperience.title && newExperience.company && newExperience.description){
      setExperience([...experience, newExperience]);
    }
    setNewExperience(
      {
        title:"",
        company:"",
        description:""
      }
    );
    // newSkills("");
}
function removeExperience(exp){
  setExperience(experience.filter((e)=>e!==exp));
}

  return (
    <div className="w-full min-h-[100vh] fixed top-0 z-[100] flex item-center justify-center">
      <div className="w-full h-full  bg-black opacity-[0.5] absolute"></div>
      <div className="w-[90%] max-w-[500px] h-[600px] bg-white relative z-[200] shadow-lg rounded-lg p-[10px] overflow-auto">
        <div
          className="absolute top-[20px] right-[20px] cursor-pointer"
          onClick={() => setEdit(false)}
        >
          <RxCross2 className="w-[25px] h-[25px] text-gray-800 font-bold" />
        </div>
        <div className="w-full h-[150px] rounded-lg mt-[40px] bg-gray-500 overflow-hidden">
          <img src="" alt="" className="w-full" />
          <FaCamera className='right-[37px] top-[70px] absolute w-[25px] h-[25px] text-[white]'/>
        </div>
        <div className="w-[80px] h-[80px] rounded-full overflow-hidden item-center justify-center absolute top-[150px] left-[50px] cursor-pointer">
          <img src={dp} alt="" className="h-full" />
        </div>
        <div className="w-[20px] h-[20px] bg-[#279baf] absolute top-[190px] left-[120px] flex items-center justify-center rounded-full cursor-pointer">
          <FaPlus className="text-white" />
        </div>

        <div className="width-full flex flex-col items-center justify-center gap-[20px] mt-[50px]">
            <input type="text" placeholder="firstname" className="w-full h-[50px] outline-none border-gray-600 px-[10px] py-[5px] text-[18px] shadow-lg rounded-lg border-2" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
            <input type="text" placeholder="lastname" className="w-full h-[50px] outline-none border-gray-600 px-[10px] py-[5px] text-[18px] shadow-lg rounded-lg border-2" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
            <input type="text" placeholder="username" className="w-full h-[50px] outline-none border-gray-600 px-[10px] py-[5px] text-[18px] shadow-lg rounded-lg border-2" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
            <input type="text" placeholder="headline" className="w-full h-[50px] outline-none border-gray-600 px-[10px] py-[5px] text-[18px] shadow-lg rounded-lg border-2" value={headline} onChange={(e)=>setHeadline(e.target.value)}/>
            <input type="text" placeholder="location" className="w-full h-[50px] outline-none border-gray-600 px-[10px] py-[5px] text-[18px] shadow-lg rounded-lg border-2" value={location} onChange={(e)=>setLocation(e.target.value)}/>
            <input type="text" placeholder="gender (male/female/other)" className="w-full h-[50px] outline-none border-gray-600 px-[10px] py-[5px] text-[18px] shadow-lg rounded-lg border-2" value={gender} onChange={(e)=>setGender(e.target.value)}/>

            {/* Skills */}
            <div className="w-full p-[10px] border-2 border-gray-600 flex flex-col gap-[10px] rounded-lg">
                <h1 className="font-semibold text-[19px]">Skills</h1>
                {skills && <div className="flex flex-col gap-[10px]">
                    {skills.map((skill, index)=>
                        <div key={index} className="w-full h-[40px] border-[1px] border-gray-600 bg-gray-200 p-[10px] rounded-lg flex item-center justify-between"><span>{skill}</span> <RxCross2 className="w-[25px] h-[25px] text-gray-800 font-bold cursor-pointer" onClick={()=>removeSkill(skill)} /></div>
                    )}
                    </div>}
                <div className="flex flex-col items-start gap-[10px]">
                    <input type="text" placeholder="add new skills" value={newSkills} onChange={(e)=>setNewSkills(e.target.value)} className="w-full h-[50px] outline-none border-gray-600 px-[10px] py-[5px] text-[18px] shadow-lg rounded-lg border-2" />
                    <button className="w-[100%] h-[40px] rounded-full border-2 border-[#2dc0ff] text-[#2dc0ff]" onClick={addSkills}>Add</button>
                </div>
            </div>

            {/* Education */}
            <div className="w-full p-[10px] border-2 border-gray-600 flex flex-col gap-[10px] rounded-lg">
                <h1 className="font-semibold text-[19px]">Education</h1>
                {education && <div className="flex flex-col gap-[10px]">
                    {education.map((edu, index)=>
                        <div key={index} className="w-full border-[1px] border-gray-600 bg-gray-200 p-[10px] rounded-lg flex item-center justify-between">
                          <div>
                            <div>College:{edu.education}</div>
                            <div>Degree:{edu.degree}</div>
                            <div>Field of Study:{edu.fieldOfStudy}</div>
                          </div>
                          <RxCross2 className="w-[25px] h-[25px] text-gray-800 font-bold cursor-pointer" onClick={()=>removeEducation(edu)}/></div>
                    )}
                    </div>}
                <div className="flex flex-col items-start gap-[10px]">
                    <input type="text" placeholder="education" value={newEducation.college} onChange={(e)=>setNewEducation({...newEducation,college:e.target.value})} className="w-full h-[50px] outline-none border-gray-600 px-[10px] py-[5px] text-[18px] shadow-lg rounded-lg border-2" />
                    <input type="text" placeholder="degree" value={newEducation.degree} onChange={(e)=>setNewEducation({...newEducation,degree:e.target.value})} className="w-full h-[50px] outline-none border-gray-600 px-[10px] py-[5px] text-[18px] shadow-lg rounded-lg border-2" />
                    <input type="text" placeholder="field of study" value={newEducation.fieldOfStudy} onChange={(e)=>setNewEducation({...newEducation,fieldOfStudy:e.target.value})} className="w-full h-[50px] outline-none border-gray-600 px-[10px] py-[5px] text-[18px] shadow-lg rounded-lg border-2" />
                    <button className="w-[100%] h-[40px] rounded-full border-2 border-[#2dc0ff] text-[#2dc0ff]" onClick={addEducation}>Add</button>
                </div>
            </div>

            {/* Experiance */}
            <div className="w-full p-[10px] border-2 border-gray-600 flex flex-col gap-[10px] rounded-lg">
                <h1 className="font-semibold text-[19px]">Experience</h1>
                {experience && <div className="flex flex-col gap-[10px]">
                    {experience.map((exp, index)=>
                        <div key={index} className="w-full border-[1px] border-gray-600 bg-gray-200 p-[10px] rounded-lg flex item-center justify-between">
                          <div>
                            <div>Title:{exp.title}</div>
                            <div>Company:{exp.company}</div>
                            <div>Description:{exp.description}</div>
                          </div>
                          <RxCross2 className="w-[25px] h-[25px] text-gray-800 font-bold cursor-pointer" onClick={()=>removeExperience(exp)}/></div>
                    )}
                    </div>}
                <div className="flex flex-col items-start gap-[10px]">
                    <input type="text" placeholder="title" value={newExperience.title} onChange={(e)=>setNewExperience({...newExperience,title:e.target.value})} className="w-full h-[50px] outline-none border-gray-600 px-[10px] py-[5px] text-[18px] shadow-lg rounded-lg border-2" />
                    <input type="text" placeholder="company" value={newExperience.company} onChange={(e)=>setNewExperience({...newExperience,company:e.target.value})} className="w-full h-[50px] outline-none border-gray-600 px-[10px] py-[5px] text-[18px] shadow-lg rounded-lg border-2" />
                    <input type="text" placeholder="description" value={newExperience.description} onChange={(e)=>setNewExperience({...newExperience,description:e.target.value})} className="w-full h-[50px] outline-none border-gray-600 px-[10px] py-[5px] text-[18px] shadow-lg rounded-lg border-2" />
                    <button className="w-[100%] h-[40px] rounded-full border-2 border-[#2dc0ff] text-[#2dc0ff]" onClick={addExperience}>Add</button>
                </div>
            </div>
            <button className="w-[100%] h-[50px] rounded-full text-white bg-[#1dc9fd] mt-[40px]">Save Profile</button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
