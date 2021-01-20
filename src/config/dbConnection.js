import dotenv from 'dotenv'

dotenv.config()
module.exports = {
    development:{
        url: "mysql://localhost:8889/TestDB",
        host: process.env.M_HOST,
        port: process.env.M_PORT,
        username: process.env.M_USER,
        password: process.env.M_PASSWORD,
        database: process.env.M_DATABASE,
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
    },
    production:{
        url: process.env.DB_LINK,
        host: process.env.M_HOST,
        port: process.env.M_PORT,
        username: process.env.M_USER,
        password: process.env.M_PASSWORD,
        database: process.env.M_DATABASE,
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
    }
  };