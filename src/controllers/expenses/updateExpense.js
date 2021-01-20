import { con } from "../../config/dbConnection"

export const updateExpense = (req, res) => {
    const toBeUpdated = req.body.toBeUpdated
    const expenseId = req.params.id
    // const amount = req.body.amount
    // const number = req.body.number
    // const name = req.body.name
    const sql = `UPDATE Expenses SET ? WHERE id='${expenseId}'`

    con.query(sql, toBeUpdated, (error, result) => {
        if(error){
            res.json({message : error.sqlMessage})
        }else{
            res.json(result.affectedRows ? {message : "Expenses updated"} : {message: 'id does not exist'})
        }
    })
}