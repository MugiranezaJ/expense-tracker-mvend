import { mapAmountToCategory } from "../../services/mapAmountToCategory"
import { con } from "../../config/dbConnection"

export const viewCategories = (req, res) => {
    const categoryId = req.params.id
    let sql =''
    categoryId 
        ? sql = `SELECT * FROM Categories WHERE id=${categoryId}`
        : sql =`SELECT * FROM Categories`
    
    con.query(sql, async (error, result) => {
        if(error) throw error
        categoryId
        ? res.json(result.length ? result : ({message : "Category not found"}))
        : mapAmountToCategory(res, result)
    })
}