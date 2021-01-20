import { con } from "../../config/dbConnection"

export const deleteExpense = (req, res) => {
    const categoryId = req.params.id
    const sql=`DELETE FROM Expenses WHERE id=${categoryId}`
    con.query(sql, (error, result) => {
        if(error){
            res.json({message : error.sqlMessage})
        }else{
            res.json({message : `Expense with ${categoryId} id deleted`})
        }
    })
}