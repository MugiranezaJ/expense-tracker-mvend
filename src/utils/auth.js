import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

const salt = bcrypt.genSaltSync(10);
const secret = process.env.SECRET_KEY;

export const hashPassword = (password) => bcrypt.hashSync(password, salt);

export const verifyToken = async (token) => {
    token = token.split(' ')
    const decoded = await jwt.verify(token[1], secret);
    return decoded;
};

export const comparePassword = (password, userPassword) => {
    const result = bcrypt.compareSync(password, userPassword);
    return result;
};

export const generateToken = (payload, expiresIn = '1d') => {
    const token = jwt.sign({ ...payload }, secret, { expiresIn });
    return token;
  };
  