import User from "../models/user.model.js"

export const getCurrentUser = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select("-password");
        if(!user){
            return res.status(400).json({message:"User doesn't exist"});
        }
        return res.status(200).json({user});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Get current user Error"});
    }
}