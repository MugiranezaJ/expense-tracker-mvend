import { verifyToken } from "../utils/auth";

const authanticate = async (req, res, next) => {
  try{
    const bearerToken = req.headers.authorization;
    const decoded = await verifyToken(bearerToken)
    const exp = decoded.exp;
    if (Date.now() >= exp * 1000) return res.status(401).json({ status: 401, message: 'You are not logged in' });
    return next();
  }catch(err){
    res.status(400).json({message: 'invalid token'})
  }
  
};

export default authanticate;