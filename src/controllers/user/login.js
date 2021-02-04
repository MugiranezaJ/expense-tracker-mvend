import db from '../../models'
import { generateToken, hashPassword, comparePassword } from '../../utils/auth'
import BadRequestError from '../../utils/badRequest'

export const login = (req, res, next) =>{
    var email = req.body.email
    var password = req.body.password
    if(password && email){
        const User = {
            email: email,
            password: hashPassword(password)
        }
        db.Users.findOne({where:{email:email}})
        .then( (user) => {
            if(!user) throw new BadRequestError('User with this email  does not exist', 400);
            const result = comparePassword(password, user.password);
            if (!result) throw new BadRequestError('Password incorrect', 400);
            var token = generateToken({email:user.email})
            res.status(201).json({message:'login successfully', token:token})
        })
        .catch(err => {
            next(err)
        })
    }else{
        res.status(400).json({message:"username or password is missing"})
    }
        
}