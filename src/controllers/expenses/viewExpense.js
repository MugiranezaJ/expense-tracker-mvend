const { con } = require("../../config/dbConnection")

export const viewExpense = (req, res) => {
    const expenseId = req.body.id
    const categoryId = req.body.categoryId
    const total = `SELECT SUM(amount) AS total FROM Expenses WHERE categoryId='${categoryId}'`
    const sql = expenseId 
        ? `SELECT * FROM Expenses WHERE id='${expenseId}'` 
        : `SELECT * FROM Expenses WHERE categoryId='${categoryId}'`;

    con.query(sql, (error, data) => {
        if(error){
            res.json(error.sqlMessage)
        }else{
            expenseId
            ? res.json(data.length ? data : {message : "Not found"})
            : ( data.length 
                ? con.query(total, (error, res_total) => { if(error) throw error; res.json( Object.assign({}, {data}, ...res_total))})
                : res.json({message : "Corresponding category not found"})
              )
        }
    })
}