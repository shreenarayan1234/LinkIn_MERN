import genToken from "../config/token.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signUp = async (req, res) =>{
    try{
        let {firstName,lastName,userName,email,password} = req.body;
        let existEmail = await User.findOne({email});
        if(existEmail){
            return res.status(400).json({message:"Email already exists"});
        }
        let existUsername = await User.findOne({userName});
        if(existUsername){
            return res.status(400).json({message:"Username already exists"});
        }
        if(password.length < 8){
            return res.status(400).json({message:"Password should be at least 8 characters"});
        }

        let hassedPassword = await bcrypt.hash(password,10); 
        let user = await User.create({
            firstName,
            lastName,
            userName,
            email,
            password:hassedPassword
        });
        let token = await genToken(user._id);
        res.cookie("token",token,{
            httpOnly:true,
            expires:new Date(Date.now() + 10*24*60*60*1000),
            sameSite:"strict",
            secure:process.env.NODE_ENV === "production"
        });

       return res.status(201).json(user);
    }catch(error){
        return res.status(500).json({message:error.message});
        console.log(error);
    }
}

//for login
export const login = async (req, res)=>{
    try{
        let {email,password} = req.body;
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"Email doesn't exists"});
        }
        let isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid credentials"});
        }
       
        let token = await genToken(user._id);
        res.cookie("token",token,{
            httpOnly:true,
            expires:new Date(Date.now() + 10*24*60*60*1000),
            sameSite:"strict",
            secure:process.env.NODE_ENV === "production"
        });

       return res.status(200).json(user);
    }catch(error){
        return res.status(500).json({message:error.message});
        console.log(error);
    }
}

export const logout = async (req, res) => {
    try {
        res.clearCookie("token");
        return res.status(200).json({message:"Logout successfully"});
    } catch (error) {
        return res.status(500).json({message:error.message});
        console.log(error);
        
    }
}