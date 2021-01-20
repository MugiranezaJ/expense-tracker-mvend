import { con } from "../../config/dbConnection"

export const createExpense = (req, res) => {
    const expenseName = req.body.name
    const categoryId = req.body.categoryId
    const amount = req.body.amount
    const number = req.body.number

    const sql = `INSERT INTO Expenses(name, amount, number, categoryId) VALUES('${expenseName}', '${amount}', ${number}, '${categoryId}')`
    con.query(sql, (error, result) => {
        if (error){
            res.json({message : error.sqlMessage})
        }else{
            res.json({message : `Expense ${expenseName} has been created`})
        }
    })
}