import mysql from 'mysql'
import dotenv from 'dotenv'

dotenv.config()
export var con = mysql.createConnection({
    host: process.env.M_HOST,
    database: process.env.M_DATABASE,
    port: process.env.M_PORT,
    user: process.env.M_USER,
    password: process.env.M_PASSWORD
});
  