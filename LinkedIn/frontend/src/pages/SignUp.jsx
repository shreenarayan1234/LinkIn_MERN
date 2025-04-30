import React, { useContext, useState } from 'react'
import logo from '../assets/logo.svg'
import { useNavigate } from 'react-router-dom';
import { authDataContext } from '../../context/AuthContext';
import axios from 'axios';

const SignUp = () => {
    let [show, setShow] = useState(false);
    let {serverUrl} = useContext(authDataContext);
    let navigate = useNavigate();
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [userName, setUserName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [loading, setLoading] = useState(false);
    let [err, setErr] = useState("");

    const handleSignUp = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            let result = await axios.post(serverUrl+"/api/auth/signup",{
                
                firstName,
                lastName,
                userName,
                email,
                password
            },{withCredentials:true});
            console.log(result);
            setFirstName("");
            setLastName("");
            setUserName("");
            setEmail("");
            setPassword("");
            setLoading(false);
            setErr("");
        } catch (error) {
            setErr(error.response.data.message);
            setLoading(false);
        }
    }
  return (
    <div className='w-full h-screen bg-[white] flex flex-col justify-start gap-[10px] items-center'>
        <div className="p-[30px] lg:p-[35px] w-full h-[80px] flex items-center">
            <img src={logo} alt="" />
        </div>
        <form action="" onSubmit={handleSignUp} className='w-[90%] max-w-[400px] h-[600px] md:shadow-xl flex flex-col justify-center p-[15px] gap-[10px]'>
            <h1 className='text-gray-800 font-semibold text-[30px] mb-[30px]'>Sign Up</h1>
            <input type="text" placeholder="firstname" required className='w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md' onChange={(e)=>setFirstName(e.target.value)} value={firstName}/>
            <input type="text" placeholder="lastname" required className='w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md' onChange={(e)=>setLastName(e.target.value)} value={lastName}/>
            <input type="text" placeholder="username" required className='w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md' onChange={(e)=>setUserName(e.target.value)} value={userName}/>
            <input type="email" placeholder="email" required className='w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md' onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <div className="w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] rounded-md relative">
            <input type={show?"text":"password"} placeholder="password" required className='w-full h-full border-none text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md' onChange={(e)=>setPassword(e.target.value)} value={password}/>
            <span className='absolute right-[20px] top-[10px] cursor-pointer text-[#1dc9fd] font-semibold' onClick={() => setShow(!show)}>{show?"hidden":"show"}</span>
            </div>
            {err && <p className='text-red-500 text-center'>*{err}</p>}
            <button className='w-[100%] h-[50px] rounded-full text-white bg-[#1dc9fd] mt-[40px]' disabled={loading}>{loading?"Loading...":"Sign Up"}</button>
            <p className='text-center cursor-pointer' onClick={()=>navigate("/login")}>Already have an Account ? <span className='text-[#07afe2]'>Sign In</span></p>
        </form>
    </div>
  )
}

export default SignUp