import db from '../../models'
import { generateToken, hashPassword } from '../../utils/auth'

export const signup = (req, res, next) =>{
    var email = req.body.email
    var password = req.body.password
    var confirm_password = req.body.confirm_password
    if(password == confirm_password){
        const User = {
            email: email,
            password: hashPassword(password)
        }
        
        db.Users.create(User)
        .then( (user) => {
            var token = generateToken({email:user.email})
            res.status(201).json({message:'user created successfully', Token: token})
        })
        .catch(err => {
            err.errors[0].type == 'unique violation'
            ? res.status(403).json({message: err.errors[0].message})
            : next(err)
        })
    }else{
        res.status(400).json({message:"passwords don't match"})
    }
        
}