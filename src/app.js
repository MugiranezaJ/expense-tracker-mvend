import express from 'express'
import db from './models/index';
import router from './routes/routes'
import cors from 'cors'
import dotenv from 'dotenv'
import ApplicationError from './utils/applicationError';

dotenv.config()

const app = express()
const port = 4000 || process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(router)
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({message : "Welcome to Expense Tracker system"})
})

const { sequelize } = db;
sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch((err) => console.log(`Error: ${err}`));

app.all('*', (req, res, next) => {
    const err = new ApplicationError('Page Requested not found', 404);
    next(err);
  });

app.use((err, req, res, next) => {
    const statusCode = err.status || 500;
    res.status(statusCode).json({ status: statusCode, error: err.message});
    next(err);
});

app.listen(port, () => {
    console.log(`CORS-enabled server listening on port ${port}`)
}).on('error', (err) => {
    throw err
})