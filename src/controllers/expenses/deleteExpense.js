import { con } from "../../config/dbConnection"
import db from '../../models'

export const deleteExpense = (req, res, next) => {
    const categoryId = req.params.id
    const query = {id:categoryId}
    db.Expenses.destroy({where : query})
        .then(result => {
            console.log(result)
            result
            ? res.status(200).json({message : `Expense deleted successfully`})
            : res.status(404).json({message : `Expenses does not exist`})
        })
        .catch(err => {
            next(err)
        })
}