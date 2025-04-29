import jwt from 'jsonwebtoken';

const genToken = async (userId) => {
    try {
        let token = await jwt.sign({userId},process.env.JWT_SECRET, {
            expiresIn: "10d"
        });
        return token;
    } catch (error) {
        console.log("Error generating token", error);
    }
}
export default genToken;