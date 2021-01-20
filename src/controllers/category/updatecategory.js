import { con } from "../../config/dbConnection"
import BadRequestError from "../../utils/badRequest"

export const updateCategory = (req, res) => {
    const categoryId = req.params.id
    const newCategoryName = req.body.name
    const sql = `UPDATE Categories SET name='${newCategoryName}' WHERE id='${categoryId}'`
    con.query(sql, (error, result) => {
        if(error){
            throw new BadRequestError(error.sqlMessage)
        }else{
            console.log(result.affectedRows)
            res.json(result.affectedRows ? {message : `Category updated to ${newCategoryName}`} : {message: 'id does not exist'})
        }
        
    })
}