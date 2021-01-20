import { con } from "../config/dbConnection"


export const mapAmountToCategory = async (res, categories = []) => {
    const categoryContainer = []
    const size = categories.length
    let counter = categories.length
    for( const category of categories) {
        const sql = `SELECT SUM(amount) AS total FROM Expenses WHERE categoryId='${category.id}'`;
        con.query(sql)
        .on("result", (rows, index) => {
            counter -= 1
            const mapped = {category:category, total_amount: rows.total}
            categoryContainer.push(mapped)
            if(counter == 0){
                res.json(categoryContainer)
            }
        }).on("error", (err) => {
            throw err
        })
        
        
    }
}