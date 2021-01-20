import express from 'express'
import { con } from './config/dbConnection'
import router from './routes/routes'

const app = express()
const port = 4000 || process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(router)

app.get('/', (req, res) => {
    res.json({message : " Welcome to Expense Tracker system "})
})

con.connect(function(err) {
    if (err){
        console.log(err)
    }else{
        console.log("Connected!");
    }
});

app.use((err, req, res, next) => {
    const statusCode = err.status || 500;
    res.status(statusCode).json({ status: statusCode, error: err.message});
    next(err);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`)
}).on('error', (err) => {
    console.log(err)
})